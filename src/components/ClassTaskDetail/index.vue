<template>
    <div class="box">
			<div class="subNav">
				任务
			</div>
			<div class="subPageMain clearfix" style="padding: 0;">
				<div class="editContainer fulscren clearfix">
					<div class="edit_main clearfix">
                <div class="mark_item" v-if="this.choiceQuestions.length!=0">
                    <h2 class="type_tit" >选择题（共{{this.choiceQuestions.length}}题）</h2>
                    <div v-for="(item,index) in this.choiceQuestions" :key="item.id" class="marBom60 questionLi singleQuesId" style="word-wrap: break-word;" aria-label="题目详情">
												<h3 class="mark_name colorDeep" >
                          {{index+1}}. <span class="colorShallow">(选择题, {{item.fullscore}}分)</span>
                          {{item.questionText}} （&nbsp; &nbsp; &nbsp; ）。</h3>
														<ul class="mark_letter colorDeep">
																	<li >
                                    <input v-model="this.selectAnswer[index]" class="radio" type="radio" :name='index' :value="{topicId:item.id,answer:item.options1}" >A. {{item.options1}}</li>
																	<li >
                                    <input v-model="this.selectAnswer[index]" class="radio" type="radio" :name='index' :value="{topicId:item.id,answer:item.options2}" >B. {{item.options2}}</li>
																	<li >
                                    <input v-model="this.selectAnswer[index]" class="radio" type="radio" :name='index' :value="{topicId:item.id,answer:item.options3}" >C. {{item.options3}}</li>
																	<li >
                                    <input v-model="this.selectAnswer[index]" class="radio" type="radio" :name='index' :value="{topicId:item.id,answer:item.options4}" >D. {{item.options4}}</li>
														</ul>
                    </div>
                </div>
                
                <div class="mark_item">
                    <h2 class="type_tit" >判断题（共{{this.judgeQuestions.length}}题）</h2>
                    <div v-for="(item,index) in this.judgeQuestions" :key="item.id" class="marBom60 questionLi singleQuesId" style="word-wrap: break-word;" id="question213162988" data="213162988"  aria-label="题目详情">
												<h3 class="mark_name colorDeep" >
                          {{index+1}}. <span class="colorShallow">(判断题, {{item.fullscore}}分)</span>
                          {{item.questionText}}（ &nbsp; &nbsp; &nbsp; ）。</h3>
														<ul class="mark_letter colorDeep">
                                  <li >
                                    <input v-model="this.judgeAnswer[index]" class="radio" type="radio" :name='"选择"+index' :value="{topicId:item.id,answer:'正确'}">
                                        正确
                                  </li>
																	<li >
                                    <input v-model="this.judgeAnswer[index]" class="radio" type="radio" :name='"选择"+index' :value="{topicId:item.id,answer:'错误'}">
                                    错误
                                  </li>
														</ul>
                    </div>
                </div>
                
                <div class="mark_item">
                    <h2 class="type_tit" >应用题（共{{this.useQuestions.length}}题）</h2>
                    <div v-for="(item,index) in this.useQuestions" :key="item.id" class="marBom60 questionLi singleQuesId" style="word-wrap: break-word;" id="question213162988" data="213162988"  aria-label="题目详情">
												<h3 class="mark_name colorDeep" >
                          {{index+1}}. <span class="colorShallow">(应用题, {{item.fullscore}}分)</span>
                          {{item.questionText}}</h3>
														<ul class="mark_letter colorDeep">
                                  <textarea v-model="this.useAnswer[index]" class="chandler-content_input-area" placeholder="请作答..."></textarea>
														</ul>
                    </div>
                </div>
                <div class="btn_create clearfix">
                    <button @click="submitBtn" class="sigin-btn">提交</button>
                </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import {reqStudentGetTopic,reqSubmitTask} from '@/api'
