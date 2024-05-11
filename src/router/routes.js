import Login from '@/components/Login'
import Student from '@/pages/Student'
import homePage from '@/pages/Student/homePage'
import aiHelper from '@/pages/Student/aiHelper'
import material from '@/pages/Student/material'
import myCollect from '@/pages/Student/myCollect'
import history from '@/pages/Student/history'
import myPersonage from '@/pages/Student/myPersonage'

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
            path:"aiHelper",
            component:aiHelper
        },
        {
            path:"material",
            component:material
        },
        {
            path:"myCollect",
            component:myCollect
        },
        {
            path:"history",
            component:history
        },
        {
            path:"myPersonage",
            component:myPersonage
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