### XMLHttpRequest
#### xhr.readyState
* 0-未初始化，还没有调用send()方法
* 1-载入，已调用send()方法，正在发送请求
* 2-载入完成，send()方法执行完成，已经接收到全部响应内容
* 3-交互，正在解析相应完成
* 4-完成，响应内容解析完成，可以在客户端使用

#### xhr.status
* 2xx-表示成功处理请求，如200
* 3xx-需要重定向，浏览器直接跳转，如301永久重定向 302临时重定向 304资源未改变
* 4xx-客户端请求错误，如404 403没有权限
* 5xx-服务器端错误
  
### 跨域
#### 什么是跨域（同源策略）
* ajax请求时，浏览器要求当前网页和server必须同源（安全）
* 同源：协议、域名、端口，三者必须一致

#### 加载图片css,js可无视同源策略
* <img src=跨域的图片地址/>
* <link href=跨域的css地址 />
* <scrpit src=跨域的js地址></script>
* <img />可用于统计打点，可使用第三方统计服务
* <link/> <script/> 可使用CDN，CDN一般都是外域
* <script> 可实现jsonp

### 手写一个简易的ajax
看ajax.js

### 跨域
* 所有的跨域，都必须经过server端允许和配合
* 未经server端允许就实现跨域，说明浏览器有漏洞，危险信号

#### JSONP
* <script>可绕过跨域
* 服务器可以任意动态拼接数据返回
* 所以，<script>就可以获得跨域的数据，只要服务端愿意返回

#### CORS-服务器设置http header
