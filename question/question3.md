### 数组slice和splice的区别
* 功能区别(slice-切片，splice-剪接)
查看array-api.js

### [10,20,30].map(parseInt)返回结果是什么？
* [10, NaN, NaN]
* [10,20,30].map((num,index)=>parseInt(num,index))
* parseInt两个参数要转换的字符，进制
* map三个参数，item,index,arr

### ajax请求get和post的区别
* get一般用于查询操作，post一般用于提交操作
* get参数拼接在url上，post放在请求体内（数据体积可更大)
* 安全性：post易于防止CSRF