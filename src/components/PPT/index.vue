<template>
    <div>
      <div class="chat-com-content-wrap">
                <div class="content-header">
                    幻灯片生成工具
                </div>
                <!-- 中间内容 -->
                <div class="chat-content">

                  <div class="chandler-content_main-board">
                    <div class="chandler-ext-content_communication-wrap">
                        
                        <router-view></router-view>

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
  .left h2 {
      margin-bottom: 4px;
      color: #120f18;
      font-family: IBM Plex Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.2;
  }
  /* 聊天内容区域 */
  
  ul, ol, li {
        list-style-type: none;
        margin:3px;
        /* padding: 1px; */
    }

 
  /* 总体框架 */
  .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 40%;
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
  .chat-com-content-wrap {
      width: 100%;
      height: calc(100% - 46px);
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      max-width: 1140px;
      margin: 16px auto 0px;
      border-radius: 36px;
      /* background: rgba(255, 255, 255, 0.62); */
      background: #ebeef5;
      overflow: hidden;
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
  
  
  /* 中间聊天区 */
  .chandler-ext-content_communication-wrap {
      width: 100%;
      /* padding: 0 20px 30px; */
      min-height: 864px;
      max-height: 864px;
      overflow: auto;
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