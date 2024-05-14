<template>
   <div class="content">
        <div class="content-wrapper">
            <div class="nav">
                <div class="logo">
                    <img src="./asset/logo.jpg" alt="">
                </div>
                <div class="nav-item" id="nav-sigin-btn">
                    <img src="./asset/sigin.png" alt="">
                    <span>Login</span>
                    <div class="block"></div>
                </div>
                <div class="nav-item" id="nav-sigup-btn">
                    <img src="./asset/signup.png" alt="">
                    <span>SigUp</span>
                    <div class="block"></div>
                </div>
            </div>
            <div class="center">
                <div class="sigin-img-wrapper">
                    <div class="img-tips">
                        <h1>Start Your Work</h1>
                        <h5>One Key adn there links</h5>
                    </div>
                </div>
                <div class="sigup-img-wrapper">
                    <div class="img-tips">
                        <h1>Start Your Work</h1>
                        <h5>One Key adn there links</h5>
                    </div>
                </div>
            </div>
            <!-- 表单 -->
            <div class="form">
                <div class="form-wrapper">
                    <div class="sigin common-style">
                        <div class="title">
                            <span>Don't have an account?</span>
                            <span>Sign Up.</span>
                        </div>
                        <div class="inputs-wrapper">
                            <div class="inputs-item items-email">
                                <span class="input-tips">Phone</span>
                                <input type="text" class="inputs" v-model="loginData.phone">
                            </div>
                            <div class="inputs-item items-pwd">
                                <span class="input-tips">Password</span>
                                <input type="password" class="inputs" v-model="loginData.password">
                            </div>
                            <div class="inputs-item">
                                <input class="radio" type="radio" name="options" value="0" v-model="loginData.userType">
                                <label class="input-tips" for="option1">学生</label>

                                <input class="radio" type="radio" name="options" value="1" v-model="loginData.userType">
                                <label class="input-tips" for="option2">老师</label>
                            </div>
                            <button @click="loginBtn" class="sigin-btn">LOG IN</button>
                        </div>

                        <div class="tips">
                            <span class="tips-txt">By clicking the Sign In Button,you therefore agre to the Privacy
                                Policy.</span>
                        </div>
                    </div>
                    <div class="sigup common-style">
                        <div class="title animations">
                            <span>Don't have an account?</span>
                            <span>LOG In.</span>
                        </div>
                        <div class="inputs-wrapper">
                            <div class="inputs-item items-user animations">
                                <span class="input-tips">Phone</span>
                                <input type="text" class="inputs" v-model="signupData.phone">
                            </div>
                            <div class="inputs-item items-pwd animations">
                                <span class="input-tips">Password</span>
                                <input type="text" class="inputs" v-model="signupData.password">
                            </div>
                            <div class="inputs-item items-pwd animations">
                                <span class="input-tips">Password_again</span>
                                <input type="password" class="inputs" v-model="signupData.password_again">
                            </div>
                            <div class="inputs-item animations">
                                <input class="radio" type="radio" v-model.number="signupData.userType" value="0">
                                <label class="input-tips" for="option1">学生</label>

                                <input class="radio" type="radio" v-model.number="signupData.userType" value="1">
                                <label class="input-tips" for="option2">老师</label>
                            </div>
                            <button @click="signUpBtn" class="sigin-btn animations">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {reqLogin} from '@/api'
  import { Message } from 'element3'
