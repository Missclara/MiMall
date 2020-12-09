module.exports = {
  lintOnSave: false,
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:"http://mall-pre.springboot.cn",//https://mall-pre.springboot.cn/https://dev-www.imooc.com
        changeOrigin:true,
        pathRewrite:{
          '/api': ''
        }
        
      }
    }
  }
}