<template>
	<div id="nav05">
          <div class="left-nav-wrap !pt-24px">
            dsdfs
          </div>

          <div class="chat-page-wrap w-full h-full flex-1 px-24px">
            <div class="chat-com-content-wrap" data-v-34a1b23e="">
              <div class="content-header">
                学生智能助手
              </div>
              <!-- 中间内容 -->
              <div class="chat-content">
                <div class="chandler-content_main-board">
                  <div class="chandler-ext-content_communication-wrap">
                    fdsafdsa
                    fdsafdsa
                    fdsafdsa<br><br><br><br><br><br><br>
                    fdsafdsa<br><br><br><br><br><br><br>
                    fdsafdsa<br><br><br><br><br><br><br>
                    fdsafdsa<br><br><br><br><br><br><br>
                    fdsafdsa
                    fdsafdsa<br><br><br><br><br><br><br>
                    fdsafdsa
                    fdsafdsa<br><br><br><br><br><br><br>
                    fdsafdsa<br><br><br><br><br><br><br>
                    fdsafdsa<br><br><br><br><br><br><br>
                    fdsafdsa
                  </div>
                </div>
                <!-- 底部输入框 -->
                  <div class="chandler-content_input-box" >
                    <div class="chandler-content_input-box-content">
                      <div class="top" data-v-cbd49e0c="">
                        <textarea v-model="this.messageData" 
                                  class="chandler-content_input-area" 
                                  placeholder="可以问我任何问题哦~"></textarea>
                      </div>
                      <div class="bottom" data-v-cbd49e0c="">
                        <div class="left">
                          <!-- <div class="paperclip chandler-content_input-box-icon"></div> -->
                           <img class="paperclip" src="@/assets/img/voiceImg.jpg" @click="voiceBtn">
                        </div>
                        <div class="right" data-v-cbd49e0c="">
                           <img class="send" src="@/assets/img/send.jpg" @click="sendBtn">
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
	</div>

</template>

<script>
export default {
  data () {
    return {
      messageData:''
    }
  },
  methods:{
    voiceBtn(){
      console.log('点击了语音按钮');
    },
    sendBtn(){
      console.log('点击了发送',this.messageData);
      this.messageData = ''
    }
  }
   
}
</script>

<style scoped>
/* 侧边栏 */
.left-nav-wrap {
  
    float: left;
    position: fixed;
    margin-left: 1px;
    background: linear-gradient(240deg,rgba(255,255,255,.72) 75.63%,rgba(47, 47, 184, 0.945) 100%);
    /* background: linear-gradient(180deg,rgba(255, 255, 255, 0.72) 75.63%,rgba(106, 103, 248, 0.72) 100%); */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    box-sizing: border-box;
    height: 100vh;
    width: 130px;
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
.right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
/* 文本框 */
.chandler-content_input-area:focus {
  border: 1px solid blue;
  transition:  0.3s ease; /* 添加过渡效果 */
  border-radius: 22px;
}
.top {
    flex: 1;
    width: 100%;
    padding: 0 14px;
}
.chandler-content_input-area {
    resize: none;
    width: 100%;
    padding: 12px 10px;
    height: 11vh;
    max-height: 100px;
    min-height: 60px;
    border: unset;
    color: #413659;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    outline: none;
    box-sizing: border-box;
    background: transparent;
}
/* 中间聊天区 */
.chandler-ext-content_communication-wrap {
    width: 100%;
    padding: 0 20px 30px;
    min-height: 690px;
    max-height: 690px;
    overflow: auto;
}
.chat-com-content-wrap .chandler-content_main-board {
    width: 100%;
    overflow-y: auto;
    flex: 1 1 0%;
    overscroll-behavior: contain;
}
.chat-com-content-wrap .chat-content {
    width: 100%;
    height: calc(100% - 56px);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    user-select: text;
}

.chandler-content_input-box {
    position: relative;
    width: 100%;
    z-index: 1;
    padding: 0 12px 12px;
}
.chandler-content_input-box-content {
    width: 100%;
    background: rgba(255,255,255,.72);
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 3px rgba(112, 110, 245, 0.82) ;
    overflow: hidden;
    align-items: center;
    justify-content: center;
}


.content-header {
    width: 100%;
    /* height: 56px; */
    padding: 24px 0 12px 24px;
    backdrop-filter: blur(22px);
    border-radius: 36px 36px 0 0;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;

    background: linear-gradient(10deg,rgba(255,255,255,.72) 75.63%,rgba(74, 71, 243, 0.72) 100%);
    color: var(--text-color);
    z-index: 10;

}
.chat-com-content-wrap {
    width: 100%;
    height: calc(100% - 46px);
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 900px;
    margin: 16px auto 0px;
    border-radius: 36px;
    background: rgba(255, 255, 255, 0.62);
    overflow: hidden;
}
.ew-resize {
    width: 2px;
    height: 100%;
    background: transparent;
    margin-right: -2px;
    z-index: 10;
    cursor: ew-resize;
    float: left;
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