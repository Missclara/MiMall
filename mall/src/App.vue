<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// import axios from 'axios'
// import jsonp from 'jsonp'

export default {
  name: 'App',
  components: {

  },
  data(){
      return{
        // age:"30",
        // data:'',
      }
  },
  mounted(){
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
