<template>
  <div class="deviceStatus">
    <div class="deviceStatus__header">
      <div class="deviceStatus__header__ID">
        <span class="deviceStatus__header__ID_text">设备 ID</span>
        <el-input
          v-model="inputDID"
          placeholder="请输入内容"
          class="deviceStatus__header__ID_input"
        ></el-input>
      </div>
      <el-button
        icon="el-icon-search"
        circle
        @click="filterDeviceHandler"
      ></el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%;height:82%"
      align="center"
    >
      <el-table-column
        prop="device_id"
        label="设备 ID"
        sortable
        width="100"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="ip_address"
        label="IP 地址"
        width="150"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="mac_id"
        label="MAC 地址"
        width="150"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="vendor_id"
        label="厂商编号"
        sortable
        width="100"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="device_addr"
        label="设备运行地址"
        width="200"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="time_start"
        label="开始时间"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="time_stop"
        label="结束时间"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="设备状态"
        width="90"
        :filters="[{ text: '离线', value: '离线' }, { text: '在线', value: '在线' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.status === '离线' ? 'info' : 'success'"
            disable-transitions
          >{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="90"
        align="center"
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
    return {
      inputDID: "",
    };
  },
  computed: {
    ...mapGetters("deviceStatus", {
      tableData: "getDeviceStatus"
    })
  },
  methods: {
    filterDeviceHandler () {
      let params = {
        deviceID: this.inputDID
      }
      this.$store.dispatch('deviceStatus/getFilterDeviceStatusInfo', params)
    },
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
      row.time_stop = ''
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

  &__header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 10%;

    &__register {
      padding-left: 0.1rem;
    }

    &__ID {
      width: 30%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      &_text {
        padding-right: 0.2rem;
      }

      &_input {
        width: 50%;
        padding-right: 0.3rem;
      }
    }
  }
}
</style>