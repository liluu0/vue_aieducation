import requests  from "./ajax";


export const reqLogin = (params)=>requests({url:"/student/login",method:"post",data:params})