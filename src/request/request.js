// request.js
import axios from "axios";

let instance = axios.create({
    baseURL: " http://gz.wolfcode.cn/cms",
    timeout: 5000//相应最长时间为5s
});

// http request 拦截器
instance.interceptors.request.use(
  (config) => {
    // 这里不太懂？
    if (config.url === "/wechatUsers/PCLogin") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    const token = sessionStorage.getItem("token");
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers["x-auth-token"] = token; //请求头加上token
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// http response 拦截器
instance.interceptors.response.use(
  (response) => {
    // 响应数据只返回data
    return response.data;
  },
  //接口错误状态处理，也就是说无响应时的处理
  (error) => {
    return Promise.reject(error.response.status); // 返回接口返回的错误信息
  }
);

export default instance