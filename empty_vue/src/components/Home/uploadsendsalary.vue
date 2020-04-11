<template>
  <div class="uploadDept">
    <div class="my_uploadDept_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px;">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>薪酬发放</el-breadcrumb-item>
        <el-breadcrumb-item>薪酬发放单上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="my_uploadDept_main_div">
      <div class="my_uploadDept_main">
        <div class="my_uploadDept_upload" style="border: 0">
          <p style="font-size: 20px;height: 36px;line-height: 36px;margin-top: 20px;margin-left: 20px;margin-bottom: 25px">上传发放薪酬单：</p>
          <div style="margin-left: 40px;width: 500px">
            <el-form ref="form" :model="uerInfos" label-width="140px">
              <el-form-item label="发放薪酬单编号：" style="height: 60px">
                <div style="width: 200px">
                  <el-input v-model="uerInfos.sendsalaryid" placeholder="请选择部门" />
                </div>
              </el-form-item>
              <el-form-item label="部门：" style="height: 60px">
                <div style="width: 200px;display: inline-block">
                  <el-select v-model="uerInfos.deptParentId" placeholder="请选择部门">
                    <el-option v-for="(item,index) in userDeptIdOne"  :key="index" :label="item.deptName" :value="item.id"  v-show="userDeptIdOne"/>
                  </el-select>
                </div>
                <el-button type="primary" style="height: 35px;padding:3.5px 16px;float: right;margin-top:2px;z-index: 99999;" @click="uploadsendsalary">上传</el-button>
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
  import {REGONE,UPLOADSALARYDAN} from '../../api/types'
  export default {
    data(){
      return {
        Loding:false,
        userDeptIdOne: [],
        uerInfos:{
          sendsalaryid:'',
          deptParentId:''
        },
      }
    },
    async mounted () {
      this.reqDepts()
    },
    methods :{
      /*获取机构*/
      async reqDepts(){
        var result = await REGONE()
        if(result.status==200){
          result = result.obj
          var length = result.length
          var one = []
          for(var i = 0;i<length;i++){
            one.push(result[i])
          }
          this.userDeptIdOne = one
        }else{
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*上传发放薪资单*/
      async uploadsendsalary(){
        var user = this.uerInfos
        if(user.sendsalaryid&&user.deptParentId){
          var result = await UPLOADSALARYDAN(user.sendsalaryid,user.deptParentId)
          if(result.status == 200){
            user.sendsalaryid = ''
            this.$message({
              type:'success',
              message:'上传薪酬发放单成功',
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
