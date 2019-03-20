<template>
  <div class="deviceStatus">
    <el-table
      border
      :data="tableData"
      style="width: 100%;height:90%"
    >

      <el-table-column
        prop="device_id"
        label="设备 ID"
        sortable
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="ip_address"
        label="IP 地址"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="mac_id"
        label="MAC 地址"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="vendor_id"
        label="运营商"
        sortable
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="time_start"
        label="设备开始运行时间"
        sortable='custom'
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="time_run"
        label="设备已运行时间"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="设备状态"
        width="120"
        :filters="[{ text: '离线', value: '离线' }, { text: '在线', value: '在线' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.status === '离线' ? 'info' : 'success'"
            disable-transitions
          >{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <pagination />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "../../../common/pagination";
export default {
  name: "DeviceStatus",
  components: {
    Pagination
  },
  created () {
    this.$store.dispatch('deviceStatus/getAllDeviceStatusInfo')
  },
  data () {
    return {};
  },
  computed: {
    ...mapGetters("deviceStatus", {
      tableData: "getDeviceStatus"
    })
  },
  methods: {
    filterTag (value, row) {
      return row.status === value;
    },
    filterHandler (value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.deviceStatus {
  width: 100%;
  height: 100%;
}
</style>