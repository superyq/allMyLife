<template lang="pug">
  .news-falsh
    span.news-flash__label 是否显示自动拉取配置：
    el-switch(
      v-model="isShow"
      active-color="#13ce66"
      inactive-color="#ff4949",
      style='margin-right: 10px;'
    )

    template(v-if='isShow')
      span.news-flash__label 开始时间：
      el-time-select(
        v-model="start_hour",
        :picker-options="{start: '00:00',step: '01:00',end: '23:00'}",
        style='width: 100px;margin-right: 10px;'
      )

      span.news-flash__label 结束时间：
      el-time-select(
        v-model="end_hour",
        :picker-options="{start: '00:00',step: '01:00',end: '23:00'}",
        style='width: 100px;margin-right: 10px;'
      )

      el-button(type="text", @click='onOrOff("on")', v-if='isOpen === "on"') 修改
      el-button(type="text", @click='onOrOff(isOpen === "off" ? "on" : "off")') {{ btnName }}
</template>

<script>
import { getNewsFlash, putNewsFlash } from "@/api/news";

export default {
  name: "news-flash",
  data() {
    return {
      isShow: false,

      isOpen: "off",
      start_hour: "00:00",
      end_hour: "00:00",

      times: ["start_hour", "end_hour"]
    };
  },
  computed: {
    btnName() {
      return this.isOpen === "on" ? "关闭自动拉取" : "开启自动拉取";
    }
  },
  methods: {
    onOrOff(status) {
      this.isOpen = status;
      this.putNewsFlashHandle();
    },
    getNewsFlash() {
      getNewsFlash().then(({ data: { value } }) => {
        this.isOpen = value.switch;
        this.times.forEach(i => {
          this[i] = `${value[i].length === 1 ? 0 : ""}${value[i]}:00`;
        });
      });
    },
    putNewsFlashHandle() {
      const datas = {
        switch: this.isOpen
      };
      this.times.forEach(i => {
        let _i = this[i].split(":")[0];
        datas[i] = !+_i[0] ? _i[1] : _i;
      });

      putNewsFlash(datas).then(({ message = "操作成功" }) => {
        this.$message.success(message);
      });
    }
  },
  mounted() {
    this.getNewsFlash();
  }
};
</script>
