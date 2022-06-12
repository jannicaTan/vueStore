// 导航公共组件
<template>
  <div class="nav">
    <section class="banxin">
      <!-- Nav -->
      <el-menu :default-active="this.$route.path" class="nav-bar" router mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{item.navItem}}</el-menu-item>
      </el-menu>
      <el-input placeholder="请输入内容" v-model="search" class="search" >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      navList:[
            {name:'/home',navItem:'首页'},
            {name:'/goods',navItem:'全部分类'},
            {name:'/personal',navItem:'个人中心'},
            {name:'/order',navItem:'订单管理'},
            {name:'/free',navItem:'专属福利'},
        ],
        search:'default'
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/total.less';
.nav{
  width:100%;
  section{
    height:118px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    ::v-deep .search{
      width:250px
    }
    .el-menu.el-menu--horizontal{
  border: none;
}
  }
}
</style>