define(function(require) {
	var justep = require("$UI/system/lib/justep");
	require("css!$UI/system/components/bootstrap/lib/css/bootstrap").load();
	require("$UI/system/lib/cordova/cordova");require("css!$UI/system/components/justep/cordova/demo/cordova.css").load();
	require("$UI/system/components/justep/cordova/demo/www/cordova-incl");
	

	var Model = function() {
		this.callParent();
		this.on('onLoad', function() {
			var deviceReady = false;
			var platformId = cordova.require('cordova/platform').id;
			var pictureUrl = null;
			var fileObj = null;
			var fileEntry = null;
			var pageStartTime = +new Date();

			//default camera options
			var camQualityDefault = ['quality value', 50];
			var camDestinationTypeDefault = ['DATA_URL', 0];
			var camPictureSourceTypeDefault = ['CAMERA', 1];
			var camAllowEditDefault = ['allowEdit', false];
			var camEncodingTypeDefault = ['JPEG', 0];
			var camMediaTypeDefault = ['mediaType', 0];
			var camCorrectOrientationDefault = ['correctOrientation', false];
			var camSaveToPhotoAlbumDefault = ['saveToPhotoAlbum', true];


			//-------------------------------------------------------------------------
			// Camera
			//-------------------------------------------------------------------------

			function log(value) {
			    console.log(value);
			    document.getElementById('camera_status').textContent += (new Date() - pageStartTime) / 1000 + ': ' + value + '\n';
			}

			function clearStatus() {
			    document.getElementById('camera_status').innerHTML = '';
			    document.getElementById('camera_image').src = 'about:blank';
			    var canvas = document.getElementById('canvas');
			    canvas.width = canvas.height = 1;
			    pictureUrl = null;
			    fileObj = null;
			    fileEntry = null;
			}

			function setPicture(url, callback) {
			try {
			  window.atob(url);
			  // if we got here it is a base64 string (DATA_URL)
			  url = "data:image/jpeg;base64," + url;
			} catch (e) {
			  // not DATA_URL
			    log('URL: ' + url.slice(0, 100));
			}    

			    pictureUrl = url;
			    var img = document.getElementById('camera_image');
			    var startTime = new Date();
			    img.src = url;
			    img.onloadend = function() {
			        log('Image tag load time: ' + (new Date() - startTime));
			        callback && callback();
			    };
			}

			function onGetPictureError(e) {
			    log('Error getting picture: ' + e.code);
			}

			function getPictureWin(data) {
			    setPicture(data);
			    // TODO: Fix resolveLocalFileSystemURI to work with native-uri.
			    if (pictureUrl.indexOf('file:') == 0 || pictureUrl.indexOf('content:') == 0) {
			        resolveLocalFileSystemURI(data, function(e) {
			            fileEntry = e;
			            logCallback('resolveLocalFileSystemURI()', true)(e.toURL());
			        }, logCallback('resolveLocalFileSystemURI()', false));
			    } else if (pictureUrl.indexOf('data:image/jpeg;base64' == 0)) {
			      // do nothing
			    } else {
			        var path = pictureUrl.replace(/^file:\/\/(localhost)?/, '').replace(/%20/g, ' ');
			        fileEntry = new FileEntry('image_name.png', path);
			    }
			}

			function getPicture() {
			    clearStatus();
			    var options = extractOptions();
			    log('Getting picture with options: ' + JSON.stringify(options));
			    var popoverHandle = navigator.camera.getPicture(getPictureWin, onGetPictureError, options);

			    // Reposition the popover if the orientation changes.
			    window.onorientationchange = function() {
			        var newPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, 0);
			        popoverHandle.setPosition(newPopoverOptions);
			    }
			}

			function uploadImage() {
			    var ft = new FileTransfer(),
			        uploadcomplete=0,
			        progress = 0,
			        options = new FileUploadOptions();
			    options.fileKey="photo";
			    options.fileName='test.jpg';
			    options.mimeType="image/jpeg";
			    ft.onprogress = function(progressEvent) {
			        log('progress: ' + progressEvent.loaded + ' of ' + progressEvent.total);
			    };
			    var server = "http://cordova-filetransfer.jitsu.com";

			    ft.upload(pictureUrl, server + '/upload', win, fail, options);
			    function win(information_back){
			        log('upload complete');
			    }
			    function fail(message) {
			        log('upload failed: ' + JSON.stringify(message));
			    }
			}

			function logCallback(apiName, success) {
			    return function() {
			        log('Call to ' + apiName + (success ? ' success: ' : ' failed: ') + JSON.stringify([].slice.call(arguments)));
			    };
			}

			/**
			 * Select image from library using a NATIVE_URI destination type
			 * This calls FileEntry.getMetadata, FileEntry.setMetadata, FileEntry.getParent, FileEntry.file, and FileReader.readAsDataURL.
			 */
			function readFile() {
			    function onFileReadAsDataURL(evt) {
			        var img = document.getElementById('camera_image');
			        img.style.visibility = "visible";
			        img.style.display = "block";
			        img.src = evt.target.result;
			        log("FileReader.readAsDataURL success");
			    };

			    function onFileReceived(file) {
			        log('Got file: ' + JSON.stringify(file));
			        fileObj = file;

			        var reader = new FileReader();
			        reader.onload = function() {
			            log('FileReader.readAsDataURL() - length = ' + reader.result.length);
			        };
			        reader.onerror = logCallback('FileReader.readAsDataURL', false);
			        reader.readAsDataURL(file);
			    };
			    // Test out onFileReceived when the file object was set via a native <input> elements.
			    if (fileObj) {
			        onFileReceived(fileObj);
			    } else {
			        fileEntry.file(onFileReceived, logCallback('FileEntry.file', false));
			    }
			}
			function getFileInfo() {
			    // Test FileEntry API here.
			    fileEntry.getMetadata(logCallback('FileEntry.getMetadata', true), logCallback('FileEntry.getMetadata', false));
			    fileEntry.setMetadata(logCallback('FileEntry.setMetadata', true), logCallback('FileEntry.setMetadata', false), { "com.apple.MobileBackup": 1 });
			    fileEntry.getParent(logCallback('FileEntry.getParent', true), logCallback('FileEntry.getParent', false));
			    fileEntry.getParent(logCallback('FileEntry.getParent', true), logCallback('FileEntry.getParent', false));
			};

			/**
			 * Copy image from library using a NATIVE_URI destination type
			 * This calls FileEntry.copyTo and FileEntry.moveTo.
			 */
			function copyImage() {
			    var onFileSystemReceived = function(fileSystem) {
			        var destDirEntry = fileSystem.root;

			        // Test FileEntry API here.
			        fileEntry.copyTo(destDirEntry, 'copied_file.png', logCallback('FileEntry.copyTo', true), logCallback('FileEntry.copyTo', false));
			        fileEntry.moveTo(destDirEntry, 'moved_file.png', logCallback('FileEntry.moveTo', true), logCallback('FileEntry.moveTo', false));
			    };

			    window.requestFileSystem(LocalFileSystem.TEMPORARY, 0, onFileSystemReceived, null);
			};

			/**
			 * Write image to library using a NATIVE_URI destination type
			 * This calls FileEntry.createWriter, FileWriter.write, and FileWriter.truncate.
			 */
			function writeImage() {
			    var onFileWriterReceived = function(fileWriter) {
			        fileWriter.onwrite = logCallback('FileWriter.write', true);
			        fileWriter.onerror = logCallback('FileWriter.write', false);
			        fileWriter.write("some text!");
			    };

			    var onFileTruncateWriterReceived = function(fileWriter) {
			        fileWriter.onwrite = logCallback('FileWriter.truncate', true);
			        fileWriter.onerror = logCallback('FileWriter.truncate', false);
			        fileWriter.truncate(10);
			    };

			    fileEntry.createWriter(onFileWriterReceived, logCallback('FileEntry.createWriter', false));
			    fileEntry.createWriter(onFileTruncateWriterReceived, null);
			};

			function displayImageUsingCanvas() {
			    var canvas = document.getElementById('canvas');
			    var img = document.getElementById('camera_image');
			    var w = img.width;
			    var h = img.height;
			    h = 100 / w * h;
			    w = 100;
			    canvas.width = w;
			    canvas.height= h;
			    var context = canvas.getContext('2d');
			    context.drawImage(img, 0, 0, w, h);
			};

			/**
			 * Remove image from library using a NATIVE_URI destination type
			 * This calls FileEntry.remove.
			 */
			function removeImage() {
			    fileEntry.remove(logCallback('FileEntry.remove', true), logCallback('FileEntry.remove', false));
			};

			function testInputTag(inputEl) {
			    clearStatus();
			    // iOS 6 likes to dead-lock in the onchange context if you
			    // do any alerts or try to remote-debug.
			    window.setTimeout(function() {
			        testNativeFile2(inputEl);
			    }, 0);
			};

			function testNativeFile2(inputEl) {
			    if (!inputEl.value) {
			        alert('No file selected.');
			        return;
			    }
			    fileObj = inputEl.files[0];
			    if (!fileObj) {
			        alert('Got value but no file.');
			        return;
			    }
			    var URLApi = window.URL || window.webkitURL;
			    if (URLApi) {
			        var blobURL = URLApi.createObjectURL(fileObj);
			        if (blobURL) {
			            setPicture(blobURL, function() {
			                URLApi.revokeObjectURL(blobURL);
			            });
			        } else {
			            log('URL.createObjectURL returned null');
			        }
			    } else {
			        log('URL.createObjectURL() not supported.');
			    }
			}

			function extractOptions() {
			    var els = document.querySelectorAll('#image-options select');
			    var ret = {};
			    for (var i = 0, el; el = els[i]; ++i) {
			        var value = el.value;
			        if (value === '') continue;
			        if (el.isBool) {
			            ret[el.keyName] = !!+value;
			        } else {
			            ret[el.keyName] = +value;
			        }
			    }
			    return ret;
			}

			function createOptionsEl(name, values, selectionDefault) {
			    var container = document.createElement('div');
			    container.style.display = 'inline-block';
			    container.appendChild(document.createTextNode(name + ': '));
			    var select = document.createElement('select');
			    select.keyName = name;
			    container.appendChild(select);
			    
			    // if we didn't get a default value, insert the blank <default> entry
			    if (selectionDefault == undefined) {
			        var opt = document.createElement('option');
			        opt.value = '';
			        opt.text = '<default>';
			        select.appendChild(opt);
			    }
			    
			    select.isBool = typeof values == 'boolean';
			    if (select.isBool) {
			        values = {'true': 1, 'false': 0};
			    }
			    
			    for (var k in values) {
			        var opt = document.createElement('option');
			        opt.value = values[k];
			        opt.textContent = k;
			        if (selectionDefault) {
			            if (selectionDefault[0] == k) {
			                opt.selected = true;
			            }
			        }
			        select.appendChild(opt);
			    }
			    var optionsDiv = document.getElementById('image-options');
			    optionsDiv.appendChild(container);
			}

			/**
			 * Function called when page has finished loading.
			 */
			function init() {
			    document.addEventListener("deviceready", function() {
			        deviceReady = true;
			        console.log("Device="+device.platform+" "+device.version);
			        createOptionsEl('sourceType', Camera.PictureSourceType, camPictureSourceTypeDefault);
			        createOptionsEl('destinationType', Camera.DestinationType, camDestinationTypeDefault);
			        createOptionsEl('encodingType', Camera.EncodingType, camEncodingTypeDefault);
			        createOptionsEl('mediaType', Camera.MediaType, camMediaTypeDefault);
			        createOptionsEl('quality', {'0': 0, '50': 50, '80': 80, '100': 100}, camQualityDefault);
			        createOptionsEl('targetWidth', {'50': 50, '200': 200, '800': 800, '2048': 2048});
			        createOptionsEl('targetHeight', {'50': 50, '200': 200, '800': 800, '2048': 2048});
			        createOptionsEl('allowEdit', true, camAllowEditDefault);
			        createOptionsEl('correctOrientation', true, camCorrectOrientationDefault);
			        createOptionsEl('saveToPhotoAlbum', true, camSaveToPhotoAlbumDefault);
			        createOptionsEl('cameraDirection', Camera.Direction);
			                      
			    }, false);
			    window.setTimeout(function() {
			        if (!deviceReady) {
			            alert("Error: Apache Cordova did not initialize.  Demo will not run correctly.");
			        }
			    },5000);
			};

			addListenerToClass('getPicture', getPicture);
			  addListenerToClass('testInputTag', function(e) {
			    testInputTag(e.target);
			  }, null, 'change', true);
			  addListenerToClass('getFileInfo', getFileInfo);
			  addListenerToClass('readFile', readFile);
			  addListenerToClass('copyImage', copyImage);
			  addListenerToClass('writeImage', writeImage);
			  addListenerToClass('uploadImage', uploadImage);
			  addListenerToClass('displayImageUsingCanvas', displayImageUsingCanvas);
			  addListenerToClass('removeImage', removeImage);

			  addListenerToClass('backBtn', backHome);
			  init();

	
		});
	};
	return Model;
});

