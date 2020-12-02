module.exports = {
  lintOnSave: false,
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:"https://dev-www.imooc.com",
        changeOrigin:true,
        pathRewrite:{
          '/api': ''
        }
        
      }
    }
  }
}