export default {
  data () {
    return {
      loginData: {
        phone: '',
        password: '',
        userType:Number
      },
      signupData: {
        phone: '',
        password: '',
        password_again: '',
        userType:''
      }
    }
  },
  mounted(){
    const siginBtn = document.getElementById('nav-sigin-btn');
    const sigupBtn = document.getElementById('nav-sigup-btn');
    const siginForm = document.querySelector('.sigin');
    const sigupForm = document.querySelector('.sigup');
    const siginImgWrapper = document.querySelector('.sigin-img-wrapper');
    const sigupImgWrapper = document.querySelector('.sigup-img-wrapper');
    const animations = document.querySelectorAll('.animations');
    const nav = document.querySelector('.nav');
    const form = document.querySelector('.form');
    const center = document.querySelector('.center');

    let flag = true;
    sigupBtn.onclick = function () {
        if (flag) {
            flag = false;
            siginForm.style.top = '140%';
            siginImgWrapper.style.transform = 'translateY(-100%)';
            sigupImgWrapper.style.transform = 'translateY(-100%)';
            nav.classList.add('nav-form-animation-bottom');
            form.classList.add('nav-form-animation-bottom');
            nav.classList.remove('nav-form-animation-top');
            form.classList.remove('nav-form-animation-top');
            setTimeout(function () {
                sigupForm.style.zIndex = '1';
                sigupForm.style.top = '50%';
                for (let i = 0; i < animations.length; i++) {
                    setTimeout(function () {
                        animations[i].style.transition = '1s';
                        animations[i].style.opacity = '1';
                        animations[i].style.transform = 'translate(0, 0)';
                        if (i == animations.length - 3) {
                            flag = true;
                        }
                    }, i * 250)
                }
            }, 500)
        }
    }

    siginBtn.onclick = function () {
        if (flag) {
            flag = false;
            siginForm.style.top = '50%';
            sigupForm.style.transition = '1s';
            sigupForm.style.top = '-100%';
            siginImgWrapper.style.transform = 'translateY(0%)';
            sigupImgWrapper.style.transform = 'translateY(0%)';
            nav.classList.remove('nav-form-animation-bottom');
            form.classList.remove('nav-form-animation-bottom');
            nav.classList.add('nav-form-animation-top');
            form.classList.add('nav-form-animation-top');
            flag = true
            setTimeout(function () {
                sigupForm.style.zIndex = '-1';
                for (let i = 0; i < animations.length; i++) {
                    animations[i].style.transition = '0';
                    animations[i].style.opacity = '0';
                    animations[i].style.transform = 'translate(-10%, 0)';
                }
                sigupForm.style.top = '-50%';
            }, 1000)
        }
    }
  },
  methods:{
    async loginBtn(){
      console.log(this.loginData);
      console.log(typeof this.loginData.userType);
      // try {
      //   const response = await reqLogin(this.loginData)     
      //   // 请求成功处理逻辑
      //   console.log(response.data.data);
      //   // this.gridData = response.data.data

      // } catch (error) {
      //   Message.error('账号或密码错误')
      //   console.error('Error fetching data:', error);
      // }

      
    },
    signUpBtn(){
      console.log(this.signupData);
      console.log(typeof this.signupData.userType);


    }
  }

}
</script>

<style>

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


