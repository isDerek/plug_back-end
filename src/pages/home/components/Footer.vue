<template>
  <div class="footer">
    <div class="footer__links">
      <a href="http://www.baidu.com" class="footer__links__text">百度</a>
      <a href="http://www.jd.com" class="footer__links__text">京东</a>
      <a href="http://www.taobao.com" class="footer__links__text">淘宝</a>
    </div>
    <div class="footer__copyright">
      Copyright © 2018 k.com All Right Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .footer
    display flex
    justify-content center
    align-items center
    flex-direction column
    border-top .1rem solid #ededed 
    &__links
      padding-top .2rem
      padding-bottom .2rem
      &__text
        padding-left .5rem
        padding-right .5rem
        color black
</style>