import axios from 'axios'
import {ERR_TYPE, PlugError} from '../utils/PlugError'
import {msgId} from '../utils/toolFunc'
export async function deleteDeviceRegisterInfo(params) {
    const url = 'api/v1/deleteDeviceRegisterInfo'
    let resp = await axios.get(url,{
        params: {
            deviceID: params.device_id,
            msgId: msgId
        }
    })
    let respData = resp.data
    // 校验是否为该会话响应
    console.log(respData)
    if (respData === msgId){
        return respData
    }else{
        throw new PlugError(ERR_TYPE.API_RESP_ERR,respData.data.errMsg)
    }
}