import { Message } from 'element3'
export default {
    data () {
      return {
        choiceQuestions : [],
        judgeQuestions : [],
        useQuestions : [],
        selectAnswer:[],
        judgeAnswer:[],
        useAnswer:[],
        data:[]
      }
    },
    mounted() {
        this.loadTopic()
    },
    methods: {
      async loadTopic(){
        try {
          const res = await reqStudentGetTopic({taskId:this.$route.params.taskId})
          // console.log(res.data);
          if(res.data.code ==200){
            // 遍历原始数据数组，根据 questionType 分类存放
            res.data.data.forEach(item => {
              switch (item.questionType) {
                case '选择题':
                  this.choiceQuestions.push(item);
                  break;
                case '判断题':
                  this.judgeQuestions.push(item);
                  break;
                case '应用题':
                  this.useQuestions.push(item);
                  break;
                default:
                  break;
              }
            });
            // 打印分类后的数据
            console.log('选择题:');
            console.log(this.choiceQuestions);
            console.log('判断题:');
            console.log(this.judgeQuestions);
            console.log('应用题:');
            console.log(this.useQuestions);

          }
        } catch (error) {
          console.log('reqStudentGetTopic',error);
        }
      },
      async submitBtn(){
        // console.log(this.selectAnswer);
        // console.log(this.judgeAnswer);
        // console.log(this.useAnswer);
         this.selectAnswer.forEach(item => {
            this.data.push({
              "topicId": item.topicId,
              "taskId": this.choiceQuestions[0].taskId,
              "answer": item.answer
            });
          });
          this.judgeAnswer.forEach(item => {
            this.data.push({
              "topicId": item.topicId,
              "taskId": this.choiceQuestions[0].taskId,
              "answer": item.answer
            });
          });

          // 将 useAnswer 的内容加入到 data 数组中
          this.useAnswer.forEach((item,index) => {
            this.data.push({
              "topicId": this.useQuestions[index].id,
              "taskId": this.choiceQuestions[0].taskId,
              "answer": item
            });
          });
          // console.log(this.data);
          try {
            const res = await reqSubmitTask(this.data)
            console.log(res.data);
              Message({
              message: '任务提交成功',
              type: 'success'
            })
            setTimeout(() => {
              window.close();
            }, 800);
          } catch (error) {
            console.log('reqSubmitTask',error);
          }
      }
    },
};
</script>

<style scoped>
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
      margin-top: 10px;
      background: transparent;
  }
/* 定制单选按钮样式 */
.radio {
  display: inline-block;
  border-radius: 50%; 
  border: 2px solid #ccc; 
  background-color: #fff; 
  cursor: pointer;
  margin: 0px 8px 0;
}
/* 选中状态下的单选按钮样式 */
.radio:checked {
  background-color: #007bff; 
  border-color: #007bff; 
}
.mark_letter li {
    margin-top: 16px;
}
.mark_letter {
    margin: 0 20px;
}
.colorDeep {
    color: #181E33;
}
ul, ol, li {
    list-style-type: none;
}
.colorShallow {
    color: #A8A8B3;
}
.mark_name {
    margin: 0 20px;
    font-size: 14px;
    overflow-wrap: break-word;
    font-weight: 400;
}
.marBom60 {
    margin-bottom: 30px;
}
.type_tit {
    padding-left: 20px;
    /* padding: 30px 0 30px 20px; */
    margin-bottom: 30px;
    font-size: 16px;
    color: #181E33;
    font-weight: bold;
}
.mark_item {
    margin-bottom: 10px;
    overflow: hidden;
}
.mark_item {
    margin: 10px 20px 20px;
    font-size: 14px;
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
.inputs {
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
 .clearfix::after {
      content: "";
      display: table;
      clear: both;
  }
.sigin-btn {
  width: 100px;
  height: 40px;
  background-color: #2235a0;
  border-radius: 10px;
  color: #fff;
  margin: 15px auto 30px;
  font-family: "Leelawadee", Courier, monospace;
  font-size: 20px;
  cursor: pointer;
  border: 0;
  display: inherit;
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
    margin-top: 30px;
    background: #FFFFFF;
    box-shadow: 0 2px 17px 0 rgba(239, 239, 239, 0.5);
    border-radius: 10px;
    margin-bottom: 70px;
}
.editContainer.fulscren {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-shadow: none;
}
.editContainer.fulscren .edit_main {
    /* text-align: center; */
    position: relative;
    min-height: 800px;
    width: 100%;
    margin: 0;
    padding: 20px 10px 0 ;
    background: #FFFFFF;
    border-radius: 8px;
}

  /* 设置滚动条的样式 */
  .editContainer::-webkit-scrollbar {
     width:8px;
  }
  /* 滚动槽 */
  .editContainer::-webkit-scrollbar-track {
     -webkit-box-shadow:rgba(254,254,254,1);
     border-radius:10px;
  }
  /* 滚动条滑块 */
  .editContainer::-webkit-scrollbar-thumb {
     border-radius:3px;
     background-color: rgba(40,40,40,0.6);
  }
</style>