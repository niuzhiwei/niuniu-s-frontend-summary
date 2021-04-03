// //通用的绑定函数
// function bindEvent(element, type, fn) {
//     element.addEventListener(type, fn)
// }

//改版通用的绑定函数
function bindEvent(elem, type, selector, fn) {
    if (fn == null) { //只传了三个参数
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        const target = event.target
        if (selector) {
            //代理绑定
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        } else {
            //普通绑定
            fn.call(target, event)
        }
    })
}

const a = document.getElementById('link1')
bindEvent(a, 'click', e => {
    e.preventDefault() //阻止默认行为
    alert('clicked')
})

//事件冒泡
const body = document.body
bindEvent(body, 'click', event => {
    console.log('body clicked')
    console.log(event.target) //body里面的节点点击都会冒泡到body上
})
const div2 = document.getElementById('div2')
bindEvent(div2, 'click', event => {
    event.stopPropagation() //阻止冒泡
    console.log('div2 clicked')
    console.log(event.target)
})

//普通绑定
const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', function (event) {
    event.preventDefault() //阻止默认行为
    alert(this.innerHTML)
})
//事件代理绑定
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', 'a', function (event) {
    event.preventDefault()
    alert(this.innerHTML)
})