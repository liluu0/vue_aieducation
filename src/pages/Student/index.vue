<template>
  <div class="student">
    <nav class="shell leftdiv">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="@/assets/img/robot.jpg" alt="">
                </span>
                <div class="text logo-text">
                    <span class="name">教育中心</span>
                    <span class="software">- 学习ing -</span>
                </div>
            </div>
            <i class="iconfont icon-left-circle toggle"></i>
        </header>
        <div class="menu-bar">
            <div class="menu">
                <ul class="menu-links">
                    <!-- 主页 -->
                    <li  @click="activeIndex = 0" :class="{ 'active': activeIndex === 0 }" class="nav-link">
                        <a href="#">
                              <router-link to="/student/homePage">
                            <i :class="{ 'activeText': activeIndex === 0 }" class="iconfont icon-home-4-line icon"></i>
                            <span  :class="{ 'activeText': activeIndex === 0 }" class="text nac-text">
                                主页
                            </span>
                              </router-link>
                        </a>
                    </li>
                 <!-- 智能助手 -->
                    <li @click="activeIndex = 1" :class="{ 'active': activeIndex === 1 }"  class="nav-link">
                        <a href="#">
                            <router-link to="/student/aiHelper">
                            <i :class="{ 'activeText': activeIndex === 1 }" class="iconfont icon-chat-white icon"></i>
                            <span :class="{ 'activeText': activeIndex === 1 }"  class="text nac-text">AI心理陪聊</span>
                            </router-link>
                        </a>
                    </li>

                    <!-- 我的收藏 -->
                    <li  @click="activeIndex = 2" :class="{ 'active': activeIndex === 2 }"  class="nav-link">
                        <a href="#">
                            <router-link to="/student/myCollect">
                                <i :class="{ 'activeText': activeIndex === 2 }" class="iconfont icon-wodeshoucang icon"></i>
                                <span :class="{ 'activeText': activeIndex === 2 }" class="text nac-text">AI工作助手</span>
                            </router-link>
                        </a>
                    </li>
                    <!-- 错题集 -->
                    <li  @click="activeIndex = 3" :class="{ 'active': activeIndex === 3 }"  class="nav-link">
                        <a href="#">
                            <router-link to="/student/errorSet">
                                <i :class="{ 'activeText': activeIndex === 3 }" class="iconfont icon-shijian1 icon"></i>
                                <span  :class="{ 'activeText': activeIndex === 3 }" class="text nac-text">翻译中心</span>
                            </router-link>
                        </a>
                    </li>
                    <!-- 我的 -->
                    <li  @click="activeIndex = 4" :class="{ 'active': activeIndex === 4 }"  class="nav-link">
                        <a href="#">
                            <router-link to="/student/myPersonage">
                                <i :class="{ 'activeText': activeIndex === 4 }" class="iconfont icon-gerenzhongxin icon"></i>
                                <span :class="{ 'activeText': activeIndex === 4 }" class="text nac-text">我的</span>
                            </router-link>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="bottom-content">
                <li class="">
                    <a @click="quit" href="#">
                        <i class="iconfont icon-left-circle icon"></i>
                        <span class="text nac-text">退出</span>
                    </a>
                </li>
                <li class="mode">
                    <div class="sun-moon">
                        <i class="iconfont icon-remen icon sun"></i>
                        <i class="iconfont icon-remen icon moon"></i>
                    </div>
                    <span class="mode-text text">夜间模式</span>
                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
            </div>
        </div>
    </nav>
    <div class="rightdiv">
            <!-- 右侧内容 -->
            <div class="content">
            <router-view></router-view>
            </div>
    </div>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
        activeIndex:0
    }
  },
  mounted(){
    const body = document.querySelector('body'),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");


    // 点击modeSwitch元素时触发事件
    modeSwitch.addEventListener("click", () => {
        // 切换body元素的dark类
        body.classList.toggle("dark");
        // 如果body元素包含dark类
        if (body.classList.contains("dark")) {
            modeText.innerText = "白日模式";
        } else {
            modeText.innerText = "夜间模式";
        }
    });
  },
  methods:{
    quit(){
        console.log('退出');
        localStorage.removeItem('Admin_token');
        this.$router.push("/login")  
    }
  }

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    /* min-height: 100vh; */
    background-color: var(--body-color);
    transition: all 0.3s ease;
}

