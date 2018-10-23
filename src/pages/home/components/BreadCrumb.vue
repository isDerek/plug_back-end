<template >
  <div class="breadCrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-if="title[0]">
      {{title[0]}}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="title[1]">{{title[1]}}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="title[2]">{{title[2]}}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="title[3]">{{title[3]}}</el-breadcrumb-item>
    </el-breadcrumb>    
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props:['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .breadCrumb
    padding-left .4rem
</style>