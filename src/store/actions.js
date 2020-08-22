import { reqAddress, reqShops, reqCategorys, reqAutoLogin } from '@/api'
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER, RECEIVE_TOKEN } from './mutation.types'

export default {
  //获取当前地址信息对象的异步action
  // async getAddress ({ commit, state }) {
  //   const { longitude, latitude } = state
  //   //发异步请求
  //   const result = await reqAddress(longitude, latitude)
  //   //请求成功后提交mutations
  //   if (result.code === 0) {
  //     const address = result.data
  //     commit(RECEIVE_ADDRESS, address)
  //   }
  // },
  async getAddress ({ commit, state }) {
    const { longitude, latitude } = state
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },

  // 获取商品分类列表的异步action
  async getCategorys ({ commit }) {
    //发异步请求
    const result = await reqCategorys()
    //请求成功后提交mutations
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
    }
  },


  // 获取商家数组的异步action

  async getShops ({ commit, state }) {
    const { longitude, latitude } = state
    //发异步请求
    const result = await reqShops({ longitude, latitude })
    //请求成功后提交mutations
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  },

  //保存用户信息
  saveUser ({ commit }, user) {
    const token = user.token
    //将token保存在local
    localStorage.setItem('token_key', token)

    //将token保存到state
    commit(RECEIVE_TOKEN, user.token)
    //
    delete user.token//删除user内部token
    //将user保存到state
    commit(RECEIVE_USER, user)
  },
  //自动登录
  async autoLogin ({ commit, state }) {
    if (state.token && !state.user._id) {//必须要有token且没有user信息
      //发送自动登录的请求
      const result = await reqAutoLogin()
      if (result.code === 0) {
        const user = result.data//不给返回token
        commit(RECEIVE_USER, user)
      }
    }
  }

}