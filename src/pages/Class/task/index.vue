<template>
	<div id="nav07">
          <div class="bgc">
            <div class="tasks">
                <div class="btn_group" tabindex="-1" aria-hidden="true">
                    <div class="search-box">
                                <el-input placeholder="请输入内容" 
                                v-model="input" 
                                prefix-icon="el-icon-search"
                                clearable> </el-input>
                    </div> 
                </div>
                <Task :taskAll="this.taskAll"/>
            </div>
          </div>
	</div>
</template>

<script>
import {reqCourseTasks} from '@/api'
import Task from '@/components/Task'
export default {
  components: {
    Task
  },
    data () {
        return {
            taskAll:[]
        }
    },
    mounted() {
        console.log('task');
        this.loadTasks()  
  },
  methods:{
    async loadTasks(){
        // 获取 courseId 参数的值
        const courseId = this.$route.params.courseId;
            try {
                const res = await reqCourseTasks(courseId)
                this.taskAll = res.data.data
                console.log(res.data);
            } catch (error) {
                console.error('reqCourseTasks',error);
            }
    }
  }
}
</script>

<style>

/* .btn_group::after {
content: "";
display: block;
clear:both;
}
.search-box {
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0 14px;
            float: left;
}
.el-input__inner {
    border-radius: 20px;
    border: 2px solid #dcdfe6;
    width: 287px;
} */


#nav07 .bgc {
  background-color: #fff;
}
.bgc .tasks {
    padding: 30px 0;
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