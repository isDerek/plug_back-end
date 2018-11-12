<template>
  <div class="content">
    <div class="content__user">
      <p class="content__user_title">共享插座后台管控系统</p>
      <div class="content__user_form">
        <span v-show="userStatus === 'invalid'" class="content__user_form_errorTips">用户名或密码错误</span>
        <el-input
        placeholder="请输入用户名"
        v-model="username"
        clearable class="content__user_form__username">
        </el-input>
        <el-input
        placeholder="请输入密码"
        v-model="password"
        type="password"
        clearable class="content__user_form__password">
        </el-input>
        <div class="content__usere_form__ccode">
          <el-input
          placeholder="验证码"
          v-model="vcode"
          clearable class="content__user_form__ccode_ipt">
          </el-input>
          <span class="content__user_form__ccode_text" @click="generatedCode">
          {{this.ccode}}
          </span>
        </div>
        <el-button class="content__user_form__btn-login" plain @click="checkCode">登陆</el-button>
        <div class="content__user_form__ext">
          <el-button type="text" class="content__user_form__ext__register" @click="userRegister">注册</el-button>
          <el-button type="text" class="content__user_form__ext__forgetPassword" @click="forgetPassword">忘记密码</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Steps from './Steps'
// import { getUserLogin } from '../../../api/getUserLogin';
export default {
  name: 'Content',
  components:{
    Steps
  },
  data() {
    return{
      username:'',
      password:'',
      ccode:'',
      vcode:''
    }
  },
  computed:{
    ...mapGetters('user',{
      userStatus:'getUserStatus'
    })
  },
  mounted(){
    this.generatedCode();
  },
  methods:{
    generatedCode () {
      const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      let code = ''
      for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * 36)
        code += random[index]
      }
      this.ccode = code
    },
    // 判断验证码是否输入准确
    checkCode () {
      let vcode = this.vcode
      vcode = vcode.toUpperCase()
      let ccode = this.ccode
      ccode = ccode.toUpperCase()
      if (vcode !== ccode) {
        this.$message.error('Please enter the correct verification code!')
        // this.$set(this.loginInfo, 'vcode', '')
        // this.$set(this.loginInfo, 'password', '')
      } else {
        this.getUserLogin();
      }
    },
    userRegister(){
        this.$alert(<steps></steps>, '用户注册', {
          showConfirmButton:false,
        });
      },
    forgetPassword(){
      console.log('forgetPassword');
    },
    getUserLogin(){
      //默认 get 方法，目前不支持 post
      let params = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('user/getUserLogin', params)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .content
    height 80%
    display flex
    justify-content center
    align-items center
    &__user
      display flex
      justify-content center
      align-items center
      flex-direction column
      width 30%
      height 60%
      border .2rem solid #ededed
      &_title
        font-size .5rem
        margin-bottom .7rem
      &_form
        width 50%
        display flex
        flex-direction column
        align-items center
        &_errorTips
          padding-bottom .1rem
          color red
        &__username
          padding-bottom .1rem
        &__password
          padding-bottom .1rem
        &__ccode
          flex-direction row
          &_ipt
            width 50%
            padding-bottom .1rem
          &_text
            display inline-block
            width 45%
            height .4rem
            margin-left .1rem
            padding-top .1rem
            text-align center
            background-color #ededed
        &__btn-login
          width 100%
          background-color #ededed
        &__ext
          width 100%
          font-size .05rem
          padding-top .1rem
          display flex
          justify-content flex-end
          &__register
            padding-right .1rem
</style>