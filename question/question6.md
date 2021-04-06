### 函数声明和函数表达式的区别
* 函数声明function fn){...}
* 函数表达式 const fn = function(){...}
* 函数声明会在代码执行前预加载，而函数表达式不会
查看fn.js
### new Object() 和 Object.create()的区别
* {}等同于new Object(),原型Object.prototype
* Object.create(null)没有原型
* Object.create({...})可指定原型
查看object.js

