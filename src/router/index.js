import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/LoginView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView"),
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/DetailView"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = "开发文档";
  next();
});

export default router;
