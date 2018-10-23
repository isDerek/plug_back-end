<template>
  <div class="content">
    <form class="content__form" method="post" action="/api/v1/user">
      <div class="content__form__username">
        <p class="content__form__username_text">请输入用户名:</p>
        <input class="content__form__username_ip" type="text" name="username" placeholder="请在这里输入用户名">
      </div>
      <input class="content__form__submit" type="submit" name="提交" value="提交">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .content
    background-image url(../../../../assets/images/login/lc_img.jpg)
    background-repeat no-repeat
    background-size 100% 100%
    height 10rem
    display flex
    flex-direction row-reverse
    justify-content center
    align-items center
    img
      width 100%
    &__form
      text-align center
      &__username
        padding-bottom .5rem
        &_text
          padding-bottom .2rem
          color white
        &_ip
          border .02rem solid #eee
          border-radius .1rem
      &__submit
        border .02rem solid #eee
        border-radius .1rem             



</style>