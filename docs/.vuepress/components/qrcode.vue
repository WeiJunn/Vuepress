<template>
  <div class="box">
    <vue-qr
      :logoSrc="logoSrc"
      :size="200"
      :margin="0"
      :auto-color="true"
      :dot-scale="1"
      :text="appSrc"
    />
    <div class="input">
      <el-button type="primary" @click="generate()">生成</el-button>
      <el-input
        placeholder="请输入内容"
        v-model.lazy="undetermined"
        clearable
        @keyup.enter.native="generate()"
      >
      </el-input>
    </div>
    <!-- <el-button class="buttonid" type="primary" @click="base64()"
      >上传头像</el-button -->
    <input
      ref="uploadInput"
      type="file"
      @change="uploadFile"
      style="display: none"
    />
    <el-button type="primary" @click="selectFile">上传logo</el-button>
  </div>
</template>

<script>
import VueQr from "vue-qr";

export default {
  data() {
    return {
      // logoSrc: require("@/assets/logo.png"),
      // @等于src文件
      logoSrc: "",
      appSrc: "你输东西再识别啊，你是不是傻的",
      undetermined: "", //待定生成 和输入框双向绑定 点击生成把值赋给appSrc
    };
  },
  components: {
    VueQr,
  },
  methods: {
    //生成二维码事件
    generate() {
      this.appSrc = this.undetermined;
    },
    // 上传logo按钮事件
    selectFile() {
      this.$refs.uploadInput.click();
    },
    //上传图片后事件
    uploadFile(e) {
      const file = e.target.files[0];
      // 拿到上传到input里面的图片
      this.base64(file);
    },
    // 图片转base64事件
    base64(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // console.log("file 转 base64结果：" + reader.result);
        this.logoSrc = reader.result;
      };
    },
  },
};
</script>


<style scoped>
.box {
  flex-direction: column;
  width: 20rem;
  height: 20rem;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 20px;
}
.input {
  margin: 15px 15px 0 15px;
  display: flex;
  flex-direction: row-reverse;
}
</style>