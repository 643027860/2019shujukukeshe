<template>
  <div class="selectSalary">
    <div class="my_selectSalary_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px;">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>薪资标准</el-breadcrumb-item>
        <el-breadcrumb-item>薪资标准查询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="my_selectSalary_main_div">
      <div class="my_selectSalary_main">
        <div class="my_selectSalary_title" style="position: relative;" >
          <p>&nbsp;&nbsp;查询符合条件的薪资标准：</p>
          <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left: 10px">
            <el-tab-pane label="按职业查询" name="first" style="height: 60px;">
              <el-form :inline="true" :model="uerInfos" class="demo-form-inline" style="margin-left: 50px">
                <div style="display: inline-block;width: 25%;height: 60px">
                  <el-form-item label="职业类型" style="margin-left: 15%;margin-top: 11px">
                    <el-select v-model="uerInfos.jobtype" placeholder="请输入从属职业类型" style="width: 250px" @change="reqJobNames">
                      <el-option v-for="(item,index) in jobType" :key="index" :label="item.typeName" :value="item.id" v-show="jobType"/>
                    </el-select>
                  </el-form-item>
                </div>
                <div style="display: inline-block;width: 25%;height: 60px">
                  <el-form-item label="职业" style="margin-left: 15%;margin-top: 11px">
                    <el-select v-model="uerInfos.salaryJobId" placeholder="请输入从属职业" style="width: 250px">
                      <el-option v-for="(item,index) in jobName" :key="index" :label="item.jobName" :value="item.id" v-show="jobName"/>
                    </el-select>
                  </el-form-item>
                </div>
                <el-button type="primary" icon="el-icon-search" style="height: 35px;font-size: 16px;position: absolute;top: 10px;left:1050px;padding: 8px 20px" @click="reqSalary(1,2)">查询</el-button>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="关键字查询" name="second" style="height: 60px;">
              <el-form :inline="true" :model="uerInfos" class="demo-form-inline" style="margin-left: 50px">
                <div style="display: inline-block;width: 25%;height: 60px">
                  <el-form-item label="关键字" style="margin-left: 15%;margin-top: 11px">
                    <el-input v-model="uerInfos.keyword" placeholder="请输入关键字" style="width: 250px" @change="reqJobNames"/>
                  </el-form-item>
                </div>
                <div style="display: inline-block;width: 22%;height: 60px;position: relative;">
                  <div style="display: inline-block;position: absolute;left:38%;top: 10px">
                    <el-date-picker
                      v-model="time"
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
                <el-button type="primary" icon="el-icon-search" style="height: 35px;font-size: 16px;position: absolute;top: 10px;left:1050px;padding: 8px 20px" @click="reqSalary(1,3)">查询</el-button>
              </el-form>
            </el-tab-pane>
          </el-tabs>
          <p>&nbsp;&nbsp;符合条件的薪资标准总数：{{count}}例</p>
        </div>
        <div class="my_selectSalary_lists">
          <li>
            <span class="title_span" style="width: 10%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">薪资标准编号</span>
            <span class="title_span" style="width: 10%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">薪资名</span>
            <span class="title_span" style="width: 8%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">基础花费</span>
            <span class="title_span" style="width: 8%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">午餐费</span>
            <span class="title_span" style="width: 8%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">通讯费</span>
            <span class="title_span" style="width: 8%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">交通费</span>
            <span class="title_span" style="width: 10%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">薪资总额</span>
            <span class="title_span" style="width: 21.42%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">复核意见</span>
            <span class="title_span" style="width: 8%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">记录者</span>
            <span class="title_span" style="width: 8%;border-right: 1px solid rgb(160,184,216);border-top: 1px solid rgb(160,184,216);float: left">登记者</span>
          </li>
          <div>
            <li v-for="(list,index) in lists" :key="index" style="background-color: rgb(244,251,255)">
              <span style="width: 10%;border-right: 1px solid rgb(160,184,216);float: left">{{list.id}}</span>
              <span style="width: 10%;border-right: 1px solid rgb(160,184,216);float: left">{{list.salaryName}}</span>
              <span style="width: 8%;border-right: 1px solid rgb(160,184,216);float: left">{{list.salaryBase}}</span>
              <span style="width: 8%;border-right: 1px solid rgb(160,184,216);float: left">{{list.salaryLunch}}</span>
              <span style="width: 8%;border-right: 1px solid rgb(160,184,216);float: left">{{list.salaryMobile}}</span>
              <span style="width: 8%;border-right: 1px solid rgb(160,184,216);float: left">{{list.salaryTraffic}}</span>
              <span style="width: 10%;border-right: 1px solid rgb(160,184,216);float: left">{{list.salaryTotal}}</span>
              <span style="width: 21.42%;border-right: 1px solid rgb(160,184,216);float: left">{{list.salaryOption}}</span>
              <span style="width: 8%;border-right: 1px solid rgb(160,184,216);float: left">{{list.salaryRecorder}}</span>
              <span style="width: 8%;border-right: 1px solid rgb(160,184,216);float: left">{{list.salaryRegister}}</span>
            </li>
          </div>
        </div>
        <div>
          <div class="my_selectSalary_pages">
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
  import {REQJOBS,REQJOBTYPE,REQSALARYLISTS,REQSALARYS} from '../../api/types'
  export default {
    data(){
      return {
        activeName: 'first',
        count:0,
        listPage:[],
        pageSize:11,
        lists:[],
        jobType:[],
        jobName:[],
        time:'',
        uerInfos:{
          salaryId:'',
          jobtype:'',
          salaryJobId :'',
          keyword:'',
        },
      }
    },
    async mounted () {
      this.reqJobType()
    },
    methods :{
      handleClick(tab, event) {
        console.log(tab, event);
      },
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
      /*查询*/
      async reqSalary(page,sign){
        var user = this.uerInfos
        if(sign ==1){
          if(user.salaryId){
            var result = await REQSALARYLISTS(salaryId)
            if(result.status == 200){
              if(result.obj){
                var a = result.obj
                this.lists = a
                this.count = 1
              }else{
                this.count = 0
              }
            }else{
              this.$message({
                type:'error',
                message:'获取数据失败，请重试',
                duration:1500
              })
            }
          }else{
            this.$message({
              type:'warning',
              message:'请填完信息再查询',
              duration:1500
            })
          }
        }else if(sign == 2){
          if(user.salaryJobId){
            var result = await REQSALARYLISTS(page,this.pageSize,user.salaryJobId)
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
                message:'获取数据失败，请重试',
                duration:1500
              })
            }
          }else{
            this.$message({
              type:'warning',
              message:'请填完信息再查询',
              duration:1500
            })
          }
        }else if(sign == 3){
          if(user.keyword&&this.time){
            var result = await REQSALARYS(this.time[0],user.keyword,this.time[1],page,this.pageSize)
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
                message:'获取数据失败，请重试',
                duration:1500
              })
            }
          }else{
            this.$message({
              type:'warning',
              message:'请填完信息再查询',
              duration:1500
            })
          }
        }
      }
    }
  }
