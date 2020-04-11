<template>
  <div class="complete">
    <div class="my_complete_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px;">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>档案</el-breadcrumb-item>
        <el-breadcrumb-item>档案详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button type="primary" plain @click="pass" style="position: absolute;height: 35px;padding: 5px 20px;border-radius: 4px;margin-top: -10px;margin-left: 90%">复核通过</el-button>
    </div>
    <div class="my_complete_form_div">
      <div class="my_complete_form">
        <el-form :inline="true" :model="uerInfos" class="demo-form-inline" style="border-collapse: collapse;">
          <div class="my_one">
            <div class="my_one_left">
              <div class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>I级机构
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-select v-model="uerInfos.userDeptIdOne" placeholder="请选择I级机构" @change="reqDeptsTwo">
                      <el-option v-for="(item,index) in userDeptIdOne"  :key="index" :label="item.deptName" :value="item.id"  v-show="userDeptIdOne"/>
                    </el-select>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>II级机构
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-select v-model="uerInfos.userDeptIdTwo" placeholder="请选择II级机构" @change="reqDeptsThree">
                      <el-option v-for="(item,index) in userDeptIdTwo1"  :key="index" :label="item.deptName" :value="item.id"  v-show="userDeptIdTwo1"/>
                    </el-select>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>III级机构
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-select v-model="uerInfos.userDeptId" placeholder="请选择III级机构" @change="updateAll">
                      <el-option v-for="(item,index) in userDeptIdThree1"  :key="index" :label="item.deptName" :value="item.id" v-show="userDeptIdThree1"/>
                    </el-select>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>职业分类
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-select v-model="uerInfos.userJobType" @change="reqJobNames">
                      <el-option v-for="(item,index) in jobTypes" :key="index" :label="item.typeName" :value="item.id" v-show="jobTypes"/>
                    </el-select>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>职位名称
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-select v-model="uerInfos.userJobName" placeholder="请选择职位名称" @change="reqJobTitleId">
                      <el-option v-for="(item,index) in jobNames" :key="index" :label="item.jobName" :value="item.id" v-show="jobNames"/>
                    </el-select>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>职称
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-select v-model="uerInfos.userJobTitleId" placeholder="请选择职称" @change="reqSalaryList">
                      <el-option v-for="(item,index) in jobTitleId" :key="index" :label="item.titleName" :value="item.id" v-show="jobTitleId"/>
                    </el-select>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>姓名
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-input v-model="uerInfos.userName" placeholder=""/>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>性别
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-select v-model="uerInfos.userSex">
                      <el-option label="男" value="男"></el-option>
                      <el-option label="女" value="女"></el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>Email
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-input v-model="uerInfos.userEmail" placeholder=""/>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>电话
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-input v-model="uerInfos.userPhone" placeholder="如无则填'无'"/>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>QQ
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-input v-model="uerInfos.userQq" placeholder=""/>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>手机
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-input v-model="uerInfos.userMobile" placeholder=""/>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>住址
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-input v-model="uerInfos.userAddress" placeholder=""/>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>邮编
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-input v-model="uerInfos.userZip" placeholder=""/>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>国籍
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-select v-model="uerInfos.userCountry" placeholder="请选择国籍">
                      <el-option label="中国" value="中国"></el-option>
                      <el-option label="日本" value="日本"></el-option>
                      <el-option label="韩国" value="韩国"></el-option>
                      <el-option label="美国" value="美国"></el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>出生地
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-input v-model="uerInfos.userBirthplace" placeholder=""/>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>生日
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-date-picker type="date" placeholder="选择日期" v-model="uerInfos.userBirthDate" style="width: 100%;"/>
                  </div>
                </div>
              </div>
              <div  class="ge">
                <div class="ge_name">
                  <span style="color: red">*&nbsp;</span>民族
                </div>
                <div class="ge_input">
                  <div style="width: 90%;display: inline-block;margin: 10px 5%">
                    <el-select v-model="uerInfos.userNation" placeholder="请选择民族">
                      <el-option label="汉族" value="汉族"></el-option>
                      <el-option label="傣族" value="傣族"></el-option>
                      <el-option label="土家族" value="土家族"></el-option>
                      <el-option label="回族" value="回族"></el-option>
                    </el-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="my_one_right">
              <div style="width: 200px;height: 220px;background-color: rgb(243,243,243);border: 1px solid black;margin: 40px auto">
                <img v-if="id" :src="'http://47.112.132.177:8093/user/showimg/{id}?id='+id" class="avatar" style="height: 220px;width: 100%" v-show="id">
              </div>
              <el-upload
                class="avatar-uploader"
                ref="upload"
                :show-file-list="false"
                action=""
                :before-upload="beforeUpload"
                :on-change="handleChange"
                :auto-upload="false"
                accept="image/*"
                style="width:200px;margin: auto; "
                :data="uerInfos">
                <!--                <el-button type="primary" icon="el-icon-upload2" style="margin-left: 36px;height: 40px;font-size: 16px" v-if="!id">上传图片</el-button>-->
                <!--                <el-button type="primary" icon="el-icon-upload2" style="margin-left: 36px;height: 40px;font-size: 16px" v-else>修改图片</el-button>-->
              </el-upload>
            </div>
          </div>
          <div class="my_two">
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>宗教信仰
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-select v-model="uerInfos.userFaith" placeholder="请选择宗教信仰">
                    <el-option label="佛教" value="佛教"></el-option>
                    <el-option label="伊斯兰教" value="伊斯兰教"></el-option>
                    <el-option label="基督教" value="基督教"></el-option>
                    <el-option label="无" value="无"></el-option>
                  </el-select>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>政治面貌
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-select v-model="uerInfos.userPolitics" placeholder="请选择政治面貌">
                    <el-option label="群众" value="群众"></el-option>
                    <el-option label="共青团员" value="共青团员"></el-option>
                    <el-option label="预备党员" value="预备党员"></el-option>
                    <el-option label="党员" value="党员"></el-option>
                  </el-select>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>身份证号码
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-input v-model="uerInfos.userIdNo" placeholder=""/>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>社会保障号码
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-input v-model="uerInfos.userSocialNo" placeholder=""/>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>年龄
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-input v-model="uerInfos.userAge" placeholder=""/>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>学历
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-select v-model="uerInfos.userStudy" placeholder="请选择学历" @change="reqMajorJob">
                    <el-option v-for="(item,index) in eduJob" :key="index" :label="item.eduName" :value="item.id" v-show="eduJob"/>
                  </el-select>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>学历专业
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-select v-model="uerInfos.userEduMajor" placeholder="请选择学历专业">
                    <el-option v-for="(item,index) in majorJob" :key="index" :label="item.majorName" :value="item.id" v-show="majorJob"/>
                  </el-select>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>薪酬标准
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-select v-model="uerInfos.userSalary" placeholder="请选择薪酬标准">
                    <el-option v-for="(item,index) in salaryLists" :key="index" :label="item.salaryTotal" :value="item.id" v-show="salaryLists" />
                  </el-select>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>开户行
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-input v-model="uerInfos.userBank" placeholder=""/>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>账号
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-input v-model="uerInfos.userAccount" placeholder=""/>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>登记人
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-input v-model="uerInfos.userRegister" placeholder=""/>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>建档时间
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-date-picker type="date" placeholder="选择日期" v-model="uerInfos.userCreateDate" style="width: 100%;"/>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>职业特长
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-select v-model="uerInfos.userDeptSpecial" placeholder="请选择特长">
                    <el-option v-for="(item,index) in jobSpecial" :key="index" :label="item.specialName" :value="item.id"/>
                  </el-select>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>爱好
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-select v-model="uerInfos.userHobby" placeholder="请选择爱好">
                    <el-option v-for="(item,index) in hobbys" :label="item.hobbyName" :value="item.id" :key="index"/>
                  </el-select>
                </div>
              </div>
            </div>
            <div  class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>家庭关系信息
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 10px 5%">
                  <el-input v-model="uerInfos.userFamily" placeholder="如没有则必须填‘无’"/>
                </div>
              </div>
            </div>
            <div class="ge"/>
          </div>
          <div class="my_three">
            <div class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>个人履历
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 12.5px 5%">
                  <el-input type="textarea" :rows="3" v-model="uerInfos.userResume" placeholder="如没有则必须填‘无’"/>
                </div>
              </div>
            </div>
            <div class="ge">
              <div class="ge_name">
                <span style="color: red">*&nbsp;</span>备注
              </div>
              <div class="ge_input">
                <div style="width: 90%;display: inline-block;margin: 12.5px 5%">
                  <el-input type="textarea" :rows="3" v-model="uerInfos.userRemark" placeholder="如没有则必须填‘无’"/>
                </div>
              </div>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/my_css.css'
  import {REQSALARYLISTS,UPLOADUSER,REGONE,REQHOBBY,REQJOBTYPE,REQSPECIAL,REQJOBS,REQCHENG,REQEDU,REQMAJORJOB,UPDATERECORD} from '../../api/types'
  import store from 'store'
  export default {
    data(){
      return {
        id:'',
        userDeptIdOne: [],
        userDeptIdTwo: [],
        userDeptIdThree: [],
        userDeptIdTwo1: [],
        userDeptIdThree1: [],  //三级机构
        hobbys:[],             //爱好
        jobTypes:[],           //职业类型
        jobSpecial:[],         //职业特长
        jobNames:[],           //职位名称
        jobTitleId:[],         //职称
        majorJob:[],           //专业
        eduJob:[],             //学历
        salaryLists:[],        //薪酬标准
        uerInfos: {
          userDeptIdOne: '',
          userDeptIdTwo: '',
          userDeptId:'',
          userDeptSpecial:'',
          fileUrl:'',
          file: '',
          userCreateDate:'',
          userAccount: '',
          userAddress: '',
          userAge: '',
          userBank: '',
          userBirthplace: '',
          userCountry: '',
          userEduMajor: '',
          userEmail: '',
          userFaith: '',
          userFamily: '',
          userHobby: '',
          userIdNo: '',
          userJobTitleId : '',
          userMobile: '',
          userName: '',
          userNation: '',
          userPhone: '',
          userPolitics: '',
          userQq: '',
          userRegister: '',
          userRemark: '',
          userResume: '',
          userSalary : '',
          userSex: '',
          userSocialNo: '',
          userZip: '',
          userJobType:'',
          userJobName:'',
          userBirthDate:'',
          userStudy:'',
        }
      }
    },
    mounted () {
      this.reqDepts()   //获取三级机构
      this.reqHobbys()  //获取爱好
      this.reqJobType() //获取职业类型
      this.reqEduJob()  //获取学历
      this.reqinfo()    //初始化
    },
    methods:{
      /*获取对应对象数据*/
      reqinfo(){
        var user = store.get('checklist')
        this.id = store.get('checklistid1')
        var self = this.uerInfos
        self.userDeptIdOne = user.recordOne
        self.userDeptIdTwo = '山东'
        self.userDeptId = '济南'
        self.userJobType = 1
        self.userJobName = '程序员'
        self.userDeptSpecial = '编码'
        self.file = user.mpUser.userHead
        self.userCreateDate = user.createTime
        self.userAccount = user.mpUser.userAccount
        self.userAddress = user.mpUser.userAddress
        self.userAge = user.mpUser.userAge
        self.userBank = user.mpUser.userBank
        self.userBirthplace = user.mpUser.userBirthplace
        self.userCountry = user.mpUser.userCountry
        self.userEduMajor = user.mpUser.userEduMajor
        self.userEmail = user.mpUser.userEmail
        self.userFaith = user.mpUser.userFaith
        self.userFamily = user.mpUser.userFamily
        self.userHobby = user.mpUser.userHobby
        self.userIdNo = user.mpUser.userIdNo
        self.userJobTitleId  = '教授'
        self.userBirthDate  = '2020-01-01'
        self.userMobile = user.mpUser.userMobile
        self.userName = user.mpUser.userName
        self.userNation = user.mpUser.userNation
        self.userPhone = user.mpUser.userPhone
        self.userPolitics = user.mpUser.userPolitics
        self.userQq = user.mpUser.userQq
        self.userRegister = user.mpUser.userRegister
        self.userRemark = user.mpUser.userRemark
        self.userResume = user.mpUser.userResume
        self.userSalary = user.mpUser.userSalary
        self.userSex = user.mpUser.userSex
        self.userSocialNo = user.mpUser.userSocialNo
        self.userZip = user.mpUser.userZip
        self.userStudy = 1
        self.userEduMajor = '计算机科学与技术'
      },
      /*三级机构变化相应的数据改变*/
      updateAll(){
        this.reqJobSpecial()
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
        this.jobSpecial = []
        this.uerInfos.userDeptSpecial = ''
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
        this.jobSpecial = []
        this.uerInfos.userDeptSpecial = ''
        for(var i = 0;i<this.userDeptIdThree.length;i++){
          if(this.userDeptIdThree[i].id==this.uerInfos.userDeptIdTwo){
            this.userDeptIdThree1 = []
            this.userDeptIdThree1=this.userDeptIdThree[i].three
          }
        }
      },
      /*获取爱好*/
      async reqHobbys(){
        var hobbys = await REQHOBBY(1,10)
        if(hobbys.status == 200){
          var a = hobbys.obj
          this.hobbys = a.content
        }else{
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
        user.userJobName = ''
        user.userJobTitleId = ''
        var jobNames = await REQJOBTYPE(user.userJobType,1,10)
        if(jobNames.status == 200){
          var result = jobNames.obj
          this.jobNames = result.content
        }else {
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*获取职业特长*/
      async reqJobSpecial(){
        var user = this.uerInfos
        this.uerInfos.userDeptSpecial = ''
        var jobSpecial = await REQSPECIAL(1,10,user.userDeptId)
        if(jobSpecial.status == 200){
          var result = jobSpecial.obj
          this.jobSpecial = result.content
        }else {
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*获取职业类型*/
      async reqJobType(){
        var jobTypes = await REQJOBS(1,10)
        if(jobTypes.status == 200){
          var result = jobTypes.obj
          this.jobTypes = result.content
        }else {
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*获取职称*/
      async reqJobTitleId(){
        var user = this.uerInfos
        user.userJobTitleId = ''
        var jobTitleId = await REQCHENG(1,10,user.userJobName)
        if(jobTitleId.status == 200){
          var result = jobTitleId.obj
          this.jobTitleId = result.content
        }else {
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*获取学历*/
      async reqEduJob(){
        var user = this.uerInfos
        user.userEduMajor  = ''
        var eduJob = await REQEDU(1,10)
        if(eduJob.status == 200){
          var result = eduJob.obj
          this.eduJob = result.content
        }else {
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*专业*/
      async reqMajorJob(){
        var user = this.uerInfos
        var majorJob = await REQMAJORJOB(user.userStudy,1,10)
        if(majorJob.status == 200){
          var result = majorJob.obj
          this.majorJob = result.content
        }else {
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*获取薪资标准*/
      async reqSalaryList(){
        var user = this.uerInfos
        user.userSalary = ''
        var result = await REQSALARYLISTS(1,10,user.userJobTitleId)
        if(result.status == 200){
          var a = result.obj
          this.salaryLists = a.content
        }else{
          this.$message({
            type:'error',
            message:'获取数据失败，请刷新重试',
            duration: 1500,
          })
        }
      },
      /*上传图片*/
      handleChange (file, fileList) {
        if(file.size/1024/1024<3){
          this.uerInfos.fileUrl = URL.createObjectURL(file.raw)
          this.uerInfos.file = file.raw
        }else{
          this.$message({
            message: '请上传小于3M的图片',
            type: 'warning',
            duration:'1000'
          });
        }
      },
      beforeUpload (file) {
        return true
      },
      /*修改日期*/
      formatDate(date){
        var year = date.getFullYear()
        if(date.getMonth()*1>=9){
          var month = date.getMonth()*1 +1
        }
        else
          var month = 0 + '' + (date.getMonth()*1 +1)
        if(date.getDate()*1>9)
          var day = date.getDate()
        else
          var day = 0 + '' + date.getDate()
        return year + '-' + month + '-' + day
      },
      /*判断手机号码*/
      checkPhone(phone){
        if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))){
          return false;
        }else{
          return true
        }
      },
      /*判断身份证号*/
      checkID(id){
        if(!/^\d{15}(\d{2}[A-Za-z0-9])?$/.test(id)){
          return false;
        }else{
          return true
        }
      },
      /*判断QQ证号*/
      checkQQ(id){
        if(!/^[1-9]\d{4,9}$/.test(id)){
          return false;
        }else{
          return true
        }
      },
      /*判断邮编号*/
      checkZip(id){
        if(!/^[1-9]\d{5}$/.test(id)){
          return false;
        }else{
          return true
        }
      },
      /*判断银行卡号*/
      checkBank(id){
        if(!/^\d*$/.test(id)){
          return false;
        }else{
          return true
        }
      },
      /*判断email*/
      checkEmail(email){
        if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)){
          return false;
        }else{
          return true
        }
      },
      /*上传档案*/
      async uploadInfos(){
        let {
          file,
          userCreateDate,
          userAccount,
          userAddress,
          userAge,
          userBank,
          userBirthplace,
          userBirthDate,
          userCountry,
          userDeptId,
          userEduMajor,
          userEmail,
          userFaith,
          userFamily,
          userHobby,
          userIdNo,
          userDeptSpecial,
          userJobTitleId,
          userMobile,
          userName,
          userNation,
          userPhone,
          userPolitics,
          userQq,
          userRegister,
          userRemark,
          userResume,
          userSalary,
          userSex,
          userSocialNo,
          userZip,
        } = this.uerInfos
        let user = this.uerInfos
        if(file&&userAccount.trim()&&userAddress.trim()&&userAge.trim()&&userBank.trim()&&userBirthplace.trim()
          &&userCountry&&userDeptId&&userEduMajor&&userEmail.trim()&&userFaith&&userFamily.trim()&&userHobby
          &&userIdNo.trim()&&userDeptSpecial&&userJobTitleId&&userMobile.trim()&&userName.trim()&&userNation
          &&userPhone.trim()&&userPolitics&&userQq.trim()&&userRegister.trim()&&userRemark.trim()&&userResume.trim()
          &&userSalary&&userSex&&userSocialNo.trim()&&userZip.trim()&&userCreateDate&&userBirthDate){
          userBirthDate  = this.formatDate(userBirthDate)
          userCreateDate  = this.formatDate(userCreateDate)
          // let params = new FormData()
          // params.append('file',file)
          // params.append('userAccount',userAccount)
          // params.append('userAddress',userAddress)
          // params.append('userAge',userAge)
          // params.append('userBank',userBank)
          // params.append('userBirthplace',userBirthplace)
          // params.append('userCountry',userCountry)
          // params.append('userDeptId',userDeptId)
          // params.append('userDeptSpecial',userDeptSpecial)
          // params.append('userEduMajor',userEduMajor)
          // params.append('userEmail',userEmail)
          // params.append('userFaith',userFaith)
          // params.append('userFamily',userFamily)
          // params.append('userHobby',userHobby)
          // params.append('userIdNo',userIdNo)
          // params.append('userJobTitleId',userJobTitleId)
          // params.append('userMobile',userMobile)
          // params.append('userName',userName)
          // params.append('userNation',userNation)
          // params.append('userPhone',userPhone)
          // params.append('userPolitics',userPolitics)
          // params.append('userQq',userQq)
          // params.append('userRegister',userRegister)
          // params.append('userRemark',userRemark)
          // params.append('userResume',userResume)
          // params.append('userSalary',userSalary)
          // params.append('userSex',userSex)
          // params.append('userSocialNo',userSocialNo)
          // params.append('userZip',userZip)
          // var result = await UPLOADUSER(params)
          // console.log(result)
          // if(result.status == 200){
          //   user.file=''
          //   user.userAccount=''
          //   user.userAddress=''
          //   user.userAge=''
          //   user.userBank=''
          //   user.userBirthplace=''
          //   user.userCountry=''
          //   user.userDeptId=''
          //   user.userEduMajor=''
          //   user.userEmail=''
          //   user.userFaith=''
          //   user.userFamily=''
          //   user.userHobby=''
          //   user.userIdNo=''
          //   user.userDeptSpecial=''
          //   user.userJobTitleId=''
          //   user.userMobile=''
          //   user.userName=''
          //   user.userNation=''
          //   user.userPhone=''
          //   user.userPolitics=''
          //   user.userQq=''
          //   user.userRegister=''
          //   user.userRemark=''
          //   user.userResume=''
          //   user.userSalary=''
          //   user.userSex=''
          //   user.userSocialNo=''
          //   user.userZip=''
          //   user.userCreateDate=''
          //   user.userBirthDate=''
          //   user.userDeptIdOne=''
          //   user.userDeptIdTwo=''
          //   user.userStudy=''
          //   user.userJobType=''
          //   user.userJobName=''
          //   this.$message({
          //     type:'success',
          //     message:'上传成功',
          //     duration:1500
          //   })
          // }else{
          //   this.$message({
          //     type:'error',
          //     message:'上传失败，请重试',
          //     duration:1500
          //   })
          // }
          if(this.checkPhone(userMobile)){
            if(this.checkBank(userAccount)){
              if(this.checkEmail(userEmail)){
                if(this.checkID(userIdNo)){
                  if(this.checkqq(userQq)){
                    if(this.checkZip(userZip)){
                      let params = new FormData()
                      params.append('file',file)
                      params.append('userAccount',userAccount)
                      params.append('userAddress',userAddress)
                      params.append('userAge',userAge)
                      params.append('userBank',userBank)
                      params.append('userBirthplace',userBirthplace)
                      params.append('userCountry',userCountry)
                      params.append('userDeptId',userDeptId)
                      params.append('userDeptSpecial',userDeptSpecial)
                      params.append('userEduMajor',userEduMajor)
                      params.append('userEmail',userEmail)
                      params.append('userFaith',userFaith)
                      params.append('userFamily',userFamily)
                      params.append('userHobby',userHobby)
                      params.append('userIdNo',userIdNo)
                      params.append('userJobTitleId',userJobTitleId)
                      params.append('userMobile',userMobile)
                      params.append('userName',userName)
                      params.append('userNation',userNation)
                      params.append('userPhone',userPhone)
                      params.append('userPolitics',userPolitics)
                      params.append('userQq',userQq)
                      params.append('userRegister',userRegister)
                      params.append('userRemark',userRemark)
                      params.append('userResume',userResume)
                      params.append('userSalary',userSalary)
                      params.append('userSex',userSex)
                      params.append('userSocialNo',userSocialNo)
                      params.append('userZip',userZip)
                      var result = await UPLOADUSER(params)
                      console.log(result)
                      if(result.status == 200){
                        var a = result.obj
                        console.log(a)
                        this.$message({
                          type:'success',
                          message:'上传成功',
                          duration:1500
                        })
                      }else{
                        this.$message({
                          type:'error',
                          message:'上传失败',
                          duration:1500
                        })
                      }
                    }else{
                      this.$message({
                        message: "邮编有误，请重填",
                        type: 'warning',
                        duration:'1000'
                      });
                      user.userZip = ''
                    }
                  }else{
                    this.$message({
                      message: "QQ有误，请重填",
                      type: 'warning',
                      duration:'1000'
                    });
                    user.userQq = ''
                  }
                }else{
                  this.$message({
                    message: "身份证号有误，请重填",
                    type: 'warning',
                    duration:'1000'
                  });
                  user.userIdNo = ''
                }
              }else{
                this.$message({
                  message: "邮箱有误，请重填",
                  type: 'warning',
                  duration:'1000'
                });
                user.userEmail = ''
              }
            }else{
              this.$message({
                message: "账号有误，请重填",
                type: 'warning',
                duration:'1000'
              });
              user.userAccount = ''
            }
          }else{
            this.$message({
              message: "手机号码有误，请重填",
              type: 'warning',
              duration:'1000'
            });
            user.userMobile = ''
          }
        }else{
          this.$message({
            message: '请输入完整信息',
            type: 'warning',
            duration:'1000'
          });
        }
      },
      /*复核通过*/
      async pass(){
        console.log(store.get('checklistid'))
        var result = await UPDATERECORD((store.get('checklistid')),1)

        if(result.status == 200){
          this.$message({
            type:'success',
            message:'复核通过成功',
            duration:1500
          })
          this.$router.replace('/home/checklists')
        }else{
          this.$message({
            type:'error',
            message:'复核通过失败，请重试',
            duration:1500
          })
        }
      }
    }
  }
</script>

<style >
  .complete{
    background-color: white;
    min-width: 1400px;
  }
  /*面包屑*/
  .complete .my_complete_nav{
    width: 95%;
    margin:30px auto;
    color: #2aabd2;
  }
  /*表单*/
  .complete .my_complete_form_div{
    width: 95%;
    margin: auto;
    margin-top: 10px;
    background-color: rgb(207,233,244);
    border: 1px solid rgb(160,184,216);
    border-radius: 4px;
  }
  .complete .my_complete_form:after, .complete .my_complete_form:before{
    display: table;
    content: '';
    clear: both;
  }
  .my_one .my_one_left:after,.my_one .my_one_left:before{
    display: table;
    content: '';
    clear: both;
  }
  .my_one:before, .my_one:after{
    display: table;
    content: '';
    clear: both;
  }
  .my_two:before, .my_two:after{
    display: table;
    content: '';
    clear: both;
  }
  .my_three:before, .my_three:after{
    display: table;
    content: '';
    clear: both;
  }
  .complete .my_complete_form{
    margin: 4px;
    background-color: rgb(242,246,251);
  }
  .my_one{
    border: 0.5px solid rgb(193,199,209);
  }
  .my_two,my_three{
    border: 0.5px solid rgb(193,199,209);
    border-top: 0;
  }
  .my_one .my_one_right{
    width: 25%;
    height: 300px;
    float: left;
  }
  .my_one .my_one_left{
    width: 75%;
    float: left;
  }
  .complete .my_complete_form .my_one .ge{
    display: inline-block;
    width: 33.2%;
    height: 60px;
    margin: 0;
    float: left;
    border: 0.25px solid rgb(193,199,209);
  }
  .complete .my_complete_form .my_two .ge{
    display: inline-block;
    width: 24.9%;
    height: 60px;
    margin: 0;
    float: left;
    border: 0.25px solid rgb(193,199,209);
  }
  .complete .my_complete_form .my_three .ge{
    display: inline-block;
    width: 49.80%;
    height: 100px;
    margin: 0;
    float: left;
    border: 0.25px solid rgb(193,199,209);
  }
  .complete .my_complete_form .ge .ge_name{
    width: 35%;
    font-size: 15px;
    color: rgb(96,98,102);
    line-height: 60px;
    height: 60px;
    text-align: center;
    float: left;
    display: inline-block;
    border-right: 0.5px solid rgb(193,199,209);
  }
  .complete .my_complete_form .my_three .ge .ge_name{
    width: 35%;
    font-size: 15px;
    color: rgb(96,98,102);
    line-height: 100px;
    height: 100px;
    text-align: center;
    float: left;
    display: inline-block;
    border-right: 0.5px solid rgb(193,199,209);
  }
  .complete .my_complete_form .ge .ge_input{
    width: 64%;
    height: 60px;
    display: inline-block;
  }
</style>
