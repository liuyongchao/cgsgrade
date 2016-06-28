define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/cgsgrade/grade'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cM3iE3u';
	this._flag_='668032a74ad2a6704bd24066582151be';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"PE_GRADE_END_TIME":{"define":"PE_GRADE_END_TIME","label":"截止时间","name":"PE_GRADE_END_TIME","relation":"PE_GRADE_END_TIME","rules":{"date":true},"type":"Date"},"PE_GRADE_START_TIME":{"define":"PE_GRADE_START_TIME","label":"起始时间","name":"PE_GRADE_START_TIME","relation":"PE_GRADE_START_TIME","rules":{"date":true},"type":"Date"},"PRO_NAME":{"define":"PRO_NAME","label":"项目名称","name":"PRO_NAME","relation":"PRO_NAME","type":"String"},"STAGE_NAME":{"define":"STAGE_NAME","label":"阶段名称","name":"STAGE_NAME","relation":"STAGE_NAME","type":"String"},"UUID":{"define":"UUID","label":"PGE_UUID","name":"UUID","relation":"UUID","type":"String"}},"directDelete":false,"events":{},"idColumn":"UUID","limit":20,"xid":"gradeData"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"EGM_ID":{"define":"EGM_ID","label":"专家组ID","name":"EGM_ID","relation":"EGM_ID","type":"String"},"EGM_UUID":{"define":"EGM_UUID","label":"专家组UUID","name":"EGM_UUID","relation":"EGM_UUID","type":"String"},"GRADE_STATE":{"define":"GRADE_STATE","label":"评审状态","name":"GRADE_STATE","relation":"GRADE_STATE","type":"String"},"PE_ID":{"define":"PE_ID","label":"项目专家ID","name":"PE_ID","relation":"PE_ID","type":"String"},"PE_UUID":{"define":"PE_UUID","label":"项目专家组UUID","name":"PE_UUID","relation":"PE_UUID","type":"String"},"PRO_ID":{"define":"PRO_ID","label":"项目ID","name":"PRO_ID","relation":"PRO_ID","type":"String"},"PRO_UUID":{"define":"PRO_UUID","label":"项目UUID","name":"PRO_UUID","relation":"PRO_UUID","type":"String"},"PU_CODE_VALUE":{"define":"PU_CODE_VALUE","label":"二维码码值","name":"PU_CODE_VALUE","relation":"PU_CODE_VALUE","type":"String"},"PU_ID":{"define":"PU_ID","label":"PU主键","name":"PU_ID","relation":"PU_ID","type":"String"},"PU_REMARK":{"define":"PU_REMARK","label":"备注","name":"PU_REMARK","relation":"PU_REMARK","type":"String"},"PU_UP_TIME":{"define":"PU_UP_TIME","label":"更新时间","name":"PU_UP_TIME","relation":"PU_UP_TIME","rules":{"date":true},"type":"Date"},"PU_UP_USER_ID":{"define":"PU_UP_USER_ID","label":"更新人ID","name":"PU_UP_USER_ID","relation":"PU_UP_USER_ID","type":"String"},"UE_ID":{"define":"UE_ID","label":"用户专家ID","name":"UE_ID","relation":"UE_ID","type":"String"},"UE_UUID":{"define":"UE_UUID","label":"用户专家UUID","name":"UE_UUID","relation":"UE_UUID","type":"String"},"USER_ID":{"define":"USER_ID","label":"用户ID","name":"USER_ID","relation":"USER_ID","type":"String"},"USER_UUID":{"define":"USER_UUID","label":"用户UUID","name":"USER_UUID","relation":"USER_UUID","type":"String"},"UUID":{"define":"UUID","label":"UUID","name":"UUID","relation":"UUID","type":"String"},"VERSION":{"define":"VERSION","label":"版本","name":"VERSION","relation":"VERSION","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"UUID","limit":20,"queryAction":"queryPG_PROJECTGE","saveAction":"savePG_PROJECTGE","tableName":"PG_PROJECTGE","url":"/cgsgrade/cgsgrade_action","xid":"projectGeData"});
}}); 
return __result;});