# css 盒子模型

页面布局也要学习三大核心,盒子模型,浮动和定位,学习好盒子模型能非常好的帮助我们布局页面

所谓盒子模型:就是吧 html 页面中得布局元素看作是一个矩形的盒子,也就是一个盛着内容的容器.css 盒子模型本质上是一个盒子,封装周围的 html 元素,它包括:边框,外边距,内边距,和实际内容

## 边框(rorder)

border:border-width || border-style || border-color

| 属性  |                      作用                       |
| :---: | :---------------------------------------------: |
| width |                  粗细 单位 px                   |
| style | 样式 solid 实线边框 dashed 虚线 dotted 点线边框 |
| color |                      颜色                       |

## 阴影

### 盒子阴影

    ```css
        box-shadow:h-shadow v-shadow blur spread color inset
    ```

|    值    |                描述                 |
| :------: | :---------------------------------: |
| h-shadow |    必须,水平阴影的位置,允许负值     |
| v-shadow |    必须,垂直阴影的位置,允许负值     |
|   blur   |            可选,模糊距离            |
|  spread  |           可选阴影的尺寸            |
|  color   |   可选,阴影的颜色,参数 css 颜色值   |
|  inset   | 可选,将歪脖阴影 outset 改为内部阴影 |

ps 默认是外阴影(outset),但是不可以写这个单词,否则会导致阴影无效

### 文字阴影

text-shadow:h-shadow v-shadow blur color

|    值    |     描述      |
| :------: | :-----------: |
| h-shadow | 水平阴影距离  |
| v-shadow | 必须 垂直距离 |
|   blur   | 模糊距离可选  |
|  color   | 阴影颜色 可选 |
