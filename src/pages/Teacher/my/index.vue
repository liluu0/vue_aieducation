<template>
  <div id="nav07">
    <div class="Massage minHeight">
          <div class="nav02_kj">
            <h3>😁基/本/信/息</h3>
            <div class="nav02_grzl_headimg">

              <div  class="block">
                 <label  class="icon icon-xiangji1 iconfont"></label>
                <el-image @click="changeImage"  :src="this.personal.teacherImage">
                  <template #placeholder>
                    <div class="image-slot">加载中<span class="dot">...</span></div>
                  </template>
                </el-image>
                <input type="file"  ref="fileInput" @change="handleFileUpload" style="display: none;">
              </div>
            </div>
            <div class="nav02_grzl_txt">
							<p><span>姓名：</span>
              <el-input 
              type="text" 
              v-model="this.personalVirtual.name"
              @blur="handleBlur('name')"/>
              </p>
							<p><span>性别：</span>
                    <input class="radio" type="radio" v-model="this.personalVirtual.sex" value="0" @change="handleSex(0)">
                    <label class="input-tips">女</label>
                    <input class="radio" type="radio" v-model="this.personalVirtual.sex" value="1" @change="handleSex(1)">
                    <label class="input-tips">男</label>
              </p>
							<p><span>职位：</span>
              <el-input 
              type="text" 
              v-model="this.personalVirtual.position"
              @blur="handleBlur('position')"/>
              </p>
							<p><span>手机号：</span>
              <el-input 
              type="text" 
              v-model="this.personalVirtual.phone"
              @blur="handleBlur('phone')"/>
              </p>
							<p><span style="vertical-align: top;">个人简介：</span>
              <textarea 
              class="addressInput"
              type="text" 
              v-model="this.personalVirtual.introduction"
              @blur="handleBlur('introduction')"/>
              </p>
						</div>
					</div>
    </div>
    <!-- 背景margin -->
    <div class="bgmargin">
    </div>
        
    <div class="Massage minHeight">
      <div class="nav02_kj">
            <h3>😁推/荐/计/划</h3>
            <div class="education_txt">
							<p><span>手机号：</span>
              <el-input 
              type="text" 
              v-model="this.personalVirtual.phone"
              @blur="handleBlur('phone')"/>
              </p>
							
						</div>
					</div>
    </div>


</div>
</template>

<script>
import { Message } from 'element3'
import {reqTeacherPersonal,reqPictureUpload,reqTeacherPersonalUpdate} from '@/api'
  export default {
    data () {
      return {
        personalVirtual:{},
        personal:{},
        isBlur:0
      }
    },
    async mounted(){
      try {
        const res = await reqTeacherPersonal()
        this.personal = res.data.data
        if(!this.personal.teacherImage){
          this.personal.teacherImage = 'https://img2.baidu.com/it/u=3022488819,1069187648&fm=253&app=138&size=w931&n=0&f=JPG&fmt=auto?sec=1716224400&t=6241caa48928abb8b17b659189b937bc'
        }
        this.personalVirtual = JSON.parse(JSON.stringify(this.personal)); // 深拷贝对象
      } catch (error) {
        console.log('reqTeacherPersonal',error);
      }

    },
    methods:{
      handleSex(value){
        // console.log(value);
        this.personalVirtual.sex = value
        this.personal = JSON.parse(JSON.stringify(this.personalVirtual)); // 深拷贝对象
        this.personalUpdate(this.personal)
      },
    // 定义失去焦点事件处理函数
    handleBlur(blurName) {
      
      console.log('数据对比',this.personalVirtual[blurName],this.personal[blurName]);
      if(this.personalVirtual[blurName]==''){
        Message.error('信息不能为空哦~',this.personal)
        this.personalVirtual = JSON.parse(JSON.stringify(this.personal)); // 深拷贝对象
      }else if(this.personalVirtual[blurName] == this.personal[blurName]){
        console.log('您没有修改信息哦~',this.personalVirtual[blurName],this.personal[blurName]);
        Message('您没有修改信息哦~')
        return
      }else {
        this.personal = JSON.parse(JSON.stringify(this.personalVirtual)); // 深拷贝对象
        // 修改信息
        this.personalUpdate(this.personal)
      }
    },
      changeImage(){
        this.$refs.fileInput.click();
      },

      async handleFileUpload(event) {
        const file1 = event.target.files[0];
        // 创建 FormData 对象
        let file = new FormData();
        file.append("file", file1);
                    try {
                      const res = await reqPictureUpload(file)
                      this.personal.teacherImage = res.data.data
                      // console.log(this.personal);
                      this.personalUpdate(this.personal)
                    } catch (error) {
                      console.error('reqPictureUpload',error);
                    }
                    
      },
      // 修改个人信息
      async personalUpdate(personal){
        try {
                      const res = await reqTeacherPersonalUpdate(personal)
                      // console.log(res.data);
                      if(res.data.code == 200){
                        Message({
                            message: '修改成功~',
                            type: 'success'
                          })
                      }
                    } catch (error) {
                      console.error('reqTeacherPersonalUpdate',error);
                    }
      }
    
    }
  }
