<template>
  <div id="nav02">
					<div class="nav02_bg">
						<div class="nav02_bt">课程首页</div>
					</div>
					<!-- 站长资料 -->
					<div class="nav02_kj" style="height: 600px;">
						<h3>😁站/长/资/料</h3>
						<div class="nav02_grzl_headimg">
							<img src="../img/tx.jpg" alt="[头像]">
							<a href="mailto:www.ttyuki.cn@gmail.com" target="_blank" rel="noopener noreferrer">联系站长</a>
						</div>
						<div class="nav02_grzl_txt">
							<p>网名：土豆云虚拟主机</p>
							<p>邮箱：www.ttyuki.cn@gmail.com</p>
							<p>性别：boy</p>
							<p>年龄：不告诉你 [一位有理想的青少年]</p>
							<p>特长：腿特长</p>
							<p>爱好：音乐、运动、设计、摄影、COSplay 等……</p>
							<p>性格：落落大方,喜欢自由</p>
							<p>梦想：实现财富自由</p>
							<p>语录：凡心所向，素履所往，生如逆旅，一苇以航。——《尘曲》</p>
							<p>语录：合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。——《道德经·第六十四章》</p>

						</div>
					</div>
					<!-- 个人介绍 -->
					<div class="nav02_kj">
						<h3>😁个/人/介/绍</h3>

						<p>
							本人学识渊博，经验丰富，代码风骚，效率恐怖。C/C＋＋，java，php无不精通，熟练掌握各种框架。
						</p>
						<p>
							会DDOS一秒钟死一个站，会注入，会上传，会Xss，会破解，会嗅探，会开发，会业务，会运维，会渗透。互联网内，我无处不在。
						</p>
						<p>
							全国漏洞认识深刻，熟练掌握各种操作系统内核。认真学习过《黑客攻防技术宝典》，《逆向工程》，《游戏waigua攻防艺术》等专业书籍。深山苦练十余载，一天只睡2小时。
						</p>
						<p>
							听指挥，执行快，脾气好，不喷人，操作虎，意识强，渗透快，shell多，能过狗，能过盾。
						</p>
						<p>
							千里之外取服务器首级，瞬息之间爆管理员狗头，压安全狗如压草芥。电话通知出Bug后，秒登vpn，千里之外定位问题，瞬息之间修复上线。
						</p>
						<p>
							只有你想不到的，没有我做不到的。
						</p>
						<p>
							以上都是吹的，我只会划水摸鱼，我是个废物。
						</p>
						<p>
							&nbsp;
						</p>
						<h3>😁网站的艰难运行环境</h3>
						<p>
							主页随时可能托管在Github或者虚拟主机上，速度相对较慢，请耐心等待恢复，还您一个舒适的欣赏环境。哈哈哈哈哈哈哈嗝~
						</p>
						<p>
							&nbsp;
						</p>
						<h3>😁网站源码</h3>
						<p>
							源码获取请点击侧栏【本站源码】，要认真仔细阅读。
						</p>
						<p>
							&nbsp;
						</p>

					</div>
					<!-- 每日必做 -->
					<div class="nav02_kj mb04">
						<h3>每/日/必/做</h3>
						<div id="ejn">
							<a href="javascript:;">摸鱼摸鱼，摸鱼摸鱼，摸鱼摸鱼，摸鱼摸鱼，摸鱼摸鱼，摸鱼摸鱼</a>
							<a href="javascript:;">划水划水，划水划水，划水划水，划水划水，划水划水，划水划水</a>
							<a href="javascript:;">闲聊闲聊，闲聊闲聊，闲聊闲聊，闲聊闲聊，闲聊闲聊，闲聊闲聊</a>
							<a href="javascript:;">abcdefghigklmnopqrstuvwxyz</a>
							<a href="javascript:;">ABCDEFGHIJKLMNOPQRSTUVWXYZ</a>
						</div>
					</div>
					<!-- 到底了-提示 -->
					<p class="ebpx">--- 暂时先展示这么多啦 ---</p>
				</div>
</template>

<script>
export default {

}
</script>

<style scoped>

/*-----Nav02-关于本站-内容区域-右侧------*/
#nav02{
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
	z-index: 6;
}
/* 设置滚动条的样式 */
#nav02::-webkit-scrollbar {
   width:8px;
}
/* 滚动槽 */
#nav02::-webkit-scrollbar-track {
   -webkit-box-shadow:rgba(254,254,254,1);
   border-radius:10px;
}
/* 滚动条滑块 */
#nav02::-webkit-scrollbar-thumb {
   border-radius:3px;
   background-color: rgba(40,40,40,0.6);
}
.nav02_bg{
	width: 100%;
	height: 420px;
	/* 关于站长页面顶部头图 */
	background-image: url(../img/guanyuzhanzhang.jpg);
	background-size: cover;
	/* background-position: center bottom; */
	/* background-repeat: no-repeat; */
	background-repeat: round;
	position: relative;
}
.nav02_bt{
	width: 240px;
	height: 60px;
	line-height: 60px;
	/* 顶图文字背景颜色 */
	background-image: linear-gradient(to top left,#25d8df , #CD69C9);
	border-radius: 5px;
	padding: 0px 10px;
	position: absolute;
	bottom: -18px;
	left: 0;
	right: 0;
	margin: auto;
	color: #282828;
	font-size: 22px;
	letter-spacing: 1px;
	text-align: center;
}
.nav02_kj{
	width: 90%;
	margin: 80px auto 10px auto;
	text-align: left;
	overflow: hidden;
}
.nav02_kj h3{
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 3px;
	color: rgba(40,40,40,0.8);
	margin: 50px 0px;
}
.nav02_grzl_headimg{
	width: 25%;
	height: 100%;
	border-right: 1px dashed rgba(40,40,40,0.2);
	float: left;
}
.nav02_grzl_headimg img{
	width: 160px;
	border-radius: 6px;
	box-shadow: 0px 0px 10px rgba(40,40,40,0.1);
}
.nav02_grzl_headimg a{
	display: inline-block;
	width: 70%;
	height: 36px;
	border-radius: 4px;
	background-color: #a5adf6;	/* 联系站长按钮 */
	color: #f9f9f9;
	font-size: 15px;
	line-height: 36px;
	text-align: center;
	margin-top: 40px;
}
.nav02_grzl_txt{
	width: 70%;
	height: 100%;
	float: left;
	padding-left: 10%;
}
.nav02_grzl_txt p{
	font-size: 14px;
	font-weight: 400;
	letter-spacing: 1px;
	line-height: 50px;
	color: rgba(40,40,40,0.9);
	border-bottom: 1px dashed rgba(40,40,40,0.08);
}
.nav02_kj p{
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
#ejn{
	margin-bottom: 80px;
}
#ejn a{
	display: inline-block;
	line-height: 36px;
	padding: 0px 20px;
	border-radius: 5px;
	text-decoration: none;
	font-size: 12px;
	letter-spacing: 1px;
	color: #535353;
	background-color: #F9F9F9;
	transition: 0.5s;
}
#ejn a:hover{
	box-shadow: 0px 0px 10px rgba(40,40,40,0.1);
}
.ebpx{
	font-size: 12px;
	letter-spacing: 2px;
	font-weight: 400;
	color: #535353;
	margin: 30px 0px;
  text-align: center;
}

</style>