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
      </div>
  
      <div class="alltopic clearfix">
      <ul class="breadcrumb">
          <li class="active">
              <span>共<b>{{this.discussNum}}</b>条讨论</span>
          </li>
      </ul>
      </div>
      
      
      <div class="dataCon">
          <div v-if="!this.discussNum" class="dataCon_empty" style="">
              <span>您还没有讨论哦，快去发布一个吧～</span>
          </div>
  
          <div v-else>
           <ul class="dataBody">
            <li v-for="(item,index) in this.allDiscussions" :key="index" class="dataBody_td dataBody_topic">
                <div class="dataBody_file">
                <img :src="item.image">
                </div>
                    <div class="dataBody_right">
                        <div class="topicli_head">
                        <p class="topicli_head_left">
                            <span class="author">{{item.name}}</span>
                            <span class="time">{{item.commentTime}}</span>
                        </p>
                        </div>
                        <div class="topicli_title">
                            <span class="topicli_title_text">{{item.title}}</span>
                        </div>
                    </div>
              </li>
            </ul>
          </div>
      </div>
    </div>
    
    </div>
</template>
  
<script>
import {reqAllMyDiscussion} from '@/api'
export default {
    data () {
      return {
        discussNum:0,
        allDiscussions:[]
      }
    },
    mounted() {
      this.loadAllDiscussions()
    },
    methods: {
      async loadAllDiscussions(){
        try {
          const res = await reqAllMyDiscussion(this.$route.params.courseId)
          this.discussNum = res.data.data.length
          this.allDiscussions = res.data.data
          console.log(this.discussNum,this.allDiscussions);
          
        } catch (error) {
          console.log('reqAllMyDiscussion',error);
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
      background-color: #fff;
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
  </style>