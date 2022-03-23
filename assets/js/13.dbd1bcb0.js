(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{496:function(t,e,v){"use strict";v.r(e);var _=v(62),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"css-元素显示模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css-元素显示模式"}},[t._v("#")]),t._v(" css 元素显示模式")]),t._v(" "),v("h2",{attrs:{id:"块元素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#块元素"}},[t._v("#")]),t._v(" 块元素")]),t._v(" "),v("p",[t._v("什么是块元素")]),t._v(" "),v("p",[t._v("h1~h6, p,div,ul,ol,li")]),t._v(" "),v("p",[t._v("都是块元素其中 div 是最典型的块元素")]),t._v(" "),v("p",[t._v("块元素的特点")]),t._v(" "),v("ul",[v("li",[t._v("比较霸道,自己独占一行")]),t._v(" "),v("li",[t._v("高度,宽度,外边距以及内边距都可以控制")]),t._v(" "),v("li",[t._v("宽度默认是父容器的 100%")]),t._v(" "),v("li",[t._v("是一个容器及盒子,里面 可以放行内或者块级元素")])]),t._v(" "),v("h2",{attrs:{id:"行内元素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#行内元素"}},[t._v("#")]),t._v(" 行内元素")]),t._v(" "),v("p",[t._v("行内元素的特点")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("相邻行内元素在一行上,一行可以显示多个")])]),t._v(" "),v("li",[v("p",[t._v("高宽都是无效的")])]),t._v(" "),v("li",[v("p",[t._v("默认宽度就是它本身内容的宽度")])]),t._v(" "),v("li",[v("p",[t._v("行内元素只能容纳文本或者其他行内元素")])])]),t._v(" "),v("h2",{attrs:{id:"行内块元素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#行内块元素"}},[t._v("#")]),t._v(" 行内块元素")]),t._v(" "),v("p",[t._v("在行内元素中有几个特殊的标签 img\ninput\ntd\n他们同时具有块元素和行内元素的特点有些资料称他们为行内块元素")]),t._v(" "),v("p",[t._v("行内块元素的特点")]),t._v(" "),v("ul",[v("li",[t._v("和相邻的行内元素(行内块)在一行上,但是他们之间会有空白的间隙,一行可以显示多个(行内元素的特点)")]),t._v(" "),v("li",[t._v("默认宽度的就自身内容的宽度(行内元素的特点)")]),t._v(" "),v("li",[t._v("高度,行高,外边距 and 内边距都是可以控制的(块级元素的特点)\n"),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("元素模式")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("元素排列")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("设置样式")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认宽度")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("包含")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("块级元素")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("一行你能放一个块级元素")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("可以设置宽度高度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("容器的 100%")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("容器级可以包含任何标签")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("行内元素")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("一行可以放多个行内元素")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("不可以直接设置宽度高度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("它本身内容的宽度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("容纳文本或者其他行内元素")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("行内块元素")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("一行可以放多个行内块元素")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("可以设置宽度和高度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("它本身内容的宽度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("~~~~~~")])])])])])]),t._v(" "),v("h2",{attrs:{id:"元素显示模式的转换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#元素显示模式的转换"}},[t._v("#")]),t._v(" 元素显示模式的转换")]),t._v(" "),v("p",[t._v("特殊情况下,我们需要元素模式的转换,简单理解:一个模式的元素需要另外一种模式的特性,比如我想给链接 a 元素的触发范围")]),t._v(" "),v("ul",[v("li",[t._v("转换为块元素 => display:block")]),t._v(" "),v("li",[t._v("转换为行内元素 => display:inline")]),t._v(" "),v("li",[t._v("转换为行内块元素 => display:block-inline")])])])}),[],!1,null,null,null);e.default=a.exports}}]);