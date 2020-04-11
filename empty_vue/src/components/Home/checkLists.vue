<template>
    <div class="checkList">
      <div class="my_checkList_nav">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px;">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>人力资源管理</el-breadcrumb-item>
          <el-breadcrumb-item>人力资源档案复核</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="my_checkList_main_div">
        <div class="my_checkList_main">
          <div class="my_checkList_title">
            <p>当前等待复核的人力资源档案总数：{{count}}例</p>
          </div>
          <div class="my_checkList_lists">
            <li>
              <span class="title_span" style="width: 15%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">档案编号</span>
              <span class="title_span" style="width: 12%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">姓名</span>
              <span class="title_span" style="width: 10%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">性别</span>
              <span class="title_span" style="width: 12%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">一级机构</span>
              <span class="title_span" style="width: 12%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">二级机构</span>
              <span class="title_span" style="width: 12%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">三级机构</span>
              <span class="title_span" style="width: 15%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">职位名称</span>
              <span class="title_span" style="width: 11.54%;border-top: 1px solid rgb(160,184,216);float: left">复核</span>
            </li>
            <div>
              <li v-for="(list,index) in lists" :key="index" style="background-color: rgb(244,251,255)" v-show="list.recordStatus==0">
                <span style="width: 15%;border-right: 1px solid rgb(160,184,216);float: left">{{list.id}}</span>
                <span style="width: 12%;border-right: 1px solid rgb(160,184,216);float: left">{{list.mpUser.userName}}</span>
                <span style="width: 10%;border-right: 1px solid rgb(160,184,216);float: left">{{list.mpUser.userSex}}</span>
                <span style="width: 12%;border-right: 1px solid rgb(160,184,216);float: left">{{list.oneDept.deptName}}</span>
                <span style="width: 12%;border-right: 1px solid rgb(160,184,216);float: left">{{list.twoDept.deptName}}</span>
                <span style="width: 12%;border-right: 1px solid rgb(160,184,216);float: left">{{list.threeDept.deptName}}</span>
                <span style="width: 15%;border-right: 1px solid rgb(160,184,216);float: left">{{list.jobTitle}}</span>
                <span style="width: 11.54%;float: left;cursor: pointer;color: dodgerblue;color: dodgerblue;" @click="check(list.id,list.mpUser.id,list)" class="check">复核</span>
              </li>
            </div>
          </div>
          <div class="my_checkList_pages">
            <el-pagination
              layout="prev, pager, next"
              :total="listPage.totalSize"
              :current-page="listPage.pageNum"
              :page-size="pageSize"
              :hide-on-single-page="true"
              @current-change="(currentPage)=>reqMessages(currentPage)"
              style=""
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {FINDRECORD} from '../../api/types'
  import store from 'store'
  export default {
    data(){
      return {
        count:0,
        lists:[],
        listPage:[],
        pageSize:15,
        recordStatus:0    //待复核
      }
    },
    async mounted () {
      this.reqMessages(1)
    },
    methods :{
      /*复核*/
      check(id,id1,list){
        store.set('checklistid',id)
        store.set('checklistid1',id1)
        store.set('checklist',list)
        this.$router.push('/home/checkrecord1')
      },
      async reqMessages(page){
        var result = await FINDRECORD('2020-01-01','2020-02-01',page,this.pageSize,5,1)
          if(result.status == 200){
            this.lists = []
            var a = result.obj
            var b = a.content
            for(var i =0;i<b.length;i++){
              if(b[i].recordStatus==0){
                this.lists.push(b[i])
              }
            }
            this.listPage = {
              "totalSize":a.totalPages,
              "pageNum":page,
            }
            this.count = this.lists.length
          }else{
          this.$message(
            {
              type: 'error',
              message: '暂时无法获取数据，请刷新重试',
              duration: 1500,
            }
          )
        }
      }
    }
  }
</script>

<style >
  .checkList{
    min-width: 1800px;
  }
  .my_checkList_main .my_checkList_lists li span.title_span{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /*面包屑*/
  .checkList .my_checkList_nav{
    width: 95%;
    margin:30px auto;
    color: #2aabd2;
  }
  .my_checkList_main_div{
    width: 95%;
    margin: auto;
    margin-top: 10px;
    background-color: rgb(207,233,244);
    border: 1px solid rgb(160,184,216);
    border-radius: 4px;
  }
  /*主体*/
  .my_checkList_main{
    margin: 4px;
    height: 740px;
    border: 1px solid rgb(193,199,209);
    background-color: rgb(244,251,255);
  }
  .my_checkList_main .my_checkList_title{
    height: 30px;
    margin: 5px 0 5px 0px;
    color: blue;
  }
  .my_checkList_main .my_checkList_title p{
    height: 30px;
    font-size: 15px;
    line-height: 30px;
  }
  .my_checkList_main .my_checkList_lists{
    height: 640px;
    margin-bottom: 20px;
  }
  .my_checkList_main .my_checkList_lists li{
    list-style: none;
    height: 39px;
    border-bottom:1px solid rgb(193,199,209) ;
    background-color: rgb(207,233,244);
  }
  .my_checkList_main .my_checkList_lists li:before,.my_checkList_main .my_checkList_lists li:after{
    display: table;
    content: '';
    clear: both;
  }
  .my_checkList_main .my_checkList_lists li span{
    display: inline-block;
    overflow: hidden;
    height: 39px;
    line-height: 39px;
    text-align: center;
  }
  .my_checkList_main .my_checkList_lists li span:hover{
    background-color: rgb(200,233,255);
  }
  .check:hover{
    text-decoration: underline;
  }
  .my_checkList_main .my_checkList_pages{
    height: 40px;
    display:inline-block;
    width:auto;
    margin-left: 43%;
  }
</style>
