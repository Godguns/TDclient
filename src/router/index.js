import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import mine from "../views/Mine.vue";
import Login from "../views/Login.vue";
import Sign from "../views/Sign.vue";
import Public from '../views/Public';
Vue.use(VueRouter);

const routes = [
  {
    path:"/public",
    name:"public",
    component:Public
    
  },
  {
    path:"/sign",
    name:"sign",
    component:Sign
  },
  {
    path:"/login",
    name:"login",
    component:Login
  },
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
