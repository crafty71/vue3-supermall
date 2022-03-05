module.exports = {
  plugins: {
    autoprefixer: {},
    // flexible配置
    'postcss-pxtorem': {
      rootValue: 127, // 设计稿宽度的1/10
      propList: ['*'] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
    }
  }
}
