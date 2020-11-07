import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'lib-flexible/flexible.js';
import axios from 'axios';
Vue.config.productionTip = false;
import Vant from 'vant';
import 'vant/lib/index.css';
axios.defaults.baseURL='http://localhost:4001';
Vue.prototype.$axios = axios;  
import {Message, Icon,Upload } from 'element-ui';
Vue.prototype.$message = Message;
Vue.use(Upload);
Vue.use(Icon);
Vue.use(Vant);
router.beforeEach((to,form,next) =>{
  //如果进入到的路由是登录页或者注册页面，则正常展示
  if(to.path == '/login' || to.path == '/sign' ){     
      next();
  }else if( !(sessionStorage.getItem('token')) ){
      alert("还没有登录，请先登录！");
      next('/login');     //转入login登录页面，登录成功后会将token存入localStorage
  }else{
      next();
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
