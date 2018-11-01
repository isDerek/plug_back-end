<template>
  <div class="deviceRegister">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <DeviceRegisterTmp v-if="registerVisible" v-on:dialogCancel="dialogCancel"/>
      <edit-device-info 
      v-if="editVisible" 
      v-on:dialogCancel="dialogCancel"
      :device_id = 'device_id'
      :device_mac = 'device_mac'
      :version_id = 'version_id'
      :manufacturer_id = 'manufacturer_id'
      />
    </el-dialog>

    <div class="deviceRegister__header">
      <div class="deviceRegister__header__register">
        <el-button type="primary" 
        @click="registerDialog"
        >+ 注册设备信息</el-button>
      </div>
      <div class="deviceRegister__header__ID">
        <span class="deviceRegister__header__ID_text">设备 ID</span>
        <el-input v-model="inputID" placeholder="请输入内容" class="deviceRegister__header__ID_input"></el-input>
      </div>
      <div class="deviceRegister__header__Date">
        <span class="deviceRegister__header__Date_text">设备注册日期</span>
        <div class="block deviceRegister__header__Date_content">
          <el-date-picker
            v-model="timeValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <el-button icon="el-icon-search" circle @click="filterHandler"></el-button>      
      </div>
      
    </div>
    <div class="deviceRegister__Table">
      <el-table
        border
        :data="deviceRegister"
        style="width: 100%;height: 100%"
        height=100%>
        <el-table-column
          prop="device_id"
          label="设备编号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="version_id"
          label="设备版本编号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="manufacturer_id"
          label="厂商编号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="deviceSerialNumber"
          label="设备唯一序列号"
          width="200">
        </el-table-column>
        <el-table-column
          prop="device_mac"
          label="设备 MAC"
          width="120">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间"
          width="150">
        </el-table-column>
        <el-table-column
          prop="loseTime"
          label="失效时间"
          width="150">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" 
            @click="editDialog(scope.row)"
            >编辑</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, deviceRegister)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DeviceRegisterTmp from "./DeviceRegisterTmp";
import EditDeviceInfo from "./EditDeviceInfo";
export default {
  name: "DeviceRegister",
  components: {
    DeviceRegisterTmp,
    EditDeviceInfo
  },
  created() {
    this.$store.dispatch("deviceRegister/getAllDeviceInfo");
  },
  data() {
    return {
      timeValue: "",
      inputID: "",
      dialogVisible: false,
      editVisible: false,
      registerVisible: false,
      device_id:'',
      device_mac:'',
      version_id:'',
      manufacturer_id:''
    };
  },
  computed: {
    ...mapState("deviceRegister", {
      deviceRegister: state => state.deviceRegister
    })
  },
  methods: {
    editDialog(row) {
      this.device_id = row.device_id;
      this.device_mac = row.device_mac;
      this.version_id = row.version_id;
      this.manufacturer_id = row.manufacturer_id;
      this.registerVisible = false;
      this.dialogVisible = true;
      this.editVisible = true;
    },
    registerDialog() {
      this.editVisible = false;
      this.dialogVisible = true;
      this.registerVisible = true;
    },
    dialogCancel() {
      this.editVisible = false;
      this.registerVisible = false;
      this.dialogVisible = false;
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    filterHandler(value, row, column) {
      console.log(column);
      const property = column["manufacturerID"];
      return row[property] === value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.deviceRegister {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

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
      }
    }

    &__Date {
      padding-left: 0.2rem;
      width: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &_text {
        padding-right: 0.2rem;
      }

      &_content {
        padding-right: 0.2rem;
      }
    }
  }

  &__Table {
    display: flex;
    height: 90%;
  }
}
</style>