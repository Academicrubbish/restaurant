import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

//1.安装插件
Vue.use(Vuex)

//2.创建Store对象
const state = {
  cartList: [],
  orderList: [],
  pendingList: [],
  priceSum: 0,
  num: 0,
  allChecked: false,

  token: '',
  address: '',
  nickName: '未命名',
  userName: ''
}
const store = new Vuex.Store({
  state,
  mutations //改变state
})

//3.挂载到Vue实例上
export default store
