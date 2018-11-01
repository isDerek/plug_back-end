import { postManufacturerInfo } from '../../../api/postManufacturerInfo'
import {STATUS_EVENT} from '../../mutation-types'
import { getAllManufacturerInfo } from '../../../api/getAllManufacturerInfo'
import { putManufacturerInfo } from '../../../api/putManufacturerInfo'
import { deleteManufacturerInfo } from '../../../api/deleteManufacturerInfo'
import { getFilterManufacturerInfo } from '../../../api/getFilterManufacturerInfo'


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

    getFilterManufacturerInfo({commit},data){
        getFilterManufacturerInfo(data).then((res)=>{
            commit(STATUS_EVENT.FILTER_ALL_MANUFACTURERINFO_SUCCESS,res)
        })
        .catch(()=>{
            commit(STATUS_EVENT.FILTER_ALL_MANUFACTURERINFO_FAIL)
        })
    }
}

const mutations = {
    [STATUS_EVENT.CREATE_MANUFACTURERINFO](state, manufacturerInfo){
        state.manufacturerInfo = Object.assign([], state.manufacturerInfo, manufacturerInfo)
    },

    [STATUS_EVENT.UPDATE_MANUFACTURERINFO](state, manufacturerInfo){
        
        state.manufacturerInfo = Object.assign([], state.manufacturerInfo, manufacturerInfo)
    },

    [STATUS_EVENT.DELETE_MANUFACTURERINFO](state,res){
    // 不进行任何操作，数据已经从数据库删除，并且在前端页面已经删除该行
        console.log(res)
    },

    [STATUS_EVENT.CHECK_ALL_MANUFACTURERINFO](state, allManufacturerInfo){
        state.manufacturerInfo = allManufacturerInfo
    },

    [STATUS_EVENT.FILTER_ALL_MANUFACTURERINFO_SUCCESS](state, filterManufacturerInfo){
        state.manufacturerInfo = filterManufacturerInfo
    },

    [STATUS_EVENT.FILTER_ALL_MANUFACTURERINFO_FAIL](state){
        state.manufacturerInfo = []
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