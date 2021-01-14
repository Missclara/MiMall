import {createRouter,createWebHashHistory} from 'vue-router';
import ToDos from './components/todos.vue'
export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/list',
            component:ToDos,
        }
    ]
})