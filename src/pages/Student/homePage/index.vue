<template>
  <div class="homePage">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="我的课程" name="first">
        <myClass/>
      </el-tab-pane>
      <el-tab-pane label="我的任务" name="second">
        <myTask/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import myTask from './myTask'
  import myClass from './myClass'
  export default {
    components: {
      myTask,
      myClass
    },
    setup() {

      const activeName = ref('second')
      const handleClick = (tab, event) => {
        console.log(tab, event)
      }
      return { activeName, handleClick }
    }
  }
</script>

<style >
/* ::-webkit-scrollbar-thumb {
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background-color: #DADFE5;
} */
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
}
.el-tabs__item {
  /* color: #ffffff; */
  color:var(--text-color)
}
.el-tabs__content {
  padding: 0 30px;
  padding-bottom: 76px;
} 
</style>