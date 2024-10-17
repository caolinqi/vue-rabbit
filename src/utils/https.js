//axios基础封装
import axios from "axios";
// 配置接口基地址(axios.create可以执行多次，用来配置不同基地址)
const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000, //接口超时时间
});

// axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => Promise.reject(e)
);

export default httpInstance;
