import requests  from "./ajax";


export const reqLogin = (params)=>requests({url:"/login",method:"post",params})

export const reqSignup = (params)=>requests({url:"/register",method:"post",params})

export const reqHomePage = ()=>requests({url:'/student/HomePage',method:'get'})

export const reqAddCourse = (params)=>requests({url:"/student/addCourse",method:"post",params})
