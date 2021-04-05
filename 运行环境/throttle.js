const div1 = document.getElementById('div1')

//节流
function throttle(fn, delay = 500) {
    let timer = null
    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay);
    }
}
div1.addEventListener('drag', throttle(function (e) {
    console.log(e.offsetX, e.offsetY)
}), 100)