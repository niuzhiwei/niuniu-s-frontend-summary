//创建响应式
function reactive(target = {}) {
    if (typeof target !== 'object' || target == null) {
        //不是对象或数组，则返回
        return target
    }
    //代理配置
    const proxyConf = {
        get(target, key, receiver) {
            //只处理本身（非原型的）属性
            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key)) {
                console.log('get', key) //监听
            }
            const result = Reflect.get(target, key, receiver)
            console.log(result)
            //深度监听
            return reactive(result)
        },
        set(target, key, val, receiver) {
            //判断前后数据，不重复修改数据
            const oldVal = target[key]
            if (val === oldVal) {
                return true
            }
            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key)) {
                console.log('已有的key')
            } else {
                console.log('新增的key')
            }
            const result = Reflect.set(target, key, val, receiver)
            console.log('set', key, val)
            return result
        },
        deleteProperty(target, key) {
            const result = Reflect.deleteProperty(target, key)
            console.log('delete property', key)
            return result
        }
    }

    //生成代理对象
    const observed = new Proxy(target, proxyConf)
    return observed
}
const data = {
    name: 'zhangsan',
    age: 20,
    info: {
        city: 'diqiu'
    }
}

const proxyData = reactive(data)