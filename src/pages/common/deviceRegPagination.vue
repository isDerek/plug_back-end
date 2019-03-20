<template>
  <div class="pagination">
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="totalSize"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: "deviceRegPagination",
  methods: {
    handleCurrentChange (val) {
      this.$store.state.deviceRegister.deviceRegisterCurrentPage = val;
    }
  },
  computed: {
    ...mapState('deviceRegister', {
      currentPage: state => state.deviceRegisterCurrentPage, // 当前页面
      pageSize: state => state.pageSize // 每页数量
    }),
    ...mapGetters('deviceRegister', {
      totalSize: 'deviceRegisterTotalSize'
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.pagination {
  padding-top: 0.1rem;
  display: flex;
  justify-content: center;
}
</style>