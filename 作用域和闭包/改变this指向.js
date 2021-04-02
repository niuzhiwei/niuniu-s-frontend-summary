//apply,call,bind都是为了改变函数运行时上下文（this指向）而存在的
//三兄弟的区别
//三兄弟接收的第一个参数都是要绑定的this指向
//apply的第二个参数是一个参数数组，call和bind的第二个及之后的参数作为函数实参按顺序传入
//bind不会立即调用，其他两个会立即调用

//手写实现call
Function.prototype.call2 = function (context, ...args) {
    context = context || window
    //防止覆盖掉原有属性
    const key = Symbol()
    //这里的this为需要执行的方法
    context[key] = this
    //方法执行
    const result = context[key](...args)
    delete context[key]
    return result
}

Function.prototype.apply2 = function (context, args) {
    context = context || window
    //防止覆盖掉原有属性
    const key = Symbol()
    //这里的this为要执行的方法
    context[key] = this
    //方法执行
    const result = context[key](...args)
    delete context[key]
    return result
}