</script>

<style >
  .selectSalary{
    background-color: white;
    min-width: 1700px;
  }
  .my_selectSalary_main_div{
    width: 95%;
    margin: auto;
    margin-top: 10px;
    background-color: rgb(207,233,244);
    border: 1px solid rgb(160,184,216);
    border-radius: 4px;
  }
  .my_selectSalary_main .my_selectSalary_lists li span.title_span{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /*面包屑*/
  .selectSalary .my_selectSalary_nav{
    width: 95%;
    margin:30px auto;
    color: #2aabd2;
  }

  /*主体*/
  .my_selectSalary_main{
    margin: 4px;
    height: 740px;
    background-color: rgb(244,251,255);
    border: 1px solid rgb(193,199,209);
  }
  .my_selectSalary_main .my_selectSalary_title{
    height: 200px;
  }
  .my_selectSalary_main .my_selectSalary_title p{
    height: 25px;
    font-size: 15px;
    line-height: 25px;
    padding: 7.5px 0px;
  }
  .my_selectSalary_main .my_selectSalary_lists{
    height: 380px;
  }
  .my_selectSalary_main .my_selectSalary_lists li{
    list-style: none;
    height: 39px;
    border-bottom:1px solid rgb(193,199,209) ;
    background-color: rgb(207,233,244);
  }
  .my_selectSalary_main .my_selectSalary_lists li:before,.my_selectSalary_main .my_selectSalary_lists li:after{
    display: table;
    content: '';
    clear: both;
  }
  .my_selectSalary_main .my_selectSalary_lists li span{
    display: inline-block;
    overflow: hidden;
    height: 39px;
    line-height: 39px;
    text-align: center;
  }
  .my_selectSalary_main .my_selectSalary_lists li span:hover{
    background-color: rgb(207,233,255);
  }
  .my_selectSalary_main .my_selectSalary_pages{
    padding-top: 20px;
    height: 40px;
    display:inline-block;
    width:auto;
    margin-left: 43%;
  }
</style>
