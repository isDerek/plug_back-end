<template>
  <div class="manufacturerInfo">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <RegisterManufacturerInfo
        v-if="registerVisible"
        v-on:dialogCancel="dialogCancel"
      />
      <EditManufacturerInfo
        v-if="editVisible"
        v-on:dialogCancel="dialogCancel"
        :order_id="order_id"
        :manufacturerName="manufacturerName"
        :notifyAddress="notifyAddress"
      />
    </el-dialog>

    <div class="manufacturerInfo__header">
      <div class="manufacturerInfo__header__register">
        <el-button
          type="primary"
          @click="registerDialog"
        >+ 注册厂商信息</el-button>
      </div>
      <div class="manufacturerInfo__header__ID">
        <span class="manufacturerInfo__header__ID_text">厂商 ID</span>
        <el-input
          v-model="inputID"
          placeholder="请输入厂商编号"
          class="manufacturerInfo__header__ID_input"
        ></el-input>
      </div>
      <div class="manufacturerInfo__header__Name">
        <span class="manufacturerInfo__header__Name_text">厂商名称</span>
        <el-input
          v-model="inputName"
          placeholder="请输入厂商名称"
          class="manufacturerInfo__header__Name_input"
        ></el-input>
      </div>
      <el-button
        icon="el-icon-search"
        circle
        @click="filterHandler"
      ></el-button>
    </div>
    <div class="manufacturerInfo__Table">
      <el-table
        :data="manufacturerInfo"
        style="width: 100%;height: 100%"
        height=100%
        align="center"
      >

        <el-table-column
          sortable
          prop="order_id"
          label="厂商编号"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="manufacturer_name"
          label="厂商名称"
          width="200"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="agency_id"
          label="经销商序列号"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="notify_address"
          label="推送地址"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          sortable
          prop="create_time"
          label="注册日期"
          width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column
          sortable
          prop="update_time"
          label="最新更新日期"
          width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="120"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="editDialog(scope.row)"
            >编辑</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, manufacturerInfo)"
              type="text"
              size="small"
            >
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
  components: {
    RegisterManufacturerInfo,
    EditManufacturerInfo
  },
  data () {
    return {
      inputName: '',
      inputID: '',
      dialogVisible: false,
      editVisible: false,
      registerVisible: false,
    }
  },
  // 渲染页面前，向服务器加载数据
  created () {
    this.$store.dispatch('manufacturerInfo/getAllManufacturerInfo')
  },
  computed: {
    ...mapState('manufacturerInfo', {
      manufacturerInfo: state => state.manufacturerInfo
    })
  },
  methods: {
    editDialog (row) {
      this.order_id = row.order_id;
      this.manufacturerName = row.manufacturer_name;
      this.notifyAddress = row.notify_address;
      this.registerVisible = false;
      this.dialogVisible = true;
      this.editVisible = true;
    },
    registerDialog () {
      this.editVisible = false;
      this.dialogVisible = true;
      this.registerVisible = true;
    },
    dialogCancel () {
      this.editVisible = false;
      this.registerVisible = false;
      this.dialogVisible = false;
    },
    deleteRow (index, rows) {
      this.$store.dispatch('manufacturerInfo/deleteManufacturerInfo', rows[index])
        .then(() => {
          rows.splice(index, 1)
        }).catch(() => {

        })
    },
    filterHandler () {
      let params = {
        manufacturerName: this.inputName,
        manufacturerID: this.inputID
      }
      this.$store.dispatch('manufacturerInfo/getFilterManufacturerInfo', params)
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.manufacturerInfo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &__register {
      padding-left: 0.1rem;
    }

    &__ID {
      width: 30%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      &_text {
        padding-right: 0.2rem;
      }

      &_input {
        width: 50%;
      }
    }

    &__Name {
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      width: 30%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &_text {
        width: 30%;
      }
    }
  }

  &__Table {
    display: flex;
    height: 90%;
  }
}
</style>