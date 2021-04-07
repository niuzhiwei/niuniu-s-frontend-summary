### v-show和v-if的区别
* v-show通过CSS display控制显示和隐藏
* v-if组件真正的渲染和销毁，而不是显示和隐藏
* 频繁切换显示状态用v-show，否则用v-if

### 为何在v-for中用key
* 必须用key,且不能是index和random
* diff算法中通过tag和key来判断，是否是sameNode
* 减少渲染次数，提升渲染性能
  
### Vue组件如何通讯
* 父子组件props和this.$emit
* 自定义事件event.$on   event.$off  event.$emit
* vuex

### 双向数据绑定v-model的实现原理
* input元素的value = this.name
* 绑定input事件this.name = $event.taregt.value
* data更新触发re-render

### computed有何特点
* 缓存，data不变不会重新计算
* 提高性能
  
### 为何组件data必须是一个函数？
* 组件其实是class，组件的使用是实例化，使用函数不会互相影响
  
### ajax请求应该放在哪个声明周期
* mounted
* js是单线程的，ajax异步获取数据
  
### 如何将组件所有props传递给子组件
* $props
* <User v-bind='$props' />
  
### 多个组件有相同的逻辑，如何抽离？
* mixin
  
### 何时要使用异步组件
* 加载大组件
* 路由异步加载
  
### 何时需要使用keep-alice
* 缓存组件，不需要重复渲染
* 如多个静态tab页的切换
* 优化性能

### 何时需要使用beforeDestory
* 解绑自定义事件event.$off
* 清除定时器
* 解绑自定义的DOM事件，如window scroll等

### Vuex中action和mutation有何区别
* action中处理异步，nutation不可以
* mutation做原子处理
* action可以整合多个mutaion

### 请用vnode描述一个DOM结构
```
<div id="div1" class="container">
<p>vdom</p>
<ul style="font-size:20px">
<li>a</li>
</ul>
</div>
```

```
{
    tag:'div',
    props:{
        className:'container',
        id:'div1'
    },
    children:[
        {
            tag:'p',
            children:'vdom'
        },
        {
            tag:'ul',
            props:{style:'font-size:20px'},
            children:[
                {
                    tag:'li',
                    children:'a'
                }
            ]
        }
    ]
}
```
### Vue如何监听数组变化
* Object.defineProperty不能监听数组变化
* 重新定义原型，重写push pop等方法，实现监听

### 请描述响应式原理
* 监听data变化
* 组件渲染和更新的流程

### diff算法的时间复杂度
* o(n)
* 在o(n^3)基础上做了一些调整

### 简述diff算法过程
* patch(elem,vnode) 和 patch(vnode,newVnode)
* patchVnode和addVnodes和removeVnodes
* updateChildren(key的重要性)

### Vue为何是异步渲染，$nextTick何用
* 异步渲染（以及合并data修改），以提高渲染性能
* $nextTick在DOM更新完之后，触发回调
  
### Vue场景性能优化
* 合理使用v-show v-if
* 合理使用computed
* v-for加key,避免和v-if同时使用
* 自定义事件，DOM事件及时销毁
* 合理使用异步组件
* 合理使用keep-alive
* data层级不要太深
* 使用vue-loader在开发环境做模板编译
* webpack层面的优化
* 前端通用的性能优化，如图片懒加载
* 使用SSR