</script>

<style scoped> 
.addressInput {
   display: inline-block;
    padding: 5px 14px;
    border: 1px solid #D5D7D9;
    border-radius: 4px;
    margin: 15px 0px 0 0 ;

    width: 80%;
    height: 11vh;
    max-height: 130px;
    min-height: 130px;
    color: #413659;
    font-size: 14px;
    line-height: 22px;
    outline: none;
    box-sizing: border-box;
    background: transparent;
}
.input-tips {
  font-size: 15px;
}
/* 定制单选按钮样式 */
.radio {
  display: inline-block;
  width: 20px; /* 单选按钮的宽度 */
  height: 20px; /* 单选按钮的高度 */
  border-radius: 50%; /* 圆形单选按钮 */
  border: 2px solid #ccc; /* 单选按钮边框 */
  background-color: #fff; /* 单选按钮背景色 */
  cursor: pointer;
  margin: 5px 10px 0 50px;
}

/* 选中状态下的单选按钮样式 */
.radio {
  background-color: #007bff; /* 选中状态下的背景色 */
  border-color: #007bff; /* 选中状态下的边框颜色 */
}
.el-input__inner {
    border-radius: 20px;
    border: 2px solid #dcdfe6;
    width: 350px;
}
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 400px;
}
.Massage {
  padding: 0 0 30px 30px;
}
.nav02_kj{
	width: 100%;
	text-align: left;
	overflow: hidden;

}
.nav02_kj h3{
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
.nav02_grzl_headimg{
  padding: 10px 30px 0 0;
	height: 100%;
	float: left;
}
.nav02_grzl_headimg .block{
  cursor: pointer;
	width: 200px;
	border-radius: 30px;
	box-shadow: 0px 0px 10px rgba(40,40,40,0.1);
  /* border:  3px solid var(--primary-color); */
  
  transition: filter 0.2s;
}
.nav02_grzl_headimg .block:hover{
  filter: grayscale(100%);
}

.nav02_grzl_txt{
	border-left: 2px dashed rgba(40,40,40,0.2);
	/* height: 100%; */
  width: 80%;
	float: left;
	padding-left: 30px;
}
.nav02_grzl_txt span {
   display: inline-block; /* 设置为内联块元素，使得宽度生效 */
   text-align: right;
   width: 100px; /* 设置宽度 */
   padding: 0 10px;
   font-weight: bold;
}
.education_txt span {
   display: inline-block; /* 设置为内联块元素，使得宽度生效 */
   text-align: right;
   width: 85px; /* 设置宽度 */
   padding: 0 10px;
   font-weight: bold;
}
.education_txt {
  height: 100%;
	padding-left: 30px;
}
p{
  width: 100%;
  padding-bottom: 10px;
	font-size: 14px;
	font-weight: 400;
	letter-spacing: 1px;
	line-height: 50px;
	color: rgba(40,40,40,0.9);
}
.minHeight {
	min-height: 200px;
  background-color: var(--shell-color);
}

.bgmargin {
	height: 20px;
	width: 106%;
  margin-left: -30px;
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

/*-----Nav07-本站源码-内容区域-右侧------*/
#nav07{
  background-color: var(--body--color);
	width: 89.5%;
  padding: 30px 30px;
	height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	scrollbar-width: none;
	-ms-overflow-style: none;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 2;
}
/* 设置滚动条的样式 */
#nav07::-webkit-scrollbar {
   width:8px;
}
/* 滚动槽 */
#nav07::-webkit-scrollbar-track {
   -webkit-box-shadow:rgba(254,254,254,1);
   border-radius:10px;
}
/* 滚动条滑块 */
#nav07::-webkit-scrollbar-thumb {
   border-radius:3px;
   background-color: rgba(40,40,40,0.6);
}
</style>