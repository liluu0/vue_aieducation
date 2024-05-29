import requests  from "./ajax";

export const reqLogin = (params)=>requests({url:"/login",method:"post",params})

export const reqSignup = (params)=>requests({url:"/register",method:"post",params})

export const reqHomePage = ()=>requests({url:'/student/HomePage',method:'get'})

export const reqAddCourse = (params)=>requests({url:"/student/addCourse",method:"post",params})

export const reqStudentPersonal = ()=>requests({url:'/student/personalInfo',method:'get'})

export const reqPictureUpload = (file)=>requests({url:"/common/upload",method:"post",data:file})

export const reqCourseTasks = (courseId)=>requests({url:`/course/courseTasks/${courseId}`,method:'get'})

export const reqTeacherCourse = ()=>requests({url:'/teacher/courses',method:'get'})

export const reqTeacherAddClass = (params)=>requests({url:"/teacher/add",method:"post",data:params})

//退课按钮
export const reqRemoveCourse = (courseId)=>requests({url:`/student/remove/${courseId}`,method:'delete'})

//修改个人信息
export const reqStudentPersonalUpdate = (params)=>requests({url:"/student/personalInfo/update",method:"put",data:params})

//课程首页 
export const reqCourseHomepage = (courseId)=>requests({url:`/course/${courseId}`,method:'get'})

//查看教师的个人信息 
export const reqTeacherPersonal = ()=>requests({url:'/teacher/personalInfo',method:'get'})

//修改老师个人信息 
export const reqTeacherPersonalUpdate = (params)=>requests({url:"/teacher/personalInfo/update",method:"put",data:params})

//查询所有资料
export const reqCourseMaterial = (courseId)=>requests({url:`/course/material/${courseId}`,method:'get'})

//根据id删除资料
export const reqRemoveMaterial = (params)=>requests({url:`/teacher/delete`,method:'delete',params})

//上传资料
export const reqFileUpload = (courseId,file)=>requests({url:`/common/teacher/${courseId}/fileUpload`,method:'post',data:file})
