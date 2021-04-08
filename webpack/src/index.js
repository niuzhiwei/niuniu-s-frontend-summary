//引入css
import './style/style1.css'
import './style/style2.less'

import {
    sum
} from './math'

//引入第三方模块
import _ from 'lodash'
console.log(_.each)

const sumRes = sum(10, 20)
console.log(sumRes)

console.log(ENV)

//引入图片
function insertImgElem(imgFile) {
    const img = new Image()
    img.src = imgFile
    document.body.appendChild(img)
}
import imgFile1 from './img/image.jpeg'
insertImgElem(imgFile1)
import imgFile2 from './img/bg.jpg'
insertImgElem(imgFile2)

//引入动态数据-懒加载
setTimeout(() => {
    import('./dynamic-data.js').then(res => {
        console.log(res.default.message)
    })
}, 1500);