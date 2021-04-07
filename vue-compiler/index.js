const compiler = require('vue-template-compiler')

//插值
// const template = `<p>{{message}}</p>`
// with(this){return _c('p',[_v(_s(message))])}
//_c createElement
//相当于
//const vm = new Vue({...})

//事件
const template = `<button @click="clickHandler">submit</button>`
// with(this){return _c('button',{on:{"click":clickHandler}},[_v("submit")])}

//v-model

// const template = `<input type="text" v-model="name">`

// with(this){return _c('input',{directives:[{name:"model",rawName:"v-model",value:
// (name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(name)},on:{"
// input":function($event){if($event.target.composing)return;name=$event.target.val
// ue}}})}

//编译
const res = compiler.compile(template)
console.log(res.render)