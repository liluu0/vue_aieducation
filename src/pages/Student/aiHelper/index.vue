<template>
	<div id="nav05">
					<div class="history-content" data-v-bed3d893="" style="width: 280px;">
            <div class="chat-com-left-wrap" data-v-0da4ee52="" data-v-bed3d893="">
                <h3 class="title-wrap h-40px" data-v-0da4ee52="">
                  <span class="title" data-v-0da4ee52="">历史记录</span>
                </h3>
                <div class="history-box-list" infinite-scroll-disabled="true" infinite-scroll-delay="800" infinite-scroll-distance="200" data-v-0da4ee52="" style="overflow-y: auto;">
                  <div class="history-box-list-group" data-v-0da4ee52="">
                    <p class="history-box-list-time" data-v-0da4ee52="">2024-05-17</p>
                    <div class="history-box-list-it" data-v-0da4ee52="">
                      <div class="flex items-center justify-between" data-v-0da4ee52="">
                        <span class="flex-1 history-box-list-it-title" data-v-0da4ee52="">高数</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el-overlay" style="z-index: 2050; display: none;">
                  <div role="dialog" aria-modal="true" aria-labelledby="el-id-151-33" aria-describedby="el-id-151-34" class="el-overlay-dialog"></div>
                </div>
                <div class="el-overlay" style="z-index: 2051; display: none;">
                  <div role="dialog" aria-modal="true" aria-labelledby="el-id-151-35" aria-describedby="el-id-151-36" class="el-overlay-dialog"></div>
                </div>
            </div>
          </div>

          <!-- <div class="ew-resize" data-v-bed3d893=""></div> -->

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
                        <textarea class="chandler-content_input-area" placeholder="问我任何问题"></textarea>
                      </div>
                      <div class="bottom" data-v-cbd49e0c="">
                        <div class="left" data-v-cbd49e0c="">
                          上传文件、语音
                        </div>
                        <div class="right" data-v-cbd49e0c="">
                          发布
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
   
}
</script>

<style scoped>
/* 文本框 */
.chandler-content_input-box .chandler-content_input-area:focus {
  border: 1px solid blue;
}
.top {
    flex: 1;
    width: 100%;
    padding: 0 14px;
}
.chandler-content_input-area {
    resize: none;
    width: 100%;
    padding: 12px 0;
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
.chat-com-left-wrap .history-box-list-it-title[data-v-0da4ee52] {
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
.chat-com-left-wrap .history-box-list-it[data-v-0da4ee52] {
    text-align: left;
    cursor: pointer;
    padding: 6px 12px;
}
.chat-com-left-wrap .history-box-list-time[data-v-0da4ee52] {
    text-align: left;
    padding: 6px 12px;
    color: #a196c0;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.chat-com-left-wrap .history-box-list-group[data-v-0da4ee52] {
    margin-bottom: 12px;
}
.chat-com-left-wrap .history-box-list[data-v-0da4ee52] {
    margin-top: 12px;
    width: 100%;
    padding-right: 6px;
    max-height: calc(100vh - 100px);
    min-height: 200px;
    flex: 1;
    overflow: auto;
}
.chat-com-left-wrap .title-wrap .title[data-v-0da4ee52] {
    color: #120f18;
    font-family: diyFont;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
}
.chat-com-left-wrap .title-wrap[data-v-0da4ee52] {
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
    background: linear-gradient(180deg,rgba(255, 255, 255, 0.72) 75.63%,rgba(106, 103, 248, 0.72) 100%);
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