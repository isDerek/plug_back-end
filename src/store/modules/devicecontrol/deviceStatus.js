import { getAllDeviceStatusInfo } from '../../../api/getAllDeviceStatusInfo'
import { STATUS_EVENT } from '../../mutation-types'
import { putDeviceStatusInfo } from '../../../api/putDeviceStatusInfo'
import { getFilterDeviceStatusInfo } from '../../../api/getFilterDeviceStatusInfo'
const state = {
  deviceStatus: [],
  pageSize: 9, //分页器每页展示的数量
  deviceStatusCurrentPage: 1 // 默认当前页
}

const actions = {
  getAllDeviceStatusInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      getAllDeviceStatusInfo(data)
        .then(res => {
          commit(STATUS_EVENT.CHECK_ALL_DEVICE_STATUS, res)
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  },
  getFilterDeviceStatusInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      getFilterDeviceStatusInfo(data)
        .then(res => {
          commit(STATUS_EVENT.FILTER_DEVICEINFO_STATUS, res)
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  },
  putDeviceStatusInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      putDeviceStatusInfo(data)
        .then(res => {
          commit(STATUS_EVENT.UPDATE_DEVICEINFO_STATUS, res)
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  }
}

const mutations = {
  [STATUS_EVENT.CHECK_ALL_DEVICE_STATUS](state, data) {
    state.deviceStatus = Object.assign([], state.deviceStatus, data)
  },
  [STATUS_EVENT.UPDATE_DEVICEINFO_STATUS](state, data) {
    state.deviceStatus = Object.assign([], state.deviceStatus, data)
  },
  [STATUS_EVENT.FILTER_DEVICEINFO_STATUS](state, data) {
    state.deviceStatus = data
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters: {
    getDeviceStatusTotalSize: state => {
      return state.deviceStatus.length //设备状态数据总数量
    },
    getDeviceStatus: state => {
      // if(state.deviceStatusCurrentPage && state.deviceStatusCurrentPage != 0){
      let startIndex = (state.deviceStatusCurrentPage - 1) * state.pageSize
      let endIndex = state.deviceStatusCurrentPage * state.pageSize
      return state.deviceStatus.slice(startIndex, endIndex)
      // }
    }
  }
}
