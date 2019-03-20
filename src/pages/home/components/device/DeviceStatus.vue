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
        width="100"
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
        prop="device_addr"
        label="设备运行地址"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="time_start"
        label="开始时间"
        sortable='custom'
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="time_run"
        label="运行时间"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="time_stop"
        label="结束时间"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="设备状态"
        width="90"
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
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="openDevice(scope.row)"
          >开启</el-button>
          <el-button
            @click="closeDevice(scope.row)"
            type="text"
            size="small"
          >
            关闭
          </el-button>
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
    formatDate (date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
      }
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ''
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : this.padLeftZero(str)
          )
        }
      }
      return fmt
    },
    padLeftZero (str) {
      return ('00' + str).substr(str.length)
    },
    filterTag (value, row) {
      return row.status === value;
    },
    filterHandler (value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    openDevice (row) {
      let nowTime = new Date()
      let nowTimeStr = this.formatDate(nowTime, 'yyyy-MM-dd hh:mm')
      row.time_start = nowTimeStr
      row.time_run = '正在运行'
      row.time_stop = 'Null'
      row.status = '在线'
      let params = {
        status: "在线",
        timeStart: row.time_start,
        timeStop: row.time_stop,
        deviceID: row.device_id
      }
      this.$store.dispatch("deviceStatus/putDeviceStatusInfo", params)
        .then(() => {

        })
        .catch(() => {
          this.$message({
            message: "异常哦，设备开启失败",
            type: "warning"
          });
        });
    },
    closeDevice (row) {
      let nowTime = new Date()

      let nowTimeStr = this.formatDate(nowTime, 'yyyy-MM-dd hh:mm')
      row.time_stop = nowTimeStr
      row.status = '离线'
      let params = {
        status: '离线',
        timeStart: row.time_start,
        timeStop: row.time_stop,
        deviceID: row.device_id
      };
      this.$store.dispatch("deviceStatus/putDeviceStatusInfo", params)
        .then(() => {

        })
        .catch(() => {
          this.$message({
            message: "异常哦，设备关闭失败",
            type: "warning"
          });
        });
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