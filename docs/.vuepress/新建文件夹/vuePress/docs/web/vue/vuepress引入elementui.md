# vuepress 中引入 elementui

## 安装 elementui

```bash
npm i element-ui -S
```

## 配置 elementui

新建一个 `enhanceApp`.js 文件

```
.
├─ docs
│ ├─ README.md
│ ├─ .vuepress
│ │   └─public
│ │       └─img
│ │          └─logo.png
│ ├─ config.js
│ └─ enhanceApp.js <---添加这个文件
└─ package.json
```

在文件里添加以下内容

```js
import Vue from "vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export default ({ Vue, options, router }) => {
  Vue.use(Element);
};
```

这个时候应该还用不了应该会报一个什么错误我也忘记了哈哈哈
报错的话安装一下这个就可以正常的食用 elementui 了

```bash
npm install async-validator@1.11.5 --save
```

<elementuiDemo></elementuiDemo>
