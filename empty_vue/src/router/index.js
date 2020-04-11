import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login/login'
import Register from '../components/Register/register'
import Home from '../components/Home/home'
import UploadRecord from '../components/Home/uploadrecord'
import CheckLists from '../components/Home/checkLists'
import CheckRecord from '../components/Home/checkrecord'
import CheckSalary from '../components/Home/checksalary'
import SelectList from '../components/Home/selectList'
import UpdataComplete from '../components/Home/updataComplete'
import SelectSalarys from '../components/Home/selectSalarys'
import UploadDept from '../components/Home/uploadDept'
import Uploadelse from '../components/Home/uploadelse'
import UploadSalary from '../components/Home/uploadSalary'
import SendSalary from '../components/Home/sendsalary'
import UploadSendSalary from '../components/Home/uploadsendsalary'
import CheckSendSalary from '../components/Home/checksendsalary'
import CheckRecord1 from '../components/Home/checkrecord1'
import SendSalaryDetail from '../components/Home/sendsalarydetail'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'uploadrecord',
          component:UploadRecord
        },
        {
          path:'checklists',
          component:CheckLists
        },
        {
          path:'selectList',
          component:SelectList
        },
        {
          path:'recorddetail',
          component:UpdataComplete
        },
        {
          path:'checkrecord',
          component:CheckRecord
        },
        {
          path:'checkrecord1',
          component:CheckRecord1
        },
        {
          path:'selectSalarys',
          component:SelectSalarys
        },
        {
          path:'uploadDept',
          component:UploadDept
        },
        {
          path:'uploadelse',
          component:Uploadelse
        },
        {
          path:'uploadSalary',
          component:UploadSalary
        },
        {
          path:'checksalary',
          component:CheckSalary
        },
        {
          path:'sendsalary',
          component:SendSalary
        },
        {
          path:'uploadsendsalary',
          component:UploadSendSalary
        },
        {
          path:'checksendsalary',
          component:CheckSendSalary
        },
        {
          path:'sendsalarydetail',
          component:SendSalaryDetail
        },
      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'',
      redirect:'/home'
    }
  ]
})
