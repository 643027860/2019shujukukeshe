<template>
  <div class="uploadDept">
    <div class="my_uploadDept_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px;">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>薪资标准</el-breadcrumb-item>
        <el-breadcrumb-item>薪资标准上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="my_uploadDept_main_div">
      <div class="my_uploadDept_main">
        <div class="my_uploadALL_upload">
          <div class="upload_all_title">
            <p style="font-size: 20px;height: 36px;line-height: 36px;margin-top: 10px;margin-left: 20px;margin-bottom: 15px">上传职称薪资标准：</p>
          </div>
          <div style="margin-left: 40px;">
            <el-form :model="uerInfos" label-width="140px" style="height: 40px;margin-left: 40px;">
              <el-form-item label="薪资标准编号：">
                <div style="width: 250px;display: inline-block">
                  <el-input v-model="uerInfos.id" placeholder="请输入薪资标准编号" style="width: 250px"/>
                </div>
              </el-form-item>
              <el-form-item label="薪资名：">
                <div style="width: 250px;display: inline-block">
                  <el-input v-model="uerInfos.salaryName" placeholder="请输入薪资名" style="width: 250px"/>
                </div>
              </el-form-item>
              <el-form-item label="从属职业：">
                <div style="width: 250px;display: inline-block">
                  <el-select v-model="uerInfos.jobtype" placeholder="请输入从属职业类型" style="width: 250px" @change="reqJobNames">
                    <el-option v-for="(item,index) in jobType" :key="index" :label="item.typeName" :value="item.id" v-show="jobType"/>
                  </el-select>
                </div>
                <div style="width: 250px;display: inline-block">
                  <el-select v-model="uerInfos.salaryJobId" placeholder="请输入从属职业" style="width: 250px">
                    <el-option v-for="(item,index) in jobName" :key="index" :label="item.jobName" :value="item.id" v-show="jobName"/>
                  </el-select>
                </div>
              </el-form-item>
              <el-form-item label="基础花费：">
                <div style="width: 250px;display: inline-block">
                  <el-input v-model="uerInfos.salaryBase" placeholder="请输入基础花费" style="width: 250px"/>
                </div>
              </el-form-item>
              <el-form-item label="午餐费：">
                <div style="width: 250px;display: inline-block">
                  <el-input v-model="uerInfos.salaryLunch" placeholder="请输入午餐费" style="width: 250px"/>
                </div>
              </el-form-item>
              <el-form-item label="通信费：">
                <div style="width: 250px;display: inline-block">
                  <el-input v-model="uerInfos.salaryMobile" placeholder="请输入通信费" style="width: 250px"/>
                </div>
              </el-form-item>
              <el-form-item label="交通费：">
                <div style="width: 250px;display: inline-block">
                  <el-input v-model="uerInfos.salaryTraffic" placeholder="请输入交通费" style="width: 250px"/>
                </div>
              </el-form-item>
              <el-form-item label="薪资总额：">
                <div style="width: 250px;display: inline-block">
                  <el-input v-model="uerInfos.salaryTotal" placeholder="请输入薪资总额" style="width: 250px"/>
                </div>
              </el-form-item>
              <el-form-item label="复核意见：">
                <div style="width: 250px;display: inline-block">
                  <el-input v-model="uerInfos.salaryOption" placeholder="请输入复核意见" style="width: 250px"/>
                </div>
              </el-form-item>
              <el-form-item label="记录者：">
                <div style="width: 250px;display: inline-block">
                  <el-input v-model="uerInfos.salaryRecorder" placeholder="请输入记录者" style="width: 250px"/>
                </div>
              </el-form-item>
              <el-form-item label="登记者：">
                <div style="width: 250px;display: inline-block">
                  <el-input v-model="uerInfos.salaryRegister" placeholder="请输入登记者" style="width: 250px"/>
                </div>
                <el-button type="primary" style="height: 35px;padding:3.5px 20px;margin-left: 100px" @click="uploadJobSalary">上传</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/uploadDeptCss.css'
  import {UPLOADSALARYS,REQJOBS,REQJOBTYPE} from '../../api/types'
  export default {
    data(){
      return {
        jobType:[],
        jobName:[],
        uerInfos:{
          jobtype:'',
          id:'',
          salaryBase :'',
          salaryJobId :'',
          salaryLunch:'',
          salaryMobile :'',
          salaryName:'',
          salaryOption:'',
          salaryRecorder :'',
          salaryRegister :'',
          salaryStatus :0,
          salaryTotal :'',
          salaryTraffic :'',
        },
      }
    },
    async mounted () {
      this.reqJobType()
    },
    methods : {
      /*获取职业类型*/
      async reqJobType(){
        var jobTypes = await REQJOBS(1,10)
        if(jobTypes.status == 200){
          var result = jobTypes.obj
          this.jobType = result.content
        }else {
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*获取职业名字*/
      async reqJobNames(){
        var user = this.uerInfos
        user.salaryJobId = ''
        var jobNames = await REQJOBTYPE(user.jobtype,1,10)
        if(jobNames.status == 200){
          var result = jobNames.obj
          this.jobName = result.content
        }else {
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*上传薪资*/
      async uploadJobSalary(){
        var user = this.uerInfos
        if(user.id&&user.salaryBase&&user.salaryJobId&&user.salaryLunch&&user.salaryMobile&&user.salaryName&&user.salaryOption&&user.salaryRecorder&&
          user.salaryRegister&&user.salaryStatus>=0&&user.salaryTotal&&user.salaryTraffic){
          var result = await UPLOADSALARYS(user.id,user.salaryBase,user.salaryJobId,user.salaryLunch,user.salaryMobile,user.salaryName,user.salaryOption,user.salaryRecorder,
            user.salaryRegister,user.salaryStatus,user.salaryTotal,user.salaryTraffic)
          if(result.status == 200){
            this.$message({
              type:'success',
              message:'上传成功',
              duration:1500
            })
            user.id = ''
            user.salaryBase = ''
            user.jobtype = ''
            user.salaryJobId = ''
            user.salaryLunch = ''
            user.salaryMobile = ''
            user.salaryName = ''
            user.salaryOption = ''
            user.salaryRecorder = ''
            user.salaryRegister = ''
            user.salaryStatus = 0
            user.salaryTotal = ''
            user.salaryTraffic = ''
          }else{
            this.$message({
              type:'error',
              message:'上传失败，请重试',
              duration:1500
            })
          }
        }else{
          this.$message({
            type:'warning',
            message:'请填完信息再上传',
            duration:1500
          })
        }
      }
    }
  }
</script>

<style >
  .uploadDept{
    background-color: white;
    min-width: 1600px;
  }
  .my_uploadDept_main_div{
    width: 95%;
    margin: auto;
    margin-top: 10px;
    background-color: rgb(207,233,244);
    border: 1px solid rgb(160,184,216);
    border-radius: 4px;
  }
  /*面包屑*/
  .uploadDept .my_uploadDept_nav{
    width: 95%;
    margin:30px auto;
    color: #2aabd2;
  }

  /*主体*/
  .my_uploadDept_main{
    margin: 4px;
    height: 740px;
    background-color: rgb(244,251,255);
    border: 1px solid rgb(193,199,209);
  }
  .my_uploadDept_main .my_uploadDept_upload{
    padding-bottom: 30px;
    border-bottom: 2px solid #2aabd2;
  }
  .my_uploadDept_main .my_uploadDept_title p{
    height: 25px;
    font-size: 15px;
    line-height: 25px;
    padding: 7.5px 0px;
  }
</style>
