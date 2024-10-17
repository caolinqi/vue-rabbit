import { createApp } from "vue";

import "./style.css";
//测试接口函数
import { getCategory } from "./apis/testAPI";
import router from "./router";
import App from "./App.vue";

getCategory().then((res) => {
  console.log(res);
});

const app = createApp(App);
app.use(router);
app.mount("#app");
