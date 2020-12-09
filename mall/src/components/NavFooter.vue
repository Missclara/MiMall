<template>
        <div class="footer">
            <div class="footer-logo">
                <img src="/imgs/logo-footer.png" alt="">
                <p>小米商城</p>
            </div>
            <div class="footer-link">
                <a href="">vivi主页</a><span>|</span>
                <a href="https://blog.csdn.net/weixin_38179690/article/details/109387621" target="_black">Vue全栈课程</a><span>|</span>
                <a href="https://blog.csdn.net/weixin_38179690/article/details/109387621" target="_black">React全家桶课程</a><span>|</span>
                <a href="https://blog.csdn.net/weixin_38179690/article/details/109387621" target="_black">微信支付专项课程</a><span>|</span>
                <a href="https://blog.csdn.net/weixin_38179690/article/details/109387621" target="_black">配套课程：Java通用型支付+电商平台双系统实战</a>
            </div>
            <div class="copyright">Copyright ©2020 <span class="domain">mi.futurefe.com</span>  All Rights Reserved.</div>
        </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.footer{
    height: 234px;
    border-top:4px solid $colorA;
    background: $colorB;
    color:$colorD;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top:46px;
        margin-bottom: 31px;
        img{
            width:53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        a{
           color:$colorD;  
           display:inline-block;

        }
        span{
            margin:0 10px;
        }
         margin-bottom:13px; 
    }
    .copyright{
     .domain{
         color:$colorA;
     }
    }


}
</style>