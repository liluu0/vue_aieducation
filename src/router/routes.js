import Login from '@/components/Login'
import Student from '@/pages/Student'

export default [
   {
      path:"/login",
      component:Login,
  },
  {
    path:"/student",
    component:Student,
},

  {
      path: '/',
      redirect: '/student'
  }
   ]