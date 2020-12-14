import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'//每个页面都有导入axios，把axios挂载到每个页面上，用vue-axios可以用this直接访问
import VueLazyload from 'vue-lazyload'//实现图片懒加载
import VueCookie from "vue-cookie"
import store from './store';
import App from './App.vue'

//import env from './env'
import './assets/scss/base.scss';
import './assets/scss/mixin.scss';
import './assets/scss/config.scss';
//moc开关
const mock=false;
if(mock){
 //
  require('./mock/api');//用improt是预编译加载的，require是从上到下加载编译的
}

//根据前端的跨域方式做调整 /a/b: /api/a/b=>/a/b https://www.easy-mock.com/mock/5fbf59dc1bc0682deacc018d/example
axios.defaults.baseURL='/api';
// axios.defaults.baseURL='https://www.easy-mock.com/mock/5fbf59dc1bc0682deacc018d/example';
axios.defaults.timeout=8000;
//根据环境变量获取不同的请求地址
//axios.defaults.baseURL=env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
   let res= response.data;
   let path=location.hash;
   if(res.status==0){
     return res.data;
   }else if(res.status==10){//没有登陆的时候，一般定义为1008 核心系统一般1001开始  业务系统一般是2001开始  
    if(path !='#/index'){
      window.location.href='/#/login';
    }
    
   }else{

     alert(res.msg);
     return Promise.reject(res);
   }
})


Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false//生产环境的提示
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
