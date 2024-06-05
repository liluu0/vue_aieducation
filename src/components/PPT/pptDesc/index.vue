<template>
  <div>
    <div class="header">
      <el-page-header @back="goBack" content="幻灯片模板首页"> </el-page-header>
    </div>
    <div class="centerContent">
           <!-- 聊天区域 -->
            <div v-if="this.chatData.length == 0" class="chatbox">
                      <div class="boctx-wrap-introduce">
                            <div class="introduceleft">
                                <h2 class="max-w-500px">我是你的幻灯片生成助手</h2><br>
                                <div class="ctrl">
                                    <ul>
                                        <li class="desc max-w-500px">你选择的幻灯片模板为：<b> {{this.item.name}} </b></li>
                                        <li class="desc max-w-500px">现在可以向我描述幻灯片内容啦~</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="introduceright">
                                <img class="robotImg" 
                                :src="this.item.thumbnail">
                            </div>
                    </div>
            </div>
            <div v-else class="chatbox" ref="chatbox">
                        <li v-for="(item,index) in this.chatData" :key="index">
                            <div class="user-message clearfix">
                                <div class="message-time" id="time1"> {{item.chatTime}} </div>
                                <div class="chat-message user " >{{item.chatUser}}</div>
                            </div>
                            <div class="bot-message">
                                <div v-if="item.chatGpt == '正在加载中，请稍候……'" class="chat-message chatbot">{{item.chatGpt}}</div>
                                <!-- <div class="chat-message chatbot" v-html="item.chatGpt"></div> -->
                                <div v-else class="chat-message chatbot">
                                    已成功为您生成ppt，点击下载：<br>
                                     <a :href="item.chatGpt" download="presentation.pptx">
                                         <img style='width:100px;' src='@/assets/img/ppt.png' />
                                     </a>
                                </div>
                            </div>
                        </li> 
                    </div>

      
    </div>
                    <!-- 底部输入框 -->
                  <div class="chandler-content_input-box" >
                    <div class="chandler-content_input-box-content">
                      <div class="top">
                        <textarea v-model="this.messageData" 
                                  class="chandler-content_input-area" 
                                  placeholder="请向我描述幻灯片的内容哦~"></textarea>
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
</template>

<script>
import {reqGetPpt} from '@/api'
import { Message } from 'element3'

export default {
  data () {
    return {
      chatData:[],
      item:{
        key:'',
        name:'',
        thumbnail:''
      },
      messageData:'',
      isAudio: false
    }
  },
  mounted() {
    this.item.key =  this.$route.query.key;
    this.item.name = this.$route.query.name;
    this.item.thumbnail = this.$route.query.thumbnail;
  },
  methods: {
    getCurrentTime() {
      return new Date().toLocaleString();
    },
     goBack() {
       this.$router.back()
      },
      async sendBtn(){
        if(this.messageData == '') {
            Message.error('消息不能为空哦~')
            return
        }
        const desc = this.messageData
        this.messageData = ''
        // console.log(desc,this.item.key);
        const time = this.getCurrentTime()
          this.chatData.push({
               chatTime: time,
               chatUser: desc,
               chatGpt: '正在加载中，请稍候……'
           });
        let lastItem = this.chatData[this.chatData.length - 1];
        try {
          const res = await reqGetPpt({
            theme:this.item.key,
            desc:desc
          })
          console.log(res.data.data.data);
          const pptUrl = res.data.data.data.pptUrl
          console.log(pptUrl);
          lastItem.chatGpt = pptUrl
        } catch (error) {
          Message.error('请求失败')
          console.log('sendBtn',error);
        }
      }
  },

}
</script>

<style scoped>
.header {
    padding: 10px 0;
    background-color: #fff;
    border-top: 1px solid;
}
/* 弹窗信息 */

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
.introduceleft {
    margin-left: 20px;
}
.desc {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
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
    padding: 0 20px 30px;
    min-height: 600px;
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
    background-color: #6255e7de;
    color: #fff;
}

/* 底部 */
/* 文本框 */
.left .audio {
    padding: 5px 8px;
    background: #d7d7e4;
    border-radius: 5px;
}
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
.chandler-content_input-area:focus {
  border: 1px solid blue;
  transition:  0.3s ease; /* 添加过渡效果 */
  border-radius: 22px;
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

</style>