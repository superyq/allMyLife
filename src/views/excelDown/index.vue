<template lang="pug">
  .p-excel-down
    el-button(type='primary', @click='downloadHandle') 下载excel
    el-button(type='success', @click='changeHandle') 上传excel
    input(hidden, type='file', ref='input', @change='inputHandle')
    a(ref='down', href='./static/敏感词模板.xlsx', target='_blank', download='excel模板.xlsx', hidden)
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  name: "PExcelDown",
  data() {
    return {
      timer: ""
    };
  },
  methods: {
    changeHandle() {
      this.$refs["input"].click();
    },
    inputHandle() {},
    downloadHandle() {
      // this.$refs['down'].click();
      // 或者
      let $a = document.createElement("a");
      $a.href = "./static/敏感词模板.xlsx";
      clearInterval(this.timer);
      // $a.target = "_blank";
      $a.click();
    }
  },
  mounted() {
    this.timer = setInterval(() => {}, 1 * 1e3);
  }
};
</script>