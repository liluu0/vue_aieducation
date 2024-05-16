<template>
  <div class="myClass">
    <div class="btn_group" tabindex="-1" aria-hidden="true">
       <div class="search-box">
                <el-input placeholder="请输入内容" 
                v-model="input" 
                prefix-icon="el-icon-search"
                clearable> </el-input>
       </div> 
       <el-button type="primary" plain round> + 添加课程</el-button>
    </div>

    <div v-if="!courseAll" class="course-list">
        <div class="not-data color1">
            暂无数据
        </div>
    </div>
    <div v-else class="course-list">
            <div v-for="value in courseAll" :key="value.courseId" class="course clearfix">
                <div class="course-cover">
                  <a href="#"><img :src="value.courseImage" alt=""></a>
                </div>
                <div class="course-info">
                        <h3 class="inlineBlock">
                            <a class="color1" href="https://mooc1.chaoxing.com/visit/stucoursemiddle?courseid=236735527&amp;clazzid=93409804&amp;cpi=283002507&amp;ismooc2=1" target="_blank">
                                                <span class="course-name" style="word-break: break-all;" :title="value.courseName">{{value.courseName}}</span>
                                                <i class="icon-news"></i>
                            </a>
                        </h3>
                            <p class="margint10" title="吉首大学">{{value.teacherName}}</p>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['courseAll'],
    setup() {
      const input = ref('')

      return { input }
    },
    mounted(){
        // console.log(courseAll)
    }
}
</script>

<style scoped>
/* 隐藏滚动条 */
/* ::-webkit-scrollbar {
    display: none;
} */
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
    margin-right: 33px;
    margin-left: 28px;
    margin-bottom: 0;
}
.clearfix:after {
    content: " ";
    display: block;
    height: 0px;
    clear: both;
}

.course-list {

    font-size: 0;
    padding: 30px 30px 0;
    overflow: hidden;
    width: 100%;
    position: relative;
    min-height: 600px;
    /* height: 600px; */
    /* overflow: auto; 启用垂直滚动条 */
    /* scrollbar-color: transparent transparent; 隐藏滚动条 */
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
.el-button--small, .el-button--small.is-round {
    padding: 0;
    width: 104px;
    height: 36px;
    float: right;
    margin-left: 30px;
}

.search-box {
            /* background-color: var(--primary-color-light); */
            cursor: pointer;
            transition: all 0.3s ease;
            /* z-index: 2; */
            padding: 0 14px;
            float: left;
        }
.el-input__inner {
    border-radius: 20px;
    border: 2px solid #dcdfe6;
    width: 287px;
}
.btn_group::after {
content: "";
display: block;
clear:both;
}

</style>