define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/attachment/attachmentSimple');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/system/components/justep/attachment/demo/demoEditor'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cIZVV73';
	this._flag_='6f50373ee362851db0188e59c5b61792';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAttachment":{"define":"fAttachment","label":"附件","name":"fAttachment","relation":"fAttachment","type":"String"},"fId":{"define":"fId","label":"主键","name":"fId","relation":"fId","type":"String"}},"directDelete":false,"events":{},"idColumn":"fId","initData":"[{\"fId\":\"0\"}]","limit":20,"xid":"data1"});
}}); 
return __result;});