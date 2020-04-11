<template>
  <div class="selectList">
    <div class="my_selectList_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px;">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>档案</el-breadcrumb-item>
        <el-breadcrumb-item>查询档案</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="my_selectList_main_div">
      <div class="my_selectList_main">
        <div class="my_selectList_title" style="position: relative;" >
          <p>&nbsp;&nbsp;查询符合条件的员工：</p>
          <el-form :inline="true" :model="uerInfos" class="demo-form-inline">
            <div style="display: inline-block;width: 22%;height: 60px">
              <el-form-item label="I级机构" style="margin-left: 15%;margin-top: 11px">
                <el-select v-model="uerInfos.userDeptIdOne" placeholder="请选择I级机构" @change="reqDeptsTwo()">
                  <el-option v-for="(item,index) in userDeptIdOne"  :key="index" :label="item.deptName" :value="item.id"  v-show="userDeptIdOne"/>
                </el-select>
              </el-form-item>
            </div>
            <div style="display: inline-block;width: 22%;height: 60px">
              <el-form-item label="II级机构" style="margin-left: 15%;margin-top: 11px">
                <el-select v-model="uerInfos.userDeptIdTwo" placeholder="请选择II级机构" @change="reqDeptsThree()">
                  <el-option v-for="(item,index) in userDeptIdTwo1"  :key="index" :label="item.deptName" :value="item.id"  v-show="userDeptIdTwo1"/>
                </el-select>
              </el-form-item>
            </div>
            <div style="display: inline-block;width: 22%;height: 60px">
              <el-form-item label="III级机构" style="margin-left: 15%;margin-top: 11px">
                <el-select v-model="uerInfos.userDeptId" placeholder="请选择III级机构">
                  <el-option v-for="(item,index) in userDeptIdThree1"  :key="index" :label="item.deptName" :value="item.id" v-show="userDeptIdThree1"/>
                </el-select>
              </el-form-item>
            </div>
            <div style="display: inline-block;width: 22%;height: 60px;position: relative;">
              <div style="display: inline-block;position: absolute;left:38%;top: 10px">
                <el-date-picker
                  v-model="value2"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  >
                </el-date-picker>
              </div>
              <el-form-item label="建档时间" style="margin-left: 15%;margin-top: 11px;">
              </el-form-item>
            </div>
            <div style="display: inline-block;width: 22%;height: 60px">
              <el-form-item label="职业分类" style="margin-left: 15%;margin-top: 11px">
                <el-select v-model="uerInfos.jobType1" placeholder="请选择职业类别" @change="reqJobName">
                  <el-option v-for="(item,index) in jobType"  :key="index" :label="item.typeName" :value="item.id"  v-show="jobType"/>
                </el-select>
              </el-form-item>
            </div>
            <div style="display: inline-block;width: 22%;height: 60px">
              <el-form-item label="职位名称" style="margin-left: 15%;margin-top: 11px">
                <el-select v-model="uerInfos.jobName1" placeholder="请选择职业" @change="reqJobTitle">
                  <el-option v-for="(item,index) in jobName"  :key="index" :label="item.jobName" :value="item.id"  v-show="jobName"/>
                </el-select>
              </el-form-item>
            </div>
            <div style="display: inline-block;width: 22%;height: 60px">
              <el-form-item label="职称" style="margin-left: 15%;margin-top: 11px">
                <el-select v-model="uerInfos.jobTitle1" placeholder="请选择职称">
                  <el-option v-for="(item,index) in jobTitle"  :key="index" :label="item.titleName" :value="item.id"  v-show="jobTitle"/>
                </el-select>
              </el-form-item>
            </div>
            <el-button type="primary" icon="el-icon-search" style="height: 35px;font-size: 16px;position: absolute;top: 113px;padding: 8px 20px;left: 1280px;" @click="select(1)">查询</el-button>
          </el-form>
          <p>&nbsp;&nbsp;符合条件的人力资源档案总数：{{count}}例</p>
        </div>
        <div class="my_selectList_lists">
          <li>
            <span class="title_span" style="width: 15%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">档案编号</span>
            <span class="title_span" style="width: 12%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">姓名</span>
            <span class="title_span" style="width: 10%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">性别</span>
            <span class="title_span" style="width: 12%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">一级机构</span>
            <span class="title_span" style="width: 12%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">二级机构</span>
            <span class="title_span" style="width: 12%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">三级机构</span>
            <span class="title_span" style="width: 15%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">职位名称</span>
            <span class="title_span" style="width: 11.54%;border-top: 1px solid rgb(160,184,216);float: left">查询</span>
          </li>
          <div>
            <li v-for="(list,index) in lists" :key="index" style="background-color: rgb(244,251,255)">
              <span style="width: 15%;border-right: 1px solid rgb(160,184,216);float: left">{{list.id}}</span>
              <span style="width: 12%;border-right: 1px solid rgb(160,184,216);float: left">{{list.mpUser.userName}}</span>
              <span style="width: 10%;border-right: 1px solid rgb(160,184,216);float: left">{{list.mpUser.userSex}}</span>
              <span style="width: 12%;border-right: 1px solid rgb(160,184,216);float: left">{{list.oneDept.deptName}}</span>
              <span style="width: 12%;border-right: 1px solid rgb(160,184,216);float: left">{{list.twoDept.deptName}}</span>
              <span style="width: 12%;border-right: 1px solid rgb(160,184,216);float: left">{{list.threeDept.deptName}}</span>
              <span style="width: 15%;border-right: 1px solid rgb(160,184,216);float: left">{{list.jobTitle}}</span>
              <span style="width: 11.54%;float: left;cursor: pointer;color: dodgerblue;" @click="detail(list.mpUser.id,list)" class="detail">查看明细</span>
            </li>
          </div>
        </div>
        <div>
          <div class="my_selectList_pages">
            <el-pagination
              layout="prev, pager, next"
              :total="listPage.totalSize"
              :current-page="listPage.pageNum"
              :page-size="pageSize"
              :hide-on-single-page="true"
              @current-change="(currentPage)=>select(currentPage)"
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
  import {REGONE,REQJOBS,REQJOBTYPE,FINDRECORD,REQCHENG} from '../../api/types'
  import store from 'store'
  export default {
    data(){
      return {
        count:0,
        listPage:[],
        pageSize:11,
        lists:[],
        userDeptIdOne: [],
        userDeptIdTwo: [],
        userDeptIdThree: [],
        userDeptIdTwo1: [],
        userDeptIdThree1: [],
        jobType:'',
        jobName:'',
        jobTitle:'',
        value2: '',
        uerInfos:{
          userDeptIdOne: '',
          userDeptIdTwo: '',
          userDeptId:'',
          jobType1:'',
          jobName1:'',
          jobTitle1:'',
          createTime:'',
          lastUpdateTime:'',
        },
      }
    },
    async mounted () {
      this.reqDepts()
      this.reqJobType()
    },
    methods :{
      /*查看明细*/
      detail(id,list){
        store.set('listdetailid',id)
        store.set('checklistdetail',list)
        this.$router.push('/home/recorddetail')
      },
      /*获取机构*/
      async reqDepts(){
        var result = await REGONE()
        if(result.status==200){
          result = result.obj
          var length = result.length
          var one = []
          var two = []
          var three = []
          for(var i = 0;i<length;i++){
            one.push(result[i])
            two.push({'id':result[i].id,'two':result[i].childDept})
          }
          length = two.length
          for(i = 0;i<length;i++){
            var a = two[i].two
            for(var j = 0;j<a.length;j++){
              three.push({'id':a[j].id,'three':a[j].childDept})
            }
          }
          this.userDeptIdThree = three
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
      reqDeptsTwo(){
        this.uerInfos.userDeptIdTwo = ''
        this.uerInfos.userDeptId = ''
        for(var i = 0;i<this.userDeptIdTwo.length;i++){
          if(this.userDeptIdTwo[i].id==this.uerInfos.userDeptIdOne){
            this.userDeptIdTwo1 = []
            this.userDeptIdTwo1=this.userDeptIdTwo[i].two
          }
        }
      },
      /*获取三级机构*/
      reqDeptsThree(){
        this.uerInfos.userDeptId = ''
        for(var i = 0;i<this.userDeptIdThree.length;i++){
          if(this.userDeptIdThree[i].id==this.uerInfos.userDeptIdTwo){
            this.userDeptIdThree1 = []
            this.userDeptIdThree1=this.userDeptIdThree[i].three
          }
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
        this.uerInfos.jobName1 = ''
        this.uerInfos.jobTiyle1 = ''
        var result = await REQJOBTYPE(this.uerInfos.jobType1,1,10)
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
      /*获取职称*/
      async reqJobTitle(){
        var user = this.uerInfos
        user.jobTitle1 = ''
        var jobTitleId = await REQCHENG(1,10,user.jobName1)
        if(jobTitleId.status == 200){
          var result = jobTitleId.obj
          this.jobTitle = result.content
        }else {
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*查询*/
      async select(page){
        var user = this.uerInfos
        if(this.value2&&user.userDeptId&&user.jobTitle1){
          this.uerInfos.createTime = this.value2[0]
          this.uerInfos.lastUpdateTime = this.value2[1]
          var result = await FINDRECORD(this.value2[0],this.value2[1],page,11,user.userDeptId,user.jobTitle1)
          if(result.status == 200){
            var a = result.obj
            var b = a.content
            this.lists = b
            this.listPage = {
              "totalSize":a.totalPages,
              "pageNum":page,
            }
            this.count = a.totalSize
          }else{
            this.$message({
              type:'error',
              message:'查询数据失败，请刷新重试',
              duration: 1500,
            })
          }
        }else{
          this.$message({
            type:'warning',
            message:'请填完查询条件',
            duration:1500
          })
        }
      }
    }
  }
</script>

<style >
  .selectList{
    background-color: white;
    min-width: 1900px;
  }
  .my_selectList_main_div{
    width: 95%;
    margin: auto;
    margin-top: 10px;
    background-color: rgb(207,233,244);
    border: 1px solid rgb(160,184,216);
    border-radius: 4px;
  }
  .my_selectList_main .my_selectList_lists li span.title_span{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /*面包屑*/
  .selectList .my_selectList_nav{
    width: 95%;
    margin:30px auto;
    color: #2aabd2;
  }

  /*主体*/
  .my_selectList_main{
    margin: 4px;
    height: 740px;
    background-color: rgb(244,251,255);
    border: 1px solid rgb(193,199,209);
  }
  .my_selectList_main .my_selectList_title{
    height: 200px;
  }
  .my_selectList_main .my_selectList_title p{
    height: 25px;
    font-size: 15px;
    line-height: 25px;
    padding: 7.5px 0px;
  }
  .my_selectList_main .my_selectList_lists{
    height: 480px;
  }
  .my_selectList_main .my_selectList_lists li{
    list-style: none;
    height: 39px;
    border-bottom:1px solid rgb(193,199,209) ;
    background-color: rgb(207,233,244);
  }
  .my_selectList_main .my_selectList_lists li:before,.my_selectList_main .my_selectList_lists li:after{
    display: table;
    content: '';
    clear: both;
  }
  .my_selectList_main .my_selectList_lists li span{
    display: inline-block;
    overflow: hidden;
    height: 39px;
    line-height: 39px;
    text-align: center;
  }
  .my_selectList_main .my_selectList_lists li span:hover{
    background-color: rgb(207,233,255);
  }
  .detail:hover{
    text-decoration: underline;
  }
  .my_selectList_main .my_selectList_pages{
    padding-top: 20px;
    height: 40px;
    display:inline-block;
    width:auto;
    margin-left: 43%;
  }
</style>
