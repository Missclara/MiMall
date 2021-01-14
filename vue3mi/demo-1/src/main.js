import { createApp } from 'vue'
import App from './App.vue'
import AntD from 'ant-design-vue'
import  'ant-design-vue/dist/antd.css'
import router from './router.js'


const app=createApp(App);
app.use(AntD).use(router).mount('#app')
