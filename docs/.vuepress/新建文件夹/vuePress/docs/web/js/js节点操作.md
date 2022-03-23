# js 节点操作

一般的,节点至少拥有 nodeType(节点类型),nodeName(节点名称)和 nodeValue(节点值)这个三个基本属性

- 元素节点 nodeType 为 1
- 属性节点 nodeType 为 2
- 文本节点 nodeType 为 3 (文本节点包含文字 空格)

```html
<body>
    <div class="box">
        <div class="son">

        </div>
    </div>
    <span>我是span</span></span>
    <ul>
        <li>我是第一个li</li>
        <li>我是一个li</li>
        <li>我是一个li</li>
        <li>我是一个li</li>
        <li>我是最后一个li</li>
    </ul>
</body>
```

```js
let son = document.querySelector(".son");
let box = son.parentNode; //获取son的父节点
let ul = document.querySelector("ul");
let liall = ul.childNodes; //获取ul的子节点
let li = ul.children; //获取ul的元素子节点
let firstliall = ul.firstChild; //获取ul的第一个子节点
let firstli = ul.firstElementChild; //获取ul的第一个元素子节点
let lastallli = ul.lastChild; //获取ul的最后一个子节点
let lastli = ul.lastElementChild; //获取ul的最后一个元素子节点
console.log(son);
console.log(box);
console.log(li);
console.log(firstliall);
console.log(firstli);
console.log(lastallli);
console.log(lastli);

// 实际开发中获取子节点第一个元素节点和最后一个节点的写法
console.log(ul.children[0]);
console.log(ul.children[ul.children.length - 1]);
```
