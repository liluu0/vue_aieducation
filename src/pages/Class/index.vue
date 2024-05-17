<template>
    <div id="pc">
        <div id="content">
            <!-- 内容左侧选择区域 -->
			<ul id="cleft">
				<div class="cleft_top">
					<div class="cleft_topbg">
						<div class="cleftbg_img"><img src="./img/tx.jpg" alt="头像"></div>
					</div>
					<div class="cleftbg_p">要每天都有好心情吖~</div>
				</div>
                <router-link to="/class/Class_homePage">
                    <li id="cleft_li01">
                            <img src="./font/cnmsb01.png" />
                            <span>课程首页</span>
                    </li>
                </router-link>
                <router-link to="/class/class_material">
                    <li id="cleft_li02">
                        <img src="./font/cnmsb02.png" /><span>资料</span>
                    </li>
                </router-link>
                <li id="cleft_li03"><img src="./font/cnmsb03.png" /><span>课程章节</span></li>
				<li id="cleft_li04"><img src="./font/cnmsb04.png" /><span>课程群聊</span></li>
				<router-link to="/class/discuss">
                  <li id="cleft_li05">
                    <img src="./font/cnmsb05.png" /><span>讨论</span>
                  </li>
                </router-link>
                <router-link to="/class/studyRecord">
                  <li id="cleft_li07">
                      <img src="./font/cnmsb07.png" />
                      <span>学习记录</span>
                  </li>
                </router-link>
				<li id="cleft_li08"><img src="./font/cnmsb01.png" /><span>退课</span></li>
			</ul>


			<!-- 内容左侧选择区域 -->
			<div id="cright">
                
            <router-view></router-view>
			</div>


		</div>
	</div>
</template>

<script>
export default {
mounted(){
}
}
</script>


<style scoped>
a{
	text-decoration: none;
}
li{
	list-style: none;
}
#pc {
    display: block; /* 或 display: inline; */
}
#ebga{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	width: 0%;
	height: 0%;
	background-color: rgba(40,40,40,0.3);
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
	height: 120px;
	/* 左上角头像下面的背景图片 */
	background-image: url(./img/cnmtlbg.jpg);
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
	width: 90%;
	padding-bottom: 8px;
	margin: 35px auto;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 1px;
	color: #9facb2;
	border-bottom: 1px solid #ececec;
}
#cleft li{
	width: 100%;
	height: 40px;
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
#cleft li:hover span{
	color: #67737a;
}
#cleft li:hover img{
	transform: scale(1.1);
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