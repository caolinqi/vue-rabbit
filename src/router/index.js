// 配置路由
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Layout/index.vue"),
      //默认二级路由直接path为空
      children: [
        { path: "", component: () => import("@/views/Home/index.vue") },
        {
          path: "cetegory/:id",
          component: () => import("@/views/Cetegory/index.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("@/views/Login/index.vue"),
    },
  ],
});

export default router;
