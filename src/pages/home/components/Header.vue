<template>
  <div class="header">
    <div class="header__left">
      <img
        src="../../../assets/images/home/logo.png"
        alt=""
        class="header__left_img"
      >
      <p class="header__left_title">基于前后端分离的后台管控系统</p>
    </div>
    <div class="header__right">
      <div class="header__right__user-title">
        <img
          class="header__right__user-title__img"
          src="../../../assets/images/login/lh_img.jpg"
          alt=""
        >
        <div class="el-dropdown-Content">
          <el-dropdown
            style="cursor:pointer"
            @command="handleCommand"
          >
            <span class="el-dropdown-link">
              {{userInfo.username}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item divided>个人信息</el-dropdown-item> -->
              <el-dropdown-item
                command="exit"
                divided
              >退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  methods: {
    handleCommand (command) {
      if (command === 'exit') {
        let params = {
          'username': this.userInfo.username
        }
        this.$store.dispatch('user/putUserLogout', params)
      }
    }
  },
  computed: {
    ...mapGetters('user', {
      userInfo: 'getUserInfo'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.header {
  display: flex;
  height: 10%;
  background-color: #cdcdcd;

  &__left {
    display: flex;
    height: 100%;
    width: 30%;
    padding-left: 0.4rem;
    align-items: center;

    &_img {
      max-height: 50%;
      max-width: 50%;
    }
  }

  &__right {
    width: 70%;
    display: flex;
    justify-content: flex-end;

    &__user-title {
      display: flex;
      // flex-direction column
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      width: 40%;
      padding-right: 0.2rem;

      &__img {
        border-radius: 1rem;
        width: 1rem;
        height: 1rem;
        max-height: 70%;
        max-width: 70%;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>