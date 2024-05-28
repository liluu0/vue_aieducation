<template>
    <div class="discussAll">
  
    <div class="discussArea">
      <div class="btn_group" tabindex="-1" aria-hidden="true">
              <div class="search-box">
                        <el-input placeholder="请输入内容" 
                        v-model="input" 
                        prefix-icon="el-icon-search"
                        clearable> </el-input>
              </div> 
              
         <el-button @click="addClass" type="primary" plain round> + 添加讨论</el-button>
      </div>
  
      <div class="alltopic clearfix">
      <ul class="breadcrumb">
          <li class="active">
              <span>共<b>13</b>条话题</span>
          </li>
      </ul>
      </div>
      
      
      <div class="dataCon">
          <div v-if="false" class="dataCon_empty" style="">
              <span>本课程还没有话题哦，快去发布一个吧～</span>
          </div>
  
          <div v-else>
              <ul class="dataBody">
          <li class="dataBody_td dataBody_topic">
            <div class="dataBody_file">
              <img src="http://dd2311270953.cdn.bcebos.com/uploads/userfiles/18/images/pageimg/20220710/18-220G01523126.jpeg">
            </div>
            <div class="dataBody_right">
                <div class="topicli_head">
                  <p class="topicli_head_left">
                    <span class="author">xxxx</span>
                    <span class="time">01-12 00:26</span>
                  </p>
                </div>
                  <div class="topicli_title">
                      <span class="topicli_title_text">序列化</span>
                  </div>
            </div>
          </li>
          <li class="dataBody_td dataBody_topic">
            <div class="dataBody_file">
              <img src="http://dd2311270953.cdn.bcebos.com/uploads/userfiles/18/images/pageimg/20220710/18-220G01523126.jpeg">
            </div>
            <div class="dataBody_right">
                <div class="topicli_head">
                  <p class="topicli_head_left">
                    <span class="author">xxxx</span>
                    <span class="time">01-12 00:26</span>
                  </p>
                </div>
                  <div class="topicli_title">
                      <span class="topicli_title_text">序列化</span>
                  </div>
            </div>
          </li>
          <li class="dataBody_td dataBody_topic">
            <div class="dataBody_file">
              <img src="http://dd2311270953.cdn.bcebos.com/uploads/userfiles/18/images/pageimg/20220710/18-220G01523126.jpeg">
            </div>
            <div class="dataBody_right">
                <div class="topicli_head">
                  <p class="topicli_head_left">
                    <span class="author">xxxx</span>
                    <span class="time">01-12 00:26</span>
                  </p>
                </div>
                  <div class="topicli_title">
                      <span class="topicli_title_text">序列化</span>
                  </div>
            </div>
          </li>
          <li class="dataBody_td dataBody_topic">
            <div class="dataBody_file">
              <img src="http://dd2311270953.cdn.bcebos.com/uploads/userfiles/18/images/pageimg/20220710/18-220G01523126.jpeg">
            </div>
            <div class="dataBody_right">
                <div class="topicli_head">
                  <p class="topicli_head_left">
                    <span class="author">xxxx</span>
                    <span class="time">01-12 00:26</span>
                  </p>
                </div>
                  <div class="topicli_title">
                      <span class="topicli_title_text">序列化</span>
                  </div>
            </div>
          </li>
          <li class="dataBody_td dataBody_topic">
            <div class="dataBody_file">
              <img src="http://dd2311270953.cdn.bcebos.com/uploads/userfiles/18/images/pageimg/20220710/18-220G01523126.jpeg">
            </div>
            <div class="dataBody_right">
                <div class="topicli_head">
                  <p class="topicli_head_left">
                    <span class="author">xxxx</span>
                    <span class="time">01-12 00:26</span>
                  </p>
                </div>
                  <div class="topicli_title">
                      <span class="topicli_title_text">序列化</span>
                  </div>
            </div>
          </li>
          <li class="dataBody_td dataBody_topic">
            <div class="dataBody_file">
              <img src="http://dd2311270953.cdn.bcebos.com/uploads/userfiles/18/images/pageimg/20220710/18-220G01523126.jpeg">
            </div>
            <div class="dataBody_right">
                <div class="topicli_head">
                  <p class="topicli_head_left">
                    <span class="author">xxxx</span>
                    <span class="time">01-12 00:26</span>
                  </p>
                </div>
                  <div class="topicli_title">
                      <span class="topicli_title_text">序列化</span>
                  </div>
            </div>
          </li>
          <li class="dataBody_td dataBody_topic">
            <div class="dataBody_file">
              <img src="http://dd2311270953.cdn.bcebos.com/uploads/userfiles/18/images/pageimg/20220710/18-220G01523126.jpeg">
            </div>
            <div class="dataBody_right">
                <div class="topicli_head">
                  <p class="topicli_head_left">
                    <span class="author">xxxx</span>
                    <span class="time">01-12 00:26</span>
                  </p>
                </div>
                  <div class="topicli_title">
                      <span class="topicli_title_text">序列化</span>
                  </div>
            </div>
          </li>
          <li class="dataBody_td dataBody_topic">
            <div class="dataBody_file">
              <img src="http://dd2311270953.cdn.bcebos.com/uploads/userfiles/18/images/pageimg/20220710/18-220G01523126.jpeg">
            </div>
            <div class="dataBody_right">
                <div class="topicli_head">
                  <p class="topicli_head_left">
                    <span class="author">xxxx</span>
                    <span class="time">01-12 00:26</span>
                  </p>
                </div>
                  <div class="topicli_title">
                      <span class="topicli_title_text">序列化</span>
                  </div>
            </div>
          </li>
          <li class="dataBody_td dataBody_topic">
            <div class="dataBody_file">
              <img src="http://dd2311270953.cdn.bcebos.com/uploads/userfiles/18/images/pageimg/20220710/18-220G01523126.jpeg">
            </div>
            <div class="dataBody_right">
                <div class="topicli_head">
                  <p class="topicli_head_left">
                    <span class="author">xxxx</span>
                    <span class="time">01-12 00:26</span>
                  </p>
                </div>
                  <div class="topicli_title">
                      <span class="topicli_title_text">序列化</span>
                  </div>
            </div>
          </li>
        </ul>
          </div>
  
      </div>
    </div>
    
    <!-- 背景margin -->
    <div class="bgmargin">
    </div>
              
    <div>
  
      <div class="editContainer">
          <div class="edit_headTitle">新建话题</div> 
          <div class="edit_main">
              <div class="edit_target">
                  <span class="fl">发布给</span> 
                  <div class="fl selectClass-disabled">
                      <b class="color000">2022软件1班</b>
                  </div>
              </div> 
              <div class="edit_title">
                  <input type="text" name="title" v-model="this.discussData.discussionTitle" placeholder="请输入标题..." autocomplete="off">
                  <div class="deit_content">
                      
                      <textarea class="chandler-content_input-area" v-model="this.discussData.discussionContent" placeholder="请输入话题内容..."></textarea>
                      <br>
                  <el-button @click="createDiscuss" type="primary" plain round> 发 布 </el-button>
                  </div>
              </div>
          </div>
      </div>
  
  
    </div>
    </div>
