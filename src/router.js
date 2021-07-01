import VueRouter from "vue-router";
import Home from "./views/TasgivingHome";

export default new VueRouter({
  mode: "hash",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/history",
      name: "history",
      component: () => import(/* webpackChunkName: "about" */ "./views/History")
    }
  ]
});
