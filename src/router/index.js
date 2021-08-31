import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
    },
    {
        path: "/Team",
        component: () => import("@/views/Team"),
    },
    {
        path: "/Timeline",
        component: () => import("@/views/Timeline"),
    },
    {
        path: "/Documents",
        component: () => import("@/views/Documents"),
    },
    {
        path: "/Pictures",
        component: () => import("@/views/Pictures"),
    },
  ]
});