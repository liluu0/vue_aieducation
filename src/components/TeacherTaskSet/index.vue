<template>
    <div class="box">
			<div class="subNav">
				创建任务
			</div>
			<div class="subPageMain clearfix" style="padding: 0;">
				<div class="editContainer fulscren clearfix">
					<div class="edit_main clearfix">

                        <div v-if="this.repeatedSelect!=0" class="inputs-wrapper clearfix">
                            <h3 class="title">选择题&nbsp;（共{{this.repeatedSelect.length}}个）
                                每题占：<input v-model="this.selectAnswer.fullscore" type="text" class="markInputs">分
                            </h3>
                            <div v-for="(item,index) in this.repeatedSelect" :key="index" class="inputs-item items-user clearfix">
                                <h5 class="h5title">第{{item}}题</h5>
                                 <textarea v-model="this.selectAnswer.querstion[item-1]" class="chandler-content_input-area" placeholder="请输入题目内容..."></textarea>
                                    <span class="input-tips">A：</span>
                                    <input v-model="this.selectAnswer.A[item-1]" type="text" class="inputs">
                                    <span class="input-tips">B：</span>
                                    <input v-model="this.selectAnswer.B[item-1]" type="text" class="inputs">
                                    <span class="input-tips">C：</span>
                                    <input v-model="this.selectAnswer.C[item-1]" type="text" class="inputs">
                                    <span class="input-tips">D：</span>
                                    <input v-model="this.selectAnswer.D[item-1]" type="text" class="inputs">
                                    <span class="input-tips">正确答案：</span>
                                    <input v-model="this.selectAnswer.correctAnswer[item-1]" type="text" class="inputs" style="width:840px;">
                            </div>
                        </div>

                        <div v-if="this.repeatedJudge!=0" class="inputs-wrapper clearfix">
                            <h3 class="title">判断题&nbsp;（共{{this.repeatedJudge.length}}个）
                              每题占：<input v-model="this.judgeAnswer.fullscore" type="text" class="markInputs">分
                            </h3>
                            <div v-for="(item,index) in this.repeatedJudge" :key="index" class="inputs-item items-user clearfix">
                                <h5 class="h5title">第{{item}}题</h5>
                                 <textarea v-model="this.judgeAnswer.querstion[item-1]" class="chandler-content_input-area" placeholder="请输入题目内容..."></textarea>
                                    <div class="inputs-item" style="margin:0;">
                                        <input v-model="this.judgeAnswer.correctAnswer[item-1]" class="radio" type="radio" value="正确" :name="item">
                                        <label class="inputJudge-tips" for="option1">正确</label>
                                        <input v-model="this.judgeAnswer.correctAnswer[item-1]" class="radio" type="radio" value="错误" :name="item">
                                        <label class="inputJudge-tips" for="option2">错误</label>
                                    </div>
                            </div>
                        </div>

                        <div v-if="this.repeatedUse!=0" class="inputs-wrapper clearfix">
                            <h3 class="title">应用题&nbsp;（共{{this.repeatedUse.length}}个）
                              每题占：<input v-model="this.useAnswer.fullscore" type="text" class="markInputs">分
                            </h3>
                            <div v-for="(item,index) in this.repeatedUse" :key="index" class="inputs-item items-user clearfix">
                                <h5 class="h5title">第{{item}}题</h5>
                                <textarea v-model="this.useAnswer.querstion[item-1]" class="chandler-content_input-area" placeholder="请输入题目内容..."></textarea>
                                <span class="input-tips">正确答案：</span>
                                <input v-model="this.useAnswer.correctAnswer[item-1]" type="text" class="inputs" style="width:840px;height:70px;">
                            </div>
                        </div>
                        <div class="btn_create clearfix">
                            <button @click="createBtn" class="sigin-btn">创建</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
  
<script>
import { Message } from 'element3'
import {reqAddTopics} from '@/api'
export default {
  data () {
        return {
            taskId:'',
            querstionType:{
                select:'0',
                judge:'0',
                use:'0'
            },
            selectAnswer:{
              fullscore:'',
              querstion:[],
              A: [],
              B: [],
              C: [],
              D: [],
              correctAnswer:[]
            },
            judgeAnswer:{
              fullscore:'',
              querstion:[],
              correctAnswer:[]},
            useAnswer:{
              fullscore:'',
              querstion:[],
              correctAnswer:[]},
        }
    },
    mounted() {
        this.querstionType = JSON.parse(this.$route.query.querstionType);
        this.taskId = this.$route.query.taskId
    },
    methods:{
      async createBtn(){
            console.log(this.selectAnswer,this.judgeAnswer,this.useAnswer);
            let topics = []
            for (let index = 0; index < this.selectAnswer.querstion.length; index++) {
              let selectElement = {questionType: "选择题",fullscore:this.selectAnswer.fullscore}
              selectElement.questionText = this.selectAnswer.querstion[index]
              selectElement.options1 = this.selectAnswer.A[index]
              selectElement.options2 = this.selectAnswer.B[index]
              selectElement.options3 = this.selectAnswer.C[index]
              selectElement.options4 = this.selectAnswer.D[index]
              selectElement.correctAnswer = this.selectAnswer.correctAnswer[index]
              topics.push(selectElement)
            }
            for (let index = 0; index < this.judgeAnswer.querstion.length; index++) {
              let Element = {questionType: "判断题",
              fullscore:this.judgeAnswer.fullscore,
              options1:'正确',options2:'错误'}
              Element.questionText = this.judgeAnswer.querstion[index]
              Element.correctAnswer = this.judgeAnswer.correctAnswer[index]
              topics.push(Element)
            }
            for (let index = 0; index < this.useAnswer.querstion.length; index++) {
              let Element = {questionType: "应用题",
              fullscore:this.useAnswer.fullscore}
              Element.questionText = this.useAnswer.querstion[index]
              Element.correctAnswer = this.useAnswer.correctAnswer[index]
              topics.push(Element)
            }
            console.log(this.taskId,topics);
            try {
              const res = await reqAddTopics({
                 taskId: this.taskId,
                 topics: topics
              })
              console.log(res);
              if(res.data.code == 200){
                Message({
                  message: '任务创建成功',
                  type: 'success'
                })
                this.$router.go(-1);
                console.log('跳转');
              }
            } catch (error) {
              console.log('reqAddTopics',error);
            }
      }
    },
    computed: {
    repeatedSelect() {
      const times = parseInt(this.querstionType.select);
      return Array.from({ length: times }, (_, index) => index + 1);
    },
    repeatedJudge() {
      const times = parseInt(this.querstionType.judge);
      return Array.from({ length: times }, (_, index) => index + 1);
    },
    repeatedUse() {
      const times = parseInt(this.querstionType.use);
      return Array.from({ length: times }, (_, index) => index + 1);
    }
  },
  };
