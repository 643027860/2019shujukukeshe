import ajax from './ajax'

const Base = "http://47.112.132.177:8093"
export const LOGIN = (userName,password) => ajax(Base+"/login",{userName,password},'GET')  //登录
export const REGISTER = (userName,password) => ajax(Base+"/register",{userName,password},'POST')  //注册

/*获取机构信息*/
export const REGONE = () => ajax(Base+"/dept/find/one/all",{},'POST')  //一级
export const UPLOADEPT = (deptName,deptParentId) => ajax(Base+"/dept/upload",{deptName,deptParentId},'POST')  //上传机构

/*获取用户信息*/
export const UPDATEUSER = (conform) => ajax(Base+"/user/update",conform,'POST',true)//更新用户接口
export const UPLOADUSER = (conform) => ajax(Base+"/user/upload",conform,'POST',true)//上传用户接口
export const REQIMG = (id) => ajax(Base+"/user/showing/",{id},'GET')//流式返回图片
export const REQUERINFO = (createTime,lastUpdateTime,pageNum,pageSize,userDeptId,userJobTitle) => ajax(Base+"/user/find/djc",{createTime,lastUpdateTime,pageNum,pageSize,userDeptId,userJobTitle},'POST')//获取用户信息

/*获取档案信息*/
export const REQRECORD = (pageNum,pageSize,recordStatus) => ajax(Base+"/record/find/status",{pageNum,pageSize,recordStatus},'POST')//获取审核状态列表
export const UPLOADRECORD = (recordOne,recordStatus,recordThree,recordTwo,recordUserId) => ajax(Base+"/record/upload",{recordOne,recordStatus,recordThree,recordTwo,recordUserId},'POST')//上传档案
export const UPDATERECORD = (id,recordStatus) => ajax(Base+"/record/update",{id,recordStatus},'POST')//修改档案状态
export const FINDRECORD = (createTime,lastUpdateTime,pageNum,pageSize,userDeptId,userJobTitleId) => ajax(Base+"/record/find/djt",{createTime,lastUpdateTime,pageNum,pageSize,userDeptId,userJobTitleId},'POST')//获取记录

/*薪资标准接口*/
export const REQSALARYDETAILS = (id) => ajax(Base+"/salary/find/id",{id},'POST')//获取薪资详情
export const REQSALARYLISTS = (pageNum,pageSize,salaryJobId) => ajax(Base+"/salary/find/jobtitle",{pageNum,pageSize,salaryJobId},'POST')//获取薪资列表
export const REQSALARYS = (createTime,keyword,lastUpdateTime,pageNum,pageSize) => ajax(Base+"/salary/find/keyword",{createTime,keyword,lastUpdateTime,pageNum,pageSize},'POST')//查询薪资标准
export const UPDATESALARYS = (id,status) => ajax(Base+"/salary/update",{id,status},'POST')//审核薪资标准
export const UPLOADSALARYS = (id,salaryBase,salaryJobId,salaryLunch,salaryMobile,salaryName,salaryOption,salaryRecorder,salaryRegister,salaryStatus,salaryTotal,salaryTraffic) => ajax(Base+"/salary/upload",{id,salaryBase,salaryJobId,salaryLunch,salaryMobile,salaryName,salaryOption,salaryRecorder,salaryRegister,salaryStatus,salaryTotal,salaryTraffic},'POST')//上传薪资标准

/*兴趣爱好接口*/
export const REQHOBBY = (pageNum,pageSize) => ajax(Base+"/hobby/find/all",{pageNum,pageSize},'POST')//查询爱好
export const UPLOADHOBBY = (hobbyName ) => ajax(Base+"/hobby/upload",{hobbyName },'POST')//上传爱好

/*职业名称接口*/
export const REQJOBTYPE = (jobType,pageNum,pageSize) => ajax(Base+"/job/find/type",{jobType,pageNum,pageSize},'POST')//获取职业分类所有职业类型
export const UPLOADJOBTYPE = (jobName,jobType) => ajax(Base+"/job/upload",{jobName,jobType},'POST')//职业上传

/*职业特长接口*/
export const REQSPECIAL = (pageNum,pageSize,specialDeptId) => ajax(Base+"/dept/special/find/deptid",{pageNum,pageSize,specialDeptId},'POST')//查询职业特长
export const UPLOADSPECIAL = (specialDeptId,specialName) => ajax(Base+"/dept/special/upload",{specialDeptId,specialName},'POST')//上传职业特长

/*职业类型接口*/
export const REQJOBS = (pageNum,pageSize) => ajax(Base+"/jobtype/find/all",{pageNum,pageSize},'POST')//获取所有职业类型
export const UPLOADJOBS = (typeName) => ajax(Base+"/jobtype/upload",{typeName},'POST')//上传职业类型

/*职称信息接口*/
 export const REQCHENG = (pageNum,pageSize,titleJobId) => ajax(Base+"/jobtitle/find/job",{pageNum,pageSize,titleJobId},'POST')//获取职称
 export const UPLOADCHENG = (titleJobId,titleName) => ajax(Base+"/jobtitle/upload",{titleJobId,titleName},'POST')//上传职称

/*发放薪酬单信息*/
export const REQSALARYSEND = (pageNum,pageSize,regDeptId) => ajax(Base+"/salary/reg/find/keyword",{pageNum,pageSize,regDeptId},'POST')//薪酬发放查询
export const REQSALARYSEND1 = (createTime,lastUpdateTime,pageNum,pageSize,regDeptId) => ajax(Base+"/salary/reg/find/keyword",{createTime,lastUpdateTime,pageNum,pageSize,regDeptId},'POST')//薪酬发放查询
export const REQSALARYBYSTATUS = (pageNum,pageSize,regStatus) => ajax(Base+"/salary/reg/find/status",{pageNum,pageSize,regStatus},'POST')//根据审核状态获取分页列表
export const REQSALARYDETAIL = (award,id,punish) => ajax(Base+"/salary/reg/update",{award,id,punish},'POST')//薪酬发放单登记明细
export const UPLOADSALARYDAN = (id,regDeptId) => ajax(Base+"/salary/reg/upload",{id,regDeptId},'POST')//上传薪酬发放单

/*学历专业*/
export const REQMAJORJOB = (majorEduId,pageNum,pageSize) => ajax(Base+"/major/find/job",{majorEduId,pageNum,pageSize},'POST')//获取专业
export const UPLOADMAJORJOB = (majorEduId,majorName) => ajax(Base+"/major/upload",{majorEduId,majorName},'POST')//上传专业

/*学历*/
export const REQEDU = (pageNum,pageSize) => ajax(Base+"/edu/find/all",{pageNum,pageSize},'POST')//获取学历
export const UPLOADEDU = (eduName) => ajax(Base+"/edu/upload",{eduName},'POST')//上传学历

