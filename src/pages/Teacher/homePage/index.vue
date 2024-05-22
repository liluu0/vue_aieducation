<template>
  <div id="nav07">
    <div class="Massage minHeight">
          <div class="nav02_kj">
            <h3 class="title">我教的课程</h3>
            
            <div class="myClass">
              <div class="btn_group" tabindex="-1" aria-hidden="true">
                <div class="search-box">
                          <el-input placeholder="请输入内容" 
                          v-model="input" 
                          prefix-icon="el-icon-search"
                          clearable> </el-input>
                </div> 
                <el-button @click="createClass" type="primary" plain round> + 创建课程</el-button>
              </div>

              <div v-if="!Object.keys(courseAll).length" class="course-list">
                  <div class="not-data color1">
                      暂无数据
                  </div>
              </div>

              <div v-else class="course-list">
                      <div v-for="value in courseAll" :key="value.courseId" class="course clearfix">
                          <div class="course-cover">
                            <a :href="'/teacherClass/' + value.courseId+'/teacherClass_homePage'" target="_blank">
                            <!-- <a :href="'/teacherClass/' + value.courseId" target="_blank"> -->
                              <img :src="value.courseImage" alt="">
                            </a>
                          </div>
                          <div class="course-info">
                                  <h3 class="inlineBlock">
                                      <a class="color1" :href="'/teacherClass/' + value.courseId+'/teacherClass_homePage'" target="_blank">
                                                  <span class="course-name" style="word-break: break-all;" :title="value.courseName">{{value.courseName}}</span>
                                                  <i class="icon-news"></i>
                                      </a>
                                  </h3>
                                      <p class="margint10" title="吉首大学">{{value.teacherName}}</p>
                          </div>
                      </div>
              </div>
            </div>

          </div>
    </div>

</div>
</template>

<script>
import {reqTeacherCourse} from '@/api'
  export default {
    data () {
      return {
        courseAll:[]
      }
    },
    mounted() {
      this.loadTeacherCourse()
    },
    methods: {
      async loadTeacherCourse(){
        try {
          const res = await reqTeacherCourse()
          this.courseAll = res.data
        } catch (error) {
          console.log(error);
        }
      },
      createClass(){
        this.$router.push('/createClass');
      }
    },

  }
</script>

<style scoped> 
.Massage {
  padding: 0 0 30px 30px;
}
.nav02_kj{
	width: 100%;
	text-align: left;
	overflow: hidden;
}
.nav02_kj .title{
  height: 53px;
  line-height: 47px;
  border-bottom: 3px solid #f0f0f2;
  width: 100%;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 3px;
	color: rgba(40,40,40,0.8);
	margin: 10px 0px;
}
.nav02_grzl_headimg{
  padding: 10px 30px 0 0;
	height: 100%;
	float: left;
}
.nav02_grzl_headimg .block{
  cursor: pointer;
	width: 200px;
	border-radius: 30px;
	box-shadow: 0px 0px 10px rgba(40,40,40,0.1);
  /* border:  3px solid var(--primary-color); */
  
  transition: filter 0.2s;
}
.nav02_grzl_headimg .block:hover{
  filter: grayscale(100%);
}

.nav02_grzl_txt{
	border-left: 2px dashed rgba(40,40,40,0.2);
	height: 100%;
  width: 80%;
	float: left;
	padding-left: 30px;
}
.education_txt {
  height: 100%;
	padding-left: 30px;
}
.minHeight {
	min-height: 880px;
  background-color: var(--shell-color);
}

.bgmargin {
	height: 20px;
	width: 106%;
  margin-left: -30px;
}
.fl {
    float: left;
}
.color000 {
	color: #000;
}
/* 分界 */
.clearfix:after {
    content: " ";
    display: block;
    height: 0px;
    clear: both;
}

/*-----Nav07-本站源码-内容区域-右侧------*/
#nav07{
  background-color: var(--body--color);
	width: 89.5%;
  padding: 30px 30px;
	height: 100%;
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

/* course */
.course {
    float: left;
    position: relative;
    width: 240px;
    height: 300px;
    font-size: 12px;
    box-sizing: border-box;
    vertical-align: top;
    color: #a8a8b3;
    overflow: visible;
    cursor: pointer;    
    margin-right: 40px;
    margin-left: 10px;
}
.clearfix:after {
    content: " ";
    display: block;
    height: 0px;
    clear: both;
}

.course-list {

    font-size: 0;
    padding: 20px 0 0;
    overflow: hidden;
    width: 100%;
    position: relative;
    min-height: 600px;
}
.course-list .not-data{
    width: 100%;
    font-size: 20px;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.course-list .course-cover {
    width: 240px;
    height: 150px;
    border-radius: 8px;
    position: relative;
    margin-bottom: 13px;
}
.course-list .course-info {
    position: relative;
    box-sizing: border-box;
    padding: 0 6px;
}
.course-list .course-info h3 {
    width: 100%;
    position: relative;
    font-size: 20px;

    font-weight: bold;
    cursor: pointer;
}
.inlineBlock {
    display: inline-block;
}
.color1 {
    /* color: #131B26; */
    color: var(--text-color);
}
a {
    text-decoration: none;
}
.course-list .course-info .margint10 {
    margin-top: 10px;
}
img {
    display: inline-block;
    width: 100%;
    height: 100%;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    transition: transform 0.1s; /* 添加过渡效果 */
}
.course-cover img:hover {
    transform: scale(1.05); /* 鼠标移入时放大图片 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
  }


/* 搜索和添加课程模块 */
.el-button--small{
    padding: 0;
    width: 104px;
    height: 36px;
    float: right;
    margin-right: 30px;
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
}
.btn_group {
  margin: 20px 0 0 0;
}
.btn_group::after {
content: "";
display: block;
clear:both;
}

</style>