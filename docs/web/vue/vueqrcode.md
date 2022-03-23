# vue 中生成 qr 码

在项目中出现二维码常见的功能，实现方案有很多种，我用的是 vue-qr
<qrcode></qrcode>

1.先安装 vue-qr

```bash
npm install vue-qr --save
```

2.声明以及引入

```vue
<script>
import VueQr from "vue-qr";
export default {
  components: {
    VueQr,
  },
};
</script>
```

就是声明引入一个组件

3.使用

```vue
<template>
  <div>
    <vue-qr
      :logo-src="logoSrc"
      :size="200"
      :margin="0"
      :auto-color="true"
      :dot-scale="1"
      :text="appSrc"
    />
  </div>
</template>
<script>
import VueQr from 'vue-qr';
export default {
    data(){
        return {
            logoSrc:"",
            appSrc:"http://www.baidu.com"
        }
    components: {
        VueQr,
      },
    }
}
</script>
```

https://github.com/WeiJunn/VueQrcode

具体的使用方法可以去官方看

https://www.npmjs.com/package/vue-qr
