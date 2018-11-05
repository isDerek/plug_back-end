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
        <el-input v-model="inputDID" placeholder="请输入内容" class="deviceRegister__header__ID_input"></el-input>
      </div>
      <div class="deviceRegister__header__Name">
        <span class="deviceRegister__header__Name_text">厂商 ID</span>
        <el-input v-model="inputMID" placeholder="请输入厂商名称" class="deviceRegister__header__Name_input"></el-input>
      </div>
      <el-button icon="el-icon-search" circle @click="filterHandler"></el-button>      
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
          width="100"
          >
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
import DeviceRegisterTmp from "./DeviceRegisterTmp"
import EditDeviceInfo from "./EditDeviceInfo"
export default {
  name: "DeviceRegister",
  components: {
    DeviceRegisterTmp,
    EditDeviceInfo
  },
  created() {
    this.$store.dispatch("deviceRegister/getAllDeviceRegisterInfo");
  },
  data() {
    return {
      timeValue: "",
      inputDID: "",
      inputMID: "",
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
      this.$store.dispatch('deviceRegister/deleteDeviceRegisterInfo',rows[index])
      .then(()=>{
        rows.splice(index, 1)
      }).catch(()=>{

      })
      
    },
    filterHandler() {
        let params = {
          manufacturerID : this.inputMID,
          deviceID : this.inputDID
        }
        this.$store.dispatch('deviceRegister/getFilterDeviceRegisterInfo',params)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.deviceRegister 
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  &__header 
    width: 100%;
    display: flex
    justify-content: center
    align-items: center
    flex-direction: row
    height: 10%
    &__register 
      padding-left: 0.1rem
    &__ID 
      width: 30%;
      display: flex
      justify-content: flex-end
      align-items: center
      &_text 
        padding-right: 0.2rem;
      &_input 
        width: 50%;
    &__Name
      padding-left .2rem
      padding-right .2rem
      width 30%
      display flex
      justify-content flex-start
      align-items center
      &_text
        width 30%
  &__Table 
    display: flex;
    height: 90%;
</style>