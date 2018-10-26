<template>
  <div class="setUserLogin">
    <div class="setUserLogin__username">
      <span class="setUserLogin__username_text">用户名：</span>
      <span v-if="usernameExist" class="setUserLogin__username_tips">
        <span class="setUserLogin__username_tips">{{usernameExist? usernameExistTips : ''}}</span>
      </span>
      <span v-else>
        <span class="setUserLogin__username_tips">{{usernameError? usernameErrorTips : ''}}</span>
        <span class="setUserLogin__username_tips">{{usernameNull? usernameNullTips : ''}}</span>
      </span>
      <div class="setUserLogin__username_input">
        <el-input
        placeholder="请设置登录账户"
        v-model="username">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <div class="setUserLogin__password">
      <span class="setUserLogin__password_text">密码：</span>
      <span class="setUserLogin__password_tips">{{passwordError? passwordErrorTips : ''}}</span>
      <span v-if="this.passwordDiffer&&this.passwordNull">
        <span class="setUserLogin__password_tips">{{passwordNull? passwordNullTips : ''}}</span>        
      </span>
      <span v-else>
        <span class="setUserLogin__password_tips">{{passwordDiffer? passwordDifferTips : ''}}</span>
        <span class="setUserLogin__password_tips">{{passwordNull? passwordNullTips : ''}}</span>
      </span>
      <div class="setUserLogin__password_input">
        <el-input
        type="password"
        placeholder="请设置登录密码"
        v-model="password">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <div class="setUserLogin__confirmPassword">
      <span class="setUserLogin__confirmPassword_text">确认密码：</span>
      <span class="setUserLogin__confirmPassword_tips">{{confirmPasswordNull? confirmPasswordNullTips : ''}}</span>
      <div class="setUserLogin__confirmPassword_input">
        <el-input
        type="password"
        placeholder="请再次确认登录密码"
        v-model="confirmPassword">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../../store'
export default {
  name: 'setUserLogin',
  created(){
    //清空之前的用户名查询结果
    store.state.user.userInfo.usernameExist = false
  },
  computed:{    
      usernameExist: function(){
        return store.state.user.userInfo.usernameExist
      }
  },
  data(){
    return {
      username:this.commitUsername,
      password:this.commitPassword,
      confirmPassword:this.commitConfirmPassword,
      passwordDifferTips: '两次输入的密码不一致',
      passwordNullTips:'密码不能为空',
      confirmPasswordNullTips:'请再次确认密码',
      usernameNullTips:'用户名不能为空',
      usernameErrorTips:'4到16位（字母，数字，下划线，减号）',
      passwordErrorTips:'密码不能含有非法字符，长度在4-10之间',
      usernameExistTips:'用户名已存在',

    }
  },
  
  props:[
    'passwordDiffer',
    'passwordNull',
    'usernameNull',
    'confirmPasswordNull',
    'commitPassword',
    'commitUsername',
    'commitConfirmPassword',
    'usernameError',
    'passwordError',
  ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .setUserLogin
    padding-top .5rem
    &__username
      padding-bottom .2rem
      &_input
        padding-top .2rem
      &_tips
        color red
    &__password
      padding-bottom .2rem
      &_tips
        color red
      &_input
        padding-top .2rem
    &__confirmPassword
      &_tips
        color red
      &_input
        padding-top .2rem   
</style>
