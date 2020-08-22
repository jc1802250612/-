/*
包含n个接口请求函数的模块
 */
import ajax from './ajax'
//1根据经纬度获取位置详情params传参 params直接传 query要用params
export const reqAddress = (longitude, latitude) => ajax.get(`/position/${latitude},${longitude}`)
//2获取食品列表
export const reqCategorys = () => ajax.get('/index_category')
//3根据经纬度获取商铺列表query传参
export const reqShops = ({ longitude, latitude }) => ajax.get('/shops', {
  params: { longitude, latitude }
})
//4.发送短信验证码
export const reqSendCode = (phone) => ajax.get('/sendcode', {
  params: { phone }
})
//5.用户名密码登录 post直接把参数传递
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax.post('/login_pwd', { name, pwd, captcha })

//6.短信验证码登录
export const reqSmsLogin = ({ phone, code }) => ajax.post('/login_sms', { phone, code })

//7.自动登录
export const reqAutoLogin = () => ajax.get('/auto_login')