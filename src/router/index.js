import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },

  {
    path: "/topic/:tab",
    component: () => import("../views/UserPage.vue"),
    // name:"UserPage",
    // component: UserPage,
  },
  {
    path: "/unmessage",
    component: () => import("../views/unmessage.vue"),
  },

  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  mode: "hash",
});

export default router;