</script>
  
<style scoped>

/* 定制单选按钮样式 */
.radio {
  display: inline-block;
  width: 20px; /* 单选按钮的宽度 */
  height: 20px; /* 单选按钮的高度 */
  border-radius: 50%; /* 圆形单选按钮 */
  border: 2px solid #ccc; /* 单选按钮边框 */
  background-color: #fff; /* 单选按钮背景色 */
  cursor: pointer;
  margin: 0 10px 0 50px;
}
/* 选中状态下的单选按钮样式 */
.radio {
  background-color: #007bff; /* 选中状态下的背景色 */
  border-color: #007bff; /* 选中状态下的边框颜色 */
}

  .chandler-content_input-area {
      display: inline-block;
      padding: 5px 14px;
      border: 1px solid #D5D7D9;
      border-radius: 4px;
      width: 100%;
      min-height: 90px;
      color: #413659;
      font-size: 14px;
      line-height: 22px;
      outline: none;
      box-sizing: border-box;
      background: transparent;
  }
.title{
    text-align: left;
    height: 53px;
    line-height: 47px;
    border-bottom: 3px solid #f0f0f2;
    width: 100%;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 3px;
	color: rgba(40,40,40,0.8);
	margin: 10px 0px;
}
.h4title {
  letter-spacing: 3px;
    width: 100%;
    text-align: left;
	margin:0 0 10px 0px;
}
.h5title {
    letter-spacing: 3px;
    width: 100%;
    text-align: left;
	margin:0 0 10px 0px;
}
/* 表单 */
.inputs-wrapper .inputs-item {
    float: left;
    width: 100%;
  position: relative;
  margin: 15px 0;
}
.inputs-item::after {
    content: "";
    display: block;
    clear: both;
}

.inputs-wrapper .inputs-item .input-tips {
  text-align: right;
  float: left;
  font-weight: 600;
  margin: 10px 0;
  line-height: 40px;
  display: block;
  font-family: "Leelawadee", Courier, monospace;
}
.inputJudge-tips {
    text-align: right;
  font-weight: 500;
  line-height: 40px;
  display: inline-block;
  font-family: "Leelawadee", Courier, monospace;
}
.inputs-wrapper .inputs-item .inputs {
  float: left;
  display: block;
  width: 900px;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #c6c5ce;
  font-size: 20px;
  margin-top: 10px;
  padding: 0 15px;
  font-family: "Leelawadee", Courier, monospace;
  box-sizing: border-box;
}
.markInputs {
  width: 90px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #c6c5ce;
  font-size: 15px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 0 15px;
  font-family: "Leelawadee", Courier, monospace;
  box-sizing: border-box;
}
.inputs-wrapper .inputs-item .files {
  float: right;
  display: block;
  width: 84%;
  height: 50px;
  font-size: 20px;
  padding: 8px 15px;
  font-family: "Leelawadee", Courier, monospace;
  box-sizing: border-box;
  color: #251aeb;
}

.textarea {
  float: right;
  display: block;
  width: 84%;
  height: 110px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #c6c5ce;
  font-size: 20px;
  font-family: "Leelawadee", Courier, monospace;
  box-sizing: border-box;
  color: #251aeb;
  padding: 10px 15px;
}
.inputs-wrapper {
    margin:0 50px 0 0;
    /* min-height: 645px; */
}
.inputs-wrapper .inputs-item .inputs:focus {
  border: 1px solid #c0d1ff;
  box-sizing: border-box;
}
 .clearfix::after {
      content: "";
      display: table;
      clear: both;
  }
.sigin-btn {
  width: 130px;
  height: 50px;
  background-color: #1f1567;
  border-radius: 10px;
  color: #fff;
  margin: 40px;
  font-family: "Leelawadee", Courier, monospace;
  font-size: 20px;
  cursor: pointer;
  border: 0;
}


.box {
    width: 100%;
    height: 100%;
    position: relative;
}
.subNav {
    width: 100%;
    height: 40px;
    background: #3A4357;
    box-shadow: 0 2px 17px 0 rgba(211,211,211,0.50);
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #A8A8B3;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
}
.subPageMain {
    position: relative;
    top: 40px;
    width: 1080px;
    margin: 0 auto;
    margin-top: 35px;
    background: #FFFFFF;
    box-shadow: 0 2px 17px 0 rgba(239, 239, 239, 0.5);
    border-radius: 10px;
}
.editContainer.fulscren {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-shadow: none;
}
.editContainer.fulscren .edit_main {
    text-align: center;
    position: relative;
    min-height: 800px;
    width: 100%;
    margin: 0;
    padding: 20px 45px 0 55px;
    background: #FFFFFF;
    border-radius: 8px;
}

</style>