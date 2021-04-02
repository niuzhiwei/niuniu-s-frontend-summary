const obj = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}

/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象 
 */

function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        //obj是null或者不是对象和数组，直接范围
        return obj
    }
    //初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        //保证Key不是原型的属性
        if (obj.hasOwnProperty(key)) {
            //递归调用
            result[key] = deepClone(obj[key])
        }
    }
    //返回结果
    return result
}

const obj2 = deepClone(obj)
obj2.address.city = 'shanghai'
console.log(obj)