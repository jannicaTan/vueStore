import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 清除默认样式
import 'reset-css';
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入验证码
import SlideVerify from 'vue-monoplasty-slide-verify' // 拼图验证码
Vue.use(SlideVerify)

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
