const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    //项目的端口号
    port: 8090,
    //主机名称
    host: "localhost",
    // 是否开启https
    https:false,
    //是否自动打开浏览器
    open:true,
  }
})
