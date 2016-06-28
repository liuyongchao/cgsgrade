define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/cgsgrade/gradeddetail'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cZRb6rm';
	this._flag_='a4b49a97b42fe07a09b70a078c8b5571';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"PROF_ID":{"define":"PROF_ID","label":"专业ID","name":"PROF_ID","relation":"PROF_ID","type":"String"},"PROF_NAME":{"define":"PROF_NAME","label":"专业名称","name":"PROF_NAME","relation":"PROF_NAME","type":"String"},"PROF_UUID":{"define":"PROF_UUID","label":"专业UUID","name":"PROF_UUID","relation":"PROF_UUID","type":"String"},"PRO_BUILDER_NAME":{"define":"PRO_BUILDER_NAME","label":"项目负责人","name":"PRO_BUILDER_NAME","relation":"PRO_BUILDER_NAME","type":"String"},"PRO_BUILD_CODE":{"define":"PRO_BUILD_CODE","label":"承建单位编码","name":"PRO_BUILD_CODE","relation":"PRO_BUILD_CODE","type":"String"},"PRO_BUILD_NAME":{"define":"PRO_BUILD_NAME","label":"承建单位名称","name":"PRO_BUILD_NAME","relation":"PRO_BUILD_NAME","type":"String"},"PRO_ENDTIME":{"define":"PRO_ENDTIME","label":"结束年度","name":"PRO_ENDTIME","relation":"PRO_ENDTIME","type":"String"},"PRO_ID":{"define":"PRO_ID","label":"项目编号","name":"PRO_ID","relation":"PRO_ID","type":"String"},"PRO_NAME":{"define":"PRO_NAME","label":"项目名称","name":"PRO_NAME","relation":"PRO_NAME","type":"String"},"PRO_PROPERTY":{"define":"PRO_PROPERTY","label":"项目性质","name":"PRO_PROPERTY","relation":"PRO_PROPERTY","type":"String"},"PRO_REMARK":{"define":"PRO_REMARK","label":"备注","name":"PRO_REMARK","relation":"PRO_REMARK","type":"String"},"PRO_STARTTIME":{"define":"PRO_STARTTIME","label":"起始年度","name":"PRO_STARTTIME","relation":"PRO_STARTTIME","type":"String"},"PRO_STATUS":{"define":"PRO_STATUS","label":"项目状态","name":"PRO_STATUS","relation":"PRO_STATUS","type":"String"},"PRO_UP_TIME":{"define":"PRO_UP_TIME","label":"信息更新时间","name":"PRO_UP_TIME","relation":"PRO_UP_TIME","rules":{"date":true},"type":"Date"},"PRO_UP_USER_ID":{"define":"PRO_UP_USER_ID","label":"信息更新人","name":"PRO_UP_USER_ID","relation":"PRO_UP_USER_ID","type":"String"},"UUID":{"define":"UUID","label":"主键","name":"UUID","relation":"UUID","type":"String"},"VERSION":{"define":"VERSION","label":"版本","name":"VERSION","relation":"VERSION","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"UUID","limit":20,"queryAction":"queryPG_PROJECT","tableName":"PG_PROJECT","url":"/cgsgrade/cgsgrade_action","xid":"projectData"});
 new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"EGM_ID":{"define":"EGM_ID","label":"专家组ID","name":"EGM_ID","relation":"EGM_ID","type":"String"},"EGM_UUID":{"define":"EGM_UUID","label":"专家组UUID","name":"EGM_UUID","relation":"EGM_UUID","type":"String"},"ES_ID":{"define":"ES_ID","label":"ESID","name":"ES_ID","relation":"ES_ID","type":"String"},"ES_REMARK":{"define":"ES_REMARK","label":"备注","name":"ES_REMARK","relation":"ES_REMARK","type":"String"},"ES_UPDATE_TIME":{"define":"ES_UPDATE_TIME","label":"分数更新时间","name":"ES_UPDATE_TIME","relation":"ES_UPDATE_TIME","rules":{"date":true},"type":"Date"},"ES_UP_USER_ID":{"define":"ES_UP_USER_ID","label":"分数更新人","name":"ES_UP_USER_ID","relation":"ES_UP_USER_ID","type":"String"},"ES_VALUE":{"define":"ES_VALUE","label":"专家评分项值","name":"ES_VALUE","relation":"ES_VALUE","type":"String"},"PGE_ID":{"define":"PGE_ID","label":"GE表ID","name":"PGE_ID","relation":"PGE_ID","type":"String"},"PGE_UUID":{"define":"PGE_UUID","label":"GE表主键","name":"PGE_UUID","relation":"PGE_UUID","type":"String"},"PROFI_ID":{"define":"PROFI_ID","label":"评分项ID","name":"PROFI_ID","relation":"PROFI_ID","type":"String"},"PROFI_NAME":{"define":"PROFI_NAME","label":"评分项名称","name":"PROFI_NAME","relation":"PROFI_NAME","type":"String"},"PROFI_UUID":{"define":"PROFI_UUID","label":"评分项UUID","name":"PROFI_UUID","relation":"PROFI_UUID","type":"String"},"PROF_ID":{"define":"PROF_ID","label":"专业ID","name":"PROF_ID","relation":"PROF_ID","type":"String"},"PROF_NAME":{"define":"PROF_NAME","label":"专业名称","name":"PROF_NAME","relation":"PROF_NAME","type":"String"},"PROF_UUID":{"define":"PROF_UUID","label":"专业UUID","name":"PROF_UUID","relation":"PROF_UUID","type":"String"},"PRO_ID":{"define":"PRO_ID","label":"项目编号","name":"PRO_ID","relation":"PRO_ID","type":"String"},"PRO_NAME":{"define":"PRO_NAME","label":"项目名称","name":"PRO_NAME","relation":"PRO_NAME","type":"String"},"PRO_UUID":{"define":"PRO_UUID","label":"项目UUID","name":"PRO_UUID","relation":"PRO_UUID","type":"String"},"STAGE_ID":{"define":"STAGE_ID","label":"阶段ID","name":"STAGE_ID","relation":"STAGE_ID","type":"String"},"STAGE_NAME":{"define":"STAGE_NAME","label":"阶段名称","name":"STAGE_NAME","relation":"STAGE_NAME","type":"String"},"STAGE_UUID":{"define":"STAGE_UUID","label":"阶段UUID","name":"STAGE_UUID","relation":"STAGE_UUID","type":"String"},"UE_ID":{"define":"UE_ID","label":"用户专家ID","name":"UE_ID","relation":"UE_ID","type":"String"},"UE_UUID":{"define":"UE_UUID","label":"用户专家UUID","name":"UE_UUID","relation":"UE_UUID","type":"String"},"USER_ID":{"define":"USER_ID","label":"用户ID","name":"USER_ID","relation":"USER_ID","type":"String"},"USER_NAME":{"define":"USER_NAME","label":"用户姓名","name":"USER_NAME","relation":"USER_NAME","type":"String"},"USER_UUID":{"define":"USER_UUID","label":"用户UUID","name":"USER_UUID","relation":"USER_UUID","type":"String"},"UUID":{"define":"UUID","label":"UUID","name":"UUID","relation":"UUID","type":"String"},"VERSION":{"define":"VERSION","label":"版本","name":"VERSION","relation":"VERSION","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"UUID","limit":20,"queryAction":"queryPG_EXPERTSCORE","saveAction":"savePG_EXPERTSCORE","tableName":"PG_EXPERTSCORE","url":"/cgsgrade/cgsgrade_action","xid":"ExpertScoreData"});
}}); 
return __result;});