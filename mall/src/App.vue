<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// import axios from 'axios'
// import jsonp from 'jsonp'
import storage from './storage'
export default {
  name: 'App',
  components: {

  },
  data(){
      return{
        res:{}
        // age:"30",
        // data:'',
      }
  },
  mounted(){
    //本地加载请求静态JSON静态文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res=res;
    // })

    this.axios.get('/mock/user/login.json').then((res)=>{
      this.res=res;
    })
  //  storage.setItem('a',1);
   //storage.setItem('user',{a:1});
   // storage.setItem('abc',{a:1},'user');
   storage.clear('a',"user")
   // var url="https://www.easy-mock.com/mock/5b012c1fe6e1035843cd3aff/mockapi/table/list"
   // var url= "/api/activity/servicetime"
    // axios.get(url).then(()=>{

    // })
    // jsonp(url,(err,res)=>{
    //   let result=res;
    //   this.data=result;
    // })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
