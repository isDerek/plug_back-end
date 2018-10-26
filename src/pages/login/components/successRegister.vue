<template>
  <div class="successRegister">
      <div class="successRegister_text">恭喜您，注册成功</div>
  </div>
</template>

<script>
export default {
  name: 'successRegister',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .successRegister
    display flex
    justify-content center
    border-bottom .02rem solid #E6A23C
    &_text
      color #E6A23C
      font-size .5rem
      padding-top .3rem
      padding-bottom .3rem
</style>
