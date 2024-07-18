<template>
    <div id="nav02">
                      <div class="nav02_bg" ref="nav_bg">
                          <div class="nav02_bt">课程首页</div>
                      </div>
                      <div class="classContent">
                          <!-- 课程资料 -->
                          <div class="nav02_kj">
                              <h3>😁课程内容</h3>
                              <div class="nav02_grzl_txt">
                                <p><span>课 程 名 称：</span>{{this.course.courseName}}</p>
                                <p><span>课 程 介 绍：</span>{{this.course.courseIntroduce}}</p>
                                <p><span>课 程 要 求：</span>{{this.course.courseDemand}}</p>
                                <p><span>课 程 目 标：</span>{{this.course.courseTarget}}</p> 
                                <p><span>邀 请 码 ：</span>{{this.course.invitationCode}}</p> 
                              </div>
                          </div>
                          <!-- 教师介绍 -->
                          <div class="nav02_kj">
                              <h3>😁教师介绍</h3>
                                <p><span>教 师 姓 名：</span>{{this.teacher.name}}</p>
                                <p><span>教 师 性 别：</span>{{this.teacher.sex=='0'?'女':'男'}}</p>
                                <p><span>教 师 手 机 号：</span>{{this.teacher.phone}}</p>
                                <p><span>教 师 职 位：</span>{{this.teacher.position}}</p> 
                                <p><span>教 师 简 介：</span>{{this.teacher.introduction}}</p> 
                          </div>
                          <!-- 智能课程评价 -->
                          <div class="nav02_kj">
                              <h3>🧡课程评价和学习建议</h3>
                              <AiContent :question='this.questionData'/>
                          </div>
                      </div>
                  </div>
</template>

<script>
import {reqCourseHomepage} from '@/api'
import AiContent from '@/components/AiContent'
export default {
    data () {
        return {
            course:{},
            teacher:{},
            questionData:''
        }
    },
    components:{
        AiContent
    },
    async mounted() {
        try {
            const res = await reqCourseHomepage(this.$route.params.courseId)
            this.course = res.data.data.course
            this.questionData = `给我关于${this.course.courseName}课程的课程评价和学习建议，分点简单讲解,不要语气词，注意换行`
            this.teacher = res.data.data.teacher
            this.$refs.nav_bg.style.backgroundImage = `url(${this.course.courseImage})`;
        } catch (error) {
            console.log('reqCourseHomepage',error);
        }
    },

  
}
</script>
  
<style scoped>
.nav02_kj span {
   display: inline-block; /* 设置为内联块元素，使得宽度生效 */
   text-align: right;
   width: 175px; /* 设置宽度 */
   padding: 0 12px;
   font-weight: bold;
}
  .classContent {
      margin-bottom: 80px;
      overflow: hidden;
  }
  /*-----Nav02-关于本站-内容区域-右侧------*/
  #nav02{
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
      z-index: 6;
  }
  /* 设置滚动条的样式 */
  #nav02::-webkit-scrollbar {
     width:8px;
  }
  /* 滚动槽 */
  #nav02::-webkit-scrollbar-track {
     -webkit-box-shadow:rgba(254,254,254,1);
     border-radius:10px;
  }
  /* 滚动条滑块 */
  #nav02::-webkit-scrollbar-thumb {
     border-radius:3px;
     background-color: rgba(40,40,40,0.6);
  }
  .nav02_bg{
      width: 100%;
      height: 450px;
      background-size: cover;
      background-repeat: round;
      position: relative;
  }
  .nav02_bt{
      width: 240px;
      height: 60px;
      line-height: 60px;
      /* 顶图文字背景颜色 */
      background-image: linear-gradient(to top left,#25d8df , #CD69C9);
      border-radius: 5px;
      padding: 0px 10px;
      position: absolute;
      bottom: -18px;
      left: 0;
      right: 0;
      margin: auto;
      color: #282828;
      font-size: 22px;
      letter-spacing: 1px;
      text-align: center;
  }
  .nav02_kj{
      width: 90%;
      margin: 30px auto 30px auto;
      text-align: left;
      overflow: hidden;
  }
  .nav02_kj h3{
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 3px;
      color: rgba(40,40,40,0.8);
      margin: 30px 0px;
  }
  
  .nav02_grzl_txt p{
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 1px;
      line-height: 50px;
      color: rgba(40,40,40,0.9);
      border-bottom: 1px dashed rgba(40,40,40,0.08);
  }
  .nav02_kj p{
      width: 100%;
      text-align: justify;
      line-height: 40px;
      text-indent: 2em;
      font-size: 16px;
      text-shadow: 10px 10px 10px #909090;
      font-weight: 400;
      /* letter-spacing: 2px; */
      color: rgba(40,40,40,0.9);
      border-bottom: 1px dashed rgba(40,40,40,0.2);
  }
  </style>