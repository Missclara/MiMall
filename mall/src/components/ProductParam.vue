<template>
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                {{title}}
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name='buy'></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-bar',
    props:{
        title:String
    },
    data(){
        return{
            isFixed:false,
        }
    },
    mounted(){
        window.addEventListener('scroll',this.initHeight)//移出事件的时候使用到，如果使用function在组件销毁的时候事件是不会被移除的
    },
    methods:{
        initHeight(){
            //先计算高度头部高度
            let scrollTop=window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop;
           this.isFixed= scrollTop>152?true :false;
        }
    },
    destoryed(){//销毁
         window.removeEventListener('scroll',this.initHeight,false)//销毁事件，方法必须抽取出来，不能直接使用function，例如window.removeEventListener('scroll',function(),第三参数是事件行为的处理方式，true是捕获，false是冒泡
    }
}
</script>
<style lang="scss" >
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
 .nav-bar{
     height: 70px;
     line-height: 70px;
     border-top:1px solid $colorH;
     background-color: $colorG;
     z-index: 10;
    
     &.is_fixed{
         position: fixed;
         top:0;
         width: 100%;
          box-shadow: 0 5px 5px $colorE;
     }
     .container{
         @include flex();
         .pro-title{
             font-size:$fontH ;
             color: $colorB;
             font-weight: bold;
         }
         .pro-param{
             font-size: $fontJ;
            span{
                margin:0 10px;
            }
             a{
               color:$colorC;
              
             }
             
         }
     }
 }
</style>