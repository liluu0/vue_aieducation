import axios from "axios";
import {getUUID} from '@/utils/uuid_token'
//引入仓库
// import store from "@/store";

import { Message } from 'element3'
// 引入 Vue Router
import router from '@/router';
const requests = axios.create({
    baseURL:"http://localhost:8088/aiEducation",
   //  timeout:5000, 
})

//请求拦截器
requests.interceptors.request.use((config)=>{
   if(getUUID()){
      config.headers.token = getUUID()
   }
    return config;
 })

 
 // 响应拦截器
requests.interceptors.response.use(
   (res) => {
      // 判断状态码是否是 401 未授权错误
      if (res.data && res.data.code === 401) {
        setTimeout(()=>{
          Message.error('用户登录失效或未登录，请重新登录')
        }, 200)
        // 跳转到登录页面 
        router.push('/login')
      }else {
      return res;
    }
    },
   (error) => {
     // 请求失败，处理错误
     console.error('请求失败:', error);
     // 返回拒绝的 Promise，带有错误消息
     return Promise.reject(error);
   }
 );


export default requests;
