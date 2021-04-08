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
        }]
    },
    plugins: [
        //多入口-生成index.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            //chunks表示该页面要引用哪些chunk(即上面的index和other)
            chunks: ['index', 'vendor', 'common'] //要考虑代码分割
        }),
        //多入口-生成other.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'other.html'),
            filename: 'other.html',
            chunks: ['other', 'common'] //要考虑代码分割
        })
    ]
}