import Vue from 'vue'
import Vuex from 'vuex'
import deviceStatus from './modules/devicecontrol/deviceStatus'
import manufacturerInfo from './modules/basicinfo/manufacturerInfo'
import deviceRegister from './modules/devicecontrol/deviceRegister'
import deviceVersionInfo from './modules/devicecontrol/deviceVersionInfo'
import user from './modules/user/user'
import createLogger from 'vuex/dist/logger'
import { persistentStore } from './plugins/persisitentStore';
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        deviceStatus,
        manufacturerInfo,
        deviceRegister,
        deviceVersionInfo,
        user
    },
    strict: debug,
    plugins: debug ? [createLogger(), persistentStore] : [persistentStore]
})