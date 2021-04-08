const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    srcPath,
    distPath
} = require('./paths')

module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
        other: path.join(srcPath, 'other.js')
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: ['babel-loader'],
            include: srcPath,
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            //loader执行顺序是：从后往前
            //postcss 兼容性
            loader: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.less$/,
            loader: ['style-loader', 'css-loader', 'less-loader']
        }]
    },
    plugins: [
        //多入口-生成index.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            //chunks表示该页面要引用哪些chunk(即上面的index和other)
            chunks: ['index'] //只引用index.js
        }),
        //多入口-生成other.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'other.html'),
            filename: 'other.html',
            chunks: ['other'] //只引用other.js
        })
    ]
}