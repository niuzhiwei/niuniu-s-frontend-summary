const xhr = new XMLHttpRequest()
xhr.open('GET', url, true) //true代码是异步请求
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }
}
xhr.send(null) //如果是post 参数不是null是发送的参数

//promise版本ajax
function ajax(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else if (xhr.status === 404) {
                    reject(new Error('404 not found'))
                }
            }
        }
    })
    xhr.send(null)
    return p
}
const url = 'xxx'
ajax(url).then(res => console.log(res)).catch(err => console.err(err))