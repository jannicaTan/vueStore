// 头部公共组件
<template>
  <div class="header">
    <section class="banxin">
      <h1 class="left">兔子的小店</h1>
      <div class="right">
        <ul>
          <li class='avator'>
            <img src="@/assets/images/userImg.png" alt="关于我" width="26">
            用户名:---
          </li>
          <li>我的钱包:---</li>
          <li>获取金币</li>
          <li>关于作者</li>
        </ul>
        <div class="btn">登录</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
@import '@/total.less';
.header{
  width:100%;
  background: #242B39;
  height:40px;
  color: #fff;
  section{
    height:40px;
    display: flex;
    background: #242B39;
    justify-content:space-between;
    align-items: center;
    .right{
      display: flex;
      align-items: center;
      ul{
        display:flex;
        align-items: center;
        li{
          margin-right: 20px;
          cursor: pointer;//鼠标点击
          &.avator{
            display:flex;
            align-items: center;
          }
        }
      }
      .btn{
        width: 124px;
        height: 40px;
        background: #0A328E;
        text-align: center;//文字水平居中
        line-height: 40px;//文字垂直居中
        cursor: pointer;
      }
    }
  }
}
</style>