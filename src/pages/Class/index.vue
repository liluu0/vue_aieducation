<template>
    <div id="pc">
        <div id="content">
            <!-- 内容左侧选择区域 -->
			<ul id="cleft">
				<div class="cleft_top">
					<div class="cleft_topbg">
					</div>
					<div class="cleftbg_p">智能教育平台--课程中心</div>
				</div>
				<!-- 首页 -->
					<router-link  :to="'/class/' + $route.params.courseId+'/Class_homePage'">
                        <li @click="activeIndex = 0" :class="{ 'cleft_active': activeIndex === 0 }">
									<img src="./font/cnmsb01.png" />
									<span>课程首页</span>
                        </li>
					</router-link>

				<!-- 课程任务 -->
				<router-link :to="'/class/' + $route.params.courseId+'/task'">
					<!-- <router-link :to="{name:'task',params:{courseId:$route.params.courseId}}"> -->

                  <li  @click="activeIndex = 1" :class="{ 'cleft_active': activeIndex === 1 }">
                         <img src="./font/cnmsb03.png" />
                         <span>课程任务</span>
                  </li>
				</router-link>
                <router-link :to="'/class/' + $route.params.courseId+'/class_material'">
                    <li  @click="activeIndex = 2" :class="{ 'cleft_active': activeIndex === 2 }">
                        <img src="./font/cnmsb02.png" /><span>资料</span>
                    </li>
                </router-link>

				<router-link :to="'/class/' + $route.params.courseId+'/discuss'">
                  <li  @click="activeIndex = 3" :class="{ 'cleft_active': activeIndex === 3 }">
                    <img src="./font/cnmsb05.png" /><span>讨论</span>
                  </li>
                </router-link>
                <router-link :to="'/class/' + $route.params.courseId+'/studyRecord'">
                  <li  @click="activeIndex = 4" :class="{ 'cleft_active': activeIndex === 4 }">
                      <img src="./font/cnmsb07.png" />
                      <span>学习记录</span>
                  </li>
                </router-link>
				<li id="cleft_li08" @click="quitClass"><img src="./font/cnmsb01.png" /><span>退课</span></li>
			</ul>


			<!-- 内容左侧选择区域 -->
			<div id="cright">
                
            <router-view></router-view>
			</div>


		</div>
	</div>
</template>

<script>
import {reqRemoveCourse} from '@/api'
import { Msgbox, Message } from 'element3'
export default {
  data () {
    return {
        activeIndex:0
    }
  },
	mounted(){
		// console.log('class');
		document.title = "智能教育平台--课程中心";
	},
	methods:{
		quitClass(){
			Msgbox
            .confirm('','您确定要退出课程吗', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              center: true,
              lockScroll:false,
              closeOnClickModal:false
            })
            .then(async () => {
                try {
					const res = await reqRemoveCourse(this.$route.params.courseId)
					console.log(res.data);
					if(res.data.code==200){
						setTimeout(() => {
							Message({
								type: 'success',
								message: res.data.msg
							})
						}, 300);
						this.$router.push("/student") 
					}else{
						Message({
							type: 'info',
							message: res.data.msg
						})
					}

                } catch (error) {
                    console.log('reqRemoveCourse',error);
                }
            })
            .catch(() => {
              Message({
                type: 'info',
                message: '取消退课'
              })
            })
		}
	}

}
</script>


<style scoped>
.el-message-box__btns button:nth-child(2) {
    margin-left: 50px;
}
a{
	text-decoration: none;
}
li{
	list-style: none;
}
#pc {
    display: block; /* 或 display: inline; */
}
/*-----内容区域------*/
#content{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	width: 100%;
	height: 100%;
	background-color: rgba(249,249,249,0.7);
	border-radius: 8px;
	box-shadow: 0px 0px 20px rgba(40,40,40,0.1);
	z-index: 7;
	overflow: hidden;
	transition: 0.5s;
}
/*-----内容区域-左侧------*/
#cleft{
	width: 15%;
	height: 100%;
	background-color: rgba(254,254,254,1);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 9;
	transition: 0.5s;
	box-sizing: border-box;
}
.cleft_top{
	width: 100%;
	height: 180px;
	margin-bottom: 10px;
}
.cleft_topbg{
	width: 100%;
	height: 140px;
	/* 左上角头像下面的背景图片 */
	background-image: url(@/assets/img/robot.jpg);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
}
.cleftbg_img{
	width: 65px;
	height: 65px;
	border-radius: 8px;
	overflow: hidden;
	cursor: pointer;
	position: absolute;
	left: 0;
	right: 0;
	bottom: -20px;
	margin: auto;
}
.cleftbg_img img{
	width: 100%;
}
.cleftbg_p{
	/* width: 90%; */
	padding-bottom: 8px;
	margin: 15px auto;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 1px;
	/* color: #9facb2; */
	border-bottom: 1px solid #ececec;
	text-align: center;
}
#cleft li{
	width: 100%;
	height: 50px;
	line-height: 40px;
	text-align: left;
	background-color: #F9F9F9;
	cursor: pointer;
}
/* #cleft li:nth-child(1){
	background-color: #ececec;
} */
#cleft li:hover{
	background-color: #efefef;
}
#cleft li img{
	float: left;
	width: 20px;
	margin-top: 10px;
	margin-left: 18%;
	transition: 0.3s;
}
#cleft li span{
	display:inline-block;
	font-size: 15px;
	font-weight: 400;
	color: #68747c;
	margin-left: 12%;
}
.cleft_active {
	/* color: #67737a; */
	background-color: #efefef!important;
}
/*-----内容区域-右侧------*/
#cright{
	width: 85%;
	height: 100%;
	float: right;
	box-sizing: border-box;
	transition: 0.5s;
	position: relative;
}
/*-----Nav01-首页-内容区域-右侧------*/

</style>