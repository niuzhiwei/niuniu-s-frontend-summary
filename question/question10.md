### 将url参数解析为js对象
```
function queryToObj(){
    const res = {}
    const search = location.search.substr(1) // 去掉前面的'?'
    search.split('&').forEach(paramStr=>{
        const arr = paramStr.split('=')
        const key = arr[0]
        const val = arr[1]
        res[key] = val
    })
    return res
}
```

```
//使用URLSearchParams
function queryToObj(){
    const res = {}
    const pList = new URLSearchParams(location.search)
    pList.forEach((val,key)=>{
        res[key] = val
    })
    return res
}
```
### 手写数组flatern,考虑多层级
* 查看flat.js
### 数组去重
* 传统方式，遍历元素挨个比较、去重
* 使用Set
查看unqiue.js
