const Timestamp = new Date().getTime();
module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "./",
  // chainWebpack: config => {
  //   // 移除 prefetch 插件
  //   config.plugins.delete("prefetch");

  //   // 或者
  //   // 修改它的选项：
  //   // config.plugin("prefetch").tap(options => {
  //   //   options[0].fileBlacklist = options[0].fileBlacklist || [];
  //   //   options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/);
  //   //   return options;
  //   // });
  // }
  configureWebpack: {
    // webpack 配置
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
    }
  }
};
