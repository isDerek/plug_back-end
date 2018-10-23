import axios from 'axios'
import {ERR_TYPE, PlugError} from '../utils/PlugError'
import {msgId} from '../utils/toolFunc'
export async function getUserLogin(params) {
    const url = 'api/v1/getUserLogin'
    let resp = await axios.get(url,{
        params: {
            username: params.username,
            password: params.password,
            msgId: msgId
        }
    })
    let respData = resp.data
    // 1 代表在线状态, 校验是否为该会话响应
    if (respData.status === 1 && respData.token === msgId){
        return respData
    }else{
        throw new PlugError(ERR_TYPE.API_RESP_ERR,respData.data.errMsg)
    }
}