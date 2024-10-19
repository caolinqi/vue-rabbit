import { createApp } from "vue";

import "./style.css";
import router from "./router";
import "./styles/common.scss";
import { createPinia } from "pinia";
import App from "./App.vue";
import { useIntersectionObserver } from "@vueuse/core";
const app = createApp(App);
app.use(router);
app.use(createPinia());

// 使 v-img-lazy图片懒加载 在所有组件中都可用
app.directive("img-lazy", {
  /**
   * 当指令绑定的元素被插入到DOM中时，执行初始化操作
   * @param {Element} el - 指令绑定的元素
   * @param {Object} binding - 指令的绑定对象，包含指令的参数
   */
  mounted(el, binding) {
    // 使用交集观察者API来监听元素是否可见
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      // 当元素可见时
      if (isIntersecting) {
        // 更新元素的src属性为指令的参数值
        el.src = binding.value;
      }
    });
  },
});
app.mount("#app");
