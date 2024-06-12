<template>
	<div id="nav07">
          <div class="bgc">
            <div class="manage nav02_kj">
                <h3>课程管理</h3> 
                <div class="btn_group">
                    <h4 class="title">学生信息&nbsp;（共{{this.allStudent.length}}人）</h4>
                    <el-table :data="this.allStudent" :border='true' style="width: 100%">
                      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
                      <el-table-column prop="age" label="年龄" width="180"> </el-table-column>
                      <el-table-column prop="studentPhone" label="手机号码" width="180"> </el-table-column>
                      <el-table-column prop="educationalBackground" label="学历" width="180"> </el-table-column>
                      <el-table-column prop="schoolName" label="学校"> </el-table-column>
                    </el-table>
                </div>
            </div>
          </div>
	</div>
</template>

<script>
import {reqAllStudent} from '@/api'
export default {
    data () {
        return {
            allStudent:[]
        }
    },
    mounted() {
        this.loadAllStudent()
    },
    methods:{
      async loadAllStudent(){
        try {
          const res =await reqAllStudent(this.$route.params.courseId)
          this.allStudent = res.data.data
          // console.log(this.allStudent);
        } catch (error) {
          console.log('reqAllStudent',error);
        }
      }

    }
}
</script>

<style scoped>
.title {
    letter-spacing: 3px;
    width: 100%;
    text-align: left;
	margin:0 0 10px 0px;
}
.nav02_kj{
	width: 100%;
	text-align: left;
	overflow: hidden;
}
.nav02_kj h3{
  /* height: 53px;
  line-height: 47px; */
  border-bottom: 3px solid #f0f0f2;
  width: 100%;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 3px;
	color: rgba(40,40,40,0.8);
	padding: 20px 30px;
}
.btn_group {
  padding: 20px  30px;
}
.btn_group::after {
content: "";
display: block;
clear:both;
}
#nav07 .bgc {
  background-color: #fff;
}
.bgc .manage {
    min-height: 925px;
    padding: 0 0 30px 0;
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