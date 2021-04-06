const res = sum(10, 20)
console.log(res) //30
//函数声明
function sum(x, y) {
    return x + y
}

const res = sum(10, 20)
console.log(res) //Cannot access 'sum' before initialization
//函数表达式
const sum = function (x, y) {
    return x + y
}

const res = sum(10, 20)
console.log(res) //sum is not a function
//函数表达式
var sum = function (x, y) {
    return x + y
}