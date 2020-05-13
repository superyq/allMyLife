<template>
  <div class="upload-container">
    <el-button
      size="mini"
      type="primary"
      icon="el-icon-upload"
      :loading="loading"
      @click="visible = true"
      :style="{ background: color, borderColor: color }"
    >
      <slot>本地图片</slot>
    </el-button>
    <el-dialog :visible.sync="visible">
      <el-upload
        :multiple="multiple"
        :file-list="fileList"
        :show-file-list="true"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        :data="{ token: token }"
        class="editor-slide-upload"
        action="//up-z2.qiniup.com/"
        list-type="picture-card"
      >
        <el-button slot="trigger" size="small" type="primary"
          >点击上传</el-button
        >
      </el-upload>
      <template slot="footer">
        <el-button size="small" @click="visible = false">取消</el-button>
        <el-button size="small" type="primary" @click="handleSubmit"
          >确认</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<script>
// import request from "@admin/util/request";
// import { getToken } from 'api/qiniu'

export default {
  name: "EditorSlideUpload",
  props: {
    multiple: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#0956c6"
    }
  },
  data() {
    return {
      visible: false,
      listObj: {},
      fileList: [],

      token: "",
      loading: false
    };
  },

  methods: {
    checkAllSuccess() {
      return Object.keys(this.listObj).every(
        item => this.listObj[item].hasSuccess
      );
    },

    handleSubmit() {
      const arr = Object.keys(this.listObj).map(v => this.listObj[v]);
      if (!this.checkAllSuccess()) {
        this.$message("请等待图片上传完成，或刷新页面后重新上传");
        return;
      }
      this.$emit("successCBK", arr);

      this.listObj = {};
      this.fileList = [];
      this.visible = false;
    },

    handleSuccess(response, file) {
      const uid = file.uid;
      const objKeyArr = Object.keys(this.listObj);

      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          this.listObj[
            objKeyArr[i]
          ].url = `${process.env.VUE_APP_CDN_PREFIX}/${response.filename}`;

          this.listObj[objKeyArr[i]].hasSuccess = true;
          return;
        }
      }
    },

    handleRemove(file) {
      const uid = file.uid;
      const objKeyArr = Object.keys(this.listObj);
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]];
          return;
        }
      }
    },

    beforeUpload(file) {
      const _URL = window.URL || window.webkitURL;
      const fileName = file.uid;

      this.listObj[fileName] = {};
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = _URL.createObjectURL(file);
        img.onload = () => {
          this.listObj[fileName] = {
            hasSuccess: false,
            uid: file.uid,
            width: this.width,
            height: this.height
          };
        };
        resolve(true);
      });
    },

    async refreshToken() {
      if (this.loading) return;

      this.loading = true;
      // const token = await request.get("/admin/refresh/token");
      // this.token = token;
      // this.loading = false;
    }
  },

  mounted() {
    this.refreshToken();
  }
};
</script>
