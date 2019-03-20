import axios from 'axios'
import { ERR_TYPE, PlugError } from '../utils/PlugError'
import { msgId } from '../utils/toolFunc'
export async function putDeviceStatusInfo(params) {
  const url = 'api/v1/putDeviceStatusInfo'
  let resp = await axios.get(url, {
    params: {
      status: params.status,
      timeStart: params.timeStart,
      timeStop: params.timeStop,
      deviceID: params.deviceID,
      msgId: msgId
    }
  })
  let respData = resp.data
  // 校验是否为该会话响应
  if (respData.msgId === msgId) {
    return respData
  } else {
    throw new PlugError(ERR_TYPE.API_RESP_ERR, respData.data.errMsg)
  }
}
