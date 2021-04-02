### DOM本质
是一棵节点DOM树

### DOM节点操作
* 获取DOM节点
* attribute
* property
  
```
const div1 = document.getElementById('div1') //元素
const divList = document.getElementsByTagName('div') //集合
const containerList = document.getElementsByClassName('.container') //集合
const pList = document.querySelectorAll('p') //集合
```
```
//DOM节点的property
const pList = document.querySelectorAll('p')
const p = pList[0]
console.log(p.style.width) //获取样式
p.style.width = '100px' //修改样式
console.log(p.className) //获取class
p.className = 'p1' //修改class
//获取nodeName和nodeType
console.log(p.nodeName)
console.log(p.nodeType)
```

```
const pList = document.querySelectorAll('p')
const p = pList[0]
p.getAttribute('data-name')
p.setAttribute('data-name','xiaopi')
p.getAttribute('style')
p.setAttribute('style','font-size:30px;')
```
* property:修改对象属性，不会体现到html结构中
* attribute:修改html属性，会改变html结构
* 两者都有可能引起DOM重新渲染
  
### DOM结构操作
* 新增/插入节点
* 获取子元素列表，获取父元素
* 删除子元素

```
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
//新建节点
const newP = document.createElement('p')
newP.innerHTML = 'this is p1'
//插入节点
div1.appendChild(newP)
//移动节点
const p1 = document.getElementById('p1')
div2.appendChild(p1)
//获取父元素
console.log(p1.parentNode)
//获取子元素列表
const div1ChildNodes = div1.childNodes
const div1ChildNodesP = Array.prototype.slice.call(div1.childNodes).filter(child=>{
    if(child.nodeType ===1){
        return true
    }
    return false
})
//删除节点
div1.removeChild(div1ChildNodesP[0])
```
### DOM性能
(dom.js)
* DOM操作非常“昂贵",避免频繁的DOM操作
* 对DOM查询做缓存
* 将频繁操作改为一次性操作