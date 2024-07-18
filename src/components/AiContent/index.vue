<template>
    <div class="AiContent">
        {{this.message}}
    </div>
</template>

<script>
import {reqGptAsk} from '@/api'
export default {
    props:['question'],
    data () {
        return {
            message:'正在生成中，请稍后……'
        }
    },
    async mounted() {
        console.log(this.question);
        try {
            let question = this.question
            if(!question){
                question = '给我关于ai课程的课程评价和学习建议，分点简单讲解'
                }
                const res = await reqGptAsk({question:question+",不多于500字。"})
                console.log(res);
                this.message = res.data.data
        } catch (error) {
            console.log('reqGptAsk',error);
        }

    },

}
</script>

<style scoped>
.AiContent {
    /* 背景渐变 */
    background-image: linear-gradient(to bottom right,
                    #91defe,
                    #99c0f9,
                    #bdb6ec,
                    #d7b3e3,
                    #efb3d5,
                    #f9bccc);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 200px;
            padding: 20px;
            border-radius: 30PX;
            line-height: 1.5; /* 设置行高为1.5倍的字体大小 */
  letter-spacing: 2px; /* 设置文字间的距离为2像素 */
            overflow: hidden; 
}
.AiContent.box {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 500px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

.AiContent.ball {
            animation: float 3.5s ease-in-out infinite;
            height: 200px;
            width: 200px;
            border-radius: 50%;
            position: relative;
            /* 为球的背景添加径向渐变，渐变中心在 77% 水平、30% 垂直位置 */
            background: radial-gradient(circle at 77% 30%,
                    /* 渐变起点颜色为白色，半径为 5 像素 */
                    white 5px,
                    /* 渐变颜色从白色平滑过渡到淡蓝色，半径为 8% */
                    aqua 8%,
                    /* 渐变颜色从淡蓝色平滑过渡到深蓝色，半径为 60% */
                    darkblue 60%,
                    /* 渐变颜色从深蓝色平滑过渡到淡蓝色，半径为 100% */
                    aqua 100%);
            /* 为球添加多重内阴影效果 */
            /* 内部白色阴影，宽度 20 像素 */
            box-shadow: inset 0 0 20px #fff,
                /* 内部淡蓝色阴影，位置偏右 10 像素，宽度 46 像素 */
                inset 10px 0 46px #eaf5fc,
                /* 内部浅蓝色阴影，位置偏右 88 像素，宽度 60 像素 */
                inset 88px 0px 60px #c2d8fe,
                /* 内部淡橙色阴影，位置偏左上方，宽度 100 像素 */
                inset -20px -60px 100px #fde9ea,
                /* 内部淡橙色阴影，位置偏下方，宽度 140 像素 */
                inset 0 50px 140px #fde9ea,
                /* 外部白色阴影，宽度 90 像素 */
                0 0 90px #fff;
        }

.AiContent.box:nth-child(2) {
            z-index: -999;
        }

.AiContent.box:nth-child(2) .ball {
            left: -80px;
            top: 35px;
            width: 100px;
            height: 100px;
            z-index: -999;
            opacity: .5;
        }

.AiContent.box:nth-child(3) .ball {
            left: 80px;
            top: -80px;
            width: 20px;
            height: 20px;
            opacity: .1;
        }

.AiContent.shadow {
            background: #b490b27c;
            width: 150px;
            height: 40px;
            top: 70%;
            animation: expand 4s infinite;
            position: absolute;
            border-radius: 50%;
        }

.AiContent.box:nth-child(2) .shadow {
            width: 90px;
            height: 20px;
            top: 72.5%;
            left: -75px;
            opacity: .4;
        }

        /* 添加漂浮动画 */
        @keyframes float {
            0% {
                transform: translatey(0px) rotate(-10deg);
            }

            50% {
                transform: translatey(-80px) rotate(10deg);
            }

            100% {
                transform: translatey(0px) rotate(-10deg);
            }
        }

        @keyframes expand {

            0%,
            100% {
                transform: scale(0.5);
            }

            50% {
                transform: scale(1);
            }
        }
</style>