</template>
  
<script>
import { Message } from 'element3'
export default {
    data () {
      return {
        discussData:{
          discussionTitle:'',
          discussionContent:''
        }
      }
    },
    methods: {
      createDiscuss(){
        if(this.discussData.discussionTitle&&this.discussData.discussionContent){
          console.log('发布',this.discussData);
        }else{
            Message('信息不能为空哦~')
        }
      }
    },
    
  
  }
  </script>
  
  <style scoped>
  /* 讨论列表 */
  .dataBody_td:after {
      content: "";
      position: absolute;
      left: 30px;
      right: 30px;
      bottom: 0;
      border-bottom: solid 1px #F2F2F2;
  }
  .topicli_title .topicli_title_text {
      display: inline-block;
      vertical-align: middle;
      max-width: calc(100% - 330px);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-right: 10px;
      color: #131B26;
  }
  .topicli_title {
      font-size: 16px;
      line-height: 22px;
      color: #131B26;
      cursor: pointer;
  }
  .time {
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      font-size: 12px;
      color: #8A8B99;
  }
  .topicli_head .author {
      max-width: 75px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }
  .author {
    font-weight: bold;
      display: inline-block;
      vertical-align: middle;
      font-size: 14px;
      color: #8A8B99;
      margin-right: 6px;
  }
  .topicli_head {
      position: relative;
      line-height: 30px;
      margin-bottom: 10px;
  }
  .dataBody_topic .dataBody_right {
      margin-left: 44px;
  }
  .dataBody_topic .dataBody_file img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
  }
  .dataBody_topic .dataBody_file {
      height: 30px;
      margin-right: 10px;
      top: 0;
  }
  
  .dataBody_file {
      position: relative;
      float: left;
      height: 30px;
      top: 3px;
      margin-right: 14px;
      z-index: 3;
  }
  .dataBody_topic {
      padding: 20px 30px 10px;
  }
  .dataBody_td {
      position: relative;
      float: none;
      min-height: 54px;
      padding: 20px 10px 30px;
      font-size: 12px;
      color: #474C59;
      box-sizing: border-box;
  }
  
  ul, ol, li {
      list-style-type: none;
  }
  /* .deit_content {
   background-color: red;
  } */
  .chandler-content_input-area {
  
      display: inline-block;
      padding: 5px 14px;
      border: 1px solid #D5D7D9;
      border-radius: 4px;
      margin: 15px 0px;
  
      width: 100%;
      height: 11vh;
      max-height: 250px;
      min-height: 250px;
      color: #413659;
      font-size: 14px;
      line-height: 22px;
      outline: none;
      box-sizing: border-box;
      background: transparent;
  }
  .fl {
      float: left;
  }
  .color000 {
      color: #000;
  }
  /* 新建讨论 */
  .editContainer {
      position: relative;
      padding: 30px 30px 40px;
      min-height: 500px;
  }
  .editContainer .edit_headTitle {
      font-size: 18px;
      color: #131B26;
      font-weight: bold;
      line-height: 28px;
      padding-bottom: 20px;
  }
  .editContainer .edit_target {
      height: 30px;
      line-height: 30px;
      margin-bottom: 10px;
      font-size: 14px;
      color: #8A8B99;
  }
  .editContainer .edit_target .selectClass-disabled {
      margin-left: 14px;
      font-size: 14px;
  }
  .editContainer .edit_title {
      background: #fff;
      margin-bottom: 15px;
  }
  .editContainer .edit_title input {
      display: block;
      width: 100%;
      height: 42px;
      padding: 0 14px;
      font-size: 14px;
      border: 1px solid #D5D7D9;
      border-radius: 4px;
      box-sizing: border-box;
      caret-color: #3A8BFF;
      margin: 15px 0;
  }
  
  /* 分界 */
  .clearfix:after {
      content: " ";
      display: block;
      height: 0px;
      clear: both;
  }
  
  ul, ol, li {
      list-style-type: none;
  }
  .alltopic {
      border-bottom: 1px solid #dcdfe6;
      padding-bottom: 10px;
  }
  .alltopic .breadcrumb {
      float: left;
      max-width: 60%;
  }
  .breadcrumb {
      width: 100%;
      padding: 15px 0 0 10px;
      box-sizing: border-box;
  }
  .breadcrumb>li.active {
      color: #8A8B99;
  }
  .btn_group::after {
  content: "";
  display: block;
  clear:both;
  }
  .search-box {
              cursor: pointer;
              transition: all 0.3s ease;
              padding: 0;
              float: left;
  }
  .el-input__inner {
      border-radius: 20px;
      border: 2px solid #dcdfe6;
      width: 287px;
  }
  .el-button--small, .el-button--small.is-round {
      padding: 0;
      width: 104px;
      height: 36px;
      float: right;
      margin-left: 30px;
  }
  
  /* 话题 */
  .dataCon {
      min-height: 400px;
  }
  .dataCon_empty {
      height: 180px;
      font-size: 14px;
      color: #a8a8b3;
      text-align: center;
      position: absolute;
      top: 26%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  .dataCon_empty span {
      display: inline-block;
      vertical-align: middle;
  }
  .bgmargin {
      height: 20px;
      background-color: #efefef;
      width: 107%;
      margin-left: -30px;
  }
  </style>