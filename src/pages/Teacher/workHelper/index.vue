<template>
	<div id="nav05">
          <div class="left-nav-wrap !pt-24px">
            <div class="top flex items-center px-12px">
              <div class="chandler-ext-content-logo-com !w-40px !h-40px"></div>
              <span class="text-18px ml-8px font-600">Ai工作助手</span>
            </div>

          <div class="content">
            <ul class="module-list">
                <router-link to="/teacher/teacher_workHelper/chatBot">
                  <li @click="activeIndex = 0" :class="{ 'active': activeIndex === 0 }">
                      <i class="el-icon-edit"></i>
                      <span class="name ml-6px">画图</span>
                  </li>
                </router-link>
                <router-link to="/teacher/teacher_workHelper/ppt">
                  <li  @click="activeIndex = 1" :class="{ 'active': activeIndex === 1 }">
                      <i class="el-icon-s-opportunity"></i>
                      <span class="name ml-6px">幻灯片</span>
                  </li>
                </router-link>
              
                <router-link to="/teacher/teacher_workHelper/seeGoods">
                  <li  @click="activeIndex = 2" :class="{ 'active': activeIndex === 2 }">
                      <i class="el-icon-picture-outline"></i>
                      <span class="name ml-6px">识物</span>
                  </li>
                </router-link>
            </ul>
          </div>

          </div>

          <div class="chat-page-wrap w-full h-full flex-1 px-24px">
            <router-view></router-view>
          </div>
	</div>

</template>

<script>
export default {
  data () {
    return {
      messageData:'',
      activeIndex:0
    }
  },
  methods:{
  }
   
}
</script>

<style scoped>
a {
   text-decoration: none;
}
/* 侧边栏 */
.content {
    margin: 30px 0;
    width: 100%;
    padding: 0 8px;
    /* max-height: calc(100vh - 254px); */
    overflow-y: auto;
}
.content .module-list li span {
    color: #120f18;
    text-overflow: ellipsis;
    font-family: DIYFONT;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
}
.ml-6px {
    margin-left: 6px;
}
.module-list li.active {
    border-radius: 10px;
    background: rgba(0,0,0,.04);
}
 .left-nav-wrap .content .module-list li {
    position: relative;
    margin-bottom: 8px;
    padding: 6px;
    /* display: flex; */
    align-items: center;
    cursor: pointer;
}
content .module-list {
    height: 100%;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.ml-8px {
    margin-top: 10px;
    margin-left: 8px;
}
.text-18px {
    font-size: 16px;
    line-height: 1;
}
.font-600 {
    font-weight: 600;
}
.chandler-ext-content-logo-com {
    width: 24px;
    height: 24px;
    background: url(@/assets/img/robot09.gif) no-repeat center;
    background-size: contain;
}
.\!w-40px {
    width: 30px!important;
}
.\!h-40px {
    height: 30px!important;
}
.fullpage-main-nav .left-nav-wrap .top {
    width: 100%;
    padding: 0 8px;
}
.left-nav-wrap {
  
    float: left;
    position: fixed;
    margin-left: 1px;
    background: linear-gradient(240deg,rgba(255,255,255,.72) 75.63%,rgba(47, 47, 184, 0.945) 100%);
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    box-sizing: border-box;
    height: 100vh;
    width: 150px;
    padding: 48px 0 24px;
}
.\!pt-24px {
    padding-top: 24px!important;
}

/* 右边区域 */
 .right .send {
    margin-left: 8px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #ffc800;
    transition: all .3s linear;
    cursor: pointer;
    background-size: 24px 24px;
    background-position: center;
    background-repeat: no-repeat;
}
.left .paperclip {
    margin-right: 26px;
    /* width: 22px; */
    height: 25px;
    display: block;
    cursor: pointer;
    margin-left: 10px;
}
.bottom {
    padding: 8px 12px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-1 {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    -webkit-flex: 1 1 0%;
    flex: 1 1 0%;
}

.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.w-full {
    width: 100%;
}
.px-24px {
    padding-left: 24px;
    padding-right: 24px;
}
.flex-1 {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    -webkit-flex: 1 1 0%;
    flex: 1 1 0%;
}
/* 页面五-站点展示 */
#nav05{

    font-size: 14px;
    line-height: 1.4;
    user-select: none;
    overflow: hidden;
    color: #000;
	width: 89.3%;
	height: 100%;
	/* background-color: #efefef; */
  background: linear-gradient(180deg,rgba(228 ,233 ,247, 0.72) 75.63%,rgba(106, 103, 248, 0.72) 100%);
	position: absolute;
	top: 0;
	right: 0;
	z-index: 3;
}
/* 设置滚动条的样式 */
.chandler-ext-content_communication-wrap::-webkit-scrollbar {
   width:8px;
}
/* 滚动槽 */
.chandler-ext-content_communication-wrap::-webkit-scrollbar-track {
   -webkit-box-shadow:rgba(254,254,254,1);
   border-radius:10px;
}
/* 滚动条滑块 */
.chandler-ext-content_communication-wrap::-webkit-scrollbar-thumb {
   border-radius:3px;
   background-color: rgba(40,40,40,0.6);
}
</style>