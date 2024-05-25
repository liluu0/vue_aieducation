<template>
    <div id="nav07">
      <div class="Massage minHeight">
            <div class="nav02_kj">
              <h3>😁课程内容</h3>
              <div class="nav02_grzl_headimg">
                <!-- <img src="../img/tx.jpg" alt="[头像]"> -->
  
                <div  class="block">
                   <label  class="icon icon-xiangji1 iconfont"></label>
                  <el-image @click="changeImage"  :src="this.personal.studentImage">
                    <template #placeholder>
                      <div class="image-slot">加载中<span class="dot">...</span></div>
                    </template>
                  </el-image>
                  <input type="file"  ref="fileInput" @change="handleFileUpload" style="display: none;">
                </div>
              </div>
              <div class="nav02_grzl_txt">
                              <p><b>姓名：</b>{{this.personal.name}}</p>
                              <p><b>性别：</b>{{this.personal.sex}}</p>
                              <p><b>年龄：</b>{{this.personal.age}}</p>
                              <p><b>手机号：</b>{{this.personal.studentPhone}}</p>
                              <p><b>地址：</b>{{this.personal.address}}</p>
                          </div>
                      </div>
      </div>
      <!-- 背景margin -->
      <div class="bgmargin">
      </div>
          
      <div class="Massage minHeight">
        <div class="nav02_kj">
              <h3>😁教/育/信/息</h3>
              <div class="education_txt">
                              <p><b>学校：</b>{{this.personal.schoolName}}</p>
                              <p><b>学历：</b>{{this.personal.educationalBackground}}</p>
                          </div>
                      </div>
      </div>
      <!-- 背景margin -->
      <div class="bgmargin">
      </div>
          
      <div class="Massage minHeight">
        <div class="nav02_kj">
              <h3>😁情/况/汇/总</h3>
              <div class="education_txt">
                              <p><b>学校：</b>{{this.personal.schoolName}}</p>
                              <p><b>学历：</b>{{this.personal.educationalBackground}}</p>
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
                              <p><b>学校：</b>{{this.personal.schoolName}}</p>
                              <p><b>学历：</b>{{this.personal.educationalBackground}}</p>
                          </div>
                      </div>
      </div>
  
  
  </div>
</template>
  
<script>
  import {reqStudentPersonal,reqPictureUpload} from '@/api'
    export default {
      data () {
        return {
          personal:{}
        }
      },
      async mounted(){
        try {
          const res = await reqStudentPersonal()
          this.personal = res.data.data
          // console.log(this.personal);
          if(!this.personal.studentImage){
            this.personal.studentImage = 'https://img2.baidu.com/it/u=3022488819,1069187648&fm=253&app=138&size=w931&n=0&f=JPG&fmt=auto?sec=1716224400&t=6241caa48928abb8b17b659189b937bc'
          }
        } catch (error) {
          console.log(reqStudentPersonal,error);
        }
  
      },
      methods:{
        changeImage(){
          console.log('changeImage');
          this.$refs.fileInput.click();
        },
  
        async handleFileUpload(event) {
          const file1 = event.target.files[0];
          console.log(file1);
          // 创建 FormData 对象
          let file = new FormData();
          console.log(file);
          file.append("file", file1);
          console.log(file);
  
  // fetch('http://localhost:8088/aiEducation/student/common/upload', {
  //     method: 'POST',
  //     body: formData,
  //     headers: {
  //         'Content-Type': 'multipart/form-data'
  //     }
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));
  
  
                      try {
                        const res = await reqPictureUpload(file)
                        console.log(res.data);
                        
                      } catch (error) {
                        console.error('reqPictureUpload',error);
                      }
                      
        },
      
      }
    }
  </script>
  
  <style scoped> 
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
      height: 100%;
    width: 80%;
      float: left;
      padding-left: 30px;
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
      background-color: #efefef;
      width: 100%;
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