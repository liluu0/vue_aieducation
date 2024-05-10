// import axios from "axios";
// import nProgress from "nprogress";
// import "nprogress/nprogress.css"
//引入仓库
// import store from "@/store";

const requests = axios.create({
    baseURL:"/api",
   //  timeout:5000, 
})
//请求拦截器
 requests.interceptors.request.use((config)=>{

    return config;
 })

export default requests;
