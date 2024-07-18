<template>
    <div class="box clearfix">
       <div class="statisticIndexCon statisticIndexConStu" style="padding-bottom: 55px;">
           <div class="innerCon">

               <div class="model model_">
                   <img class="fl" :src="this.student.studentImage">
                   <div class="userInfo fl" style="height: 100%;display: table;width: calc(100% - 200px);">
                       <div class="downDiv">
                           <h2>{{this.student.name}}</h2>
                           <h2>{{this.student.age}}岁</h2>
                           <h2>{{this.student.studentPhone}}</h2>
                           <h2>{{this.student.schoolName}}</h2>
                           <div class="clear"></div>
                           <div class="downDiv">
                           </div>
                       </div>
                   </div>
                   <div class="clearfix"></div>
               </div>

               <div class="model width1">
                   <div class="title">
                       <h2 class="fl">作业完成度</h2><div class="list fl">
                        <ul class="homeworkFinish">
                            <li>
                                <h2><span class="strong">{{this.task.finish}}</span>/<span id="jobPublish">{{this.task.all}}</span>
                                    <span>个</span></h2>
                                <p>完成进度</p>
                            </li>
                            <li>
                                <h2><span id="jobPublish">{{this.task.all=='0'?0: (this.task.finish / this.task.all * 100).toFixed(2)}}</span>
                                    <span>%</span></h2>
                                <p>平均率</p>
                            </li>
                            <li>
                                <h2>
                                     <div id="main"></div>
                                </h2>
                                <!-- <p>完成率</p> -->
                            </li>
                        </ul>
                    </div>
                       <div class="clearfix"></div>
                   </div>
                   <div class="clearfix"></div>
               </div>

               <div class="model width1" style="float:right;">
                   <div class="title">
                       <h2 class="fl">讨论</h2>
                       
                       <div class="clearfix"></div>
                   </div>
                   <div class="list fl discussList">
                       <ul class="marginLong">
                           <li>
                               <h2><span class="strong">{{this.discuss.all}}</span><span>帖</span>
                               </h2>
                               <p>总数</p>
                           </li>
                           <li>
                               <h2><span class="strong">{{this.discuss.me}}</span><span>帖</span>
                               </h2>
                               <p class="fl">发帖</p>
                               <div class="tips fl">
                                   <span class="tipsIc"></span>
                               </div>
                           </li>
                           <li>
                               <h2><span class="strong">0</span><span>个</span></h2>
                               <p>获赞数</p>
                           </li>
                       </ul>
                   </div>
                   <div class="clearfix"></div>
               </div>

               <div class="model classStudyNum">
                   <div class="title">
                           <h2 class="fl" tabindex="0" role="option">课程学习次数</h2>
                       <div class="clearfix"></div>
                   </div>
                            <div id="mainNum"></div>
                   <div class="clearfix"></div>
               </div>
               <div class="clearfix"></div>
           </div>
       </div>
   </div>
</template>

<script>
import {reqGetRecord} from '@/api'
import * as echarts from 'echarts';

