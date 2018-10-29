<template>
  <div class="registerManufacturerInfo">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="厂商名称" prop="manufacturerName">
            <el-input v-model="ruleForm.manufacturerName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="厂商编号" prop="manufacturerID">
            <el-input v-model.number="ruleForm.manufacturerID" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="推送地址" prop="notifyAddress">
            <el-input v-model="ruleForm.notifyAddress" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from '../../../../store'
export default {
  name: "RegisterManufacturerInfo",
  components: {},
     data() {
      var checkManufacturerInfo = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('厂商名称不能为空'));
        }else{
            callback();
        }
      };
      var validateNotifyAddress = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入推送地址'));
        } else {
          if (this.ruleForm.notifyAddress !== '') {
            let validateNotifyAddress = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/
            if(!validateNotifyAddress.test(this.ruleForm.notifyAddress)){
                callback(new Error('推送地址格式不正确'));
            }
          }
          callback();
        }
      };
      var checkManufacturerID = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('厂商编号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            callback()
          }
        }, 1000);       
      };
      return {
        ruleForm: {
          manufacturerName: '',
          notifyAddress: '',
          manufacturerID: ''
        },
        rules: {
            manufacturerName: [
                {validator: checkManufacturerInfo, trigger: 'blur' }
            ],
            notifyAddress: [
                {validator: validateNotifyAddress, trigger: 'blur' }
            ],
            manufacturerID: [
                {validator: checkManufacturerID, trigger: 'blur' }
            ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = {
                manufacturerName : this.ruleForm.manufacturerName,
                notifyAddress : this.ruleForm.notifyAddress,
                manufacturerID : this.ruleForm.manufacturerID
            }
            store.dispatch('manufacturerInfo/postManufacturerInfo',params).then(()=>{
                location.reload();
            }).catch(()=>{
                this.$message({
                    message: '警告哦，厂商名称或厂商编号重复',
                    type: 'warning'
            });
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>


<style lang="stylus" scoped>
    .registerManufacturerInfo
        display flex
        justify-content flex-start
</style>