define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/smartContainer/smartContainer');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/input/password');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/cgsgrade/login'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cfYBNbq';
	this._flag_='c116c6b2a44512965e1abe15b8918b4b';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"MUSER_ID":{"define":"MUSER_ID","label":"MUSER_ID","name":"MUSER_ID","relation":"MUSER_ID","type":"String"},"MUSER_ORG_CODE":{"define":"MUSER_ORG_CODE","label":"MUSER_ORG_CODE","name":"MUSER_ORG_CODE","relation":"MUSER_ORG_CODE","type":"String"},"MUSER_ORG_NAME":{"define":"MUSER_ORG_NAME","label":"MUSER_ORG_NAME","name":"MUSER_ORG_NAME","relation":"MUSER_ORG_NAME","type":"String"},"MUSER_REMARK":{"define":"MUSER_REMARK","label":"MUSER_REMARK","name":"MUSER_REMARK","relation":"MUSER_REMARK","type":"String"},"SCARDKIND":{"define":"SCARDKIND","label":"证件类型","name":"SCARDKIND","relation":"SCARDKIND","type":"String"},"SCARDNO":{"define":"SCARDNO","label":"证件号码","name":"SCARDNO","relation":"SCARDNO","type":"String"},"SCITY":{"define":"SCITY","label":"市","name":"SCITY","relation":"SCITY","type":"String"},"SCODE":{"define":"SCODE","label":"编码","name":"SCODE","relation":"SCODE","type":"String"},"SCOUNTRY":{"define":"SCOUNTRY","label":"国家","name":"SCOUNTRY","relation":"SCOUNTRY","type":"String"},"SDEGREE":{"define":"SDEGREE","label":"学历","name":"SDEGREE","relation":"SDEGREE","type":"String"},"SDESCRIPTION":{"define":"SDESCRIPTION","label":"描述","name":"SDESCRIPTION","relation":"SDESCRIPTION","type":"String"},"SENGLISHNAME":{"define":"SENGLISHNAME","label":"英文名称","name":"SENGLISHNAME","relation":"SENGLISHNAME","type":"String"},"SFAMILYADDRESS":{"define":"SFAMILYADDRESS","label":"家庭住址","name":"SFAMILYADDRESS","relation":"SFAMILYADDRESS","type":"String"},"SFAMILYPHONE":{"define":"SFAMILYPHONE","label":"家庭电话","name":"SFAMILYPHONE","relation":"SFAMILYPHONE","type":"String"},"SHOMEPLACE":{"define":"SHOMEPLACE","label":"出生地","name":"SHOMEPLACE","relation":"SHOMEPLACE","type":"String"},"SID":{"define":"SID","label":"SID","name":"SID","relation":"SID","type":"String"},"SIDCARD":{"define":"SIDCARD","label":"身份证号","name":"SIDCARD","relation":"SIDCARD","type":"String"},"SJOINDATE":{"define":"SJOINDATE","label":"SJOINDATE","name":"SJOINDATE","relation":"SJOINDATE","rules":{"date":true},"type":"Date"},"SLOGINNAME":{"define":"SLOGINNAME","label":"登录名","name":"SLOGINNAME","relation":"SLOGINNAME","type":"String"},"SMARRIAGE":{"define":"SMARRIAGE","label":"婚姻状况","name":"SMARRIAGE","relation":"SMARRIAGE","type":"String"},"SMOBILEPHONE":{"define":"SMOBILEPHONE","label":"移动电话","name":"SMOBILEPHONE","relation":"SMOBILEPHONE","type":"String"},"SMSN":{"define":"SMSN","label":"MSN","name":"SMSN","relation":"SMSN","type":"String"},"SNAME":{"define":"SNAME","label":"名称","name":"SNAME","relation":"SNAME","type":"String"},"SNUMB":{"define":"SNUMB","label":"数字编号","name":"SNUMB","relation":"SNUMB","rules":{"integer":true},"type":"Integer"},"SOFFICEPHONE":{"define":"SOFFICEPHONE","label":"办公电话","name":"SOFFICEPHONE","relation":"SOFFICEPHONE","type":"String"},"SPASSWORD":{"define":"SPASSWORD","label":"密码(MD5)","name":"SPASSWORD","relation":"SPASSWORD","type":"String"},"SPASSWORDMODIFYTIME":{"define":"SPASSWORDMODIFYTIME","label":"SPASSWORDMODIFYTIME","name":"SPASSWORDMODIFYTIME","relation":"SPASSWORDMODIFYTIME","rules":{"date":true},"type":"Date"},"SPASSWORDTIMELIMIT":{"define":"SPASSWORDTIMELIMIT","label":"SPASSWORDTIMELIMIT","name":"SPASSWORDTIMELIMIT","relation":"SPASSWORDTIMELIMIT","rules":{"integer":true},"type":"Integer"},"SPROVINCE":{"define":"SPROVINCE","label":"省","name":"SPROVINCE","relation":"SPROVINCE","type":"String"},"SQQ":{"define":"SQQ","label":"QQ","name":"SQQ","relation":"SQQ","type":"String"},"SSAFELEVELID":{"define":"SSAFELEVELID","label":"密级","name":"SSAFELEVELID","relation":"SSAFELEVELID","type":"String"},"SSCHOOLLENGTH":{"define":"SSCHOOLLENGTH","label":"学年制","name":"SSCHOOLLENGTH","relation":"SSCHOOLLENGTH","type":"String"},"SSEQUENCE":{"define":"SSEQUENCE","label":"SSEQUENCE","name":"SSEQUENCE","relation":"SSEQUENCE","rules":{"integer":true},"type":"Integer"},"SSEX":{"define":"SSEX","label":"性别","name":"SSEX","relation":"SSEX","type":"String"},"SSPECIALITY":{"define":"SSPECIALITY","label":"专业","name":"SSPECIALITY","relation":"SSPECIALITY","type":"String"},"STITLE":{"define":"STITLE","label":"职称","name":"STITLE","relation":"STITLE","type":"String"},"SVALIDSTATE":{"define":"SVALIDSTATE","label":"SVALIDSTATE","name":"SVALIDSTATE","relation":"SVALIDSTATE","rules":{"integer":true},"type":"Integer"},"SZIP":{"define":"SZIP","label":"邮编","name":"SZIP","relation":"SZIP","type":"String"},"VERSION":{"define":"VERSION","label":"VERSION","name":"VERSION","relation":"VERSION","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"filters":{"filter0":"","filter1":""},"idColumn":"SID","limit":20,"queryAction":"querySA_OPPERSON","saveAction":"saveSA_OPPERSON","tableName":"SA_OPPERSON","url":"/cgsgrade/cgsgrade_action","xid":"userData"});
}}); 
return __result;});