/* 设置全局变量 */
:root {
    --body-color: #E4E9F7;
    --shell-color: #FFF;
    --primary-color: #695CFE;
    --primary-color-light: #F6F5FF;
    --toggle-color: #DDD;
    /* --text-color: #707070; */
    --text-color: #000000;
}

/* 深色主题变量 */
.dark {
    /* --body-color: #2d87e0; */
    --body-color: #1b1b1bd3;
    /* --body-color: #242323dc; */
    --shell-color: #171717;
    /* --primary-color: #d12a2a5d; */
    --primary-color: #3a3b3c8f;
    --primary-color-light: #3a3b3c;
    --toggle-color: #fff;
    --text-color: #ccc;
}
.leftdiv {
  float: left;
  /* width: 12vw; */
  width: 205px;
}
.rightdiv {
  padding: 30px;
  width: 88vw;
  float: right;
  
  /* flex: 1; 占满剩余空间 */
  /* overflow: hidden; 清除浮动 */
  color: var(--text-color);
}
.rightdiv .content {
    background: var(--shell-color);
}
.shell {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    padding: 10px 14px;
    background: var(--shell-color);
    transition: all 0.3s ease;
    z-index: 100;
}

.close {
    width: 88px;
}

.shell li {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.image,
.icon {
    min-width: 60px;
    border-radius: 6px;
}

.icon {
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 300 23px '';
}

.text,
.icon {
    color: var(--text-color);
    transition: all 0.3s ease;
}

.text {
    font: 500 17px;
    white-space: nowrap;
    opacity: 1;
}

.shell.close .text {
    opacity: 0;
}

header {
    position: relative;
}

.image-text {
    display: flex;
    align-items: center;
    margin-top: 6px;
}

.logo-text {
    display: flex;
    flex-direction: column;
}

.name {
    margin-top: 2px;
    font: 600 18px '';
}

.software {
    font-size: 20px;
    margin-top: -2px;
    display: block;
}

.image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.image img {
    width: 45px;
    border-radius: 6px;
}

.toggle {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background-color: var(--primary-color);
    color: var(--shell-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle {
    color: #ccc;
}

.shell.close .toggle {
    transform: translateY(-50%) rotate(0deg);
}

.menu {
    margin-top: 40px;
}


.shell li a {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.shell li a:hover {
    background-color: var(--primary-color);
}
.shell li a:hover .icon,
.shell li a:hover .text {
    color: var(--shell-color);
}
.activeText {
    color: #fff;
}

.active {
    background-color: var(--primary-color);
    border-radius: 6px;
}
.menu-bar {
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
}

.menu-bar::-webkit-scrollbar {
    display: none;
}

.menu-bar .mode {
    border-radius: 6px;
    background-color: var(--primary-color-light);
    position: relative;
    transition: all 0.3s ease;
}

.menu-bar .mode .sun-moon {
    height: 50px;
    width: 60px;
}

.mode .sun-moon i {
    position: absolute;
}

.mode .sun-moon i.sun {
    opacity: 0;
}

.toggle-switch {
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
}

.switch {
    position: relative;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: var(--toggle-color);
    transition: all 0.3s ease;
}

.switch::before {
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background-color: var(--shell-color);
    transition: all 0.3s ease;
}

.dark .shell li a:hover .icon,
.dark .shell li a:hover .text {
    color: #ccc;
}

.dark .mode .sun-moon i.sun {
    opacity: 1;
}

.dark .mode .sun-moon i.moon {
    opacity: 0;
}

.dark .switch::before {
    left: 20px;
}

</style>