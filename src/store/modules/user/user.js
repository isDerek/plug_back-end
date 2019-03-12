
import {getUserLogin} from '../../../api/getUserLogin'
import {putUserLogout} from '../../../api/putUserLogout'
import {postUserInfo} from '../../../api/postUserInfo'
import {getUsername} from '../../../api/getUsername'
import { localStore } from '../../../utils/localStore'
import router from '@/router'
import {STATUS_EVENT} from '../../mutation-types'


export const USER_STATUS = {
    IDLE: 'idle',
    LOGIN: 'login',
    INVALID: 'invalid',
  }

const state = localStore.get('state') || {
    userInfo: {
        usernameExist: false
    },
    toast: {
      text: '',
      showTime: 1000,
      display: false
    },
    userStatus: USER_STATUS.IDLE,
    token: ''
}

const actions = {
    getUserLogin({commit},data){
        getUserLogin(data).then((res)=>{
            commit(STATUS_EVENT.LOGIN_SUCESS, res);
        }).catch(()=>{
            commit(STATUS_EVENT.LOGIN_FAIL)
        })
    },

    putUserLogout({commit},data){
        putUserLogout(data).then((res)=>{
            commit(STATUS_EVENT.LOGOUT_SUCESS, res)
        }).catch(()=>{
            commit(STATUS_EVENT.LOGOUT_FAIL)
        })
    },

    postUserInfo({commit},data){
        return new Promise ((resolve,reject)=>{
            postUserInfo(data).then((res)=>{
                commit(STATUS_EVENT.REGISTER_USER, res)
                resolve()
            }).catch(()=>{
                reject()
            })
        })
    },

    getUsername({commit},data){
        return new Promise ((resovle,reject)=>{
            getUsername(data).then((res)=>{
                commit(STATUS_EVENT.CHECK_USERNAME_SUCCESS, res)
                resovle()
            }).catch(()=>{
                commit(STATUS_EVENT.CHECK_USERNAME_FAIL)
                reject()
            })
        })
    },
}

const mutations = {
    [STATUS_EVENT.LOGIN_SUCESS](state, userInfo){
        let userStatus = ''
        userStatus = USER_STATUS.LOGIN
        // 将所有可枚举属性的值从一个或多个源对象复制到目标对象
        state.userInfo = Object.assign({}, state.userInfo, userInfo)
        // state.token = userInfo.token
        state.userStatus = userStatus
        if(userStatus === USER_STATUS.LOGIN){
            router.replace({path:'/home'})
        }
    },
    [STATUS_EVENT.LOGIN_FAIL](state){
        state.userStatus = USER_STATUS.INVALID;
    },

    [STATUS_EVENT.LOGOUT_SUCESS](state, userInfo){
        let userStatus = ''
        userStatus = USER_STATUS.IDLE
        // 将所有可枚举属性的值从一个或多个源对象复制到目标对象
        state.userInfo = Object.assign({}, state.userInfo, userInfo)
        // state.token = userInfo.token
        state.userStatus = userStatus
        
        if(userStatus === USER_STATUS.IDLE){
            router.replace({path:'/login'})
        }
    },
    [STATUS_EVENT.LOGOUT_FAIL](state){
        state.userStatus = USER_STATUS.INVALID;
    },

    [STATUS_EVENT.REGISTER_USER](state, userInfo){
        let userStatus = ''
        userStatus = USER_STATUS.IDLE
        // 将所有可枚举属性的值从一个或多个源对象复制到目标对象
        state.userInfo = Object.assign({}, state.userInfo, userInfo)
        state.userStatus = userStatus            
    },

    [STATUS_EVENT.CHECK_USERNAME_SUCCESS](state){
        let params = {
            usernameExist: true
        }
        state.userInfo = Object.assign({}, state.userInfo, params)
    },

    [STATUS_EVENT.CHECK_USERNAME_FAIL](state){
        let params = {
            usernameExist: false
        }
        state.userInfo = Object.assign({}, state.userInfo, params)
    },

}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters: {
        getUserStatus: state =>{
            return state.userStatus;
        },
        getUserInfo: state =>{
            return state.userInfo;
        },
    }
}