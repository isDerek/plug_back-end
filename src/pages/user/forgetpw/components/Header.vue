<template>
  <div class="header">
      <router-link to="/" class="header__imgs">
          <img class="header__imgs__first" src="../../../../assets/images/login/lh_img.jpg" alt="">
      </router-link>
      <div class="header__text">这么不小心，忘记密码了</div>
  </div>
</template>

<script>
// import Router from 'vue-router'
// Vue.use(Router)
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .header
        display flex
        background-color #eeeeee
        width 100%
        height 4rem
        align-items center
        &__imgs
            display flex
            width 15%
            height 100%
            justify-content center
            align-items center
            &__first
                max-width 100%
                max-height 80%
                border-radius 1rem
        &__text
            width 85%
            font-family Georgia, serif
            font-size 0.5rem
</style>