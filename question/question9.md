### 如何捕获JS程序中的异常？
```
try{
    //todo
}catch(ex){
    console.log(ex)//手动捕获catch
}finally{
    //todo
}
```

```
//自动捕获
window.onerror = function (message,source,lineNom,colNom,error){
    //1.对跨域的js,如CDN的，不会有详细的报错信息
    //2.对于压缩的js,还要配合sourceMap反查到未压缩代码的行、列
}
```

### 获取当前页面url参数
* 传统方式，查找location.search
* 新API，URLSearchParams
* 查看query.js