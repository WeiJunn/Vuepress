# Emmet 语法

- Emmet 速写语法

  - 速写 `html`

    - 生成标签直接输入标签名字 按 tab 即可 如 `div` 然 `tab` 就会生成一对 div 标签
    - 如果要生成多个的话 加上`*` 如 div\*3
    - 父子级关系用`>`, 如 ul>li\*3
    - 兄弟标签用`+` 如 div+p
    - 如需生成带 `class` 的标签 如 p.test 加上 tab 键,如果是生成带 class 的 div 则.前的 div 可以省略
    - 如生成的类名是有顺序的,可以用自增符号`$`,如.demo$\*9
    - 生成的标签里带有文字 如 p{我是自己生成的文字}
    - Emmet 语法可以混用具体怎么用就可以去发挥你的想象咯 给个参考

    ```html
    ul>li.li${我是第$个li}*7
    <ul>
      <li class="li1">我是第1个li</li>
      <li class="li2">我是第2个li</li>
      <li class="li3">我是第3个li</li>
      <li class="li4">我是第4个li</li>
      <li class="li5">我是第5个li</li>
      <li class="li6">我是第6个li</li>
      <li class="li7">我是第7个li</li>
    </ul>
    ```

  -速写 css

  - css 的话基本上就是首字母按 tab 就行了
  - w100 => width:100px
  - h100 => hight:100px
  - tac => text-align: center;
  - 等等等
