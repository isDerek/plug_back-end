<template>
  <div class="container">
    <home-header></home-header>
    <div class="container__all">
      <div class="container__all__left">
        <home-navigation v-on:putTpl="putTpl"></home-navigation>
      </div>
      <div class="container__all__right">
        <div class="container__all__right__tabs">
          <home-tabs></home-tabs>
        </div>
        <div class="container__all__right__bread-crumb">
          <home-bread-crumb :title="titleArray"></home-bread-crumb>
        </div>
        <div class="container__all__right__complate">
          <home-device-status v-if="this.titleArray[2] == '设备状态'"/>
          <home-manufacturer-info v-if="this.titleArray[2] == '厂商信息注册'"/>
          <home-device-register v-if="this.titleArray[2] == '设备注册'"/>
          <home-device-version-info v-if="this.titleArray[2] == '设备版本信息'"/>
        </div>     
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeFooter from './components/Footer'
import HomeNavigation from './components/Navigation'
import HomeTabs from './components/Tabs'
import HomeBreadCrumb from './components/BreadCrumb'
import HomeDeviceStatus from './components/device/DeviceStatus'
import HomeManufacturerInfo from './components/basicinfo/ManufacturerInfo'
import HomeDeviceRegister from './components/device/DeviceRegister'
import HomeDeviceVersionInfo from './components/device/DeviceVersionInfo'
export default {
  name: 'Home',
  data(){
    return {
      titleArray:[
      '首页',
      '厂商信息',
      '厂商信息注册'
    ]
    }
  },
  components: {
    HomeDeviceStatus,
    HomeHeader,
    HomeFooter,
    HomeNavigation,
    HomeTabs,
    HomeBreadCrumb,
    HomeManufacturerInfo,
    HomeDeviceRegister,
    HomeDeviceVersionInfo
  },
  methods:{
    putTpl(subMenu,menuItem){
      this.$set(this.titleArray, 1, subMenu);
      this.$set(this.titleArray, 2, menuItem);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    width 100%
    height 100%
    &__all
      display flex
      height 80%
      &__left
        display flex
        height 100%
        background-color #ededed
      &__right
        width 100%
        &__tabs
          height 10%
        &__bread-crumb
          height 5%
          // padding-bottom .3rem
          border-bottom .02rem solid #e4e6ec
        &__complate
          height 85%
          width 100%
</style>
