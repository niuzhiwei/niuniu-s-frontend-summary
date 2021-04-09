const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin')
const {
    srcPath,
    distPath
} = require('./paths')

module.exports = {
    mode: 'development',
    //js执行入口文件
    entry: {
        //把React相关模块放到一个单独的动态链接库
        react: ['react', 'react-dom']
    },
    output: {
        //输出的动态链接库的文件名称，[name]代表当前动态链接库的名称
        //也就是entry中配置的react和polyfill
        filename: '[name].dll.js',
        //输出的文件都放到dist目录下
        path: distPath,
        //存放动态链接库的全局变量名称，例如对应react来说就是_dll_react
        //之所以在前面加上_dll_是为了防止全局变量冲突
        library: '_dll_[name]'
    },
    plugins: [
        //接入DllPlugin
        new DllPlugin({
            //动态链接库的全局变量名称，需要和output.library中保持一致
            //该字段的值也就是输出的manifest.json文件中的name字段的值
            //例如react.manifest.json中就有name:_dll_react
            name: '_dll_[name]',
            path: path.join(distPath, '[name].manifest.json')
        })
    ]
}