<template>
  <el-container class="banxin">
    <el-aside class="left">
      <div class="userImg">
        <el-image style="width: 100px; height: 100px;margin:40px 50px 10px 50px" :src="require('@/assets/images/userImg.png')" :fit="fit"></el-image>
        <p>{{username}}</p>
      </div>
      <el-menu :default-active="activeIndex" mode @select="menuSelect" style="background: transparent;">
          <el-menu-item-group>  
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>分组一</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">个人信息管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main class="right">222</el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      username: '世界和平'
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/total.less';
.left{
  display: flex;
  flex-direction: column;
  width: 200px;
height: 740px;
background: #E7E7E7;
  .userImg{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:54px ;
  }
}
</style>