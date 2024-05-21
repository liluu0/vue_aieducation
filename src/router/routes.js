import Login from '@/components/Login'
import Teacher from '@/pages/Teacher'
import Teacher_homePage from '@/pages/Teacher/homePage'
import studentManage from '@/pages/Teacher/studentManage'
import teacher_aiHelper from '@/pages/Teacher/aiHelper'
import my from '@/pages/Teacher/my'

import Student from '@/pages/Student'
import homePage from '@/pages/Student/homePage'
import aiHelper from '@/pages/Student/aiHelper'
import material from '@/pages/Student/material'
import myCollect from '@/pages/Student/myCollect'
import errorSet from '@/pages/Student/errorSet'
import myPersonage from '@/pages/Student/myPersonage'

import Class from '@/pages/Class'
import studyRecord from '@/pages/Class/studyRecord'
import Class_homePage from '@/pages/Class/homePage'
import discuss from '@/pages/Class/discuss'
import class_material from '@/pages/Class/material'
import task from '@/pages/Class/task'


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
            path:"errorSet",
            component:errorSet
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
            path:"studentManage",
            component:studentManage
        },
        {
            path:"teacher_aiHelper",
            component:teacher_aiHelper
        },
        {
            path:"my",
            component:my
        },
        {
            path:'/teacher',
            redirect:'/teacher/teacher_homePage'
        }
    ]
  },
  {
    path:"/class/:courseId",
    name:'class',
    component:Class,
    props:true,
    children: [
        {
          path: "studyRecord",
          component: studyRecord,
          props:true,
        },
        {
          name:'Class_homePage',
          path: "class_homePage",
          component: Class_homePage,
          props:true,
        },
        {
          path: "discuss",
          component: discuss,
          props:true,
        },
        {
          path: "class_material",
          component: class_material,
          props:true,
        },
        {
          name:'task',
          path: "task",
          component: task,
          props:true,
        },
        {
          path: '',
          redirect: '/class/:courseId/class_homePage'
        }
    ]
  },
  {
      path: '/',
      redirect: '/student'
  }
   ]