<template>
  <div class="containter">
    <login-header></login-header>
    <login-content></login-content>
    <login-footer></login-footer>
  </div>
</template>

<script>
import LoginHeader from './components/Header'
import LoginContent from './components/Content'
import LoginFooter from './components/Footer'
export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginContent,
    LoginFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .containter
    height 100%
    width 100%
</style>
