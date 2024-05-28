import requests  from "./ajax";

export const reqLogin = (params)=>requests({url:"/login",method:"post",params})

export const reqSignup = (params)=>requests({url:"/register",method:"post",params})

export const reqHomePage = ()=>requests({url:'/student/HomePage',method:'get'})

export const reqAddCourse = (params)=>requests({url:"/student/addCourse",method:"post",params})

export const reqStudentPersonal = ()=>requests({url:'/student/personalInfo',method:'get'})

export const reqPictureUpload = (file)=>requests({url:"/common/upload",method:"post",data:file})

export const reqCourseTasks = (courseId)=>requests({url:`/student/courseTasks/${courseId}`,method:'get'})

export const reqTeacherCourse = ()=>requests({url:'/teacher/courses',method:'get'})

export const reqTeacherAddClass = (params)=>requests({url:"/teacher/add",method:"post",data:params})

//退课按钮
export const reqRemoveCourse = (courseId)=>requests({url:`/student/remove/${courseId}`,method:'delete'})

//修改个人信息
export const reqStudentPersonalUpdate = (params)=>requests({url:"/student/personalInfo/update",method:"put",data:params})

//课程首页 /aiEducation/course/{courseId}
export const reqCourseHomepage = (courseId)=>requests({url:`/aiEducation/course/${courseId}`,method:'get'})
