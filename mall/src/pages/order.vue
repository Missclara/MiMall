<template>
        <div>
           <div style="color:#f00"> order</div>
            <order-header></order-header>
            <router-view></router-view>
            <nav-footer></nav-footer>
        </div>
</template>
<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
export default {
    name:'order',
    components:{
        NavHeader,
        NavFooter
    }
}
</script>