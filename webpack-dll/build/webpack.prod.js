const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common')
const {
    smart
} = require('webpack-merge')
const {
    srcPath,
    distPath
} = require('./paths')

module.exports = smart(webpackCommonConf, {
    mode: "production",
    output: {
        filename: 'bundle.[contentHash:8].js',
        path: distPath
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        })
    ]
})