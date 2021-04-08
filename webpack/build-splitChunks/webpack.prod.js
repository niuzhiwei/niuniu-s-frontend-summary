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
const {
    srcPath,
    distPath
} = require('./paths')

module.exports = smart(webpackCommonConf, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash:8].js',
        path: distPath
    },
    module: {
        rules: [{
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
    plugins: [
        new CleanWebpackPlugin(), //会默认清空output.path文件夹
        new webpack.DefinePlugin({
            //window.ENV = 'production'
            ENV: JSON.stringify('production')
        }),
        //抽离css文件
        new MiniCssExtractPlugin({
            filename: 'css/main.[contentHash:8].css'
        })
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