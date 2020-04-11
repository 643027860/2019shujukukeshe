<template>
  <div class="checkSalary">
    <div class="my_checkSalary_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px;">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>薪资发放</el-breadcrumb-item>
        <el-breadcrumb-item>薪资发放单复核</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="my_checkSalary_main_div">
      <div class="my_checkSalary_main">
        <div class="my_checkSalary_title">
          <p style="color: blue;">&nbsp;&nbsp;待审核的薪资发放总数：{{count}}例</p>
        </div>
        <div class="my_checkSalary_lists">
          <li>
            <span class="title_span" style="width: 15%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">薪资发放单编号</span>
            <span class="title_span" style="width: 15%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">I级机构</span>
            <span class="title_span" style="width: 15%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">II级机构</span>
            <span class="title_span" style="width: 15%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">III级机构</span>
            <span class="title_span" style="width: 15%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">人数</span>
            <span class="title_span" style="width: 15%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">基本薪酬总额</span>
            <span class="title_span" style="width: 9.55%;border-top: 1px solid rgb(160,184,216);float: left">登记</span>
          </li>
          <div>
            <li v-for="(list,index) in lists" :key="index" style="background-color: rgb(244,251,255)">
              <span style="width: 15%;border-right: 1px solid rgb(160,184,216);float: left">{{list.id}}</span>
              <span style="width: 15%;border-right: 1px solid rgb(160,184,216);float: left">{{list.depts[0]}}</span>
              <span style="width: 15%;border-right: 1px solid rgb(160,184,216);float: left">{{list.depts[1]}}</span>
              <span style="width: 15%;border-right: 1px solid rgb(160,184,216);float: left">{{list.depts[2]}}</span>
              <span style="width: 15%;border-right: 1px solid rgb(160,184,216);float: left">{{list.regNumber}}</span>
              <span style="width: 15%;border-right: 1px solid rgb(160,184,216);float: left">{{list.regTotal}}</span>
              <span style="width: 9.55%;float: left;cursor: pointer;color: dodgerblue;color: dodgerblue;" @click="check(list.id,list)" class="check">登记</span>
            </li>
          </div>
        </div>
        <div>
          <div class="my_checkSalary_pages">
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
  import {REQSALARYBYSTATUS,REQSALARYSEND1} from '../../api/types'
  export default {
    data(){
      return {
        count:0,
        listPage:[],
        pageSize:15,
        lists:[],
        status:0,
      }
    },
    async mounted () {
      this.reqSalary(1)
    },
    methods :{
      check(id,list){
        store.set('sendsalaryid',id)
        store.set('sendsalary',list)
        this.$router.push('/home/sendsalarydetail')
      },
      /*查询*/
      async reqSalary(page){
        var result = await REQSALARYSEND1('2020-01-01','2020-02-01',page,this.pageSize,5)
        if(result.status == 200){
          this.lists = []
          var a = result.obj
          var b = a.content
          for(var i=0;i<b.length;i++){
            if(b[i].regStatus == 0){
              this.lists.push(b[i])
            }
          }
          this.listPage = {
            "totalSize":a.totalPages,
            "pageNum":page,
          }
          this.count = this.lists.length
        }else{
          this.$message({
            type:'error',
            message:'获取数据失败，请重试',
            duration:1500
          })
        }
      },
    }
  }
</script>

<style >
  .checkSalary{
    background-color: white;
    min-width: 1700px;
  }
  .my_checkSalary_main_div{
    width: 95%;
    margin: auto;
    margin-top: 10px;
    background-color: rgb(207,233,244);
    border: 1px solid rgb(160,184,216);
    border-radius: 4px;
  }
  .my_checkSalary_main .my_checkSalary_lists li span.title_span{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /*面包屑*/
  .checkSalary .my_checkSalary_nav{
    width: 95%;
    margin:30px auto;
    color: #2aabd2;
  }

  /*主体*/
  .my_checkSalary_main{
    margin: 4px;
    height: 740px;
    background-color: rgb(244,251,255);
    border: 1px solid rgb(193,199,209);
  }
  .my_checkSalary_main .my_checkSalary_title{
    height: 30px;
    margin: 5px 0 5px 0px;
  }
  .my_checkSalary_main .my_checkSalary_title p{
    height: 30px;
    font-size: 15px;
    line-height: 30px;
  }
  .my_checkSalary_main .my_checkSalary_lists{
    height: 640px;
    margin-bottom: 20px;
  }
  .my_checkSalary_main .my_checkSalary_lists li{
    list-style: none;
    height: 39px;
    border-bottom:1px solid rgb(193,199,209) ;
    background-color: rgb(207,233,244);
  }
  .my_checkSalary_main .my_checkSalary_lists li:before,.my_checkSalary_main .my_checkSalary_lists li:after{
    display: table;
    content: '';
    clear: both;
  }
  .my_checkSalary_main .my_checkSalary_lists li span{
    display: inline-block;
    overflow: hidden;
    height: 39px;
    line-height: 39px;
    text-align: center;
  }
  .my_checkSalary_main .my_checkSalary_lists li span:hover{
    background-color: rgb(207,233,255);
  }
  .check:hover{
    text-decoration: underline;
    color: dodgerblue;
  }
  .my_checkSalary_main .my_checkSalary_pages{
    padding-top: 20px;
    height: 40px;
    display:inline-block;
    width:auto;
    margin-left: 43%;
  }
</style>
