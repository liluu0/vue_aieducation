import axios from "axios";
// import {getUUID} from '@/utils/uuid_token'
//引入仓库
// import store from "@/store";

// 引入 Vue Router
// import router from '@/router';
const requests = axios.create({
    baseURL:"http://localhost:8088/aiEducation",
   //  timeout:5000, 
})
//请求拦截器
 requests.interceptors.request.use((config)=>{

    return config;
 })

export default requests;
