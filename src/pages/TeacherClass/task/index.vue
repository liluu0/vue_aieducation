<template>
    <div id="nav07">
<div class="bgc">
<el-tabs v-model="activeName">
<el-tab-pane label="批阅任务" name="first">
  <allTask/>
</el-tab-pane>
<el-tab-pane label="发布任务" name="second">
  <setTask/>
</el-tab-pane>
</el-tabs>

</div>
    </div>
</template>

<script>
import allTask from './allTask'
import setTask from './setTask'
export default {
name:'discuss',
components:{
    allTask,
    setTask
}

}
</script>

<style scoped>
#nav07 .bgc {
background-color: #fff;
}
/*-----Nav07-本站源码-内容区域-右侧------*/
#nav07{

padding: 30px 30px;
width: 100%;
height: 100%;
background-color: #efefef;
overflow-y: scroll;
overflow-x: hidden;
scrollbar-width: none;
-ms-overflow-style: none;
position: absolute;
top: 0;
right: 0;
z-index: 2;
}
/* 设置滚动条的样式 */
#nav07::-webkit-scrollbar {
width:8px;
}
/* 滚动槽 */
#nav07::-webkit-scrollbar-track {
-webkit-box-shadow:rgba(254,254,254,1);
border-radius:10px;
}
/* 滚动条滑块 */
#nav07::-webkit-scrollbar-thumb {
border-radius:3px;
background-color: rgba(40,40,40,0.6);
}
</style>