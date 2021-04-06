### 字符串 字母开头，后面字母数组下划线，长度6-30
* const reg = /^[a-zA-Z]\w{5,29}$/

```
let a = 100
function test(){
    alert(a) //100
    a=10
    alert(a) //10
}
test()
alert(a) //10
```