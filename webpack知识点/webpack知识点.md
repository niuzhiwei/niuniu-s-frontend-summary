### module chunk bundle区别
* module-各个源码文件，webpack中一切皆模块
* chunk-多模块合并成的，如 entry import() splitChunk
* bundle-最终的输出文件
  
### webpack性能优化-构建速度
* 优化babel-loader(缓存，排查范围)
* IgnorePlugin
* noParse
* happyPack
* ParallelUglifyPlugin
* 自动刷新(不用于生产)
* 热更新(不用于生产)
* DllPlugin（没必要用于生产）

### happyPach多进程打包
* JS单线程，开启多进程打包
* 提高构建速度（特别是多核CPU）

### ParallelUglifyPlugin多进程压缩JS
* webpack内置Uglify工具压缩js
* JS单线程，开启多进程压缩更快
* 和happypack同理

### 关于开启多进程
* 项目较大，打包较慢，开启多进程能提高速度
* 项目较小，打包很快，开启多进程会降低速度（进程开销）
* 按需使用
  
### DllPlugin动态链接库插件
* 前端框架如Vue react,体积大，构建慢
* 较稳定，不常升级版本
* 同一个版本只构建一次即可，不用每次都重新构建
* webpack已内置DllPlugin支持
* DllPlugin-打包出dll文件
* DllReferencePlugin-使用dll文件

### webpack性能优化-产出代码
* 体积更小
* 合理分包，不重复加载
* 速度更快，内存使用更少
* 小图片base64编码
* bundle加hash
* 懒加载
* 提取公共代码
* IngorePlugin
* 使用CDN加速
* 使用production
* Scope Hosting

### 使用production
* 自动开启代码压缩
* Vue React等会自动删掉调试代码（如开发环境的warning)
* 启动Tree-Shaking(必须用es6 module才能让tree-shaking生效，commonjs不行)

### es6 Module和Commonjs区别
* ES6 module静态引入，编译时引入
* commonjs动态引入，执行时引入
* 只有es6 module才能静态分析，实现tree-shaking

### Scope Hosting
* 代码体积更小
* 创建函数作用域更少
* 代码可读性更好
  
### 前端为何要进行打包和构建？
* 体积更小（Tree-shaking、压缩、合并）,加载更快
* 编译高级语言或语法（TS，es6+,模块化，scss)
* 兼容性和错误检查（polyfill、postcss、eslint)
* 统一、高效的开发环境
* 统一的构建流程和产出标准

### loader和plugin的区别
* loader模块转换器，如less->css
* plugin扩展插件，如htmlwebpackplugin

### 常见的loader和plugin有哪些
[loader](https://www.webpackjs.com/loaders/)
[plugin](https://www.webpackjs.com/plugins/)

### babel和webpack的区别
* babel-js新语法编译工具，不关心模块化
* webpack-打包构建工具，是多个loader plugin集合

