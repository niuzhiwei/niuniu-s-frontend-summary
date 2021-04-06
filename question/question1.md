### var let const 的区别
* var是ES5语法，let const是ES6语法，var有变量提升
* var和let是变量，可修改;const是常量，不可修改
* let const有块级作用域，var没有
  
### typeof能判断哪些类型
* undefined string number boolean symbol
* object (typeof null === 'object')
* function
  
### 列举强制类型转换和隐式类型转换
* 强制：parseInt parseFloat toString 等
* 隐式：if、逻辑运算、==、+拼接字符串