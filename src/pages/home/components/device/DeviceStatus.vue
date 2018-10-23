<template>
  <div class="deviceStatus">
    <el-table
    :data="tableData"
    style="width: 100%;height:90%"
    >
      <el-table-column
        prop="date"
        label="设备开始运行时间"
        sortable = 'custom'
        width="180"

        >
        </el-table-column>
        <el-table-column
        prop="deviceID"
        label="设备 ID"
        sortable
        width="150"
        >
        </el-table-column>
        <el-table-column
        prop="deviceIP"
        label="IP 地址"
        width="150"   
        >
        </el-table-column>
        <el-table-column
        prop="deviceMAC"
        label="MAC 地址"
        width="150"
        >
        </el-table-column>
        <el-table-column
        prop="deviceTimer"
        label="设备已运行时间"
        width="150">
        </el-table-column>
        <el-table-column
        prop="vendor"
        label="运营商"
        sortable
        width="250"
        >
        </el-table-column>
        <el-table-column
        prop="tag"
        label="标签"
        width="120"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
            <template slot-scope="scope">
            <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}</el-tag>
            </template>
        </el-table-column>
    </el-table>
    <pagination/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Pagination from '../../../common/pagination'
export default {
  name: "DeviceStatus",
  components:{
    Pagination
  },
  data() {
      return {
        
      }
    },
    computed:{
      ...mapGetters('deviceStatus',{
        tableData: 'getDeviceStatus'
      })
    },
    methods: {
      filterTag(value, row) {
        return row.tag === value;

      },
      filterHandler(value, row, column) {
        // console.log(this.$store.state.device.deviceStatus);
        // let deviceStatusFilter = this.$store.state.device.deviceStatus.filter((value)=>{
        //   return this.$store.state.device.deviceStatus;
        // })
        const property = column['property'];
        return row[property] === value;
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .deviceStatus
    width 100%
    height 100%
</style>