import Login from '@/components/Login'
import CreateClass from '@/components/CreateClass'

import Teacher from '@/pages/Teacher'
import Teacher_homePage from '@/pages/Teacher/homePage'
import teacher_aiHelper from '@/pages/Teacher/aiHelper'
import my from '@/pages/Teacher/my'
import teacher_workHelper from '@/pages/Teacher/workHelper'

import TeacherTaskSet from '@/components/TeacherTaskSet'
import ClassTaskDetail from '@/components/ClassTaskDetail'

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

import ppt from '@/components/PPT'
import chatBot from '@/components/ChatBot'
import seeGoods from '@/components/SeeGoods'

import pptModel from '@/components/PPT/pptModel'
import pptDesc from '@/components/PPT/pptDesc'

export default [
   {
      name:"Login",
      path:"/login",
      component:Login,
  },
  {
     name:'createClass',
     path:"/createClass",
     component:CreateClass,
  },
  {
     name:'classTaskDetail',
     path:"/classTaskDetail/:taskId",
     props:true,
     component:ClassTaskDetail,
  },
  {
     name:'teacherTaskSet',
     path:"/teacherTaskSet",
     component:TeacherTaskSet,
  },
  {
    name:'student',
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
            component:myCollect,
            children: [
              {
                path: "chatBot",
                component: chatBot,
              },
              {
                path: "ppt",
                component: ppt,
                children: [
                  {
                    path: "pptModel",
                    component: pptModel,
                  },
                  {
                    path: "pptDesc",
                    component: pptDesc,
                  },
                  {
                      path:'/student/myCollect/ppt',
                      redirect:'/student/myCollect/ppt/pptModel'
                  }
                ]
              },
              {
                path: "seeGoods",
                component: seeGoods,
              },
              {
                  path:'/student/myCollect',
                  redirect:'/student/myCollect/chatBot'
              }
            ]
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
            path:"teacher_aiHelper",
            component:teacher_aiHelper
        },
        {
            path:"my",
            component:my
        },
        {
            path:"teacher_translateCenter",
            component:errorSet
        },
        {
            path:"teacher_workHelper",
            component:teacher_workHelper,
            children: [
              {
                path: "chatBot",
                component: chatBot,
              },
              {
                path: "ppt",
                component: ppt,
                children: [
                  {
                    path: "pptModel",
                    component: pptModel,
                  },
                  {
                    path: "pptDesc",
                    component: pptDesc,
                  },
                  {
                      path:'/teacher/teacher_workHelper/ppt',
                      redirect:'/teacher/teacher_workHelper/ppt/pptModel'
                  }
                ]
              },
              {
                path: "seeGoods",
                component: seeGoods,
              },
              {
                  path:'/teacher/teacher_workHelper',
                  redirect:'/teacher/teacher_workHelper/chatBot'
              }
            ]
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
          name:'teacherClass_discuss',
          path: "teacherClass_discuss",
          component: teacherClass_discuss,
          props:true,
        },
        {
          name:'teacherClass_material',
          path: "teacherClass_material",
          component: teacherClass_material,
          meta:{isTeacher:true},
          props:true,
        },
        {
          name:'classManage',
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