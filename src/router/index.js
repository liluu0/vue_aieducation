//配置路由
//第一步：引入插件、安装插件
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
import store from '@/store'

import routes from './routes';

let router =  new VueRouter({
   routes,
});

//前置 全局守卫
//  router.beforeEach(async(to,from,next)=>{
 
// })

export default router