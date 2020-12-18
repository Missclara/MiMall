<template>
    <div class="login">
        <div class="container">
            <a href="/#/index">
              <img src="/imgs/login-logo.png" alt="">
            </a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3>
                       <span class="checked">账号登录</span><span class="sep-line">|</span>
                       <span>扫码登录</span>
                    </h3>
                    <div class="input">
                        <input type="text" placeholder="请输入账号" v-model="username"/>
                    </div>
                    <div class="input">
                        <input type="password" placeholder="请输入密码" v-model="password">
                    </div>
                    <div class="btn-box">
                        <a href="javascript:;" class="btn" @click="login">登录</a>
                    </div>
                    <div class="tips">
                        <div class="sms" @click="register">手机短信登录/注册</div>
                        <div class="reg">立即注册<span>|</span>忘记密码？</div>
                    </div>
                </div>
            </div>
        </div>
         <div class="footer">
            <div class="footer-link">
                <a href="">vivi主页</a><span>|</span>
                <a href="https://blog.csdn.net/weixin_38179690/article/details/109387621" target="_black">Vue全栈课程</a><span>|</span>
                <a href="https://blog.csdn.net/weixin_38179690/article/details/109387621" target="_black">React全家桶课程</a><span>|</span>
                <a href="https://blog.csdn.net/weixin_38179690/article/details/109387621" target="_black">微信支付专项课程</a><span>|</span>
                <a href="https://blog.csdn.net/weixin_38179690/article/details/109387621" target="_black">配套课程：Java通用型支付+电商平台双系统实战</a>
            </div>
            <div class="copyright">Copyright ©2020 <span class="domain">mi.futurefe.com</span>  All Rights Reserved.</div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name:'login',
    data(){
        return{
            username:'',
            password:'',
            userId:'',
        }
    },
    methods:{
        login(){
            let {username,password}=this;
            this.axios.post('/user/login',{
                username,
                password,
            }).then((res)=>{
               
            
              this.$cookie.set('userId',res.id,{expires:'Session'});//会话级别是Session,浏览器的页签关掉，他是不会消失的，只有把浏览器全部退出他才是全部退出
                this.saveUserName(res.username);
             //this.$store.dispatch('saveUserName',res.username)
                this.$router.push({
                    name:'index',
                    params:{
                        from:'login'
                    }
                });

              
            })
        },
        ...mapActions(['saveUserName']),
        register(){
              this.axios.post('/user/register',{
                username:'vivi1',
                password:'1234',
                email:'1372459@163.com'
            }).then(()=>{
               this.$message.success('注册成功')
            }) 
        }
    }
   
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
  .login{
      background-color: #fff;
      &>.container{
          height:113px;
          img{
              width: auto;
              height: 100%;
          }
      }
      .wrapper{
          background: url('/imgs/login-bg.jpg') no-repeat center;
          .container{
              height: 576px;

              .login-form{
                  width:410px;
                  height: 510px;
                  padding-left: 31px;
                  padding-right: 31px;
                  background-color:$colorG;
                  position: absolute;
                  bottom:29px;
                  right: 0;
                  box-sizing: border-box;
                h3{
                    line-height: 23px;
                    font-size: 24px;
                    text-align: center;
                    margin:40px auto 49px;
                    .checked{
                        color:$colorA;
                    }
                    .sep-line{
                        margin:0 32px;
                    }
                }
                .input{
                    display: inline-block;
                    width: 348px;
                    height: 50px;
                    border:1px solid $colorH;
                    margin-bottom: 20px;
                    input{
                        width:100%;
                        height:100%;
                        border:none;
                        padding:18px;
                        box-sizing: border-box;
                    }
                }
                .btn{
                    width: 100%;
                    line-height: 50px;
                    margin-top:10px;
                    font-size: $fontI;
                }
                .tips{
                    margin-top:14px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    cursor: pointer;
                    .sms{
                        color:$colorA;
                    }
                    .reg{
                        color:$colorD;
                        span{
                            margin:0 7px;
                        }
                    }
                }
              }
          }
      }
      .footer{
          height: 100px;
          padding-top:60px;
          color:16px;
          background: $colorG;
          text-align: center;
          .footer-link{
              a{
                  color:$colorD;
                  display: inline-block;
              }
              span{
                  margin:0 10px;
              }
          }
      }
  }
</style>