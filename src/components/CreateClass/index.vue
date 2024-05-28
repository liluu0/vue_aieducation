<template>
    <div class="box">
			<div class="subNav">
				创建课程
			</div>
			<div class="subPageMain" style="padding: 0;">
				<div class="editContainer fulscren">
						<div class="edit_main">

                            <div class="inputs-wrapper">
                            <div class="inputs-item items-user ">
                                <span class="input-tips">课程名称：</span>
                                <input type="text" class="inputs" v-model="this.courseData.courseName">
                            </div>
                            <div class="inputs-item items-user ">
                                <span class="input-tips">课程图片：</span>
                                <input type="file" class="files" @change="handleFileChange" />
                            </div>
                            <div class="inputs-item items-user ">
                                <span class="input-tips">课程介绍：</span>
                                <textarea type="text" class="textarea" v-model="this.courseData.courseIntroduce"/>
                            </div>
                            <div class="inputs-item items-user ">
                                <span class="input-tips">课程要求：</span>
                                <textarea type="text" class="textarea" v-model="this.courseData.courseDemand"/>
                            </div>
                            <div class="inputs-item items-user ">
                                <span class="input-tips">课程目标：</span>
                                <textarea type="text" class="textarea" v-model="this.courseData.courseTarget"/>
                            </div>
                        </div>
                        <div class="btn_create">
                            <button @click="createBtn" class="sigin-btn">创建</button>
                            <button @click="returnBtn" class="sigin-btn">返回</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
  
<script>
import { ref, reactive, toRefs, getCurrentInstance } from "vue";
import { Msgbox, Message } from 'element3'
import {reqPictureUpload,reqTeacherAddClass} from '@/api'
export default {
    data () {
    return {
      courseData: {
        courseName:'',
        courseImage:'',
        courseIntroduce:'',
        courseDemand:'',
        courseTarget:'',
      }
    }
  },
    methods:{
      async handleFileChange(event){
        const imagefile = ref(null);
        imagefile.value = event.target.files[0];
        // 创建 FormData 对象
        const formData = new FormData();
        // 将图片文件添加到 FormData 对象中
        formData.append("file", imagefile.value);
        const response = await reqPictureUpload(formData)
        if(response.data.code ==200){
          this.courseData.courseImage = response.data.data
          Message({
                type: 'success',
                message: '图片上传成功'
              })
        }

      },
      async createBtn(){
        const {courseName, courseImage,courseIntroduce,courseDemand,courseTarget} = this.courseData
        if(!(courseName&&courseImage&&courseIntroduce&&courseDemand&&courseTarget)){
          Message.error('课程信息未填写完整')
        }else{
          Msgbox
            .confirm('是否确认创建该课程?', '创建课程', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              center:true,
              closeOnClickModal:false
            })
            .then(async () => {
              console.log('创建课程');
              try {
                const res = await reqTeacherAddClass(this.courseData)
                console.log(res.data);
                this.$router.push('/teacher');
                Message({
                          message: '创建成功',
                          type: 'success'
                })
              } catch (error) {
                console.error('reqTeacherAddClass',error);
              }
            })
            .catch(() => {
              Message({
                type: 'info',
                message: '已取消'
              })
            })
        }
      },
      returnBtn(){
        Msgbox
            .confirm('是否确认返回首页?', '返回', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              center:true,
              closeOnClickModal:false
            })
            .then(() => {
            this.$router.push('/teacher');
            })
            .catch(() => {
              Message({
                type: 'info',
                message: '已取消'
              })
            })

      }
    }
  };
</script>
  
<style scoped>
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
  padding-right: 40px;
  text-align: right;
  width: 16%;
  float: left;
  color: #8783b1;
  font-weight: 600;
  margin: 5px 0;
  line-height: 40px;
  /* display: inline-block; */
  display: block;
  font-family: "Leelawadee", Courier, monospace;
}
.inputs-wrapper .inputs-item .inputs {
    float: right;
  display: block;
  width: 84%;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #c6c5ce;
  font-size: 20px;
  /* margin-right: 50px; */
  padding: 0 15px;
  font-family: "Leelawadee", Courier, monospace;
  box-sizing: border-box;
  color: #251aeb;
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
}
.inputs-wrapper .inputs-item .inputs:focus {
  border: 1px solid #c0d1ff;
  box-sizing: border-box;
}
.inputs-wrapper .inputs-item::after {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  position: absolute;
  right: -10px;
  top: 40px;
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
    width: 1120px;
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
    padding: 30px 50px 30px 50px;
    background: #FFFFFF;
    border-radius: 8px;
}

</style>