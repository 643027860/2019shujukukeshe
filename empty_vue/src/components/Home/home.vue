<template>
    <div class="Home">
      <div class="mt_nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="height: 71px;padding-top: 10px;padding-left: 2.5%">
          <el-menu-item index="1" class="nav_font" style="width: 150px;text-align: center;">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">档案</template>
            <el-menu-item index="2-1" class="nav_font">上传档案</el-menu-item>
            <el-menu-item index="2-2" class="nav_font">查询档案</el-menu-item>
            <el-menu-item index="2-3" class="nav_font">审核档案</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">薪资标准</template>
            <el-menu-item index="3-1" class="nav_font">上传薪资标准</el-menu-item>
            <el-menu-item index="3-2" class="nav_font">查看薪资标准</el-menu-item>
            <el-menu-item index="3-3" class="nav_font">审核薪资标准</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">薪酬发放</template>
            <el-menu-item index="4-1" class="nav_font">上传薪酬发放单</el-menu-item>
            <el-menu-item index="4-2" class="nav_font">查看薪酬发放单</el-menu-item>
            <el-menu-item index="4-3" class="nav_font">审核薪酬发放单</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">上传基本信息</template>
            <el-menu-item index="5-1" class="nav_font">上传机构</el-menu-item>
            <el-menu-item index="5-2" class="nav_font">上传其他基本信息</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <router-view/>
    </div>
</template>

<script>
  import '../../assets/my_nav_css.css'
  export default {
    data() {
      return {
        activeIndex: '1',
        choice:'1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        if(key!=this.choice){
          if(key == '2-1'){
            this.$router.push('/home/uploadrecord')
            this.choice = key
          }
          if(key == '2-2'){
            this.$router.push('/home/selectList')
            this.choice = key
          }
          if(key == '2-3'){
            this.$router.push('/home/checklists')
            this.choice = key
          }
          if(key == '3-1'){
            this.$router.push('/home/uploadsalary')
            this.choice = key
          }
          if(key == '3-2'){
            this.$router.push('/home/selectsalarys')
            this.choice = key
          }
          if(key == '3-3'){
            this.$router.push('/home/checksalary')
            this.choice = key
          }
          if(key == '4-1'){
            this.$router.push('/home/uploadsendsalary')
            this.choice = key
          }
          if(key == '4-2'){
            this.$router.push('/home/sendsalary')
            this.choice = key
          }
          if(key == '4-3'){
            this.$router.push('/home/checksendsalary')
            this.choice = key
          }
          if(key == '5-1'){
            this.$router.push('/home/uploaddept')
            this.choice = key
          }
          if(key == '5-2'){
            this.$router.push('/home/uploadelse')
            this.choice = key
          }
        }
      }
    }
  }
</script>

<style>
  html,body{
    height: 100%;
    padding: 0;
    margin: 0;

  }
  /*不可选中*/
  .Home .mt_nav span{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .Home{
    height: 100%;
    min-width: 1400px;
  }
  /*导航栏*/
  .Home .mt_nav{
    width: 100%;
    height: 80px;
    background-color: white;
    border-bottom: 2px solid rgb(199,222,253);
    margin-bottom: 10px;
  }
  .nav_font{
    font-size: 18px;
  }
  .Home .mt_nav span{
    display: inline-block;
    height: 80px;
    line-height: 70px;
    padding-left: 2.5%;
    font-size: 25px;
    color: black;
  }
</style>
