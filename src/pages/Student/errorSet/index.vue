<template>
	<div id="nav05">
		<div class="translateCenter clearfix">
			<div class="fl model">
				<div class="header clearfix">
					<el-select class="fl select" v-model="value" placeholder="请选择">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						>
						</el-option>
					</el-select>
					<i class="el-icon-place fl iconRight"></i>
					<el-select class="fl select" v-model="value2" placeholder="请选择">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						>
						</el-option>
					</el-select>
					<el-button @click="translateBtn" class="fl translateBtn" type="primary" plain>翻 译</el-button>
				</div>
				<div class="translateContent">
                        <textarea v-model="this.messageData" 
                                  class="chandler-content_input-area" 
                                  placeholder="请输入或粘贴需要翻译的内容哦~"></textarea>
				</div>
			</div>
			<div class="fr model">
				<div class="translateAI">
                    <div class="aiContentTitle">翻译的内容：</div>
                     <div>
                         {{this.translateAIContent}}
					</div>	
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import {reqTranslate} from '@/api'
import { ref, reactive, toRefs } from 'vue'
import { Message } from 'element3'
export default {
	data () {
		return {
			messageData:'',
			translateAIContent:'暂无数据……'
		}
	},
 setup() {
      const value = ref('cn')
      const value2 = ref('en')
      const data = reactive({
        options: [
          {
            value: 'cn',
            label: '中文'
          },
          {
            value: 'en',
            label: '英语'
          },
          {
            value: 'ja',
            label: '日语'
          },
          {
            value: 'ko',
            label: '韩语'
          },
          {
            value: 'th',
            label: '泰语'
          },
          {
            value: 'ru',
            label: '俄语'
          },
          {
            value: 'de',
            label: '德语'
          },
          {
            value: 'fr',
            label: '法语'
          },
          {
            value: 'ni',
            label: '荷兰语'
          }
        ]
      })
      return {
        value,
		value2,
        ...toRefs(data)
      }
    },
	methods:{
		async translateBtn(){
			if(!this.messageData){
                Message.error('输入内容不能为空哦')
				return
			}else if(this.value == this.value2){
                Message.error('翻译语种不能相同哦')
				return
			}
			// console.log('翻译',this.value,this.value2,this.messageData);
			try {
				const res =await reqTranslate({
                        fromLanguage: this.value,
						toLanguage: this.value2,
						content: this.messageData
				})
				// console.log(res.data);
				this.translateAIContent = res.data.data.trans_result.dst
			} catch (error) {
				console.log('reqTranslate',error);
			}
		}

	}
}
</script>

<style scoped>
.aiContentTitle {
	margin: 10px 0 20px 0;
	font-weight: 600;
}
.translateAI {
	width: 95%;
    height: 95%;
    float: right;
    border: 1px solid;
    border-radius: 20px;
    color: #413659;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    outline: none;
    box-sizing: border-box;
    background: transparent;
	padding: 20px 20px;
	margin: 20px 10px;
}
.chandler-content_input-area {
    resize: none;
    width: 100%;
    padding: 12px 10px;
    height: 100%;
    border: 1px solid;
    border-radius: 20px;
    /* color: #413659; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    outline: none;
    box-sizing: border-box;
    background: transparent;
	padding: 20px 20px;
}
/* 文本框 */
.chandler-content_input-area:focus {
  border: 1px solid blue;
  transition:  0.3s ease; /* 添加过渡效果 */
  border-radius: 20px;
}
.translateContent {
	float: left;
	height: 85%;
	width: 95%;
	/* background-color: pink; */
}
.translateBtn {
	margin-left: 20px;
}
.header {
	margin: 35px 10px 20px 0;
}
.iconRight {
	margin: 5px 10px 0;
}
.select {
	margin:0 10px;
}
/* .el-input--small .el-input__inner {
    height: 32px;
    line-height: 32px;
	width: 140px;
}
.el-input__inner {
    border-radius: 20px;
    border: 2px solid #dcdfe6;
    width: 140px;
}
.el-input--small {
    font-size: 13px;
    height: 100px;
} */
.clearfix:after {
    content: " ";
    display: block;
    height: 0px;
    clear: both;
}
.fl {
	float: left;
}
.model {
	height: 100%;
	width: 50%;
}
.fr {
	float: right;
	box-sizing: border-box;
    border-left: 1px dashed rgb(150, 164, 187);
}
.translateCenter {
	background-color: #fff;
	height: 100%;
	border-radius:30px;;
	padding: 20px;
	box-shadow: 0 0 10px rgba(0,0,0,0.2);
	font-size: 18px;
	font-weight: 500;
	color: #000;
	/* text-align: center; */
	/* line-height: 100px; */
}
/* 页面五-站点展示 */
#nav05{
	width: 89.3%;
	height: 100%;
	background-color: var(--body--);
	overflow-y: scroll;
	overflow-x: hidden;
	scrollbar-width: none;
	-ms-overflow-style: none;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 3;
	padding: 40px 55px;
}
/* 设置滚动条的样式 */
#nav05::-webkit-scrollbar {
   width:8px;
}
/* 滚动槽 */
#nav05::-webkit-scrollbar-track {
   -webkit-box-shadow:rgba(254,254,254,1);
   border-radius:10px;
}
/* 滚动条滑块 */
#nav05::-webkit-scrollbar-thumb {
   border-radius:3px;
   background-color: rgba(40,40,40,0.6);
}
</style>