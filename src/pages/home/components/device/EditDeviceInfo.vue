<template>
  <div class="editDeviceInfo">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="设备编号" prop="deviceID">
            <el-input v-model.number="ruleForm.deviceID" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="厂商编号" prop="manufacturerID">
            <el-input v-model.number="ruleForm.manufacturerID" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="设备 MAC" prop="deviceMAC">
            <el-input v-model="ruleForm.deviceMAC" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="版本 ID" prop="versionID">
            <el-input v-model.number="ruleForm.versionID" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from "../../../../store";
export default {
  name: "EditDeviceInfo",
  components: {},
  props: [
    "device_id",
    'manufacturer_id',
    'device_mac',
    'version_id'
    ],
   data() {
    var checkDeviceID = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("设备编号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 100);
    };
    var checkManufacturerID = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("厂商编号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 100);
    };
    var checkDeviceMAC = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("设备 MAC 不能为空"));
      } else {
        callback();
      }
    };

    var checkVersionID = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("版本编号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 100);
    };
    return {
      ruleForm: {
        deviceID: "",
        deviceMAC: "",
        manufacturerID: "",
        versionID:"",
      },
      rules: {
        deviceID: [
          { validator: checkDeviceID, trigger: "blur" }
        ],
        deviceMAC: [{ validator: checkDeviceMAC, trigger: "blur" }],
        manufacturerID: [{ validator: checkManufacturerID, trigger: "blur" }],
        versionID: [{ validator:checkVersionID, trigger:"blur"}]
      }
    };
  },
  watch: {
    device_id(){
      this.ruleForm.deviceID = this.device_id
      this.ruleForm.manufacturerID = this.manufacturer_id
      this.ruleForm.deviceMAC = this.device_mac
      this.ruleForm.versionID = this.version_id
    }
  },
  created(){
    this.ruleForm.manufacturerID = this.manufacturer_id
    this.ruleForm.deviceID = this.device_id
    this.ruleForm.deviceMAC = this.device_mac
    this.ruleForm.versionID = this.version_id
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {
            deviceID: this.ruleForm.deviceID,
            deviceMAC: this.ruleForm.deviceMAC,
            versionID: this.ruleForm.versionID,
            manufacturerID: this.ruleForm.manufacturerID
          };
          store
            .dispatch("deviceRegister/putDeviceRegisterInfo", params)
            .then(() => {
              this.$emit('dialogCancel')
            })
            .catch(() => {
              this.$message({
                message: "警告哦，设备编号没找到",
                type: "warning"
              });
            });
        } else {
          return false;
        }
      });
    },
    resetForm() {
    this.ruleForm.manufacturerID = ''
    this.ruleForm.deviceMAC = ''
    this.ruleForm.versionID = ''
    }
  }
};
</script>


<style lang="stylus" scoped>
.registerManufacturerInfo {
  display: flex;
  justify-content: flex-start;
}
</style>