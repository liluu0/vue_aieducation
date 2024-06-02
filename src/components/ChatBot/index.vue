<template>
  <div>
    <div class="chat-com-content-wrap">
              <div class="content-header">
                学生智能助手
              </div>
              <!-- 中间内容 -->
              <div class="chat-content">
                <div class="chandler-content_main-board">
                  <div class="chandler-ext-content_communication-wrap">
                     <div v-if="this.chatData.length == 0" class="chatbox">

                        <div class="boctx-wrap-introduce">
                            <div class="introduceleft">
                                <h2 class="max-w-500px">我是你的心理陪聊助手</h2><br>
                                <div class="desc max-w-500px">
                                    我拥有很多神奇的能力哦~<br>
                                </div>
                                <div class="ctrl">
                                    <ul >
                                        <li>我可以陪你聊天，倾听你的心声</li>
                                        <li>我可以为你解答疑惑，帮助你学习</li>
                                        <li>我可以帮你排解压力、减轻焦虑</li>
                                        <li>快来和我聊天吧~</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="introduceright">
                                <img class="robotImg" 
                                src="@/assets/img/robot04.gif">
                            </div>
                        </div>
                       <!-- <img src="@/assets/img/robot04.gif" class="robotImg"> -->

                     </div>
                    <div v-else class="chatbox" ref="chatbox">
                        <li v-for="(item,index) in this.chatData" :key="index">
                            <div class="user-message clearfix">
                                <div class="message-time" id="time1"> {{item.chatTime}} </div>
                                <div class="chat-message user " >{{item.chatUser}}</div>
                            </div>
                            <div class="bot-message">
                                <div class="chat-message chatbot">{{item.chatGpt}}</div>
                            </div>
                        </li> 
                    </div>

                    </div>

                </div>
                <!-- 底部输入框 -->
                  <div class="chandler-content_input-box" >
                    <div class="chandler-content_input-box-content">
                      <div class="top">
                        <textarea v-model="this.messageData" 
                                  class="chandler-content_input-area" 
                                  placeholder="可以问我任何问题哦~"></textarea>
                      </div>
                      <div class="bottom">
                        <div class="left">
                           <img class="paperclip" src="@/assets/img/voiceImg.jpg" @click="voiceBtn">
                           <div class="audio" v-if="this.isAudio">
                            <i class="el-icon-loading"></i>
                            正在录音中，点击暂停……
                            </div>
                        </div>
                        <div class="right">
                                <img class="send" src="@/assets/img/send.jpg" @click="sendBtn">
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
    </div>
  </div>
</template>

<script>
import {reqGptAsk,reqAudioGet} from '@/api'
import * as lamejs from 'lamejs';

export default {
    data () {
        return {
            chatData:[],
            messageData:'',
            mediaRecorder: null,
            chunks: [],
            isAudio: false
        }
    },
    methods:{
    getCurrentTime() {
      return new Date().toLocaleString();
    },
    async voiceBtn(){
        this.isAudio = !this.isAudio
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
    
            this.mediaRecorder.ondataavailable = event => {
              this.chunks.push(event.data);
            };
            if(this.isAudio){
                this.mediaRecorder.start();
            }else{
                // mediaRecorder.stop();
              const blob = new Blob(this.chunks, { type: 'audio/wav' });
              this.convertToMP3(blob);
              this.mediaRecorder = null;
              this.chunks = [];
            }
      } catch (error) {
        console.error('无法访问麦克风:', error);
      }
    },

    convertToMP3(blob) {
    //   const lame = new lamejs();
      const mp3Encoder = new lamejs.Mp3Encoder(1, 44100, 128);
      const fileReader = new FileReader();
      
      fileReader.onload = () => {
        const pcmData = new Int16Array(fileReader.result);
        const mp3Data = mp3Encoder.encodeBuffer(pcmData);
        const mp3Buffer = mp3Encoder.flush();
        const mp3Blob = new Blob([new Uint8Array(mp3Buffer)], { type: 'audio/mp3' });
        this.voicesend(mp3Blob);
      };
      fileReader.readAsArrayBuffer(blob);
    },

    async voicesend(blob){
        console.log('收到了',blob);
        // 将blob对象传递给后端，这里你可以使用fetch或者其他HTTP请求库
        const formData = new FormData();
        formData.append('audio', blob, 'recording.mp3');
        console.log(formData);
        try {
            const res = await reqAudioGet(formData)
            console.log(res.data);
            
        } catch (error) {
            console.log('reqAudioGet',error);
        }

    },

    async sendBtn(){
        if(this.messageData == '') {
            return
        }
        const time = this.getCurrentTime()
        const message = this.messageData
        this.chatData.push({
            chatTime: time,
            chatUser: this.messageData,
            chatGpt: '正在加载中，请稍后……'
        });
        const lastItem = this.chatData[this.chatData.length - 1];
        this.messageData = ''
        console.log(message);
        try {
            const res = await reqGptAsk({question:message})
            console.log(res.data);
            lastItem.chatGpt = res.data.data;

        // const chatbox = this.$refs.chatbox;
        // chatbox.scrollTop = chatbox.scrollHeight;
      } catch (error) {
        console.log('reqGptAsk',error);
      }
    }
    },
  

}
</script>

<style>
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
    font-size: 14px;
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
    margin-right: 15px;
    /* width: 22px; */
    height: 25px;
    display: block;
    cursor: pointer;
    margin-left: 10px;
}

.left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
.top {
    flex: 1;
    width: 100%;
    padding: 0 14px;
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
    min-height: 690px;
    max-height: 690px;
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