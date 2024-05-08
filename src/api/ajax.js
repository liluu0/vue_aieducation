import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css"
//引入仓库
// import store from "@/store";

const requests = axios.create({
    baseURL:"/api",
   //  timeout:5000, 
})
//请求拦截器
 requests.interceptors.request.use((config)=>{
   // console.log(store);
   // if(store.state.detail.uuid_token){
   //    config.headers.userTempId = store.state.detail.uuid_token
   // }
   // if(store.state.user.token){
   //     config.headers.token = store.state.user.token
   // }
   //  nProgress.start()
    return config;
 })

 //响应
 requests.interceptors.response.use((res)=>{
    nProgress.done()
    return res.data;
 },(error)=>{
    return Promise.reject(new Error('响应出错'))
 })

export default requests;
