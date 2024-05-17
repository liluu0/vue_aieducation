import Login from '@/components/Login'
import Teacher from '@/pages/Teacher'
import Teacher_homePage from '@/pages/Teacher/homePage'

import Student from '@/pages/Student'
import homePage from '@/pages/Student/homePage'
import aiHelper from '@/pages/Student/aiHelper'
import material from '@/pages/Student/material'
import myCollect from '@/pages/Student/myCollect'
import history from '@/pages/Student/history'
import myPersonage from '@/pages/Student/myPersonage'

import Class from '@/pages/Class'
import studyRecord from '@/pages/Class/studyRecord'
import Class_homePage from '@/pages/Class/homePage'
import discuss from '@/pages/Class/discuss'
import class_material from '@/pages/Class/material'


export default [
   {
      path:"/login",
      component:Login,
  },
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
    path:"/teacher",
    component:Teacher,
    children:[
        {
            path:"teacher_homePage",
            component:Teacher_homePage
        },
        {
            path:'/teacher',
            redirect:'/teacher/teacher_homePage'
        }
    ]
  },
  {
    path:"/class",
    component:Class,
    children:[
        {
            path:"studyRecord",
            component:studyRecord
        },
        {
            path:"class_homePage",
            component:Class_homePage
        },
        {
            path:"discuss",
            component:discuss
        },
        {
            path:"class_material",
            component:class_material
        },
        {
            path:'/class',
            redirect:'/class/Class_homePage'
        }
    ]
  },
  {
      path: '/',
      redirect: '/student'
  }
   ]