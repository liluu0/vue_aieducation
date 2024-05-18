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
            
       <el-button @click="addClass" type="primary" plain round> + 添加讨论</el-button>
    </div>

    <div class="alltopic clearfix">
    <ul class="breadcrumb">
        <li class="active">
            <span>共<b>13</b>条话题</span>
        </li>
    </ul>
    </div>
    
	
	<div class="dataCon">
		<div v-if="true" class="dataCon_empty" style="">
			<span>本课程还没有话题哦，快去发布一个吧～</span>
		</div>
		<div v-else>
			aa
		</div>

	</div>
  </div>
  
  <!-- 背景margin -->
  <div class="bgmargin">
  </div>
			
  <div>

    <div class="editContainer">
		<div class="edit_headTitle">新建话题</div> 
		<div class="edit_main">
			<div class="edit_target">
				<span class="fl">发布给</span> 
				<div class="fl selectClass-disabled">
					<b class="color000">2022软件1班</b>
				</div>
			</div> 
			<div class="edit_title">
				<input type="text" name="title" placeholder="请输入标题" autocomplete="off">
				<div class="index useragreement">发表该话题即表示您已阅读并接受
					<a target="_blank" href="https://homewh.chaoxing.com/agree/userAgreement">《用户协议》</a>,请遵守该协议
				</div>
				<div class="jb_btn jb_btn_92_disable fs14 fr">发布</div>
			</div>
		</div>
	</div>


  </div>

					<!-- 拓展功能 -->
					<div class="nav07_kj">
						<h3>😁拓/展/功/能</h3>
						<h4>这些都不难，你们可以自行选择添加</h4>
						<p>
							鼠标点击特效，修改鼠标样式
						</p>
						<p>
							添加一个音乐播放器
						</p>
						<p>
							添加一个看板娘
						</p>
						<p>
							添加一个聊天室
						</p>
						<p>
							添加一些小游戏
						</p>
					</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.fl {
    float: left;
}
.color000 {
	color: #000;
}
/* 新建讨论 */
.editContainer {
	background-color: pink;
    position: relative;
    padding: 30px 30px 40px;
    min-height: 500px;
}
.editContainer .edit_headTitle {
    font-size: 18px;
    color: #131B26;
    font-weight: bold;
    line-height: 28px;
    padding-bottom: 20px;
}
.editContainer .edit_target {
	height: 30px;
	line-height: 30px;
	margin-bottom: 10px;
	font-size: 14px;
	color: #8A8B99;
}
.editContainer .edit_target .selectClass-disabled {
    margin-left: 14px;
    font-size: 14px;
}
.editContainer .edit_title {
	background: #fff;
	margin-bottom: 15px;
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
	border-bottom: 2px solid #dcdfe6;
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
}
/* 搜索 */
/* .btn_group {
    margin-top: 20px;
} */
.btn_group::after {
content: "";
display: block;
clear:both;
}
.search-box {
            /* background-color: var(--primary-color-light); */
            cursor: pointer;
            transition: all 0.3s ease;
            /* z-index: 2; */
            padding: 0;
            float: left;
}
.el-input__inner {
    border-radius: 20px;
    border: 2px solid #dcdfe6;
    width: 287px;
}
.el-button--small, .el-button--small.is-round {
    padding: 0;
    width: 104px;
    height: 36px;
    float: right;
    margin-left: 30px;
}

/* 话题 */
.dataCon {
    /* position: relative; */
	min-height: 360px;
}
.dataCon_empty {
    height: 360px;
    font-size: 14px;
    color: #a8a8b3;
    border-top: solid 1px #F2F2F2;
    text-align: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.dataCon_empty span {

    display: inline-block;
    vertical-align: middle;
}
.bgmargin {
	height: 20px;
	/* width: 100%; */
	background-color: #efefef;
	width: 105%;
    margin-left: -30px;
}

.nav07_kj{
	width: 100%;
	/* margin: 80px auto 10px auto; */
	text-align: left;
	overflow: hidden;
}
.nav07_kj h3{
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 3px;
	color: rgba(40,40,40,0.8);
	margin: 20px 0px;
}
.nav07_kj h4{
	font-size: 15px;
	font-weight: 600;
	letter-spacing: 3px;
	color: rgba(40,40,40,0.8);
	margin: 10px 0px;
}
.nav07_kj h5{
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 3px;
	color: rgba(40,40,40,0.8);
	margin: 8px 0px;
}

.nav07_kj p{
	width: 90%;
	text-align: justify;
	line-height: 40px;
	text-indent: 2em;
	font-size: 14px;
	text-shadow: 10px 10px 10px #909090;
	font-weight: 400;
	letter-spacing: 2px;
	color: rgba(40,40,40,0.9);
	border-bottom: 1px dashed rgba(40,40,40,0.2);
}
.nav07_kj p .lj{
	width: 90%;
	text-align: justify;
	line-height: 40px;
	text-indent: 2em;
	font-size: 14px;
	text-shadow: 10px 10px 10px #df3838;
	font-weight: 400;
	/* letter-spacing: 2px; */
	color: rgba(40,40,40,0.9);
	border-bottom: 1px dashed rgba(40,40,40,0.2);
}
</style>