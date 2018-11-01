import axios from 'axios'
import {ERR_TYPE, PlugError} from '../utils/PlugError'
import {msgId} from '../utils/toolFunc'
export async function getAllDeviceInfo() {
    const url = 'api/v1/getAllDeviceInfo'
    let resp = await axios.get(url,{
        params: {
            msgId: msgId
        }
    })
    let respData = resp.data
    // 校验是否为该会话响应
    if (respData[0].msgId === msgId){
        return respData
    }else{
        throw new PlugError(ERR_TYPE.API_RESP_ERR,respData.data.errMsg)
    }
}