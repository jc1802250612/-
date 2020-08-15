import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes.js'


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',//路由路径没有#
  routes
})