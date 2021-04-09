const path = require('path')
const webpack = require('webpack')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common')
const {
    smart
} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HappyPack = require('happypack')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')
const {
    srcPath,
    distPath
} = require('./paths');

module.exports = smart(webpackCommonConf, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash:8].js',
        path: distPath
    },
    module: {
        rules: [{
                test: /\.js$/,
                //把对.js文件的处理转交给id为babel的happypack实例
                use: ['happypack/loader?id=babel'],
                include: srcPath
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        //小于5Kb的图片用base64格式产出
                        limit: 5 * 1024,
                        //打包到img目录下
                        outputPath: '/img1/'
                    }
                }
            },
            //抽离css
            {
                test: /\.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            //抽离less->css
            {
                test: /\.less$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        //针对npm中的第三方模块优先采用jsnext:main中指向的es6模块化语法的文件
        mainFields: ['jsnext:main', 'browser', 'main']
    },
    plugins: [
        new CleanWebpackPlugin(), //会默认清空output.path文件夹
        new webpack.DefinePlugin({
            //window.ENV = 'production'
            ENV: JSON.stringify('production')
        }),
        //抽离css文件
        new MiniCssExtractPlugin({
            filename: 'css/main.[contentHash:8].css'
        }),
        //忽略moment下的/locale目录
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),
        //happyPack开启多进程打包
        new HappyPack({
            //用唯一的标识符id来代表当前的happy是用来处理一类特定的文件
            id: 'babel',
            //如何处理.js文件，用法和loader配置中一样
            loaders: ['babel-loader?cacheDirectory']
        }),
        //使用ParallelUglifyPlugin并行压缩输出js代码
        //传递给UglifyJS的参数
        //还是使用UglifyJS压缩，只不过帮助开启了多进程
        new ParallelUglifyPlugin({
            uglifyJS: {
                output: {
                    beautify: false, //最紧凑的输出
                    comments: false //删除所有的注释
                },
                compress: {
                    //删除所有的console语句，可以兼容ie浏览器
                    drop_console: true,
                    //内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    //提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true
                }
            }
        }),
        //开启Scope hosting
        new ModuleConcatenationPlugin()
    ],
    optimization: {
        //压缩css
        minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
        //分隔代码块
        splitChunks: {
            chunks: 'all',
            /**
             * initial入口chunk,对于异步导入的文件不处理
             * async 异步chunk，只对异步导入的文件处理
             * all 全部chunk
             */

            //缓存分组
            cacheGroups: {
                //第三方模块
                vendor: {
                    name: 'vendor', //chunk名称
                    priority: 1, //权限更高，优先抽离，重要！
                    test: /node_modules/,
                    minSize: 0, //大小限制
                    minChunks: 1 //最少复用过几次
                },
                //公共的模块
                common: {
                    name: 'common', //chunk名称
                    priority: 0, //优先级
                    minSize: 0, //公共模块的大小限制
                    minChunks: 2 // 公共模块最少复用过几次
                }
            }
        }
    }
})