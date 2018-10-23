import {localStore} from '../../utils/localStore'

export const persistentStore = store=>{
  // 当 store 数据改变时触发的回调函数
    store.subscribe((mutation,state)=>{
        // 每次 mutation 之后调用
        // mutation 的格式为 {type, payload}
      localStore.set('state',state.user)
    })
}