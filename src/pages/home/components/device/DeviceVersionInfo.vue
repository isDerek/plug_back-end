<template>
  <div class="deviceVersionInfo">
    <div class="deviceVersionInfo__header">
      <div class="deviceVersionInfo__header__register">
        <el-button type="primary" >+ 上传设备版本信息</el-button>
      </div>
      <div class="deviceVersionInfo__header__ID">
        <span class="deviceVersionInfo__header__ID_text">设备版本 ID</span>
        <el-input v-model="inputID" placeholder="请输入内容" class="deviceVersionInfo__header__ID_input"></el-input>
      </div>
      <div class="deviceVersionInfo__header__Date">
        <span class="deviceVersionInfo__header__Date_text">设备版本上传日期</span>
        <div class="block deviceVersionInfo__header__Date_content">
          {{timeValue}}
          <el-date-picker
            v-model="timeValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <el-button icon="el-icon-search" circle @click="filterHandler"></el-button>      
      </div>
      
    </div>
    <div class="deviceVersionInfo__Table">
      <el-table
        :data="deviceVersionInfo"
        style="width: 100%;height: 100%"
        max-height="500">
        <el-table-column
          prop="deviceVersionID"
          label="设备版本 ID"
          width="100">
        </el-table-column>
        <el-table-column
          prop="manufacturerID"
          label="厂商编号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="versionNumber"
          label="版本号"
          width="200">
        </el-table-column>
        <el-table-column
          prop="versionSize"
          label="版本尺寸"
          width="120">
        </el-table-column>
        <el-table-column
          prop="versionValidate"
          label="设备校验值"
          width="150">
        </el-table-column>
        <el-table-column
          prop="versionInfo"
          label="版本描述信息"
          width="150">
        </el-table-column>
        <el-table-column
          prop="versionUpdateTime"
          label="版本上传时间"
          width="150">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, deviceVersionInfo)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "DeviceVersionInfo",
  components:{
    
  },
  data() {
      return {
        timeValue: '',  
        inputID:''   
      }
    },
    computed:{
      ...mapState('deviceVersionInfo',{
        deviceVersionInfo:state => state.deviceVersionInfo
      })
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      filterHandler(value, row, column){
        console.log(column);
        const property = column['manufacturerID'];
        return row[property] === value;
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .deviceVersionInfo
    padding-top .2rem
    width 100%
    height 100%
    display flex
    flex-direction column
    &__header
      width 100%
      display flex
      flex-direction row
      padding-bottom .2rem
      &__register
        padding-left .1rem
      &__ID
        width 30%
        display flex
        justify-content flex-end
        align-items center
        &_text
          padding-right .2rem
        &_input
          width 50%
      &__Date
        padding-left .2rem
        width 50%
        display flex
        justify-content flex-start
        align-items center
        &_text
          padding-right .2rem
        &_content
          padding-right .2rem
    &__Table
      display flex
      height 100%
</style>