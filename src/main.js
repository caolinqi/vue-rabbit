import { createApp } from "vue";

import "./style.css";
import router from "./router";
import "./styles/common.scss";
import { createPinia } from "pinia";
import { LazyPlugin } from "./directives/lazy";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(LazyPlugin);
app.mount("#app");
