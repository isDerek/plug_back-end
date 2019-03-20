import { getAllDeviceStatusInfo } from '../../../api/getAllDeviceStatusInfo'
import { STATUS_EVENT } from '../../mutation-types'
import { putDeviceStatusInfo } from '../../../api/putDeviceStatusInfo'
const state = {
  // deviceStatus: [
  //   {
  //     date: '2016-05-12',
  //     deviceID: '0',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     name: '王小虎',
  //     deviceAddress: 'xxxxxxxxxxxx',
  //     tag: '家'
  //   },
  //   {
  //     date: '2016-05-02',
  //     deviceID: '0',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     name: '王小虎',
  //     deviceAddress: 'xxxx',
  //     tag: '家'
  //   },
  //   {
  //     date: '2016-05-02',
  //     deviceID: '0',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     name: '王小虎',
  //     deviceAddress: 'xxxx',
  //     tag: '家'
  //   },
  //   {
  //     date: '2016-05-02',
  //     deviceID: '0',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     name: '王小虎',
  //     deviceAddress: 'xxxx',
  //     tag: '家'
  //   },
  //   {
  //     date: '2016-05-02',
  //     deviceID: '0',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     name: '王小虎',
  //     deviceAddress: 'xxxx',
  //     tag: '家'
  //   },
  //   {
  //     date: '2016-05-02',
  //     deviceID: '0',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     name: '王小虎',
  //     deviceAddress: 'xxxx',
  //     tag: '家'
  //   },
  //   {
  //     date: '2016-05-02',
  //     deviceID: '0',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     name: '王小虎',
  //     deviceAddress: 'xxxx',
  //     tag: '家'
  //   },
  //   {
  //     date: '2016-05-02',
  //     deviceID: '0',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     name: '王小虎',
  //     deviceAddress: 'xxxx',
  //     tag: '家'
  //   },
  //   {
  //     date: '2016-05-04',
  //     deviceID: '1',
  //     deviceIP: '192.168.1.123',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '365天24小时60分60秒',
  //     vendor: 'xxxx有限公司',
  //     name: '王小虎',
  //     deviceAddress: 'xxxx',
  //     tag: '公司'
  //   },
  //   {
  //     date: '2016-05-03',
  //     deviceID: '2',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     name: '王小虎',
  //     deviceAddress: 'xxxx',
  //     tag: '家'
  //   },
  //   {
  //     date: '2016-05-03',
  //     name: '王小虎',
  //     deviceID: '3',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     deviceAddress: 'xxxx',
  //     tag: '公司'
  //   },
  //   {
  //     date: '2016-05-03',
  //     name: '王小虎',
  //     deviceID: '3',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     deviceAddress: 'xxxx',
  //     tag: '公司'
  //   },
  //   {
  //     date: '2016-05-03',
  //     name: '王小虎',
  //     deviceID: '3',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     deviceAddress: 'xxxx',
  //     tag: '公司'
  //   },
  //   {
  //     date: '2016-05-03',
  //     name: '王小虎',
  //     deviceID: '3',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     deviceAddress: 'xxxx',
  //     tag: '公司'
  //   },
  //   {
  //     date: '2016-05-03',
  //     name: '王小虎',
  //     deviceID: '3',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     deviceAddress: 'xxxx',
  //     tag: '公司'
  //   },
  //   {
  //     date: '2016-05-03',
  //     name: '王小虎',
  //     deviceID: '3',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     deviceAddress: 'xxxx',
  //     tag: '公司'
  //   },
  //   {
  //     date: '2016-05-03',
  //     name: '王小虎',
  //     deviceID: '3',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     deviceAddress: 'xxxx',
  //     tag: '123'
  //   },
  //   {
  //     date: '2016-05-03',
  //     name: '王小虎',
  //     deviceID: '3',
  //     deviceIP: '192.168.1.1',
  //     deviceMAC: '000102030405',
  //     deviceTimer: '1天',
  //     vendor: 'xxxx有限公司',
  //     deviceAddress: 'xxxx',
  //     tag: '公司'
  //   }
  // ],
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
