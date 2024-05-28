<template>
  <div class="homePage">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="我的课程" name="first">
        <myClass :courseAll="courseAll" @addClassCode="addClassCode"/>
      </el-tab-pane>
      <el-tab-pane label="我的任务" name="second">
        <myTask :taskAll="taskAll"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {reqHomePage} from '@/api'
  import { ref } from 'vue'
  import myTask from './myTask'
  import myClass from './myClass'
  export default {
    data () {
      return {
        courseAll:[],
        taskAll:[]
      }
    },
    components: {
      myTask,
      myClass
    },
    setup() {

      const activeName = ref('second')
      const handleClick = (tab, event) => {
        // console.log(tab, event)
      }
      return { activeName, handleClick }
    },
    mounted(){
      this.updataHomePage()
    },
    methods:{
      async updataHomePage(){
      try {
        const response = await reqHomePage()
        this.courseAll = response.data.data.courseAll
        this.taskAll = response.data.data.taskAll
      } catch (error) {
        // Message.error('手机号或密码错误')
        console.error('reqHomePage错误:', error);
      }
      },
      addClassCode(data){
        this.updataHomePage()
      }
    }
  }
</script>

<style >
.el-tabs__header {
    height: 60px;
    box-shadow: 0px -1px 0px 0px #f2f2f2 inset;
    padding: 0 30px;
    /* font-size: 0; */
    /* font-weight: 500; */
    display: inline-block;
    margin-right: 30px;
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    width: 100%;
}
.el-tabs__item {
  /* color: #ffffff; */
  color:var(--text-color)
}
.el-tabs__content {
  padding: 0 30px;
  padding-bottom: 76px;
  min-height: 850px;
} 
</style>