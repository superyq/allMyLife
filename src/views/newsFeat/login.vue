<template lang="pug">
  .p-login
    el-input(v-model='dataForm.email', placeholder='邮箱')
    el-input(v-model='dataForm.password', placeholder='密码')

    el-button(@click='loginHandle') 登录
</template>

<script>
import auth from "@/utils/auth";

export default {
  name: "p-login",
  data() {
    return {
      dataForm: {
        email: "123@qq.com",
        password: "123456"
      }
    };
  },
  methods: {
    loginHandle() {
      auth
        .login(this.dataForm)
        .then(message => {
          this.$message.success(message);
        })
        .catch(() => {});
    }
  }
};
</script>