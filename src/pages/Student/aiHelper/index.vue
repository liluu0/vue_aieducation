<template>
	<div id="nav05">
					<div class="history-content" data-v-bed3d893="" style="width: 280px;">
            <div class="chat-com-left-wrap" data-v-0da4ee52="" >
                <h3 class="title-wrap h-40px" data-v-0da4ee52="">
                  <span class="title" data-v-0da4ee52="">历史记录</span>
                </h3>
                <div class="history-box-list" infinite-scroll-disabled="true" infinite-scroll-delay="800" infinite-scroll-distance="200" style="overflow-y: auto;">
                  <div class="history-box-list-group">
                    <p class="history-box-list-time">2024-07-15</p>
                    <div class="history-box-list-it">
                      <div class="flex items-center justify-between">
                        <span class="flex-1 history-box-list-it-title">学习概率论的技巧</span>
                      </div>
                    </div>
                  </div>
                  <div class="history-box-list-group">
                    <p class="history-box-list-time">2024-06-18</p>
                    <div class="history-box-list-it">
                      <div class="flex items-center justify-between">
                        <span class="flex-1 history-box-list-it-title">如何通过英语四六级</span>
                      </div>
                    </div>
                  </div>
                  <div class="history-box-list-group">
                    <p class="history-box-list-time">2024-06-17</p>
                    <div class="history-box-list-it">
                      <div class="flex items-center justify-between">
                        <span class="flex-1 history-box-list-it-title">高数</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="history-box-list-group">
                    <p class="history-box-list-time">2024-06-15</p>
                    <div class="history-box-list-it">
                      <div class="flex items-center justify-between">
                        <span class="flex-1 history-box-list-it-title">red是什么意思</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="history-box-list-group">
                    <p class="history-box-list-time">2024-06-10</p>
                    <div class="history-box-list-it">
                      <div class="flex items-center justify-between">
                        <span class="flex-1 history-box-list-it-title">如何做到开心每一天</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="history-box-list-group">
                    <p class="history-box-list-time">2024-06-07</p>
                    <div class="history-box-list-it">
                      <div class="flex items-center justify-between">
                        <span class="flex-1 history-box-list-it-title">您好呀</span>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
          </div>

          <div class="F w-full h-full flex-1 px-24px">
            <ChatBot  data="智能陪聊助手"/>
          </div>
	</div>

</template>

<script>
import ChatBot from '@/components/ChatBot'
export default {
  components:{ChatBot},
  data () {
    return {
      messageData:''
    }
  },

   
}
</script>

<style scoped>

.chat-com-left-wrap .history-box-list-it-title{
    overflow: hidden;
    color: #120f18;
    text-overflow: ellipsis;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    white-space: nowrap;
}

.flex-1 {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    -webkit-flex: 1 1 0%;
    flex: 1 1 0%;
}
.justify-between {
    justify-content: space-between;
}

.items-center {
    align-items: center;
}
.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.chat-com-left-wrap .history-box-list-it {
    text-align: left;
    cursor: pointer;
    padding: 6px 12px;
}
.chat-com-left-wrap .history-box-list-time {
    text-align: left;
    padding: 6px 12px;
    color: #a196c0;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.chat-com-left-wrap .history-box-list-group {
    margin-bottom: 12px;
}
.chat-com-left-wrap .history-box-list {
    margin-top: 12px;
    width: 100%;
    padding-right: 6px;
    max-height: calc(100vh - 100px);
    min-height: 200px;
    flex: 1;
    overflow: auto;
}
.chat-com-left-wrap .title-wrap .title {
    color: #120f18;
    font-family: diyFont;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
}
.chat-com-left-wrap .title-wrap {
    padding-right: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.h-40px {
    height: 40px;
}
.chat-com-left-wrap{
    font-family: NUMFONT;
    height: 100%;
}
.history-content {
    float: left;
    position: fixed;
    height: 100%;
    width: 280px;
    padding: 24px 0 24px 16px;
    margin-left: 1px;
    /* background: linear-gradient(180deg,rgba(255,255,255,.72) 75.63%,rgba(255,241,168,.72) 100%); */
    /* background: linear-gradient(180deg,rgba(255, 255, 255, 0.72) 75.63%,rgba(106, 103, 248, 0.72) 100%); */
    background: linear-gradient(180deg,rgba(255, 255, 255, 0.72) 75.63%,rgba(158, 157, 250, 0.72) 100%);

    /* background: linear-gradient(180deg,rgba(255, 255, 255, 0.72) 75.63%,rgba(74, 71, 243, 0.72) 100%); */
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

</style>