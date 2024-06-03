<template>
    <div>
      <div class="chat-com-content-wrap">
                <div class="content-header">
                    视觉识物引擎
                </div>
                <!-- 中间内容 -->
                <div class="chat-content">
                  <div class="chandler-content_main-board">
                    <div class="chandler-ext-content_communication-wrap">
                       <div v-if="this.chatData.length == 0" class="chatbox">
  
                          <div class="boctx-wrap-introduce">
                              <div class="introduceleft">
                                  <h2 class="max-w-500px">我是你的视觉识物引擎</h2><br>
                                  <div class="desc max-w-500px">
                                      我拥有很多神奇的能力哦~<br>
                                  </div>
                                  <div class="ctrl">
                                      <ul >
                                          <li>我能够看懂各种图像哦</li>
                                          <li>快来和我探索世界吧！</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="introduceright">
                                  <img class="robotImg" 
                                  src="@/assets/img/robot04.gif">
                              </div>
                          </div>
                       </div>

                      <div v-else class="chatbox" ref="chatbox">
                          <li v-for="(item,index) in this.chatData" :key="index">
                              <div class="user-message clearfix">
                                  <div class="message-time" id="time1"> {{item.chatTime}} </div>
                                  <div class="chat-message user" >
                                    <img class="userImg" :src="item.chatUser"/>
                                  </div>
                              </div>
                              <div class="bot-message">
                                  <div v-if="item.chatGpt.length == 0" class="chat-message chatbot">正在为您加载数据，请稍候……</div>
                                  <div v-else class="chat-message chatbot">
                                    为您识别到了以下内容：
                                    <div>
                                        <el-table :data="item.chatGpt" style="width: 100%">
                                            <el-table-column prop="label" label="物品标签"> </el-table-column>
                                            <el-table-column prop="type" label="类型" width="200"> </el-table-column>
                                            <el-table-column prop="chinese" label="物品名称" width="200"> </el-table-column>
                                            <el-table-column prop="english" label="物品英文" width="200"> </el-table-column>
                                        </el-table>
                                    </div>
                                  </div>
                              </div>
                          </li> 
                      </div>
  
                      </div>
  
                  </div>
                  <!-- 底部输入框 -->
                    <div class="chandler-content_input-box" >
                      <div class="chandler-content_input-box-content">
                        <div class="bottom">
                          <div class="left" @click="this.imageBtn" >
                                <img class="paperclip" src="@/assets/img/image.jpg">
                                上传图片
                          </div>
                         <input type="file"  ref="fileInput" @change="handleFileUpload" style="display: none;">
                        </div>
                      </div>
                    </div>
                </div>
      </div>
    </div>
</template>
  
 <script>
  import {reqPictureUpload,reqSeeGoods} from '@/api'
  export default {
      data () {
          return {
              chatData:[]
          }
      },
      methods:{
      getCurrentTime() {
        return new Date().toLocaleString();
      },
      imageBtn(){
        // console.log('上传图片');
        this.$refs.fileInput.click();
      },
      async handleFileUpload(event) {
        const file1 = event.target.files[0];
        // 创建 FormData 对象
        let file = new FormData();
        file.append("file", file1);
        let seeImage = ''
        try {
          const res = await reqPictureUpload(file)
          seeImage = res.data.data
          const time = this.getCurrentTime()
            this.chatData.push({
                chatTime: time,
                chatUser: seeImage,
                chatGpt: []
             });
            const lastItem = this.chatData[this.chatData.length - 1];
            
            // 创建 FormData 对象
            let fileImage = new FormData();
            fileImage.append("image", file1);
            const resSeeGoods = await reqSeeGoods(fileImage)
            console.log(resSeeGoods.data);
            lastItem.chatGpt = resSeeGoods.data.data

        } catch (error) {
            console.error('reqPictureUpload,reqSeeGoods',error);
        }
      },
      },
    
  }
</script>
  
<style scoped>
  .introduceleft {
      margin-left: 20px;
  }
  .desc {
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.2;
  }
  .left h2 {
      margin-bottom: 4px;
      color: #120f18;
      font-family: IBM Plex Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.2;
  }
  .left .audio {
      padding: 5px 8px;
      background: #d7d7e4;
      border-radius: 5px;
  }
  .max-w-500px {
      max-width: 500px;
  }
  .ctrl{
      color: #413659;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
  }
  .robotImg {
      max-width: 100%;
      height: auto;
      display: block;
      /* vertical-align: middle; */
  }
  .boctx-wrap-introduce{
      width: 100%;
      padding: 20px 24px;
      border-radius: 32px;
      margin-top: 20px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .boctx-wrap-introduce .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
  }
  
  .robotImg {
      height: 200px;
  }
  /* 聊天内容区域 */
  
  ul, ol, li {
        list-style-type: none;
        margin:3px;
        /* padding: 1px; */
    }
  .message-time {
      font-size: 12px;
      color: gray;
      margin: 4px 0;
      text-align: center;
  }
  
  .chatbox {
      border-radius: 3px;
      height: 100%;
      margin: 0 0 20px;
      padding: 10px;
      min-height: 300px;
  }
  .chat-message {
      font-size: 16px;
      display: inline-block;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 22px;
  }
  
  .user {
      background-color: #fff;
      color: #333;
      float: right;
  }
  .user .userImg {
    width: 400px;
  }
  
  .clearfix::after {
      content: "";
      display: table;
      clear: both;
  }
  
  .chatbot {
      /* background-color: #4a40b1de; */
      background-color: #6255e7de;
      color: #fff;
  }
  
  /* 总体框架 */
  
  .left .paperclip {
      margin-right: 15px;
      /* width: 22px; */
      height: 36px;
      display: block;
      cursor: pointer;
      margin-left: 10px;
  }
  
  .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 40%;
  }
  
  .bottom {
      padding: 8px 12px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
      max-width: 900px;
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
  
  /* 文本框 */
  .chandler-content_input-area:focus {
    border: 1px solid blue;
    transition:  0.3s ease; /* 添加过渡效果 */
    border-radius: 22px;
  }
  
  /* 中间聊天区 */
  .chandler-ext-content_communication-wrap {
      width: 100%;
      padding: 0 20px 30px;
      min-height: 800px;
      max-height: 800px;
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