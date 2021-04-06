### 手写字符串trim方法，保证浏览器兼容性
```
String.prototype.trim = function(){
    return this.replace(/^\s+/,'').replace(/\s+$/,'')
}
```
### 如何获取多个数字中的最大值
```
function max(){
    const nums = Array.prototype.slice.call(arguments)//变为数组
    let max = 0
    nums.forEach(n=>{
        if(n>max){
            max=n
        }
    })
    return max
}
```

```
Math.max(10,20,30,40)
```

