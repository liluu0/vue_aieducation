import Login from '@/components/Login'
import Student from '@/pages/Student'
import homePage from '@/pages/Student/homePage'
import material from '@/pages/Student/material'

export default [
   {
      path:"/login",
      component:Login,
  },
  // {
  //   path:"/student",
  //   component:Student,
  // },
  {
    path:"/student",
    component:Student,
    children:[
        {
            path:"homePage",
            component:homePage
        },
        {
            path:"material",
            component:material
        },
        {
            path:'/student',
            redirect:'/student/homePage'
        }
    ]
  },
  {
      path: '/',
      redirect: '/student'
  }
   ]