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
        <div class="btn" @click="dialogVisible = true">登录</div>
      </div>
    </section>
    <!-- 登录信息 -->
    <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="handleClose" center>
      <template slot='title'>
        <el-button type="text" class="phone-login" @click="change('showPhoneLogin')">手机登录</el-button>
        <el-button type="text" class="wechat-login" @click="change('showWechatLogin')">微信登录</el-button>
      </template>
      <div v-show="showPhoneLogin">
        <el-input type="tel" v-model="username" placeholder="请输入手机号" clearable style="margin-bottom:20px" />
        <template>
          <slide-verify :l="42" :r="20" :w="362" :h="140" @success="onSuccess" @fail="onFail" @refresh="onRefresh" :style="{ width: '100%' }" class="slide-box" ref="slideBlock" :slider-text="msg"></slide-verify>
        </template>
        <el-input type="text" placeholder="请输入内容" v-model="val" clearable>
          <el-button slot="append">获取验证码</el-button>
        </el-input>
      </div>
      <div v-show="showWechatLogin">
        <p>hahah</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitFn">登录</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      username: null,
      val: '',
      showPhoneLogin: true,//登录方式选择
      showWechatLogin: false,
      msg:'请滑动滑块'
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    // 登录切换:v-show控制
    change(e) {
      if (e == 'showPhoneLogin' && this.showPhoneLogin == false) {
        this.showPhoneLogin = !this.showPhoneLogin
        this.showWechatLogin = !this.showWechatLogin
      }
      if (e == 'showWechatLogin' && this.showWechatLogin == false) {
        this.showPhoneLogin = !this.showPhoneLogin
        this.showWechatLogin = !this.showWechatLogin
      }
    },
    // 拼图成功
    onSuccess(times) {
      let ms = (times / 1000).toFixed(1);
      this.msg = "login success, 耗时 " + ms + "s";
    },
    // 拼图失败
    onFail() {
      this.onRefresh(); // 重新刷新拼图
    },
    // 拼图刷新
    onRefresh() {
      this.msg = "再试一次";
    },
    // 点击登录按钮
    submitFn(formName) {
      if (this.msg == "再试一次" || this.msg == "向右滑动") {
        alert("请滑动拼图");
      } else {
        alert("开始登录");
      }
    },
  }
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
  /deep/.el-dialog {
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: calc(100% - 30px);
    max-width: calc(100% - 30px);
  }
  ::v-deep .el-dialog--center{
    min-width: 400px;
  }
}
/deep/.slide-box {
    margin-bottom: 20px;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    canvas {
        position: absolute;
        left: 0;
        top: -100px;
        display: none;
        width: 100%;
        box-sizing: border-box;
    }
    .slide-verify-block{
        width: 85px;
        height: 136px;
    }
    .slide-verify-refresh-icon {
        top: -140px;
        display: none;
    }
    &:hover {
        canvas {
            display: block;
        }
        .slide-verify-refresh-icon {
            display: block;
        }
    }
}
</style>