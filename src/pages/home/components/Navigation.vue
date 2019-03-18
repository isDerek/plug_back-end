<template>
  <div class="navigation">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :unique-opened="true"
          class="el-menu-vertical-demo"
          background-color="#EDEDED"
          active-text-color="blue"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>厂商信息</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                index="1-1"
                @click="putVendorTpl"
              >厂商信息注册</el-menu-item>
              <!-- <el-menu-item index="1-4" @click="putDeviceMsgTpl">设备推送信息</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>设备管理</span>
            </template>
            <el-menu-item-group>
              <!-- <el-menu-item
                index="2-1"
                @click="putVersionTpl"
              >设备版本信息</el-menu-item> -->
              <el-menu-item
                index="2-2"
                @click="putDeviceTpl"
              >设备注册</el-menu-item>
              <el-menu-item
                index="2-3"
                @click="putDeviceStatusTpl"
              >设备状态</el-menu-item>
              <!-- <el-menu-item index="2-4" @click="putDeviceControlTpl">设备操作</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>运营信息</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="putOperatorTpl">运营厂商信息</el-menu-item>
              <el-menu-item index="3-2" @click="putOperatePlugTpl">运营插座信息</el-menu-item>
              <el-menu-item index="3-3" @click="putPlugFeeTpl">插座收费信息</el-menu-item>
              <el-menu-item index="3-4" @click="putAdminMsgTpl">设备管控系统推送信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1" @click="putUserChargeRecordTpl">用户充电记录</el-menu-item>
              <el-menu-item index="4-2" @click="putUserSuggestionTpl">用户反馈意见</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    putVendorTpl () {
      this.$emit('putTpl', '厂商信息', '厂商信息注册');
    },
    putDeviceTpl () {
      this.$emit('putTpl', '设备管理', '设备注册');
    },
    putVersionTpl () {
      this.$emit('putTpl', '设备管理', '设备版本信息');
    },
    putDeviceMsgTpl () {
      this.$emit('putTpl', '厂商信息', '设备推送信息');
    },
    putDeviceStatusTpl () {
      this.$emit('putTpl', '设备管理', '设备状态');
    },
    putDeviceControlTpl () {
      this.$emit('putTpl', '设备管理', '设备操作');
    },
    putOperatorTpl () {
      this.$emit('putTpl', '运营信息', '运营厂商信息');
    },
    putOperatePlugTpl () {
      this.$emit('putTpl', '运营信息', '运营插座信息');
    },
    putPlugFeeTpl () {
      this.$emit('putTpl', '运营信息', '插座收费信息');
    },
    putAdminMsgTpl () {
      this.$emit('putTpl', '运营信息', '设备管控系统推送信息');
    },
    putUserChargeRecordTpl () {
      this.$emit('putTpl', '用户管理', '用户充电记录');
    },
    putUserSuggestionTpl () {
      this.$emit('putTpl', '用户管理', '用户反馈意见');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.el-col {
  width: 4rem;
}
</style>