<template>
  <div class="uploadALL">
    <div class="my_uploadALL_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px;">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>上传基本信息</el-breadcrumb-item>
        <el-breadcrumb-item>上传其他基本信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="my_uploadALL_main_div">
      <div class="my_uploadALL_main">
        <div class="my_uploadALL_upload">
          <div class="upload_all_title">
            <p style="font-size: 20px;height: 36px;line-height: 36px;margin-top: 10px;margin-left: 20px;margin-bottom: 15px">上传学历：</p>
          </div>
          <div style="margin-left: 40px;">
            <el-form :inline="true" ref="form" :model="uerInfos" label-width="140px" style="height: 40px;margin-left: 40px;">
              <el-form-item label="学历名称：">
                <el-input v-model="uerInfos.eduName" placeholder='请输入学历名称' style="width: 200px"/>
              </el-form-item>
              <el-button type="primary" style="height: 35px;padding:3.5px 16px;float: right;z-index: 999;margin-right: 10%" @click="uploadEdu">上传</el-button>
            </el-form>
          </div>
        </div>
        <div class="my_uploadALL_upload">
          <p style="font-size: 20px;height: 36px;line-height: 36px;margin-top: 10px;margin-left: 20px;margin-bottom: 15px">上传专业：</p>
          <div style="margin-left: 40px;">
            <el-form :inline="true" class="demo-form-inline" :model="uerInfos" label-width="140px" style="height: 40px;margin-left: 40px;">
              <el-form-item label="选择学历：">
                <div style="width: 200px;display: inline-block">
                  <el-select v-model="eduName1" placeholder="请选择学历">
                    <el-option v-for="(item,index) in eduName"  :key="index" :label="item.eduName" :value="item.id"  v-show="eduName"/>
                  </el-select>
                </div>
              </el-form-item>
              <el-form-item label="专业名字：" >
                <el-input v-model="uerInfos.majorJob" placeholder="请输入专业名字" style="width: 200px"/>
              </el-form-item>
              <el-button type="primary" style="height: 35px;padding:3.5px 16px;float: right;z-index: 99999;margin-right: 10%" @click="uploadMajorJob">上传</el-button>
            </el-form>
          </div>
        </div>
        <div class="my_uploadALL_upload">
          <div class="upload_all_title">
            <p style="font-size: 20px;height: 36px;line-height: 36px;margin-top: 10px;margin-left: 20px;margin-bottom: 15px">上传职业分类：</p>
          </div>
          <div style="margin-left: 40px;">
            <el-form :inline="true" ref="form" :model="uerInfos" label-width="140px" style="height: 40px;margin-left: 40px;">
              <el-form-item label="职业类别：">
                <el-input v-model="uerInfos.jobType" placeholder='请输入职业类别' style="width: 200px"/>
              </el-form-item>
              <el-button type="primary" style="height: 35px;padding:3.5px 16px;float: right;z-index: 999;margin-right: 10%" @click="uploadJobType">上传</el-button>
            </el-form>
          </div>
        </div>
        <div class="my_uploadALL_upload">
          <p style="font-size: 20px;height: 36px;line-height: 36px;margin-top: 10px;margin-left: 20px;margin-bottom: 15px">上传职业：</p>
          <div style="margin-left: 40px;">
            <el-form :inline="true" class="demo-form-inline" :model="uerInfos" label-width="140px" style="height: 40px;margin-left: 40px;">
              <el-form-item label="选择职业类别：">
                <div style="width: 200px;display: inline-block">
                  <el-select v-model="jobType1" placeholder="请选择职业类别">
                    <el-option v-for="(item,index) in jobType"  :key="index" :label="item.typeName" :value="item.id"  v-show="jobType"/>
                  </el-select>
                </div>
              </el-form-item>
              <el-form-item label="职业：" >
                <el-input v-model="uerInfos.jobName" placeholder="请输入专业名称" style="width: 200px"/>
              </el-form-item>
              <el-button type="primary" style="height: 35px;padding:3.5px 16px;float: right;z-index: 99999;margin-right: 10%" @click="uploadJobName">上传</el-button>
            </el-form>
          </div>
        </div>
        <div class="my_uploadALL_upload">
          <div class="upload_all_title">
            <p style="font-size: 20px;height: 36px;line-height: 36px;margin-top: 10px;margin-left: 20px;margin-bottom: 15px">上传职称：</p>
          </div>
          <div style="margin-left: 40px;">
            <el-form :inline="true" class="demo-form-inline" :model="uerInfos" label-width="140px" style="height: 40px;margin-left: 40px;">
              <el-form-item label="职业分类：">
                <div style="width: 200px;display: inline-block">
                  <el-select v-model="jobType2" placeholder="请选择职业类别" @change="reqJobName">
                    <el-option v-for="(item,index) in jobType"  :key="index" :label="item.typeName" :value="item.id"  v-show="jobType"/>
                  </el-select>
                </div>
              </el-form-item>
              <el-form-item label="职业：" >
                <el-select v-model="jobName1" placeholder="请选择职业">
                  <el-option v-for="(item,index) in jobName"  :key="index" :label="item.jobName" :value="item.id"  v-show="jobName"/>
                </el-select>
              </el-form-item>
              <el-form-item label="职称：">
                <el-input v-model="uerInfos.jobTitleId" placeholder='请输入职称' style="width: 200px"/>
              </el-form-item>
              <el-button type="primary" style="height: 35px;padding:3.5px 16px;float: right;z-index: 99999;margin-right: 10%" @click="uploadJobTitle">上传</el-button>
            </el-form>
          </div>
        </div>
        <div class="my_uploadALL_upload" style="border: 0;">
          <div class="upload_all_title">
            <p style="font-size: 20px;height: 36px;line-height: 36px;margin-top: 10px;margin-left: 20px;margin-bottom: 15px">上传爱好：</p>
          </div>
          <div style="margin-left: 40px;">
            <el-form :inline="true" ref="form" :model="uerInfos" label-width="140px" style="height: 40px;margin-left: 40px;">
              <el-form-item label="爱好：">
                <el-input v-model="uerInfos.hobbyName" placeholder='请输入爱好' style="width: 200px"/>
              </el-form-item>
              <el-button type="primary" style="height: 35px;padding:3.5px 16px;float: right;z-index: 999;margin-right: 10%" @click="uploadHobby">上传</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/uploadDeptCss.css'
  import {REQEDU,UPLOADEDU,UPLOADMAJORJOB,UPLOADJOBS,REQJOBS,UPLOADJOBTYPE,UPLOADCHENG,UPLOADHOBBY,REQJOBTYPE} from '../../api/types'
  export default {
    data(){
      return {
        eduName:'',           //学历
        eduName1:'',          //学历
        jobType:'',          //职业类别
        jobType1:'',         //职业类别
        jobType2:'',         //职业类别
        jobName:'',          //职业名字
        jobName1:'',         //职业名字
        uerInfos:{
          eduName:'',       //学历
          majorJob:'',      //专业
          jobType:'',      //职业类型
          jobName:'',      //职业名字
          jobTitleId:'',   //职称
          hobbyName:'',    //爱好
        },
      }
    },
    async mounted () {
      this.reqEdu()
      this.reqJobType()
    },
    methods :{
      /*获取学历*/
      async reqEdu(){
        var result = await REQEDU(1,10)
        if(result.status == 200){
          var a = result.obj
          this.eduName = a.content
        }else{
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration:1500
          })
        }
      },
      /*获取职业分类*/
      async reqJobType(){
        var result = await REQJOBS(1,10)
        if(result.status == 200){
          var a = result.obj
          this.jobType = a.content
        }else{
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration:1500
          })
        }
      },
      /*获取职业名字*/
      async reqJobName(){
        this.jobName1 = ''
        var result = await REQJOBTYPE(this.jobType2,1,10)
        if(result.status == 200){
          var a = result.obj
          this.jobName = a.content
        }else{
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration:1500
          })
        }
      },
      /*上传学历*/
      async uploadEdu(){
        var user = this.uerInfos
        if(user.eduName){
          var result = await UPLOADEDU(user.eduName)
          if(result.status == 200){
            user.eduName = ''
            this.$message({
              type:'success',
              message:'上传学历成功',
              duration:1500
            })
            this.reqEdu()
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
      },
      /*上传专业*/
      async uploadMajorJob(){
        var user = this.uerInfos
        if(user.majorJob&&this.eduName1){
          var result = await UPLOADMAJORJOB(this.eduName1,user.majorJob)
          if(result.status == 200){
            user.majorJob = ''
            this.$message({
              type:'success',
              message:'上传专业成功',
              duration:1500
            })
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
      },
      /*上传职业类型*/
      async uploadJobType(){
        var user = this.uerInfos
        if(user.jobType){
          var result = await UPLOADJOBS(user.jobType)
          if(result.status == 200){
            user.jobType = ''
            this.$message({
              type:'success',
              message:'上传职业类别成功',
              duration:1500
            })
            this.reqJobType()
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
      },
      /*上传职业名称*/
      async uploadJobName(){
        var user = this.uerInfos
        if(user.jobName&&this.jobType1){
          var result = await UPLOADJOBTYPE(user.jobName,this.jobType1)
          if(result.status == 200){
            user.jobName = ''
            this.$message({
              type:'success',
              message:'上传职业成功',
              duration:1500
            })
            this.reqJobName()
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
      },
      /*上传职称*/
      async uploadJobTitle(){
        var user = this.uerInfos
        if(user.jobTitleId&&this.jobName1){
          var result = await UPLOADCHENG(this.jobName1,user.jobTitleId)
          if(result.status == 200){
            user.jobTitleId = ''
            this.$message({
              type:'success',
              message:'上传职称成功',
              duration:1500
            })
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
      },
      /*上传爱好*/
      async uploadHobby(){
        var user = this.uerInfos
        if(user.hobbyName){
          var result = await UPLOADHOBBY(user.hobbyName)
          if(result.status == 200){
            user.hobbyName = ''
            this.$message({
              type:'success',
              message:'上传爱好成功',
              duration:1500
            })
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
      },
      /*上传职业特长*/
      async uploadJobSpecial(){
        var user = this.uerInfos
        if(user.eduName){
          var result = await UPLOADEPT(user.eduName)
          if(result.status == 200){
            user.eduName = ''
            this.$message({
              type:'success',
              message:'上传职业特长成功',
              duration:1500
            })
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
      },
    }
  }
</script>

<style >
  .uploadALL{
    background-color: white;
    min-width: 1600px;
  }
  .my_uploadALL_main_div{
    width: 95%;
    margin: auto;
    margin-top: 10px;
    background-color: rgb(207,233,244);
    border: 1px solid rgb(160,184,216);
    border-radius: 4px;
  }
  /*面包屑*/
  .uploadALL .my_uploadALL_nav{
    width: 95%;
    margin:30px auto;
    color: #2aabd2;
  }

  /*主体*/
  .my_uploadALL_main{
    margin: 4px;
    height: 740px;
    background-color: rgb(244,251,255);
    border: 1px solid rgb(193,199,209);
  }
  .my_uploadALL_main .my_uploadALL_upload{
    padding-bottom: 20px;
    border-bottom: 2px solid #2aabd2;
  }
  .my_uploadALL_main .my_uploadALL_title p{
    height: 25px;
    font-size: 15px;
    line-height: 25px;
    padding: 7.5px 0px;
  }
</style>
