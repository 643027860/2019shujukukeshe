<template>
  <div class="uploadDept">
    <div class="my_uploadDept_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px;">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>上传基本信息</el-breadcrumb-item>
        <el-breadcrumb-item>三级机构上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="my_uploadDept_main_div">
      <div class="my_uploadDept_main">
        <div class="my_uploadDept_upload">
          <p style="font-size: 20px;height: 36px;line-height: 36px;margin-top: 20px;margin-left: 20px;margin-bottom: 20px">上传一级机构：</p>
          <div style="height: 40px;margin-left: 40px;width: 500px">
            <el-form :inline="true" ref="form" :model="uerInfos" label-width="140px">
              <el-form-item label="I级机构名字：" style="height: 60px">
                <el-input v-model="uerInfos.deptName" placeholder="请输入一级机构名称" style="width: 200px"/>
              </el-form-item>
              <el-button type="primary" style="height: 35px;padding:3.5px 16px;float: right;z-index: 999" @click="uploadNewDept(1,uerInfos.deptName,0)">上传</el-button>
            </el-form>
          </div>
        </div>
        <div class="my_uploadDept_upload">
          <p style="font-size: 20px;height: 36px;line-height: 36px;margin-top: 20px;margin-left: 20px;margin-bottom: 20px">上传二级机构：</p>
          <div style="margin-left: 40px;width: 500px;">
            <el-form ref="form" :model="uerInfos" label-width="140px">
              <el-form-item label="选择I级机构：" style="height: 60px">
                <div style="width: 200px">
                  <el-select v-model="uerInfos.deptParentId2" placeholder="选择I级机构">
                    <el-option v-for="(item,index) in userDeptIdOne"  :key="index" :label="item.deptName" :value="item.id"  v-show="userDeptIdOne"/>
                  </el-select>
                </div>
              </el-form-item>
              <div style="width: 420px;display: inline-block">
                <el-form-item label="II级机构名字：" >
                  <el-input v-model="uerInfos.deptName2" placeholder="请输入二级机构名称" style="width: 200px"/>
                </el-form-item>
              </div>
              <el-button type="primary" style="height: 35px;padding:3.5px 16px;float: right;z-index: 99999;" @click="uploadNewDept(2,uerInfos.deptName2,uerInfos.deptParentId2)">上传</el-button>
            </el-form>
          </div>
        </div>
        <div class="my_uploadDept_upload" style="border: 0">
          <p style="font-size: 20px;height: 36px;line-height: 36px;margin-top: 20px;margin-left: 20px;margin-bottom: 25px">上传三级机构：</p>
          <div style="margin-left: 40px;width: 500px">
            <el-form ref="form" :model="uerInfos" label-width="140px">
              <el-form-item label="选择I级机构：" style="height: 60px">
                <div style="width: 200px">
                  <el-select v-model="uerInfos.deptParentId31" placeholder="请选择I级机构" @change="reqDeptsTwo(uerInfos.deptParentId31)">
                    <el-option v-for="(item,index) in userDeptIdOne"  :key="index" :label="item.deptName" :value="item.id"  v-show="userDeptIdOne"/>
                  </el-select>
                </div>
              </el-form-item>
              <el-form-item label="选择II级机构：" style="height: 60px">
                <div style="width: 200px">
                  <el-select v-model="uerInfos.deptParentId3" placeholder="请选择II级机构">
                    <el-option v-for="(item,index) in userDeptIdTwo1"  :key="index" :label="item.deptName" :value="item.id"  v-show="userDeptIdTwo1"/>
                  </el-select>
                </div>
              </el-form-item>
              <div style="width: 420px;display: inline-block">
                <el-form-item label="III级机构名字：" >
                  <el-input v-model="uerInfos.deptName3" placeholder="请输入三级机构名称" style="width: 200px"/>
                </el-form-item>
              </div>
              <el-button type="primary" style="height: 35px;padding:3.5px 16px;float: right;z-index: 99999;" @click="uploadNewDept(3,uerInfos.deptName3,uerInfos.deptParentId3)">上传</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/uploadDeptCss.css'
  import {REGONE,UPLOADEPT} from '../../api/types'
  export default {
    data(){
      return {
        Loding:false,
        userDeptIdOne: [],
        userDeptIdTwo: [],
        userDeptIdTwo1: [],
        uerInfos:{
          deptName:'',
          deptName2:'',
          deptName3:'',
          deptParentId2:'',
          deptParentId31:'',
          deptParentId3:'',
          userDeptIdOne: '',
          userDeptIdTwo: '',
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
          var two = []
          for(var i = 0;i<length;i++){
            one.push(result[i])
            two.push({'id':result[i].id,'two':result[i].childDept})
          }
          this.userDeptIdOne = one
          this.userDeptIdTwo = two
        }else{
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*获取二级机构*/
      reqDeptsTwo(id){
        this.uerInfos.userDeptIdTwo = ''
        for(var i = 0;i<this.userDeptIdTwo.length;i++){
          if(this.userDeptIdTwo[i].id == id){
            this.userDeptIdTwo1 = []
            this.userDeptIdTwo1=this.userDeptIdTwo[i].two
          }
        }
      },
      /*上传机构*/
      async uploadNewDept(num,deptName,deptParentId){
        if(deptName&&deptParentId||deptName&&deptParentId==0){
          var result = await UPLOADEPT(deptName,deptParentId)
          if(result.status == 200){
            if(num == 1)
              this.uerInfos.deptName = ''
            else if(num == 2){
              this.uerInfos.deptName2 = ''
              this.uerInfos.deptParentId2 = ''
            }
            else if(num == 3){
              this.uerInfos.deptParentId31 = ''
              this.uerInfos.deptName3 = ''
              this.uerInfos.deptParentId3 = ''
            }
            this.$message({
              type:'success',
              message:'上传机构成功',
              duration:1500
            })
            this.reqDepts()
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
