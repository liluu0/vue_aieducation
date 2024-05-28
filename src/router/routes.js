import Login from '@/components/Login'
import CreateClass from '@/components/CreateClass'

import Teacher from '@/pages/Teacher'
import Teacher_homePage from '@/pages/Teacher/homePage'
import studentManage from '@/pages/Teacher/studentManage'
import teacher_aiHelper from '@/pages/Teacher/aiHelper'
import my from '@/pages/Teacher/my'

import Student from '@/pages/Student'
import homePage from '@/pages/Student/homePage'
import aiHelper from '@/pages/Student/aiHelper'
import myCollect from '@/pages/Student/myCollect'
import errorSet from '@/pages/Student/errorSet'
import myPersonage from '@/pages/Student/myPersonage'

import Class from '@/pages/Class'
import studyRecord from '@/pages/Class/studyRecord'
import Class_homePage from '@/pages/Class/homePage'
import discuss from '@/pages/Class/discuss'
import class_material from '@/pages/Class/material'
import task from '@/pages/Class/task'

import teacherClass from '@/pages/TeacherClass'
import teacherClass_homePage from '@/pages/TeacherClass/homePage'
import teacherClass_task from '@/pages/TeacherClass/task'
import teacherClass_discuss from '@/pages/TeacherClass/discuss'
import teacherClass_material from '@/pages/TeacherClass/material'
import classManage from '@/pages/TeacherClass/classManage'

export default [
   {
      path:"/login",
      component:Login,
  },
  {
     path:"/createClass",
     component:CreateClass,
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
    path:"/teacherClass/:courseId",
    name:'teacherClass',
    component:teacherClass,
    isTeacher:true,
    props:true,
    children: [
        {
          name: "teacherClass_homePage",
          path: "teacherClass_homePage",
          component: teacherClass_homePage,
          props:true,
        },
        {
          name:'teacherClass_task',
          path: "teacherClass_task",
          component: teacherClass_task,
          props:true,
        },
        {
          path: "teacherClass_discuss",
          component: teacherClass_discuss,
          props:true,
        },
        {
          path: "teacherClass_material",
          component: teacherClass_material,
          meta:{isTeacher:true},
          props:true,
        },
        {
          path: "classManage",
          component: classManage,
          props:true,
        },
        {
          path: '',
          redirect: '/teacherClass/:courseId/teacherClass_homePage'
        }
    ]
  },
  {
      path: '/',
      redirect: '/student'
  }
   ]