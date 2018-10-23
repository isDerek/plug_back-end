<template>
    <div class="header">
        <div class="header__imgs">
          <img class="header__imgs__first" src="../../../assets/images/login/lh_img.jpg" alt="">
        </div>
        <div class="header__text">欢迎登陆</div>
    </div>
</template>

<script>
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
        height 8%
        align-items center
        &__imgs
            display flex
            width 5%
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
            font-size .3rem
            padding-left .2rem
</style>