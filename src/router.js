import VueRouter from "vue-router";
import Home from "./views/TasgivingHome";
import MissingPage from "./views/404";

export default new VueRouter({
  mode: "history",
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
    },
    {
      path: "*",
      name: "404",
      component: MissingPage
    }
  ]
});
