import { postDeviceInfo } from '../../../api/postDeviceInfo'
import { STATUS_EVENT } from '../../mutation-types'
import { getAllDeviceInfo } from '../../../api/getAllDeviceInfo'
import { putDeviceInfo } from '../../../api/putDeviceInfo'
const state = {
    deviceRegister: []
}

const actions = {
    postDeviceInfo({ commit }, data) {
        return new Promise((resolve, reject) => {
            postDeviceInfo(data).then((res) => {
                commit(STATUS_EVENT.CREATE_DEVICE, res)
                resolve()
            })
                .catch(() => {
                    reject()
                })
        })

    },

    getAllDeviceInfo({ commit }, data) {
        getAllDeviceInfo(data).then((res) => {
            commit(STATUS_EVENT.CHECK_ALL_DEVICEINFO, res)
        })
            .catch(() => {

            })
    },

    putDeviceInfo({ commit }, data) {
        return new Promise((resolve, reject) => {
            putDeviceInfo(data).then((res) => {
                commit(STATUS_EVENT.UPDATE_DEVICEINFO, res)
                resolve()
            })
                .catch(() => {
                    reject()
                })
        })
    }
}

const mutations = {
    [STATUS_EVENT.CREATE_DEVICE](state, data) {
        state.deviceRegister = Object.assign([], state.deviceRegister, data)
    },

    [STATUS_EVENT.CHECK_ALL_DEVICEINFO](state, data) {
        state.deviceRegister = data
    },

    [STATUS_EVENT.UPDATE_DEVICEINFO](state, data) {
        state.deviceRegister = Object.assign([], state.deviceRegister, data)
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters: {
    }
}