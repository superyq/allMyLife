<template lang="pug">
  .p-admin-artical
    el-table(:data='datas')
      el-table-column(prop='id', label='ID')
      el-table-column(prop='id', label='ID')
</template>

<script>
import { getArticals } from "@/api/articals";
export default {
  name: "p-admin-artical",
  data() {
    return {
      search: {
        keywords: "",
        category_id: ""
      },

      pages: {
        limit: 10,
        page: 1
      },

      datas: []
    };
  },
  methods: {
    getArticalsHandle() {
      getArticals({ ...this.search, ...this.pages }).then(
        ({ data: { data } }) => {
          console.log(data);
          this.datas = data;
        }
      );
    }
  },
  mounted() {
    this.getArticalsHandle();
  }
};
</script>