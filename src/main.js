import { createApp } from "vue";

import "./style.css";
//测试接口函数
import { getCategory } from "./apis/testAPI";

import App from "./App.vue";

getCategory().then((res) => {
  console.log(res);
});

createApp(App).mount("#app");
