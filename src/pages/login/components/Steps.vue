<template>
  <div class="steps">
    <el-steps :active="active" finish-status="success" class="steps__header">
        <el-step title="设置登录账号"></el-step>
        <el-step title="填写账号信息"></el-step>
        <el-step title="注册成功"></el-step>
    </el-steps>
    <set-user-login @setUserLogin = 'setUserLogin' v-if="this.active == 0" 
    :passwordDiffer='this.passwordDiffer' 
    :usernameNull='this.usernameNull'
    :passwordNull='this.passwordNull'
    :confirmPasswordNull='this.confirmPasswordNull'
    :commitUsername='this.commitUsername'
    :commitPassword='this.commitPassword'
    :commitConfirmPassword='this.commitConfirmPassword'
    />
    <set-user-info v-if="this.active ==1"
    />
    <success-register v-if="this.active ==2"/>
    <el-button v-if="this.active!==3" style="margin-top: 12px;" @click="next">下一步</el-button>
    <el-button v-if="this.active ==3" style="margin-top: 12px;" @click="next">完成</el-button>
  </div>
</template>

<script>
import setUserLogin from './setUserLogin'
import successRegister from './successRegister'
import setUserInfo from './setUserInfo'
import store from '../../../store'
export default {
    name: 'Steps',
    components:{
      setUserLogin,
      successRegister,
      setUserInfo
    },
    data() {
      return {
        passwordDiffer: false,
        passwordNull: false,
        usernameNull: false,
        confirmPasswordNull: false,
        commitUsername: '',
        commitPassword:'',
        commitConfirmPassword:'',
        active: 0,
      };
    },
    methods: {
      next() {
        if(this.active !==1){
        if (this.active++ > 2) this.active = 0;
        }else{
          this.active = 3
        }
      },

      setUserLogin(username,password,confirmPassword){
        this.usernameNull = false
        this.passwordNull = false
        this.confirmPasswordNull = false
        this.passwordDiffer = false
        this.commitUsername = username
        this.commitPassword = password
        this.commitConfirmPassword = confirmPassword
        if(username ==  ''){
          this.active = 0
          this.usernameNull = true
        }
        if(password == ''){
          this.active = 0
          this.passwordNull = true
        }
        if(confirmPassword == ''){
          this.active = 0
          this.confirmPasswordNull = true
        }
        if(password !== confirmPassword){
          this.active = 0
          this.passwordDiffer = true
        }
        if(!(this.passwordDiffer||this.passwordNull||this.usernameNull||this.confirmPasswordNull)){
          let userInfo = {
            username : this.commitUsername,
            password : this.commitPassword,
            confirmPassword : this.commitConfirmPassword
          }
          store.dispatch('user/postUserLogin',userInfo)

        }
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .steps
    display flex
    flex-direction column
    justify-content center
    // align-items center

</style>