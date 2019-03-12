import axios from 'axios'
import {ERR_TYPE, PlugError} from '../utils/PlugError'
import {msgId} from '../utils/toolFunc'
export async function postUserInfo(params) {
    const url = '/api/v1/postUserInfo'
    let resp = await axios.get(url,{
        params: {
            username: params.username,
            password: params.password,
            confirmPassword: params.confirmPassword,
            phone: params.phone,
            email: params.email,
            msgId: msgId
        }
    })
    let respData = resp.data
    // 校验是否为该会话响应
    if (respData.msgId === msgId){
        return respData
    }else{
        throw new PlugError(ERR_TYPE.API_RESP_ERR,respData.data.errMsg)
    }
}