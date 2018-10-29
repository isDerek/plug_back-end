import { postManufacturerInfo } from '../../../api/postManufacturerInfo'
import {STATUS_EVENT} from '../../mutation-types'
import { getAllManufacturerInfo } from '../../../api/getAllManufacturerInfo'
import { putManufacturerInfo } from '../../../api/putManufacturerInfo'
import { deleteManufacturerInfo } from '../../../api/deleteManufacturerInfo'


const state = {
    manufacturerInfo: []
}

const actions = {
    postManufacturerInfo({commit},data){
        return new Promise((resolve,reject)=>{
            postManufacturerInfo(data).then((res)=>{
                commit(STATUS_EVENT.CREATE_MANUFACTURERINFO, res)
                resolve();
            })
            .catch(()=>{

                reject();
            })
        })
    },

    putManufacturerInfo({commit},data){
        return new Promise((resolve,reject)=>{
            putManufacturerInfo(data).then((res)=>{
                commit(STATUS_EVENT.UPDATE_MANUFACTURERINFO, res)
                resolve();
            })
            .catch(()=>{

                reject();
            })
        })
    },

    deleteManufacturerInfo({commit},data){
        return new Promise((resolve,reject)=>{
            deleteManufacturerInfo(data).then((res)=>{
                commit(STATUS_EVENT.DELETE_MANUFACTURERINFO, res)
                resolve();
            })
            .catch(()=>{
                reject();
            })
        })
    },

    getAllManufacturerInfo({commit},data){
        getAllManufacturerInfo(data).then((res)=>{
            commit(STATUS_EVENT.CHECK_ALL_MANUFACTURERINFO, res)
        })
        .catch(()=>{
        })
    },
}

const mutations = {
    [STATUS_EVENT.CREATE_MANUFACTURERINFO](state, manufacturerInfo){
        state.manufacturerInfo = Object.assign({}, state.manufacturerInfo, manufacturerInfo)
    },

    [STATUS_EVENT.UPDATE_MANUFACTURERINFO](state, manufacturerInfo){
        
        state.manufacturerInfo = Object.assign({}, state.manufacturerInfo, manufacturerInfo)
    },

    [STATUS_EVENT.DELETE_MANUFACTURERINFO](state, res){
        console.log(res)
    },

    [STATUS_EVENT.CHECK_ALL_MANUFACTURERINFO](state, allManufacturerInfo){
        state.manufacturerInfo = allManufacturerInfo
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