export default {
    props:['courseId'],
    data () {
        return {
            discuss:{},
            records:[],
            student:{},
            task:{}
        }
    },
     async mounted() {
        console.log(this.courseId);
            await this.loadRecord()
            this.task.all = 11
            this.task.finish =8
            // 初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));
            const noFinish = Number(this.task.all)-Number(this.task.finish)
            // 配置图表选项
            var option = {
            series: [
                {
                type: 'pie',
                label: {
                show: true, // 确保标签显示
                // 可以根据需要设置标签的其他样式属性
                },
                data: [
                    {
                    value: this.task.finish,
                    name: '已完成'
                    },
                    {
                    value: noFinish,
                    name: '未完成'
                    }
                ]
                }
            ]
            };
            
            // 使用配置项绘制图表
            myChart.setOption(option);
            this.loadStudentNum()
     },
     methods: {
        loadStudentNum(){
            var myChart = echarts.init(document.getElementById('mainNum'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '连续七天学习课程次数折线图'
        },
        tooltip: {},
        legend: {
          data: ['次数']
        },
        xAxis: {
          data: ['7-10', '7-11', '7-12', '7-13', '7-14', '7-15']
        },
        yAxis: {},
        series: [
          {
            name: '次数',
            type: 'bar',
            data: [5, 20, 26, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
        },
        async loadRecord(){
            try {
                const res = await reqGetRecord({courseid:this.courseId})
                console.log(res.data.data);
                const item = res.data.data
                this.discuss = item.discuss
                this.records = item.records
                this.student = item.student
                this.task = item.task
                if(!this.student.studentImage) {
                    this.student.studentImage = 'https://img2.baidu.com/it/u=2295416155,2339116441&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
                }
            } catch (error) {
                console.log('reqGetRecord',error);
            }

        }
     }
}
</script>
<style scoped>
.discussList {
    margin-left: 70px;
}
#main {
     width: 250px;
     height:110px;
     margin-top:-30px;
     float: right;
     margin-right: -20px;
}
#mainNum {
    margin: 0 auto;
     width: 90%;
     height:450px;
     margin-top:20px;
     /* background-color: red; */
     /* margin-right: -20px; */
}
.homeworkFinish {
    margin: 20px 0 0 -20px;
}
li {
    margin-right: 90px;
}
.box {
    width: 100%;
    height: 100%;
    padding: 45px 60px;
    position: relative;
}
.clearfix:after {
    content: " ";
    display: block;
    height: 0px;
    clear: both;
}
.clearfix {
    zoom: 1;
}
.statisticIndexCon {
    border-radius: 6px;
    background: #f2f4f7;
    position: relative;
}
.statisticIndexCon .innerCon {
    width: 100%;
}
.statisticIndexCon .innerCon .model.width1 {
    width: 49%;
}
.statisticIndexCon .innerCon .model {
    float: left;
    margin-bottom: 20px;
    height: 180px;
    font-size: 14px;
    color: #646873;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 20px 20px 24px;
}
.downDiv {
    margin-top: 15px;
}
.statisticIndexCon .innerCon .model_ {
    width: 100%;
    height: 64px;
    padding: 30px 40px;
    float: left;
    margin-bottom: 20px;
    margin-right: 20px;
    height: 116px;
    font-size: 14px;
    color: #646873;
    background: #FFFFFF;
    border-radius: 8px;
}
.statisticIndexCon .innerCon .model_ img {
    width: 65px;
    height: 65px;
    border-radius: 35px;
    margin-top: -5px;
}
.model_ .userInfo {
    margin-top: 8px;
    margin-left: 20px;
}
.statisticIndexCon .innerCon .model .title h2 {
   font-weight: bold;
    font-size: 15px;
    color: #313133;
    line-height: 20px;
}
.model .list {
    margin-top: 33px;
}
ul, ol, li {
    list-style-type: none;
}
.statisticIndexCon .innerCon .model .list ul li {
    float: left;
    /* margin-right: 20px; */
}
 .list ul li h2 {
    font-size: 18px;
    font-family: D-DIN;
    font-weight: 400;
    color: #313133;
    line-height: 31px;
}
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv h2 {
       font-size: 20px;
    font-weight: bold;
    color: #313133;
    line-height: 18px;
    float: left;
    margin: 0 20px;
   }
h2 span.strong {
    font-size: 28px;
    font-family: D-DIN;
    color: #313133;
    font-weight: 500;
    margin-left: 0;
}
h2 span {
    font-size: 16px;
    color: #181E33;
    margin-left: 4px;
}
.list ul li p {
    margin-top: 12px;
    font-size: 14px;
    color: #646873;
    line-height: 20px;
}

.marginLong li {
    margin-right: 90px;
}
.fr {
    float: right;
}
.fl {
    float: left;
}
.classStudyNum {
    width: 100%;
    min-height: 500px;
}
</style>