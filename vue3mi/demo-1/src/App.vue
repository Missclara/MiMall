<template>
  <div class="app">
    <h1>{{title}}</h1>
    <h2>作者：{{user.name}}</h2>
    <div>{{uname}}</div>
    <router-link to='/list'>ToDoList</router-link>
    <router-view></router-view>
  </div>
 
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'App',
  data(){
    return {
      uname:'Vivi'
    }
  },
  mounted(){
    this.uname="ViviKiki"
  },
  setup(){
    let title=ref('');//ref面向基础类型的

    title.value='欢迎学习vue3.0'
    let user=reactive({//reactive 是面向引用类型的
      name
    })
    user.name='vivi'
    return{
      title,
      user
    }
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
