<template>
    <div class="pagination">
        <div class="block">
            <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="totalSize">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: "Pagination",
    methods: {
      handleCurrentChange(val) {
          this.$store.state.deviceStatus.deviceStatusCurrentPage = val;
      }
    },
    computed:{
        ...mapState('deviceStatus',{
            currentPage: state => state.deviceStatusCurrentPage, // 当前页面
            pageSize: state => state.pageSize // 每页数量
        }),
        ...mapGetters('deviceStatus',{
            totalSize: 'getDeviceStatusTotalSize'
        })
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .pagination
        padding-top .1rem
        display flex
        justify-content center
</style>