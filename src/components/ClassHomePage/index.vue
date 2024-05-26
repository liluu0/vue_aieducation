<template>
    <div id="nav02">
                      <div class="nav02_bg">
                          <div class="nav02_bt">课程首页</div>
                      </div>
                      <div class="classContent">
                          <!-- 课程资料 -->
                          <div class="nav02_kj">
                              <h3>😁课程内容</h3>
                              <div class="nav02_grzl_txt">
                                  <p>网名：土豆云虚拟主机</p>
                                  <p>邮箱：www.ttyuki.cn@gmail.com</p>
                                  <p>性别：boy</p>
                                  <p>年龄：不告诉你 [一位有理想的青少年]</p>
                                  <p>特长：腿特长</p>
                                  <p>爱好：音乐、运动、设计、摄影、COSplay 等……</p>
                                  <p>性格：落落大方,喜欢自由</p>
                                  <p>梦想：实现财富自由</p>
                                  <p>语录：凡心所向，素履所往，生如逆旅，一苇以航。——《尘曲》</p>
                                  <p>语录：合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。——《道德经·第六十四章》</p>
                              </div>
                          </div>
                          <!-- 教师介绍 -->
                          <div class="nav02_kj">
                              <h3>😁教师介绍</h3>
                              <p>
                                  本人学识渊博，经验丰富，代码风骚，效率恐怖。C/C＋＋，java，php无不精通，熟练掌握各种框架。
                              </p>
                          </div>
                          <!-- 智能课程评价 -->
                          <div class="nav02_kj">
                              <h3>😁课程评价和学习建议</h3>
                              <AiContent/>
                          </div>
                      </div>
                  </div>
</template>
  
<script>
import AiContent from '@/components/AiContent'
export default {
    components:{
        AiContent
    }

  
}
</script>
  
<style scoped>
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
      height: 420px;
      /* 关于站长页面顶部头图 */
      background-image: url(./img/guanyuzhanzhang.jpg);
      background-size: cover;
      /* background-position: center bottom; */
      /* background-repeat: no-repeat; */
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
      font-size: 14px;
      text-shadow: 10px 10px 10px #909090;
      font-weight: 400;
      letter-spacing: 2px;
      color: rgba(40,40,40,0.9);
      border-bottom: 1px dashed rgba(40,40,40,0.2);
  }
  </style>