.content {
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content .content-wrapper {
  width: 65vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content .content-wrapper .nav {
  height: 80%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}
.content .content-wrapper .nav .logo {
  margin: 50px 0;
}
.content .content-wrapper .nav .logo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.content .content-wrapper .nav .nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;
}
.content .content-wrapper .nav .nav-item span {
  color: #6d679e;
  font-size: 12px;
  text-align: center;
  font-family: "Leelawadee", Courier, monospace;
}
.content .content-wrapper .nav .nav-item img {
  width: 40px;
  height: 40px;
}
.content .content-wrapper .nav .nav-item .block {
  width: 4px;
  height: 80%;
  background-color: #251aeb;
  border-radius: 20px;
  opacity: 0;
  transition: 0.2s;
  position: absolute;
  left: -15px;
}
.content .content-wrapper .nav .nav-item:hover .block {
  opacity: 1;
}
.content .content-wrapper .center {
  width: 55%;
  height: 100%;
  position: relative;
  font-family: "Leelawadee", Courier, monospace;
  overflow: hidden;
  transition: 0.5s;
}
.content .content-wrapper .center .sigin-img-wrapper {
  transition: 0.5s;
  width: 100%;
  height: 100%;
  background: url(./asset/sigin-img.gif) no-repeat #251aeb;
  background-size: 55%;
  background-position: center right;
}
.content .content-wrapper .center .sigin-img-wrapper .img-tips {
  position: absolute;
  margin: 40px;
  z-index: 2;
  color: #fff;
}
.content .content-wrapper .center .sigin-img-wrapper .img-tips h1 {
  font-size: 40px;
  letter-spacing: 2px;
}
.content .content-wrapper .center .sigin-img-wrapper .img-tips h5 {
  font-weight: 100;
}
.content .content-wrapper .center .sigup-img-wrapper {
  transition: 0.5s;
  width: 100%;
  height: 100%;
  background: url(./asset/sigup-img.gif) no-repeat #251aeb;
  background-size: contain;
  background-position: center right;
}
.content .content-wrapper .center .sigup-img-wrapper .img-tips {
  position: absolute;
  margin: 40px;
  z-index: 2;
  color: #fff;
}
.content .content-wrapper .center .sigup-img-wrapper .img-tips h1 {
  font-size: 40px;
  letter-spacing: 2px;
}
.content .content-wrapper .center .sigup-img-wrapper .img-tips h5 {
  font-weight: 100;
}
.content .content-wrapper .form {
  width: 35%;
  height: 80%;
  background-color: #fff;
}
.content .content-wrapper .form .form-wrapper {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
.content .content-wrapper .form .form-wrapper .common-style {
  width: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.content .content-wrapper .form .form-wrapper .common-style .title {
  margin: 10% 0;
  font-size: 18px;
  font-family: "Leelawadee", Courier, monospace;
}
.content .content-wrapper .form .form-wrapper .common-style .title span:first-child {
  color: #acaabe;
}
.content .content-wrapper .form .form-wrapper .common-style .title span:last-child {
  color: #251aeb;
  cursor: pointer;
}
.content .content-wrapper .form .form-wrapper .common-style .inputs-wrapper .inputs-item {
  position: relative;
  margin: 10px 0;
}
.content .content-wrapper .form .form-wrapper .common-style .inputs-wrapper .inputs-item .input-tips {
  color: #8783b1;
  font-weight: 600;
  margin: 5px 0;
  display: inline-block;
  font-family: "Leelawadee", Courier, monospace;
}
.content .content-wrapper .form .form-wrapper .common-style .inputs-wrapper .inputs-item .inputs {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #c6c5ce;
  font-size: 20px;
  padding-right: 50px;
  padding-left: 10px;
  font-family: "Leelawadee", Courier, monospace;
  box-sizing: border-box;
  color: #251aeb;
}
.content .content-wrapper .form .form-wrapper .common-style .inputs-wrapper .inputs-item .inputs:focus {
  border: 1px solid #c0d1ff;
  box-sizing: border-box;
}
.content .content-wrapper .form .form-wrapper .common-style .inputs-wrapper .inputs-item::after {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  position: absolute;
  right: -10px;
  top: 40px;
}
.content .content-wrapper .form .form-wrapper .common-style .inputs-wrapper .items-email:after {
  background: url(./asset/email.png) no-repeat;
  background-size: 30px;
}
.content .content-wrapper .form .form-wrapper .common-style .inputs-wrapper .items-pwd:after {
  background: url(./asset/pwd.png) no-repeat;
  background-size: 30px;
}
.content .content-wrapper .form .form-wrapper .common-style .inputs-wrapper .items-user:after {
  background: url(./asset/user.png) no-repeat;
  background-size: 30px;
}
.content .content-wrapper .form .form-wrapper .common-style .sigin-btn {
  width: 100%;
  height: 50px;
  background-color: #1f1567;
  border-radius: 10px;
  color: #fff;
  margin-top: 20px;
  font-family: "Leelawadee", Courier, monospace;
  font-size: 20px;
  cursor: pointer;
  border: 0;
}
.content .content-wrapper .form .form-wrapper .common-style .tips {
  margin-top: 20px;
  color: #c6c5ce;
}
.content .content-wrapper .form .form-wrapper .sigin {
  opacity: 1;
  z-index: 1;
  transform: 0.5s;
}
.content .content-wrapper .form .form-wrapper .sigup {
  z-index: -1;
}
.content .content-wrapper .form .form-wrapper .sigup .animations {
  transform: translate(-10%, 0);
  opacity: 0;
}

.nav-form-animation-bottom {
  animation: 0.5s form-nav-animation-bottom;
}

.nav-form-animation-top {
  animation: 0.5s form-nav-animation-top;
}

@keyframes form-nav-animation-bottom {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes form-nav-animation-top {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -20px);
  }
  100% {
    transform: translate(0, 0);
  }
}/*# sourceMappingURL=style.css.map */
</style>