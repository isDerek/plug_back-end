<template>
  <div class="content">
    <div class="content__user">
      <p class="content__user_title">共享插座后台管控系统</p>
      <span v-if="userStatus === 'invalid'" class="content__user_errorTips">用户名或密码错误</span>
      <div class="content__user_form">
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
        <el-button plain @click="getUserLogin">登陆</el-button>
        <div class="content__user_form__ext">
          <el-button type="text" class="content__user_form__ext__register" @click="userRegister">注册</el-button>
          <span class="content__user_form__ext__forgetPassword" @click="forgetPassword">忘记密码</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import UserRegister from './UserRegister'
export default {
  name: 'Content',
  components:{
    UserRegister
  },
  data() {
    return{
      username:'',
      password:''
    }
  },
  computed:{
    ...mapGetters('user',{
      userStatus:'getUserStatus'
    })
  },
  methods:{
    userRegister(){
        this.$alert(<user-register></user-register>, '用户注册', {
          showConfirmButton: false,
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
      &_errorTips
        padding-bottom .2rem
        color red
      &_title
        font-size .5rem
        margin-bottom .5rem
      &_form
        width 50%
        display flex
        flex-direction column
        align-items center
        &__username
          padding-bottom .1rem
        &__password
          padding-bottom .1rem
        &__ext
          width 100%
          font-size .05rem
          padding-top .1rem
          display flex
          justify-content flex-end
          &__register
            padding-right .1rem
</style>