<template>
  <div>
    <forget-pw-header/>
    <forget-pw-content/>
    <forget-pw-footer/> 
  </div>
</template>

<script>
import ForgetPwHeader from './components/Header'
import ForgetPwContent from './components/Content'
import ForgetPwFooter from './components/Footer'
export default {
  name: 'ForgetPW',
  components: {
    ForgetPwHeader,
    ForgetPwContent,
    ForgetPwFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
