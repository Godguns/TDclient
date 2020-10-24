import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import mine from "../views/Mine.vue"

Vue.use(VueRouter);

const routes = [
  {
    path:"/mine",
    name:"mine",
    component:mine

  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/fly",
    name: "Fly",
   
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Fly.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
