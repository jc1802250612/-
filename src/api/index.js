/*
包含n个接口请求函数的模块
 */
import ajax from './ajax'
//1根据经纬度获取位置详情params传参 params直接传 query要用params
export const reqAddress = (longitude, latitude) => ajax(`/position/${latitude},${longitude}`)
//2获取食品列表
export const reqCategorys = () => ajax('/index_category')
//3根据经纬度获取商铺列表query传参
export const reqShops = ({ longitude, latitude }) => ajax('/shops', {
  params: { longitude, latitude }
})