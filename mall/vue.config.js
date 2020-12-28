module.exports = {
  lintOnSave: false,
  devServer:{
    host:'localhost',
    port:8086,
    proxy:{
      '/api':{
        target:"http://mall-pre.springboot.cn",//https://mall-pre.springboot.cn/https://dev-www.imooc.com
        changeOrigin:true,
        pathRewrite:{
          '/api': ''
        }
        
      }
    }
  },
  //lintOnSave:false,//去掉校验
  productionSourceMap:true,
  chainWebpack:((config)=>{
    config.plugins.delete('prefetch')
  })
  
}