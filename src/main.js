import { createApp } from "vue";

import "./style.css";
import router from "./router";
import "./styles/common.scss";
import App from "./App.vue";
//测试接口函数
// import { getCategory } from "./apis/testAPI";

// getCategory().then((res) => {
//   console.log(res);
// });
const app = createApp(App);
app.use(router);
app.mount("#app");
