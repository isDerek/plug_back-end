<template>
  <div class="manufacturerInfo">
    <div class="manufacturerInfo__header">
      <div class="manufacturerInfo__header__register">
        <el-button type="primary" @click="registerManufacturerInfo">+ 注册厂商信息</el-button>
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
        border
        :data="manufacturerInfo"
        style="width: 100%;height: 100%"
        height=100%>
        <el-table-column
          fixed
          prop="order_id"
          label="厂商编号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="manufacturer_name"
          label="厂商名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="agency_id"
          label="经销商序列号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="notify_address"
          label="推送地址"
          width="180">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="注册日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="update_time"
          label="最新更新日期"
          width="150">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editManufacturerInfo">编辑</el-button>
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
import RegisterManufacturerInfo from './RegisterManufacturerInfo'
import EditManufacturerInfo from './EditManufacturerInfo'
export default {
  name: "manufacturerInfo",
  components:{
    RegisterManufacturerInfo,
    EditManufacturerInfo
  },
  data() {
      return {
        timeValue: '',  
        inputID:''   
      }
    },
    // 渲染页面前，向服务器加载数据
    created(){
      this.$store.dispatch('manufacturerInfo/getAllManufacturerInfo')
    },
    computed:{
      ...mapState('manufacturerInfo',{
        manufacturerInfo:state => state.manufacturerInfo
      })
    },
    methods: {
      deleteRow(index, rows) {
        console.log(rows[index])
        this.$store.dispatch('manufacturerInfo/deleteManufacturerInfo',rows[index])
        rows.splice(index, 1);
       
        
      },
      filterHandler(value, row, column){
        console.log(column);
        const property = column['manufacturerID'];
        return row[property] === value;
      },
      editManufacturerInfo(){
        this.$alert(<EditManufacturerInfo/>, '编辑厂商信息', {
          showConfirmButton:false,
        });        
      },
      registerManufacturerInfo(){
        this.$alert(<RegisterManufacturerInfo/>, '注册厂商信息', {
          showConfirmButton:false,
        });
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .manufacturerInfo
    width 100%
    height 100%
    display flex
    flex-direction column
    &__header
      height 20% 
      width 100%
      display flex
      flex-direction row
      justify-content center
      align-items center
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
      height 80%
</style>