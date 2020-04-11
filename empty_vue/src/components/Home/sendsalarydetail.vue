<template>
  <div class="checkSalary1">
    <div class="my_checkSalary1_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px;">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>薪酬发放</el-breadcrumb-item>
        <el-breadcrumb-item>薪酬发放单明细</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="my_checkSalary1_main_div">
      <div class="my_checkSalary1_main">
        <div class="my_checkSalary1_title">
          <span style="padding:0 50px">登记人:</span>
          <div style="width: 150px;display: inline-block">
            <el-input v-model="uerInfos.name"/>
          </div>
          <el-button type="primary" style="height: 35px;font-size: 16px;padding: 8px 20px;margin-right: 50px;float: right" @click="upload()">上传</el-button>
        </div>
        <div class="my_checkSalary1_lists">
          <li>
            <span class="title_span" style="width: 15%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">薪资发放单编号</span>
            <span class="title_span" style="width: 9%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">姓名</span>
            <span class="title_span" style="width: 12.4%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">基本工资</span>
            <span class="title_span" style="width: 9%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">交通补助</span>
            <span class="title_span" style="width: 9%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">午餐补助</span>
            <span class="title_span" style="width: 9%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">通信补助</span>
            <span class="title_span" style="width: 9%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">养老保险</span>
            <span class="title_span" style="width: 9%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">住房公积金</span>
            <span class="title_span" style="width: 9%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">奖励奖金</span>
            <span class="title_span" style="width: 9%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">应扣奖金</span>
          </li>
          <div>
            <li v-for="(list,index) in lists" :key="index" style="background-color: rgb(244,251,255)">
              <span style="width: 15%;border-right: 1px solid rgb(160,184,216);float: left">{{list.id}}</span>
              <span style="width: 9%;border-right: 1px solid rgb(160,184,216);float: left">{{list.createBy}}</span>
              <span style="width: 12.4%;border-right: 1px solid rgb(160,184,216);float: left">{{list.regTotal}}</span>
              <span style="width: 9%;border-right: 1px solid rgb(160,184,216);float: left">
                <div style="width: 100%;height: 80%; margin:auto">
                  <el-input v-model="uerInfos.value1"/>
                </div>
              </span>
              <span style="width: 9%;border-right: 1px solid rgb(160,184,216);float: left">
                <div style="width: 100%;height: 80%; margin:auto">
                  <el-input v-model="uerInfos.value2"/>
                </div>
              </span>
              <span style="width: 9%;border-right: 1px solid rgb(160,184,216);float: left">
                <div style="width: 100%;height: 80%; margin:auto">
                  <el-input v-model="uerInfos.value3"/>
                </div>
              </span>
              <span style="width: 9%;border-right: 1px solid rgb(160,184,216);float: left">
                <div style="width: 100%;height: 80%; margin:auto">
                  <el-input v-model="uerInfos.value4"/>
                </div>
              </span>
              <span style="width: 9%;border-right: 1px solid rgb(160,184,216);float: left">
                <div style="width: 100%;height: 80%; margin:auto">
                  <el-input v-model="uerInfos.value5"/>
                </div>
              </span>
              <span style="width: 9%;border-right: 1px solid rgb(160,184,216);float: left">
                <div style="width: 100%;height: 80%; margin:auto">
                  <el-input v-model="uerInfos.value6"/>
                </div>
              </span>
              <span style="width: 9%;border-right: 1px solid rgb(160,184,216);float: left">
                <div style="width: 100%;height: 80%; margin:auto">
                  <el-input v-model="uerInfos.value7"/>
                </div>
              </span>
            </li>
          </div>
        </div>
        <div>
          <div class="my_checkSalary1_pages">
            <el-pagination
              layout="prev, pager, next"
              :total="listPage.totalSize"
              :current-page="listPage.pageNum"
              :page-size="pageSize"
              :hide-on-single-page="true"
              @current-change="(currentPage)=>reqSalary(currentPage)"
              style=""
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/my_select.css'
  import store from 'store'
  import {UPDATESALARYS,REQSALARYDETAIL,REQSALARYDETAILS} from '../../api/types'
  export default {
    data(){
      return {
        count:0,
        listPage:[],
        pageSize:14,
        lists:[],
        uerInfos:{
          name:'',
          value1:'0',
          value2:'0',
          value3:'0',
          value4:'0',
          value5:'0',
          value6:'0',
          value7:'0',
          value8:'0',
          value9:'0',
        },
      }
    },
    async mounted () {
      this.reqSalary(1)
    },
    methods :{
      /*查询*/
      async reqSalary(page){
        var user = this.uerInfos
        var list = store.get('sendsalary')
        var result = await REQSALARYDETAILS(list.id)
        if(result.status == 200){
          var a = result.obj
          if(a)
            list.createBy = a.salaryName
        }
        this.lists.push(list)
      },
      /*上传明细*/
      async upload(){
        var user = this.uerInfos
        if(user.name&&user.value1&&user.value2&&user.value3&&user.value4&&user.value5&&user.value6&&user.value7){
          var result = await REQSALARYDETAIL(user.value1+','+user.value1+','+user.value2+','+user.value3+','+user.value4+','+user.value5+','+user.value6,store.get('sendsalaryid'),user.value7)
          if(result.status == 200){
            this.$message({
              type:'success',
              message:'复核成功',
              duration:1500
            })
            this.$router.push('/home/checksendsalary')
          }else{
            this.$message({
              type:'error',
              message:'复核失败，请重试',
              duration:1500
            })
          }
        }else{
          this.$message({
            type:'warning',
            message:'请填完所有信息再上传',
            duration:1500
          })
        }
      },
    }
  }
