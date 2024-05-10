//配置路由
//第一步：引入插件、安装插件
import { createRouter, createWebHistory } from 'vue-router';

// import store from '@/store'

import routes from './routes';

const router = createRouter({
   history: createWebHistory(),
   routes
 });

//前置 全局守卫
//  router.beforeEach(async(to,from,next)=>{
 
// })

export default router