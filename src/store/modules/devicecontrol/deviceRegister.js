import { postDeviceRegisterInfo } from '../../../api/postDeviceRegisterInfo'
import { STATUS_EVENT } from '../../mutation-types'
import { getAllDeviceRegisterInfo } from '../../../api/getAllDeviceRegisterInfo'
import { putDeviceRegisterInfo } from '../../../api/putDeviceRegisterInfo'
import { getFilterDeviceRegisterInfo } from '../../../api/getFilterDeviceRegisterInfo'
import { deleteDeviceRegisterInfo } from '../../../api/deleteDeviceRegisterInfo'
const state = {
  deviceRegister: [],
  pageSize: 9, //分页器每页展示的数量
  deviceRegisterCurrentPage: 1 // 默认当前页
}

const actions = {
  postDeviceRegisterInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      postDeviceRegisterInfo(data)
        .then(res => {
          commit(STATUS_EVENT.CREATE_DEVICE_REGISTER, res)
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  },

  getAllDeviceRegisterInfo({ commit }, data) {
    getAllDeviceRegisterInfo(data)
      .then(res => {
        commit(STATUS_EVENT.CHECK_ALL_DEVICEINFO_REGISTER, res)
      })
      .catch(() => {})
  },

  putDeviceRegisterInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      putDeviceRegisterInfo(data)
        .then(res => {
          commit(STATUS_EVENT.UPDATE_DEVICEINFO_REGISTER, res)
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  },

  getFilterDeviceRegisterInfo({ commit }, data) {
    getFilterDeviceRegisterInfo(data)
      .then(res => {
        commit(STATUS_EVENT.FILTER_ALL_DEVICEINFO_REGISTER_SUCCESS, res)
      })
      .catch(() => {
        commit(STATUS_EVENT.FILTER_ALL_DEVICEINFO_REGISTER_FAIL)
      })
  },

  deleteDeviceRegisterInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      deleteDeviceRegisterInfo(data)
        .then(res => {
          commit(STATUS_EVENT.DELETE_DEVICEINFO_REGISTER, res)
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  }
}

const mutations = {
  [STATUS_EVENT.CREATE_DEVICE_REGISTER](state, data) {
    state.deviceRegister = Object.assign([], state.deviceRegister, data)
  },

  [STATUS_EVENT.CHECK_ALL_DEVICEINFO_REGISTER](state, data) {
    state.deviceRegister = data
  },

  [STATUS_EVENT.UPDATE_DEVICEINFO_REGISTER](state, data) {
    state.deviceRegister = Object.assign([], state.deviceRegister, data)
  },

  [STATUS_EVENT.FILTER_ALL_DEVICEINFO_REGISTER_SUCCESS](state, data) {
    state.deviceRegister = data
  },

  [STATUS_EVENT.FILTER_ALL_DEVICEINFO_REGISTER_FAIL](state) {
    state.deviceRegister = []
  },

  [STATUS_EVENT.DELETE_DEVICEINFO_REGISTER](state, res) {
    // 不进行任何操作，数据已经从数据库删除，并且在前端页面已经删除该行
    console.log(res)
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters: {
    deviceRegisterTotalSize: state => {
      return state.deviceRegister.length //设备状态数据总数量
    },
    getRegisterStatus: state => {
      console.log(state.deviceRegister.length)
      let startIndex = (state.deviceRegisterCurrentPage - 1) * state.pageSize
      let endIndex = state.deviceRegisterCurrentPage * state.pageSize
      return state.deviceRegister.slice(startIndex, endIndex)
    }
  }
}
