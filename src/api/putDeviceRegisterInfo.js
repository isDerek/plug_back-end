import axios from 'axios'
import { ERR_TYPE, PlugError } from '../utils/PlugError'
import { msgId } from '../utils/toolFunc'
export async function putDeviceRegisterInfo(params) {
  const url = 'api/v1/putDeviceRegisterInfo'
  let resp = await axios.get(url, {
    params: {
      deviceID: params.deviceID,
      versionID: params.versionID,
      manufacturerID: params.manufacturerID,
      deviceMAC: params.deviceMAC,
      deviceAddr: params.deviceAddr,
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
