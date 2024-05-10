<template>
<div class="bodyLogin">
      <div class="Login">
        <div class="box">
            <p class="table">Login</p>
            <br>
            <input type="text" placeholder="账号" v-model="name">
            <input type="password" placeholder="密码" v-model="password">
            <br>
            <a href="#" @click="userLogin" class="go">GO</a>
        </div>
    </div>
</div>

</template>

<script>
//   import { Message } from 'element3'
// import axios from 'axios';
export default {
    name:'Login',
    data () {
      return {
        phone:'',
        password:''
      }
    },
    methods: {
        // async userLogin(){
        // const {name,password} = this
        //     console.log('登录',name,password);
        //     try {

        //         // const response = await axios.post('/admin/login', {
        //         const response = await axios({
        //             method:'post',
        //             url:'http://localhost:8088/travelhelper/admin/login',
        //             params:{
        //                  aName: name,
        //                 aPassword:password
        //             }
        //         })
        //         // 这里是要发送的数据对象

        //         // 请求成功处理逻辑
        //         // console.log('成功发送数据:', response.data.data.token);
        //         localStorage.setItem('Admin_token',response.data.data.token)

        //         if(response.data.status==200){
                    
        //             Message({
        //                 message: '登录成功',
        //                 type: 'success'
        //             })

        //         this.$router.push("/manage")   
        //         }else{
        //             Message.error('账号或密码错误')
        //         }

        //     } catch (error) {
        //         // 请求失败处理逻辑
                
        //      Message.error('账号或密码错误')
        //         console.error('发送数据失败:', error);
        //     }
        // }
    }


}
</script>

<style scoped>
    *{
            padding: 0;
            margin: 0;
            text-decoration: none;
    }
        .bodyLogin {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #a29bfe;
            background-image: url('./images/background.png');
            background-size: cover;
        }
        .Login{
            width: 550px;
            height: 400px;
            display: flex;
            border-radius: 15px;
            justify-content: center;
            align-items: center;
            background: linear-gradient(
                to right bottom,
                rgba(255,255,255,.7),
                rgba(255,255,255,.5),
                rgba(255,255,255,.4)
            );
            /* 使背景模糊化 */
            backdrop-filter: blur(10px);
            box-shadow: 0 0 20px #a29bfe;
        }
        .table{
            font: 900 40px '';
            text-align: center;
            letter-spacing: 5px;
            color: #3d3d3d;
        }
        .box{
            overflow: hidden;
        }
        
        .box input{
            width: 100%;
            margin-bottom: 20px;
            outline: none;
            border: 0;
            padding: 10px;
            border-bottom: 3px solid rgb(150, 150, 240);
            background-color: transparent;
            font: 900 16px '';
        }
        .go{
            text-align: center;
            display: block;
            height: 24px;
            padding: 26px;
            font: 900 20px '';
            border-radius: 10px;
            margin-top: 20px;
            color: #fff;
            letter-spacing: 3px;
            background-image: linear-gradient(to left, #fd79a8, #a29bfe);
        }
    </style>