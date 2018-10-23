<template>
  <div class="manufacturerInfo">
    <div class="manufacturerInfo__header">
      <div class="manufacturerInfo__header__register">
        <el-button type="primary" >+ 注册厂商信息</el-button>
      </div>
      <div class="manufacturerInfo__header__ID">
        <span class="manufacturerInfo__header__ID_text">厂商 ID</span>
        <el-input v-model="inputID" placeholder="请输入内容" class="manufacturerInfo__header__ID_input"></el-input>
      </div>
      <div class="manufacturerInfo__header__Date">
        <span class="manufacturerInfo__header__Date_text">厂商注册日期</span>
        <div class="block manufacturerInfo__header__Date_content">
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
    <div class="manufacturerInfo__Table">
      <el-table
        :data="manufacturerInfo"
        style="width: 100%;height: 100%"
        max-height="500">
        <el-table-column
          fixed
          prop="registerDate"
          label="注册日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="manufacturerID"
          label="厂商编号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="agencyID"
          label="经销商序列号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="notifyAddress"
          label="推送地址"
          width="180">
        </el-table-column>
        <el-table-column
          prop="manufacturerName"
          label="厂商名称"
          width="250">
        </el-table-column>
        <el-table-column
          prop="updateDate"
          label="最新更新日期"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, manufacturerInfo)"
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
  name: "manufacturerInfo",
  components:{
    
  },
  data() {
      return {
        timeValue: '',  
        inputID:''   
      }
    },
    computed:{
      ...mapState('manufacturerInfo',{
        manufacturerInfo:state => state.manufacturerInfo
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
  .manufacturerInfo
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