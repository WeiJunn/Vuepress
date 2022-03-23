---
title: 使用 VuePress 搭建个人博客
lang: zh-CN
search: true
---

# vuePress

最近在学 vue 嘛，然后边学边写博客记录一些踩坑也写了一些小 demo 给以后的自己参照，然后发现 hexo 框架不能把个 demo 内嵌进去只能另外开一个网页放，这样就很不方便，正好我也看腻了我那个 hexo 主题的性冷淡了就想着迁移来这边了。然后看官方文档给我看懵逼了。弄了半天才弄懂。好了下面是教程哦

## 快速上手

---

创建并进入一个新目录

```bash
mkdir vueprssDemo
cd vuepressDemo
```

项目初始化

```bash
npm init //随便填东西就 ok 这个后面可以改的 疯狂回车啪啪啪啪啪
```

将 VuePress 安装为本地依赖

```bash
npm install -D vuepress
```

创建你的第一篇文档

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

在 `package.json` 中添加一些 scripts

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

在本地启动服务器

```bash
npm run dev
```

VuePress 会在 http://localhost:8080 启动一个热重载的开发服务器。

`只有 Markdown 可以热重载 其他的都要重启一下 很难过`

:clown_face:

你就能在 http://localhost:8080 看到自己的博客啦

但是现在这个网站将非常局限的，用户也无法在你的网站上自由导航。为了更好地自定义你的网站，让我们配置一些文件方便用户体验

## 配置文件

我们首先在你的文档目录下创建一个 .vuepress 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：

```
.
├─ docs
│ ├─ README.md
│ └─ .vuepress
│ └─ config.js
└─ package.json
```

一个 VuePress 网站必要的配置文件是 .vuepress/config.js，它应该导出一个 JavaScript 对象：

```js
module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
};
```

对于上述的配置，如果你运行起 dev server，你应该能看到一个页面，它包含一个页头，里面包含一个标题和一个搜索框。VuePress 内置了基于 headers 的搜索 —— 它会自动为所有页面的标题、h2 和 h3 构建起一个简单的搜索索引。

### 首页配置

默认的主题提供了一个首页（Homepage）的布局 (用于 这个网站的主页)。想要使用它，需要在你的根级 README.md 的 YAML front matter 指定 home: true。以下是一个如何使用的例子：

```yaml
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue驱动
    details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

### 导航栏 logo

你可以通过 `themeConfig.logo` 增加导航栏 Logo ，Logo 可以被放置在公共文件目录 `.vuepress/public` 那么现在你的项目结构应该是这样的

```
.
├─ docs
│ ├─ README.md
│ ├─ .vuepress
│ │   └─public
│ │       └─img
│ │          └─logo.png
│ └─ config.js
└─ package.json
```

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: "/assets/img/logo.png",
  },
};
```

### 导航栏链接

你可以通过 `themeConfig.nav` 增加一些导航栏链接:

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: "Home", link: "/" }, //docs下的README.md
      { text: "Guide", link: "/guide/" }, //guide下的README.md
      { text: "External", link: "https://google.com" },
    ],
  },
};
```
