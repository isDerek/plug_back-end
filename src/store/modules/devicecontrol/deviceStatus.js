
const state = {
    deviceStatus:[],
    //     date: '2016-05-12',
    //     deviceID: '0',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     name: '王小虎',
    //     deviceAddress: '深圳市南山区西丽镇同沙路 168 号凯达尔中心大厦 2 号楼 13F',
    //     tag: '家'
    // }, {
    //     date: '2016-05-02',
    //     deviceID: '0',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     name: '王小虎',
    //     deviceAddress: '深圳市南山区西丽镇同沙路 168 号凯达尔中心大厦 2 号楼 13F',
    //     tag: '家'
    // }, {
    //     date: '2016-05-02',
    //     deviceID: '0',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     name: '王小虎',
    //     deviceAddress: '深圳市南山区西丽镇同沙路 168 号凯达尔中心大厦 2 号楼 13F',
    //     tag: '家'
    // }, {
    //     date: '2016-05-02',
    //     deviceID: '0',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     name: '王小虎',
    //     deviceAddress: '深圳市南山区西丽镇同沙路 168 号凯达尔中心大厦 2 号楼 13F',
    //     tag: '家'
    // }, {
    //     date: '2016-05-02',
    //     deviceID: '0',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     name: '王小虎',
    //     deviceAddress: '深圳市南山区西丽镇同沙路 168 号凯达尔中心大厦 2 号楼 13F',
    //     tag: '家'
    // }, {
    //     date: '2016-05-02',
    //     deviceID: '0',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     name: '王小虎',
    //     deviceAddress: '深圳市南山区西丽镇同沙路 168 号凯达尔中心大厦 2 号楼 13F',
    //     tag: '家'
    // }, {
    //     date: '2016-05-02',
    //     deviceID: '0',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     name: '王小虎',
    //     deviceAddress: '深圳市南山区西丽镇同沙路 168 号凯达尔中心大厦 2 号楼 13F',
    //     tag: '家'
    // }, {
    //     date: '2016-05-02',
    //     deviceID: '0',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     name: '王小虎',
    //     deviceAddress: '深圳市南山区西丽镇同沙路 168 号凯达尔中心大厦 2 号楼 13F',
    //     tag: '家'
    // }, {
    //     date: '2016-05-04',
    //     deviceID: '1',
    //     deviceIP: '192.168.1.123',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'365天24小时60分60秒',
    //     vendor:'中山远大科技有限公司',
    //     name: '王小虎',
    //     deviceAddress: '上海市普陀区金沙江路 1517 弄',
    //     tag: '公司'
    // }, {
    //     date: '2016-05-03',
    //     deviceID: '2',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     name: '王小虎',
    //     deviceAddress: '上海市普陀区金沙江路 1519 弄',
    //     tag: '家'
    // }, {
    //     date: '2016-05-03',
    //     name: '王小虎',
    //     deviceID: '3',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     deviceAddress: '上海市普陀区金沙江路 1516 弄',
    //     tag: '公司'
    // }, {
    //     date: '2016-05-03',
    //     name: '王小虎',
    //     deviceID: '3',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     deviceAddress: '上海市普陀区金沙江路 1516 弄',
    //     tag: '公司'
    // }, {
    //     date: '2016-05-03',
    //     name: '王小虎',
    //     deviceID: '3',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     deviceAddress: '上海市普陀区金沙江路 1516 弄',
    //     tag: '公司'
    // }, {
    //     date: '2016-05-03',
    //     name: '王小虎',
    //     deviceID: '3',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     deviceAddress: '上海市普陀区金沙江路 1516 弄',
    //     tag: '公司'
    // }, {
    //     date: '2016-05-03',
    //     name: '王小虎',
    //     deviceID: '3',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     deviceAddress: '上海市普陀区金沙江路 1516 弄',
    //     tag: '公司'
    // }, {
    //     date: '2016-05-03',
    //     name: '王小虎',
    //     deviceID: '3',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     deviceAddress: '上海市普陀区金沙江路 1516 弄',
    //     tag: '公司'
    // }, {
    //     date: '2016-05-03',
    //     name: '王小虎',
    //     deviceID: '3',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'大联大商贸（深圳）有限公司',
    //     deviceAddress: '上海市普陀区金沙江路 1516 弄',
    //     tag: '公司'
    // }, {
    //     date: '2016-05-03',
    //     name: '王小虎',
    //     deviceID: '3',
    //     deviceIP: '192.168.1.1',
    //     deviceMAC: '000102030405',
    //     deviceTimer:'1天',
    //     vendor:'中山远大科技有限公司',
    //     deviceAddress: '上海市普陀区金沙江路 1516 弄',
    //     tag: '公司'
    // }],
    // deviceStatus:{},
    pageSize: 11, //分页器每页展示的数量
    deviceStatusCurrentPage: 1, // 默认当前页
}

const actions = {

}

const mutations = {
    
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters: {

        getDeviceStatusTotalSize: state =>{
            return state.deviceStatus.length //设备状态数据总数量
        },
        getDeviceStatus: state => {
        
            // if(state.deviceStatusCurrentPage && state.deviceStatusCurrentPage != 0){
                let startIndex = (state.deviceStatusCurrentPage - 1) * state.pageSize;
                let endIndex = state.deviceStatusCurrentPage * state.pageSize;
                return state.deviceStatus.slice(startIndex,endIndex);
            // }
        }
    }
}