/** Class 创建自定义错误类. */

export const ERR_TYPE =   {
    DEFAULT: {
      code: 1,
      errMsg: '默认错误'
    },
    SUCCESS: {
      code: 200,
      errMsg: 'success'
    },
    API_RESP_ERR: {
      code: 400,
      errMsg: '获取响应失败，请稍后重试'
    },
  };
  
  export class PlugError extends Error {
    /**
     * 创建
     * @param {number} errType -错误类型.
     * @param {string} message - 错误消息.
     * @param params - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error.
     */
  
    constructor(errType = ERR_TYPE.DEFAULT, message = errType.errMsg, ...params) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(message,...params);
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, PlugError);
      }
      this.errCode = errType.code;
      this.date = new Date();
    }
  }
  
  