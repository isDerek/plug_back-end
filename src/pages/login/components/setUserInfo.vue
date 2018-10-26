<template>
  <div class="setUserInfo">
    <div class="setUserInfo__phone">
      <span class="setUserInfo__phone_text">手机号：</span>
      <span class="setUserInfo__phone_tips">{{phoneError? phoneErrorTips : ''}}</span>
      <span class="setUserInfo__phone_tips">{{phoneNull? phoneNullTips : ''}}</span>      
      <div class="setUserInfo__phone_input">
        <el-input
        placeholder="请设置手机号"
        v-model="phone">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <div class="setUserInfo__email">
      <span class="setUserInfo__email_text">邮箱：</span>
      <span class="setUserInfo__email_tips">{{emailError? emailErrorTips : ''}}</span>
      <span class="setUserInfo__email_tips">{{emailNull? emailNullTips : ''}}</span>  
      <div class="setUserInfo__email_input">
        <el-input
        type="email"
        placeholder="请设置邮箱"
        v-model="email">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setUserInfo',
  data(){
    return {
      email:this.commitEmail,
      phone:this.commitPhone,
      emailErrorTips:'邮箱格式不正确',
      phoneErrorTips:'手机号格式不正确',
      phoneNullTips:'手机号不能为空',
      emailNullTips:'邮箱不能为空'
    }
  },
  props:[
    'emailNull',
    'phoneNull',
    'commitPhone',
    'commitEmail',
    'phoneError',
    'emailError',
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .setUserInfo
    padding-top .5rem
    &__phone
      padding-bottom .2rem
      &_input
        padding-top .2rem
      &_tips
        color red
    &__email
      padding-bottom .2rem
      &_tips
        color red
      &_input
        padding-top .2rem
</style>
