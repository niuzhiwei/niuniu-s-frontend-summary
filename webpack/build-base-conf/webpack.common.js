const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    srcPath,
    distPath
} = require('./paths')

module.exports = {
    entry: path.join(srcPath, 'index'),
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
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html'
        })
    ]
}