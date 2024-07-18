<template>
  <div>
    <div class="btn_group" tabindex="-1" aria-hidden="true">
                    <div class="search-box">
                                <el-input placeholder="请输入内容" 
                                v-model="input" 
                                prefix-icon="el-icon-search"
                                clearable> </el-input>
                    </div> 
                </div>
                <Task :taskAll="this.taskAll" isTeacher="1"/>
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
            taskAll:[],
            input:''
        }
    },
    mounted() {
        this.loadTasks()  
  },
  methods:{
    async loadTasks(){
        // 获取 courseId 参数的值
        const courseId = this.$route.params.courseId;
        console.log(courseId);
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

.btn_group::after {
content: "";
display: block;
clear:both;
}
.search-box {
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 15px 0 0 25px;
            float: left;
}
</style>