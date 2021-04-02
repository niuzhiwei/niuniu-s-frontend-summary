const url = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.sinaimg.cn%2FIT%2F2010%2F0419%2F201041993511.jpg&refer=http%3A%2F%2Fi1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619940319&t=9a985510e398f1574f7c1ee74a16c3c6'
const ulr1 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F035%2F063%2F726%2F3ea4031f045945e1843ae5156749d64c.jpg&refer=http%3A%2F%2Fyouimg1.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619940879&t=c3495efeb31469c96af1911e00eacbe0'

function loadImg(src) {
    const p = new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject(new Error('图片加载失败'))
        }
        img.src = src
    })
    return p
}

loadImg(url).then(img => {
    console.log(img.width)
    return img
}).then(img => {
    console.log(img.height)
}).catch(err => console.log(err))

//一张一张加载图片
loadImg(url).then(img => {
    console.log(img.width)
    return img
}).then(img => {
    console.log(img.height)
    return loadImg(ulr1)
}).then(img => {
    console.log(img.width)
    return img
}).then(img => {
    console.log(img.height)
})