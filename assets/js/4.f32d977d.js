(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{452:function(e,t,n){},482:function(e,t,n){"use strict";n(452)},490:function(e,t,n){"use strict";n.r(t);var r=n(481),a={data:function(){return{logoSrc:"",appSrc:"你输东西再识别啊，你是不是傻的",undetermined:""}},components:{VueQr:n.n(r).a},methods:{generate:function(){this.appSrc=this.undetermined},selectFile:function(){this.$refs.uploadInput.click()},uploadFile:function(e){var t=e.target.files[0];this.base64(t)},base64:function(e){var t=this,n=new FileReader;n.readAsDataURL(e),n.onload=function(){t.logoSrc=n.result}}}},i=(n(482),n(62)),o=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("vue-qr",{attrs:{logoSrc:e.logoSrc,size:200,margin:0,"auto-color":!0,"dot-scale":1,text:e.appSrc}}),e._v(" "),n("div",{staticClass:"input"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.generate()}}},[e._v("生成")]),e._v(" "),n("el-input",{attrs:{placeholder:"请输入内容",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.generate()}},model:{value:e.undetermined,callback:function(t){e.undetermined=t},expression:"undetermined"}})],1),e._v(" "),n("input",{ref:"uploadInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.uploadFile}}),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.selectFile}},[e._v("上传logo")])],1)}),[],!1,null,"2f74e138",null);t.default=o.exports}}]);