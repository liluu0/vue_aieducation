<template>
	<div id="nav07">
          <div class="bgc">
            <div class="tasks nav02_kj">
                <h3>课程资料</h3> 
                <div class="btn_group" tabindex="-1" aria-hidden="true">
                    <div class="search-box">
                                <el-input placeholder="请输入内容"
                                prefix-icon="el-icon-search"
                                clearable> </el-input>
                    </div> 
                
                <el-button v-if="this.isTeacher=='true'" @click="addMaterial" type="primary" plain round> + 添加资料</el-button>
                <input type="file"  ref="fileInput" @change="handleFileUpload" style="display: none;">
                </div>

                <div class="dataCon">
                <div class="dataHead">
                    <ul class="dataHead_th" tabindex="0" role="option">
                        <li class="dataHead_file_stu"></li>
                        <li class="dataHead_name">文件名</li>
                        <li class="dataHead_size_stu">大小</li>
                        <li class="dataHead_creater_stu">创建者</li>
                            <li class="dataHead_time_stu">创建日期
                            </li>
                    </ul>
                </div>
                
                <div class="dataBody">
                    <div class="dataCon_empty" v-if="!(this.materialData&&this.materialData.length)">
                        <span>暂无资料</span>
                    </div>
                    <div v-else>
                        <ul v-for="item in this.materialData" :key="item.materialId" class="dataBody_td">
                            <li class="dataBody_file"  @click="openMaterial">
                                <img src="@/assets/img/fileImg.png">
                            </li>
                            <li class="dataBody_name_stu">
                                <dl class="dataBody_text"  @click="openMaterial">
                                            <dt>
                                                <div class="dataBody_ellipsis">
                                                    <a class="rename_title" href="javascript:">{{item.name}}</a>
                                                </div>
                                            </dt>
                                </dl>
                                <ul class="operate">
                                        <li class="operate_down">
                                            <a class="colorBlue fontClass" target="_blank" @click="download(item.content,item.name)">下载</a>
                                        </li>
                                        <li class="operate_copy_cloud_disk" v-if="this.isTeacher=='true'">
                                            <a class="colorRed fontClass" href="javascript:" @click="del(item.materialId)">
                                                删除
                                            </a>
                                        </li>
                                </ul>
                            </li>
                            <li class="dataBody_size_stu"> {{item.type}} </li>
                            <li class="dataBody_creater_stu"><span class="text-ellipsis2">{{item.creator}}</span></li>
                            <li class="dataBody_time_stu">{{item.createDate}}</li>
                        </ul>
                    </div>
                </div>

            </div>
                
            </div>
          </div>
	</div>
</template>

<script>
import { Message } from 'element3'
import {reqCourseMaterial,reqFileUpload,reqRemoveMaterial} from '@/api'
export default {
    data () {
        return {
            materialData:[]
        }
    },
    props:['isTeacher'],
    mounted(){
        // console.log(this.isTeacher);
        this.loadData()
    },
    methods: {
        async loadData(){
            try {
            const res = await reqCourseMaterial(this.$route.params.courseId)
            this.materialData = res.data.data
            console.log(res.data.data,this.materialData);
        } catch (error) {
            console.log('reqCourseMaterial',error);
        }
        },

        openMaterial(){
            console.log('打开资料');
        },

        download(content,name){
            // 创建一个<a>标签
            const link = document.createElement("a");
            link.href = content;
            link.download = name; // 下载文件的名称
            // 将<a>标签添加到DOM中
            document.body.appendChild(link);
            // 触发点击事件
            link.click();
            // 移除<a>标签
            document.body.removeChild(link);
        },

        del(materialId){
            try {
                const res = reqRemoveMaterial({
                    materialId:materialId,
                    courseId:this.$route.params.courseId
                })
                console.log(res.data);
                Message({
                    message:'资料删除成功',
                    type:'success'
                })
                this.loadData()
            } catch (error) {
                console.log('reqRemoveMaterial',error);
            }
            
        },

        addMaterial(){
            console.log('添加资料');
            this.$refs.fileInput.click();
      },

      async handleFileUpload(event) {
        const file1 = event.target.files[0];
        // 创建 FormData 对象
        let file = new FormData();
        file.append("file", file1);
                    try {
                      const res = await reqFileUpload(this.$route.params.courseId,file)
                      console.log(res.data);
                      this.loadData()
                    } catch (error) {
                      console.error('reqPictureUpload',error);
                    }
      },
    },
  
}
</script>

