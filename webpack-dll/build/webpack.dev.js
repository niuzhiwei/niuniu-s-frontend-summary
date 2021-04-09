const path = require('path')
const webpack = require('webpack')
const {
    smart
} = require('webpack-merge')
const webpackCommonConf = require('./webpack.common')
const {
    srcPath,
    distPath
} = require('./paths')

//第一，引入DllReferencePlugin
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')

module.exports = smart(webpackCommonConf, {
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            loader: ['babel-loader'],
            include: srcPath,
            exclude: /node_modules/, //第二不需要转换node_modules
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development')
        }),
        //第三，告诉webpack使用了哪些动态链接库
        new DllReferencePlugin({
            //描述react动态链接库的文件内容
            manifest: require(path.join(distPath, 'react.manifest.json'))
        })
    ],
    devServer: {
        port: 8080,
        progress: true,
        contentBase: distPath,
        compress: true,
        //设置代理
        proxy: {
            //将本地/api/xxx代理到localhost:3000/api/xxx
            '/api': 'http://localhost:3000',
            //将本地/api2/xxx代理到localhost:3000/xxx
            '/api2': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '/api2': ''
                }
            }
        }
    }
})