<template>
  <div class="steps">
    <el-steps
      :active="active"
      finish-status="success"
      class="steps__header"
    >
      <el-step title="设置登录账号"></el-step>
      <el-step title="填写账号信息"></el-step>
      <el-step title="注册成功"></el-step>
    </el-steps>
    <set-user-login
      v-if="this.active == 0"
      ref="setUserLogin"
      :passwordDiffer=this.passwordDiffer
      :usernameNull=this.usernameNull
      :passwordNull=this.passwordNull
      :confirmPasswordNull=this.confirmPasswordNull
      :commitUsername=this.commitUsername
      :commitPassword=this.commitPassword
      :commitConfirmPassword=this.commitConfirmPassword
      :usernameError=this.usernameError
      :passwordError=this.passwordError
    />
    <set-user-info
      v-if="this.active ==1"
      ref="setUserInfo"
      :phoneNull=this.phoneNull
      :emailNull=this.emailNull
      :commitPhone=this.commitPhone
      :commitEmail=this.commitEmail
      :phoneError=this.phoneError
      :emailError=this.emailError
    />
    <success-register v-if="this.active ==3" />
    <el-button
      v-if="this.active!==3"
      style="margin-top: 12px;"
      @click="next"
    >下一步</el-button>
    <el-button
      v-if="this.active ==3"
      style="margin-top: 12px;"
      @click="registerSuccess"
    >完成</el-button>
  </div>
</template>

<script>
import setUserLogin from "./setUserLogin";
import successRegister from "./successRegister";
import setUserInfo from "./setUserInfo";
import store from "../../../store";
export default {
  name: "Steps",
  components: {
    setUserLogin,
    successRegister,
    setUserInfo
  },
  data () {
    return {
      // 设置账户登录信息
      usernameError: false,
      passwordError: false,
      passwordDiffer: false,
      passwordNull: false,
      usernameNull: false,
      confirmPasswordNull: false,
      commitUsername: "",
      commitPassword: "",
      commitConfirmPassword: "",
      // 设置账户个人信息
      phoneError: false,
      emailError: false,
      phoneNull: false,
      emailNull: false,
      commitPhone: "",
      commitEmail: "",

      active: 0,
      userInfo: {}
    };
  },
  methods: {
    next () {
      if (this.active === 0) {
        this.setUserLogin();
      } else if (this.active === 1) {
        this.setUserInfo();
      }
    },
    // 注册成功，重新刷新整个页面，会有一瞬间的空白页
    registerSuccess () {
      location.reload();
    },

    // 设置登录账户上传参数绑定的函数，对参数进行校验回传给设置登录账户组件
    setUserLogin () {
      this.usernameNull = false;
      this.passwordNull = false;
      this.confirmPasswordNull = false;
      this.passwordDiffer = false;
      this.usernameError = false;
      this.passwordError = false;
      this.commitUsername = this.$refs.setUserLogin.username;
      this.commitPassword = this.$refs.setUserLogin.password;
      this.commitConfirmPassword = this.$refs.setUserLogin.confirmPassword;
      // 校验用户名和密码是否符合正则校验，需传递给父组件
      let usernameValidate = /^[a-zA-Z0-9_-]{4,16}$/; //4到16位（字母，数字，下划线，减号）
      let passwordValidate = /^[a-zA-Z0-9]{4,10}$/; //密码不能含有非法字符，长度在4-10之间

      // 校验登录用户名不能为空，否则重新渲染设置账户组件
      if (this.commitUsername == "") {
        this.usernameNull = true;
      }
      // 校验登录密码不能为空，否则重新渲染设置账户组件
      if (this.commitPassword == "") {
        this.passwordNull = true;
      }
      // 检验确认密码不能为空，否则重新渲染设置账户组件
      if (this.commitConfirmPassword == "") {
        this.confirmPasswordNull = true;
      }
      // 检验密码与确认密码要一致，否则重新渲染设置账户组件
      if (this.commitPassword !== this.commitConfirmPassword) {
        this.passwordDiffer = true;
      }
      // 检验用户名存在且符合用户名正则，否则重新渲染设置账户组件
      if (!usernameValidate.test(this.commitUsername) && !this.usernameNull) {
        this.usernameError = true;
      }
      // 密码与确认密码一致，密码与确认密码不为空，密码符合正则，否则重新渲染设置账户组件
      if (
        !passwordValidate.test(this.commitPassword) &&
        !this.passwordDiffer &&
        !this.passwordNull &&
        !this.confirmPasswordNull
      ) {
        this.passwordError = true;
      }
      // 如果校验没问题，将参数回传给设置账户登录组件
      if (
        !(
          this.passwordDiffer ||
          this.passwordNull ||
          this.usernameNull ||
          this.confirmPasswordNull ||
          this.usernameError ||
          this.passwordError
        )
      ) {
        let userInfo = {
          username: this.commitUsername,
          password: this.commitPassword,
          confirmPassword: this.commitConfirmPassword
        };
        //通过以上校验好的用户名，密码和确认密码信息缓存再 useInfo 等待最后发送给服务器
        this.userInfo = Object.assign({}, this.userInfo, userInfo);
        // 去服务区查询用户名是否已经存在,仍然保留在当前组件页面
        store
          .dispatch("user/getUsername", userInfo)
          .then(() => { })
          .catch(() => {
            this.active = 1;
          });
      }
    },
    setUserInfo () {
      this.emailError = false;
      this.phoneError = false;
      this.emailNull = false;
      this.phoneNull = false;
      this.commitPhone = this.$refs.setUserInfo.phone;
      this.commitEmail = this.$refs.setUserInfo.email;
      let phoneValidate = /^1[34578]\d{9}$/;
      let emailValidate = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
      if (this.commitPhone == "") {
        this.phoneNull = true;
      }
      if (this.commitEmail == "") {
        this.emailNull = true;
      }
      if (!phoneValidate.test(this.commitPhone) && !this.phoneNull) {
        this.phoneError = true;
      }
      if (!emailValidate.test(this.commitEmail) && !this.emailNull) {
        this.emailError = true;
      }
      if (
        !(this.phoneNull | this.emailNull | this.phoneError | this.emailError)
      ) {
        let userInfo = {
          phone: this.commitPhone,
          email: this.commitEmail
        };
        this.userInfo = Object.assign({}, this.userInfo, userInfo);
        // 发送账户信息给服务器
        store
          .dispatch("user/postUserInfo", this.userInfo)
          .then(() => {
            this.active = 3;
          })
          .catch(() => { });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.steps {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>