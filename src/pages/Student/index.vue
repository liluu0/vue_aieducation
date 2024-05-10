<template>
  <div>
    <nav class="shell leftdiv">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="./image/1.jpg" alt="">
                </span>
                <div class="text logo-text">
                    <span class="name">教育小窝</span>
                    <span class="software">-学习ing-</span>
                </div>
            </div>
            <i class="iconfont icon-left-circle toggle"></i>
        </header>
        <div class="menu-bar">
            <div class="menu">
                <ul class="menu-links">

                    <li class="nav-link">
                        <a href="#">
                            <i class="iconfont icon-home-4-line icon"></i>
                              <router-link to="/student/homePage">
                            <span class="text nac-text">
                                主页
                            </span>
                              </router-link>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class="iconfont icon-chat-white icon"></i>
                            <span class="text nac-text">智能助手</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class="iconfont icon-nosearch icon"></i>
                              <router-link to="/student/material">
                                <span class="text nac-text">
                                    资料库
                                </span>
                              </router-link>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class="iconfont icon-home-4-line icon"></i>
                            <span class="text nac-text">我的收藏</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class="iconfont icon-shijian1 icon"></i>
                            <span class="text nac-text">历史记录</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class="iconfont icon-gerenzhongxin icon"></i>
                            <span class="text nac-text">我的</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="bottom-content">
                <li class="">
                    <a href="#">
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
        <router-view></router-view>
</div>
    
  </div>
</template>

<script>

export default {
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
  }

}
</script>

<style>
.leftdiv {
  float: left;
}
.rightdiv {

  text-align: center;
  /* width: 1200px; */
  width: 80vw;
  float: right;
  /* overflow: hidden; */
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
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
    --text-color: #707070;
}

/* 深色主题变量 */
.dark {
    --body-color: #202224;
    --shell-color: #171717;
    --primary-color: #3a3b3c;
    --primary-color-light: #3a3b3c;
    --toggle-color: #fff;
    --text-color: #ccc;
}

.shell {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 210px;
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