</script>

<style >
  .checkSalary1{
    background-color: white;
    min-width: 1700px;
  }
  .my_checkSalary1_main_div{
    width: 95%;
    margin: auto;
    margin-top: 10px;
    background-color: rgb(207,233,244);
    border: 1px solid rgb(160,184,216);
    border-radius: 4px;
  }
  .my_checkSalary1_main .my_checkSalary1_lists li span.title_span{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /*面包屑*/
  .checkSalary1 .my_checkSalary1_nav{
    width: 95%;
    margin:30px auto;
    color: #2aabd2;
  }

  /*主体*/
  .my_checkSalary1_main{
    margin: 4px;
    height: 740px;
    background-color: rgb(244,251,255);
    border: 1px solid rgb(193,199,209);
  }
  .my_checkSalary1_main .my_checkSalary1_title{
    height: 50px;
    margin: 15px 0 5px 0px;
  }
  .my_checkSalary1_main .my_checkSalary1_title p{
    height: 30px;
    font-size: 15px;
    line-height: 30px;
  }
  .my_checkSalary1_main .my_checkSalary1_lists{
    height: 610px;
    margin-bottom: 20px;
  }
  .my_checkSalary1_main .my_checkSalary1_lists li{
    list-style: none;
    height: 39px;
    border-bottom:1px solid rgb(193,199,209) ;
    background-color: rgb(207,233,244);
  }
  .my_checkSalary1_main .my_checkSalary1_lists li:before,.my_checkSalary1_main .my_checkSalary1_lists li:after{
    display: table;
    content: '';
    clear: both;
  }
  .my_checkSalary1_main .my_checkSalary1_lists li span{
    display: inline-block;
    overflow: hidden;
    height: 39px;
    line-height: 39px;
    text-align: center;
  }
  .my_checkSalary1_main .my_checkSalary1_lists li span:hover{
    background-color: rgb(207,233,255);
  }
  .check:hover{
    text-decoration: underline;
    color: dodgerblue;
  }
  .my_checkSalary1_main .my_checkSalary1_pages{
    padding-top: 20px;
    height: 40px;
    display:inline-block;
    width:auto;
    margin-left: 43%;
  }
</style>
