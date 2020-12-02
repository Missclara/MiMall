import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'//每个页面都有导入axios，把axios挂载到每个页面上，用vue-axios可以用this直接访问
import App from './App.vue'
//import env from './env'

//根据前端的跨域方式做调整 /a/b: /api/a/b=>/a/b
//axios.defaults.baseURL='http://test-www.imooc.com/api';
axios.defaults.timeout=8000;
//根据环境变量获取不同的请求地址
//axios.defaults.baseURL=env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
   let res= response.data;
   if(res.status==0){
     return res.data;
   }else if(res.status==10){//没有登陆的时候，一般定义为1008 核心系统一般1001开始  业务系统一般是2001开始  
     window.location.href='/#/login';
   }else{
     alert(res.msg);
   }
})


Vue.use(VueAxios,axios)
Vue.config.productionTip = false//生产环境的提示


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
