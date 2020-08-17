/*
  对axios进行二次封装，封装一个能发ajax请求的函数
  1.统一处理请求异常
  2。异步请求成功的数据不是response,response.data
  3.对请求体参数进行urlencode处理，不使用默认的application/json(接口不支持)
  4.配置请求超时时间
  5.请求头携带token
*/

import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: '/api',//代理服务器转发请求4000
  // 4.配置请求超时时间
  timeout: 200000
})

//请求拦截器
instance.interceptors.request.use(config => {
  console.log('请求拦截器')
  // 3.对请求体参数进行urlencode处理，不使用默认的application/json(接口不支持)
  // JSON是对象类型，urlencode是等于号来传=，如果是对象就转换成urlencode格式
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)

  }
  return config
})
//响应拦截器
instance.interceptors.response.use(response => {
  console.log('响应拦截器')
  return response.data
  // return response
  // 异步请求成功的数据不是response,response.data
},
  error => {
    alert('请求失败' + error.message)
    return new Promise(() => { }) //统一处理异常请求
  })

export default instance