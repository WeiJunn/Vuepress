# vue 语法糖

## v-model 原理 也可以说是语法糖吧

```vue
<input type="text" v-model="name" >
  //两段代码的效果是一样的
<input type="text"
 v-bind:value="name"
 v-on:input="name=$event.target.value">
```

每当输入框的内容有变化时候触发 v-on：input 事件 name=value

## v-bind 语法糖

v-bind 用来添加动态属性的，常见的 src、href、class、style、title 等属性都可以通过 v-bind 添加动态属性值。

v-bind 的语法糖很简单，就是去掉 v-bind 留下感叹号

```vue
 <img :src="url" alt="">
	//两段代码的效果是一样的
 <img v-bind:src="url" alt="">
```

## v-on 语法糖

v-on 是用来绑定事件监听的。

语法糖是吧 v-on: 换成@click

```vue
<button @click="btn"></button>

<button v-on:click="btn"></button>
```

## v-model 修饰符

### .lazy

修饰符.lazy 可以避免频繁的触发 change 事件

```vue
<input type="text" v-model="inputValue">
//输入一个字inputValue就会跟着变

<input type="text" v-model.lazy="inputValueLazy">
// 输入框失焦和才会改变inputValueLazy的值
```

### .number

修饰符.number 可以使 input 只能输入数字

### .trim

(输入首尾空格过滤)。