<style scoped>
  .dataCon_empty {
      height: 200px;
      color: #a8a8b3;
      text-align: center;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  .dataCon_empty span {
      display: inline-block;
      vertical-align: middle;
  }
/* 资料 */
.dataCon {
    margin-top: 15px;
}
.dataHead {
    background: #F5F6F7;
    border-radius: 2px;
}
.dataHead_th {
    font-size: 14px;
    cursor: pointer;
    color: #8a8b99;
    height: 40px;
    line-height: 40px;
    position: relative;
    border-radius: 50px;
}
.dataHead_file_stu {
    width: 65%;
    height: 100%;
    float: left;
}
.dataHead_name {
    position: absolute;
    left: 52px;
}
.dataHead_size_stu {
    width: 10%;
    height: 100%;
    float: left;
}
.dataHead_creater_stu {
    width: 10%;
    height: 100%;
    float: left;
}
.dataHead_time_stu {
    width: 15%;
    height: 100%;
    float: left;
}
ul, ol, li {
    list-style-type: none;
}
a {
    text-decoration: none;
}
.dataBody_td {
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    height: 66px;
    line-height: 66px;
    color: #646873;
    position: relative;
    
    transition: background-color 0.1s; 
}
.dataBody_td:hover {
    background-color: #ececec;
}
.dataBody {
    margin-top: 10px;
}
.dataBody_file {
    height: 30px;
    position: absolute;
    left: 52px;
    top: 50%;
    margin-top: -15px;
    z-index: 3;
}
.dataBody_file img {
    width: 28px;
    height: 28px;
    display: block;
    border-radius: 3px;
}
.dataBody_name_stu {
    width: 65%;
    height: 100%;
    float: left;
    position: relative;
}
.dataBody_text {
    padding: 11px 280px 11px 94px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    box-sizing: border-box;
}
.dataBody_text dt {
    font-size: 15px;
}
.dataBody_ellipsis {
    max-width: 100%;
    padding-right: 46px;
    position: relative;
    float: left;
    color: #131b26;
}
.dataBody_text dt a {
    max-width: 100%;
    color: #181E33;
    float: left;
    display: block;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.operate {
    height: 30px;
    line-height: 30px;
    display: table;
    position: absolute;
    right: 16px;
    top: 50%;
    margin-top: -15px;
}
.operate_down {
    margin-right: 24px;
    float: left;
}
.fontClass {
    font-size: 14px;
}
.colorBlue {
    color: #3A8BFF;
}
.colorRed {
    color: red;
}
.operate_copy_cloud_disk {
    margin-right: 24px;
    float: left;
}
.dataBody_size_stu {
    width: 10%;
    height: 100%;
    float: left;
}
.dataBody_creater_stu {
    width: 10%;
    height: 100%;
    float: left;
    position: relative;
    padding: 13px 0;
    line-height: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
.text-ellipsis2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.dataBody_time_stu {
    width: 15%;
    height: 100%;
    float: left;
}

/* 导航栏 */
.nav02_kj{
	width: 100%;
	text-align: left;
	overflow: hidden;
}
.nav02_kj h3{
    border-bottom: 3px solid #f0f0f2;
    width: 100%;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 3px;
	color: rgba(40,40,40,0.8);
	padding: 0 0px 20px 30px;
}

.btn_group {
    padding: 15px 0 0 25px;

}
.btn_group::after {
content: "";
display: block;
clear:both;
}
.search-box {
            cursor: pointer;
            transition: all 0.3s ease;
            float: left;
            padding: 0;
}
.el-button--small, .el-button--small.is-round {
    padding: 0;
    width: 104px;
    height: 36px;
    float: right;
    margin-left: 30px;
}
#nav07 .bgc {
  background-color: #fff;
}
.bgc .tasks {
    min-height: 925px;
    padding: 30px;
}
/*-----Nav07-本站源码-内容区域-右侧------*/
#nav07{
  
  padding: 30px 30px;
	width: 100%;
	height: 100%;
	background-color: #efefef;
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