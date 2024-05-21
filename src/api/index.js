import requests  from "./ajax";


export const reqLogin = (params)=>requests({url:"/login",method:"post",params})

export const reqSignup = (params)=>requests({url:"/register",method:"post",params})

export const reqHomePage = ()=>requests({url:'/student/HomePage',method:'get'})

export const reqAddCourse = (params)=>requests({url:"/student/addCourse",method:"post",params})

export const reqStudentPersonal = ()=>requests({url:'/student/personalInfo',method:'get'})

export const reqPictureUpload = (params)=>requests({url:"/student/common/upload",method:"post",params})

export const reqCourseTasks = (courseId)=>requests({url:`/student/courseTasks/${courseId}`,method:'get'})