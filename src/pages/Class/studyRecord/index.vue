<template>
    <div class="box clearfix">
       <div class="statisticIndexCon statisticIndexConStu" style="padding-top: 30px; padding-bottom: 55px;">
           <div class="innerCon">
               <div class="model model_ marginRight0">
                   <img class="fl" src="../image2/kfIcon.png">
                   <div class="userInfo fl" style="height: 100%;display: table;width: calc(100% - 200px);">
                       <div class="downDiv" style="vertical-align: middle; display: table-cell;" tabindex="0" role="option" aria-label="范芸;学习记录页面">
                           <h2>范芸</h2>
                           <div class="clear"></div>
                           <div class="downDiv">
                           </div>
                       </div>
                   </div>
                   <div class="clearfix"></div>
               </div>
               <div class="model width1 " tabindex="-1" aria-hidden="true">
                   <div class="title">
                       <h2 class="fl">章节任务点</h2><div class="list fl">
                        <ul>
                            <li>
                                <h2><span class="strong" id="jobfinish">0</span>/<span id="jobPublish">3</span>
                                    <span>个</span></h2>
                                <p>完成进度</p>
                            </li>
                            <li>
                                <h2><span class="strong" id="jobRank">13</span><span>名</span>
                                </h2>
                                <p>当前排名</p>
                            </li>
                        </ul>
                    </div>
                       <div class="r-link fr" style="display: none;">
                          <a href="javascript:" onclick="toTask()" tabindex="-1" aria-hidden="true">详情
                            <i>
                            </i>
                          </a>
                        </div>
                       <div class="clearfix"></div>
                   </div>
                   <div id="jobModel" style="display:none;">
                       <div class="list fl">
                           <ul>
                               <li>
                                   <h2><span class="strong" id="jobfinish">0</span>/<span id="jobPublish">0</span>
                                       <span>个</span></h2>
                                   <p>完成进度</p>
                               </li>
                               <li>
                                   <h2><span class="strong" id="jobRank">1</span><span>名</span>
                                   </h2>
                                   <p>当前排名</p>
                               </li>
                           </ul>
                       </div>
                       <a href="javaScript:;" class="classRanking fl" onclick="toStudyRank()" tabindex="-1" aria-hidden="true">
                            <i><img width="100%" height="100%" src="../image2/rankingIcon.png"></i>
                             班级排名 </a>
                     <div class="chartDiv fr">
                        <div class="chart" id="chart1" _echarts_instance_="ec_1715848151704" style="-webkit-tap-highlight-color: transparent; user-select: none;">
                            <div style="position: relative; overflow: hidden; width: 90px; height: 90px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                                <canvas data-zr-dom-id="zr_0" width="144" height="144" style="position: absolute; left: 0px; top: 0px; width: 90px; height: 90px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;">
                                </canvas>
                            </div>
                        </div>
                        </div>
                        <div class="chartNum">
                            <p>完成率</p>
                            <h2><span id="jobPer">0</span>%</h2>
                        </div>
                    </div>

                   <div class="clearfix"></div>
               </div>
   
               <div class="model width2 ">
                   <div class="title">
                       <h2 class="fl" tabindex="0" role="option">章节学习次数</h2>
                       <div class="r-link fr"><a href="#" onclick="toPv()" tabindex="-1" aria-hidden="true">详情
                           <i></i></a></div>
                       <div class="clearfix"></div>
                   </div>
                   <div class="single-list">
                       <h2 tabindex="0" role="option">0<span>次</span></h2>
                   </div>
                   <div class="clearfix"></div>
               </div>
               <div class="model width2 marginRight0">
                   <div class="title">
                       <h2 class="fl" tabindex="0" role="option">课程积分</h2>
                       <div class="r-link fr" id="toPonit"><a tabindex="-1" aria-hidden="true" href="#" onclick="toPonit()">详情<i></i></a></div>
                       <div class="clearfix"></div>
                   </div>
                   <div class="list fl">
                       <ul>
                           <li>
                               <h2 tabindex="0" role="option"><span class="strong" id="point">0</span><span>分</span></h2>
                                                       </li>
                           
                       </ul>
                   </div>
                   <div class="element-invisible-hidden" id="toPonit"><a href="#" onclick="toPonit()">详情<i></i></a>
                   </div>
                   <div class="clearfix"></div>
               </div>
               <div class="model width1">
                   <div class="title">
                           <h2 class="fl" tabindex="0" role="option">签到</h2>
   
                       <div class="r-link fr"><a href="#" onclick="toSign()" tabindex="-1" aria-hidden="true">详情<i></i></a></div>
                       <div class="clearfix"></div>
                   </div>
                   <div id="signModel">
                       <div class="list fl" tabindex="0" role="option" id="tabindexSignModel">
                           <ul>
                               <li>
                                   <h2 id="sign"><span class="strong">1</span>/1<span> 次</span></h2>
                                   <p>已签</p>
                               </li>
                           </ul>
                       </div>
                       <div class="chartDiv fr" tabindex="0" role="option">
                           <div class="chart" id="chart2" _echarts_instance_="ec_1715656335271" style="-webkit-tap-highlight-color: transparent; user-select: none;"><div style="position: relative; overflow: hidden; width: 90px; height: 90px; padding: 0px; margin: 0px; border-width: 0px;"><canvas data-zr-dom-id="zr_0" width="144" height="144" style="position: absolute; left: 0px; top: 0px; width: 90px; height: 90px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div></div>
                           <div class="chartNum">
                                   <p>签到率</p>
                               <h2 id="signPer">100%</h2>
                           </div>
                       </div>
                   </div>
                   <div class="noCon" style="display: none">暂无数据</div>
                   <div class="clearfix"></div>
               </div>
                           <div class="model width2" id="testDiv">
                   <div class="title">
                       <h2 class="fl" tabindex="0" role="option">章节测验</h2>
                       <div class="r-link fr" style="display: none;"><a tabindex="-1" aria-hidden="true" href="javascript:" onclick="toChapterExam()">详情<i></i></a>
                       </div>
                       <div class="clearfix"></div>
                   </div>
                   <div class="list fl" id="testModel" tabindex="0" role="option" style="display: none;">
                       <ul>
                           <li>
                               <h2><span class="strong" id="testNum">0</span>/<span id="publishTestNum">0</span>
                                   <span>个</span></h2>
                               <p>完成进度</p>
                           </li>
                           <li id="testAvgScoreDiv">
                               <h2><span class="strong" id="testAvgScore">0</span><span>分</span></h2>
                               <p>平均分</p>
                           </li>
                       </ul>
                   </div>
                   <div class="noCon" style="">暂无数据</div>
                   <div class="element-invisible-hidden">
                       <a href="javascript:" onclick="toChapterExam()">详情<i></i></a>
                   </div>
                   <div class="clearfix"></div>
               </div>
                           <div class="model width2 marginRight0" id="workDiv">
                   <div class="title">
                       <h2 class="fl" tabindex="0" role="option">作业</h2>
                       <div class="r-link fr" style="display: none;"><a tabindex="-1" aria-hidden="true" href="#" onclick="toWork()">详情<i></i></a></div>
                       <div class="clearfix"></div>
                   </div>
                   <div class="list fl" id="workModel" tabindex="0" role="option" style="display: none;">
                       <ul>
                           <li>
                               <h2><span class="strong" id="workNum">0</span>/<span id="publishWorkNum">0</span>
                                   <span>个</span></h2>
                               <p>完成进度</p>
                           </li>
                           <li id="workScoreDiv">
                               <h2><span class="strong" id="workScore">0</span><span>分</span></h2>
                               <p>平均分</p>
                           </li>
                       </ul>
                   </div>
                   <div class="noCon" style="">暂无数据</div>
                   <div class="element-invisible-hidden"><a href="#" onclick="toWork()">详情<i></i></a></div>
                   <div class="clearfix"></div>
               </div>
                           <div class="model width1" id="bbsDiv1">
                   <div class="title">
                       <h2 class="fl">讨论</h2>
                       
                       <div class="clearfix"></div>
                   </div>
                   <div class="list fl">
                       <ul class="marginLong">
                           <li>
                               <h2><span class="strong">0</span><span>帖</span>
                               </h2>
                               <p>发帖</p>
                           </li>
                           <li>
                               <h2><span class="strong">0</span><span>帖</span>
                               </h2>
                               <p class="fl">回帖</p>
                               <div class="tips fl">
                                   <span class="tipsIc"></span>
                                   <div class="tipsCon" style="overflow: hidden;width:133px;white-space:nowrap;text-overflow:ellipsis;">
                                       <i></i>
   同一个话题回帖只计一次                                </div>
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
                           <div class="model width2" id="examDiv">
                   <div class="title">
                       <h2 class="fl">在线考试</h2>
                       <div class="r-link fr" style="display: none;"><a href="#" onclick="toExam()" tabindex="-1" aria-hidden="true">详情<i></i></a></div>
                       <div class="clearfix"></div>
                   </div>
                   <div class="list fl" id="examModel" style="display: none;">
                       <ul>
                           <li>
                               <h2><span class="strong">0</span>/0
                                   <span>个</span>
                               </h2>
                               <p>完成进度</p>
                           </li>
                               <li>
                                   <h2><span class="strong">0</span><span>分</span></h2>
                                   <p>平均分</p>
                               </li>
                       </ul>
                   </div>
                   <div class="noCon" style="">暂无数据</div>
                   <div class="clearfix"></div>
               </div>
                           <div class="model width2 marginRight0" id="taskDiv">
                   <div class="title">
                       <h2 class="fl">分组任务</h2>
                       
                       <div class="clearfix"></div>
                   </div>
                   <div class="list fl" id="taskModel" style="display: none;">
                       <ul>
                           <li>
                               <h2><span class="strong">0</span><span>/0</span><span>个</span></h2>
                               <p>完成进度</p>
                           </li>
                           <li>
                               <h2><span class="strong">0.0</span><span>分</span></h2>
                               <p>平均分</p>
                           </li>
                       </ul>
                   </div>
                   <div class="noCon" style="">暂无数据</div>
                   <div class="clearfix"></div>
               </div>
                   <div class="model width1" id="liveCard" style="display: none">
                       <div class="title">
                           <h2 class="fl">直播</h2>
                           <div class="r-link fr"><a href="javascript:;" onclick="toLive()">详情<i></i></a></div>
                           <div class="clearfix"></div>
                       </div>
                       <div class="list fl">
                           <ul class="marginLong">
                               <li class="liveCard" style="margin-right: 50px;">
                                   <h2><span class="strong" id="liveJobFinish"></span>/<span id="liveJobPublish"></span>
                                       <span>个</span></h2>
                                   <p>完成进度</p>
                               </li>
                               <li class="liveCard" style="margin-right: 50px;">
                                                                   <h2><span class="strong" id="livingTime">0</span><span>分钟</span>
                                   </h2>
                                   <p>直播观看时长</p>
                               </li>
                               <li class="liveCard" style="margin-right: 50px;">
                                                                   <h2><span class="strong" id="playbackTime">0</span><span>分钟</span></h2>
                                   <p>直播回看时长</p>
                               </li>
                               <li class="liveCard" style="display: none; margin-right: 50px;">
                                                                   <h2><span class="strong" id="checkinAttendPercent"></span></h2>
                                   <p>签到率</p>
                               </li>
                           </ul>
                       </div>
                       <div class="clearfix"></div>
                   </div>
   
               <div class="model width2" id="videoTestCard" style="display: none;">
                   <div class="title">
                       <h2 class="fl">互动测验</h2>
                       <div class="r-link fr" id="videoTestDetail" style="display: none;"><a href="javascript:;" onclick="toVideoTest()">详情<i></i></a>
                       </div>
                       <div class="clearfix"></div>
                   </div>
                   <div class="list fl">
                       <ul>
                           <li>
                               <h2><span class="strong" id="videoTestFinish">0</span>/<span id="videoTestCount">0</span><span>个</span></h2>
                               <p>作答数量</p>
                           </li>
   
                       </ul>
                   </div>
                   <div class="clearfix"></div>
               </div>
               <div class="clearfix"></div>
           </div>
       </div>
   </div>
   </template>
   
   <script>
   export default {
   
   }
   </script>
   
   <style>
   * {
    margin: 0;
    padding: 0;
}

[v-cloak] {
  display: none;
}

body {
    font: 12px/1.5 微软雅黑, 黑体, Arial, Helvetica, sans-serif;
    overflow-x: auto;
    -webkit-font-smoothing: antialiased;
}
table {
    width: 100%;
    border: 0;
    border-collapse: collapse;
    border-spacing: 0;
}

table th {
    font-weight: normal;
}

ul, ol, li {
    list-style-type: none;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
}

input, select, textarea {
    vertical-align: middle;
    color: #131B26;
    border: none;
    border: 0;
    outline: none;
    resize: none;
}

a {
    text-decoration: none;
}

b, i, strong, em {
    font-weight: normal;
    font-style: normal;
}

img {
    border: 0;
}

.fr {
    float: right
}

.fl {
    float: left
}

.clear {
    clear: both
}

.clearfix {
    zoom: 1;
}

.clearfix:after {
    content: " ";
    display: block;
    height: 0px;
    clear: both;
}

/*input-placeholder-color*/
::-webkit-input-placeholder {
    color: #acb4bf;
    text-overflow: ellipsis;
}

:-moz-placeholder {
    color: #acb4bf !important;
    text-overflow: ellipsis;
}

::-moz-placeholder {
    color: #acb4bf !important;
    text-overflow: ellipsis;
}

:-ms-input-placeholder {
    color: #acb4bf !important;
    text-overflow: ellipsis;
}

input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
}

input {
    caret-color: #3A8BFF;
}

.pad30lr {
    padding: 0 30px;
}

.padTop30 {
    padding-top: 30px;
}

.marginRight30 {
    margin-right: 30px;
}

.padBom20 {
    padding-bottom: 20px;
}

/**********公共文字颜色*************/
.textHidden {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.fs14 {
    font-size: 14px;
}

.fs16 {
    font-size: 16px;
}

.fs18 {
    font-size: 18px;
}

/*color*/
.colorDeep {
    color: #131B26;
}

/*一级文字 深色*/
.colorIn {
    color: #474C59;
}

/*二级文字 适中*/
.colorShallow {
    color: #8A8B99;
}

/*三级文字 浅色*/
.colorBlue_click {
    color: #6B89B3;
}

/*可点击文字 蓝色*/
.colorBlue {
    color: #3A8BFF;
}

/*蓝色*/
.colorBlue:hover {
    color: #3A8BFF;
}

/*蓝色*/
.pointer {
    cursor: pointer
}

/******border**********/
.borderBom1 {
    border-bottom: 1px solid #F2F2F2;
}
body {
    background: #f2f4f7;
}

.box {
    width: 100%;
    height: 100%;
    position: relative;
}

.Header {
    width: 100%;
    height: 52px;
    background: #FFFFFF;
    box-shadow: 0 1px 12px 0 rgba(1, 39, 78, 0.12);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    padding: 0 30px;
    box-sizing: border-box;
}

.Logo {
    min-width: 138px;
    height: 28px;
    margin-top: 13px;
}

.headRight {
    padding-top: 11px;
}

.backOld {
    display: inline-block;
    font-size: 14px;
    color: #91A0B5;
    background: #F7FAFC;
    border: 1px solid #E1EBFA;
    border-radius: 20px;
    width: 98px;
    height: 28px;
    text-align: center;
    line-height: 28px;
}

.backOld:hover {
    background: rgba(247, 250, 252, 0.7);
    color: rgba(145, 160, 181, 0.7);
}

/*****登陆后*******/
.loginAfter {
    margin-left: 40px;
}

.headPic {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
}

.name {
    width: 90px;
    position: relative;
    line-height: 30px;
    height: 34px
}

.name p {
    max-width: 68px;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    float: left;
    color: #181E33;
    font-size: 14px;
}

.name p:hover {
    color: #646873
}

.arrowDown {
    display: inline-block;
    width: 12px;
    height: 12px;
    /* background: url(../images/arrowDown.png) no-repeat; */
    margin-left: 5px;
    float: left;
    margin-top: 10px;
    -webkit-transition: -webkit-transform .2s ease-in;
    -moz-transition: -moz-transform .2s ease-in;
    -o-transition: -o-transform .2s ease-in;
}
   .clear {
    clear: both
}

.clearfix {
    zoom: 1;
}

.clearfix:after {
    content: " ";
    display: block;
    height: 0px;
    clear: both;
}
   a {
    text-decoration: none;
}
   body {
       min-width: 830px;
       overflow-x: auto;
   }
   
   .statisticIndexCon {
       border-radius: 6px;
       background: #f0f4fa;
       position: relative;
       margin-left: 180px;
       margin-top: 52px;
   }
   
   .statisticIndexCon .innerCon {
       width: 590px;
       margin: 0 auto;
   }
   
   .statisticIndexCon .innerCon .model {
       float: left;
       margin-bottom: 20px;
       margin-right: 20px;
       height: 116px;
       font-size: 14px;
       color: #646873;
       background: #ced6e6;
       border-radius: 8px;
       padding: 20px 20px 24px;
   }
   
   .statisticIndexCon .innerCon .model.width1 {
       width: 550px;
   }
   
   .statisticIndexCon .innerCon .model.width2 {
       width: 245px;
   }
   
   .statisticIndexCon .innerCon .model.marginRight0 {
       margin-right: 0;
   }
   
   .statisticIndexCon .innerCon .model.marginRight0_ {
       margin-right: 0;
   }
   
   .statisticIndexCon .innerCon .model .title h2 {
       font-weight: bold;
       font-size: 14px;
       color: #313133;
       line-height: 20px;
   }
   
   .statisticIndexCon .innerCon .model .title .tips {
       margin-top: 0;
       margin-left: 6px;
       position: relative;
       top: 1px;
       font-size: 12px;
       color: #A8A8B3;
   }
   
   .statisticIndexCon .innerCon .model .title .tips i {
       position: relative;
       top: 1px;
       margin-right: 4px;
       display: inline-block;
       width: 12px;
       height: 12px;
       /* background: url("../../../images/statistics/iconTips.png") no-repeat center center; */
       background-size: contain;
   }
   
   .statisticIndexCon .innerCon .model .title .r-link {
       height: 20px;
   }
   
   .statisticIndexCon .innerCon .model .title .r-link a {
       font-weight: 400;
       font-size: 14px;
       color: #91a0b5;
       line-height: 20px;
   }
   
   .statisticIndexCon .innerCon .model .title .r-link a i {
       float: right;
       margin-left: 4px;
       display: inline-block;
       width: 6px;
       height: 10px;
       background: url(../image2/statistics_icons.png) no-repeat 0 -50px/16px auto;
       vertical-align: middle;
       position: relative;
       top: 5px;
   }
   
   .statisticIndexCon .innerCon .model .title .r-link:hover a {
       color: #3A8BFF;
   }
   
   .statisticIndexCon .innerCon .model .title .r-link:hover a i {
       background: url(../image2/statistics_icons.png) no-repeat 0 -60px/16px auto;
   }
   
   .statisticIndexCon .innerCon .model .list {
       margin-top: 33px;
   }
   
   .statisticIndexCon .innerCon .model .list ul li {
       float: left;
       margin-right: 20px;
   }
   
   .statisticIndexCon .innerCon .model .list ul li:last-child {
       margin-right: 0;
   }
   
   .statisticIndexCon .innerCon .model .list ul li h2 {
       font-size: 18px;
       font-family: D-DIN;
       font-weight: 400;
       color: #313133;
       line-height: 1px;
   }
   
   .statisticIndexCon .innerCon .model .list ul li h2 span {
       font-size: 16px;
       color: #181E33;
       margin-left: 4px;
   }
   
   .statisticIndexCon .innerCon .model .list ul li h2 span.strong {
       font-size: 28px;
       font-family: D-DIN;
       color: #313133;
       font-weight: 500;
       margin-left: 0;
   }
   
   .statisticIndexCon .innerCon .model .list ul li p {
       margin-top: 12px;
       font-size: 14px;
       color: #646873;
       line-height: 20px;
   }
   
   .statisticIndexCon .innerCon .model .list ul li p.special {
       font-weight: 400;
       color: #B8B8BF;
   }
   
   .statisticIndexCon .innerCon .model .list ul li p.special span {
       color: #F98647;
   }
   
   .statisticIndexCon .innerCon .model .list ul.marginLong li {
       margin-right: 98px;
   }
   
   .statisticIndexCon .innerCon .model .chartDiv {
       position: relative;
       margin-right: 70px;
       margin-top: 6px;
   }
   
   .statisticIndexCon .innerCon .model .chartDiv .chart {
       width: 90px;
       height: 90px;
   }
   
   .statisticIndexCon .innerCon .model .chartDiv .chart4 {
       width: 300px;
       margin-top: -6px;
       height: 110px;
   }
   
   .statisticIndexCon .innerCon .model .chartDiv .chart3 {
       width: 213px;
       height: 60px;
       margin-right: -30px;
       margin-top: 32px;
   }
   
   .statisticIndexCon .innerCon .model .chartDiv .chartNum {
       position: absolute;
       width: 90px;
       text-align: center;
       top: 50%;
       left: 50%;
       margin-left: -45px;
       margin-top: -20px;
   }
   
   .statisticIndexCon .innerCon .model .chartDiv .chartNum h2 {
       font-size: 20px;
       font-weight: bold;
       font-family: D-DIN;
       color: #181E33;
       line-height: 22px;
   }
   
   .statisticIndexCon .innerCon .model .chartDiv .chartNum P {
       margin-bottom: 2px;
       font-size: 12px;
       font-weight: 400;
       color: #A8A8B3;
       line-height: 17px;
   }
   
   .statisticIndexCon .innerCon .model .single-list {
       margin-top: 33px;
   }
   
   .statisticIndexCon .innerCon .model .single-list h2 {
       font-weight: 500;
       font-size: 28px;
       color: #313133;
       line-height: 31px;
       font-family: D-DIN;
   }
   
   .statisticIndexCon .innerCon .model .single-list h2 span {
       font-size: 16px;
       color: #181E33;
       margin-left: 4px;
       font-weight: 400;
   }
   
   .statisticIndexCon .innerCon .model_ {
       height: 64px;
       padding: 30px 40px;
       width: 510px;
   }
   
   .statisticIndexCon .innerCon .model_ img {
       width: 56px;
       height: 56px;
       border-radius: 28px;
       float: left;
       margin-top: -25px;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo {
       margin-top: 8px;
       margin-left: 20px;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .dec {
       width: 340px;
       font-size: 14px;
       font-weight: 400;
       color: #B8B8BF;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       padding-left: 10px;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv:last-child {
       margin-top: 6px;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv.one {
       margin-top: 17px;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv.one span {
       line-height: 25px;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv.one .download {
       line-height: 25px;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv.one .download i {
       height: 25px;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv h2 {
       font-size: 18px;
       font-weight: bold;
       color: #313133;
       line-height: 1px;
       float: left;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv p {
       font-size: 14px;
       font-weight: 400;
       color: #B8B8BF;
       line-height: 20px;
       float: left;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv span {
       color: #F2F2F2;
       margin: 0 20px;
       float: left;
       line-height: 20px;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv .download {
       float: left;
       font-size: 14px;
       color: #3A8BFF;
       line-height: 20px;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv .download i {
       display: inline-block;
       float: left;
       width: 18px;
       height: 20px;
       /* background: url("../../../images/statistics/iconzs.png") center center no-repeat; */
       background-size: 100%;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv .download a {
       color: #3A8BFF;
   }
   
   .statisticIndexCon .innerCon .model_ .userInfo .downDiv .download a:hover {
       opacity: 0.7;
       filter: alpha(opacity=70);
   }
   
   .statisticIndexCon .innerCon .model_ .right .time {
       font-weight: 400;
       color: #181E33;
       line-height: 22px;
       text-align: center;
       margin-bottom: 9px;
   }
   
   .statisticIndexCon .innerCon .model_ .right .time .num {
       font-size: 28px;
       font-weight: 500;
       color: #313133;
       font-family: D-DIN;
       line-height: 31px;
       margin-right: 4px;
   }
   
   .statisticIndexCon .innerCon .model_ .right a {
       border: 1px solid #CDE2FF;
       border-radius: 20px;
       display: inline-block;
       width: 90px;
       height: 28px;
       text-align: center;
       line-height: 28px;
       color: #3A8BFF;
       background: #ffffff;
   }
   
   .statisticIndexCon .innerCon .model_ .right a:hover {
       border: 1px solid #93BFFF;
       background: #EAF0FF;
   }
   
   .statisticIndexCon .innerCon .model_ .right a:link, .statisticIndexCon .innerCon .model_ .right a:active {
       border: 1px solid #93BFFF;
       background: #E4ECFF;
   }
   
   .statisticIndexCon .innerCon .noCon {
       text-align: center;
       margin-top: 38px;
       font-size: 14px;
       font-weight: 400;
       color: #A8A8B3;
       line-height: 1px;
   }
   
   @media screen and (min-width: 830px) {
       .statisticIndexCon .innerCon .model.marginRight0_ {
           margin-right: 0;
       }
   
       .statisticIndexCon .innerCon .model_ .userInfo .dec {
           /*width: 340px;*/
       }
   }
   
   @media screen and (min-width: 1260px) {
       .statisticIndexCon .innerCon {
           width: 1200px;
       }
   
       .statisticIndexCon .innerCon .model.marginRight0_ {
           margin-right: 20px;
       }
   
       .statisticIndexCon .innerCon .model_ {
           width: 1120px;
       }
   
       .statisticIndexCon .innerCon .model_ .userInfo .dec {
           width: auto!important;
           max-width: 750px;
       }
   }
   
   .statisticIndexConStu {
       margin-left: 0;
       margin-top: 0;
   }
   
   .classRanking {
       font-size: 14px;
       color: #6B89B3;
       padding-top: 80px;
       margin-left: 20px;
   }
   
   .classRanking i {
       display: inline-block;
       width: 16px;
       height: 16px;
       vertical-align: middle;
       margin: -2px 4px 0 0;
   }
   
   
   .tips{position:relative;margin-top: 15px;margin-left: 5px;}
   .tipsIc{display:inline-block;width:16px;height:16px;background: url(../image2/tips.png) no-repeat ;background-size:100%;}
   /* .tipsIc:hover{background:url(../../../images/statistics/tips_hover.png) no-repeat;background-size:100%;} */
   .tipsCon{position:absolute;left: -70px;top: 24px;height:37px;background: rgba(24,30,51,0.80);border-radius: 4px;opacity: 1;visibility: hidden;-webkit-transition: opacity 0s 0s, visibility 0s 0s;transition: opacity 0s 0s, visibility 0s 0s;text-align:center;line-height:37px;color:#fff;font-size:12px;display: inline-block;padding: 0 16px;word-break: keep-all;}
   .tipsCon i{ display:block; width:0px; height:0px;border: solid rgba(24,30,51,0.80) 5px; position:absolute;left: 73px;top: -9px; bottom:auto;border-color: transparent transparent rgba(24,30,51,0.80) transparent;}
   .tipsCon i.active{ display:block; width:0px; height:0px; border:solid rgba(24,30,51,0.80) 4px; position:absolute; left:50%; margin-left:-4px; bottom:40px; top:auto; border-color:transparent transparent rgba(24,30,51,0.80) transparent;}
   .tips:hover .tipsCon{ display:block; opacity:1; visibility:visible; -webkit-transition:opacity 0s 0s, visibility 0s 0s; transition:opacity 0s 0s, visibility 0s 0s;}
   
   
   .element-invisible-hidden {
       position: absolute !important;
       clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
       clip: rect(1px, 1px, 1px, 1px);
   }
   /*气泡小弹窗开始*/
.Bubble_Popup {
    width: 116px;
    background: #FFFFFF;
    box-shadow: 0 2px 12px 0 rgba(175, 187, 204, 0.75);
    border-radius: 6px;
    position: absolute;
    padding: 6px 0;
    display: none
}

.Bubble_Popup li {
    width: 100%;
    height: 48px;
}

.Bubble_Popup li a {
    display: block;
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 14px;
    color: #474C59;
}

.Bubble_Popup li a:hover {
    background: #F5F8FB;
    color: #3B90FF;
}

/*气泡小弹窗结束*/

.loginCon li a i {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 8px;
    margin-top: -1px;
}

.loginCon {
    position: absolute;
    left: -25px;
    top: 34px;
    height: 0
}
.nav_side {
    width: 180px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0px;
    z-index: 2;
    background: #FFFFFF;
    box-shadow: 2px 0 10px 0 rgba(237, 238, 240, 0.50);
    padding-top: 52px;
}

.classDl {
    width: 138px;
    margin: 0 auto;
    margin-top: 30px
}

.classDl dt {
    width: 138px;
    height: 78px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
}

.classDl dt:hover {
    filter: alpha(Opacity=80);
    -moz-opacity: 0.8;
    opacity: 0.8;
}

.classDl dt span {
    display: inline-block;
    width: 100%;
    height: 24px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: 24px;
    font-size: 12px;
    color: #fff;
}

.classDl dt span .left_join {
    display: inline-block;
    width: 10px;
    height: 10px;
    vertical-align: middle;
    background: url(../image2/left_join.png) no-repeat;
    margin-left: 4px;
    margin-top: -2px;
}

.classDl dd {
    font-size: 16px;
    text-align: center;
    width: 100%;
    line-height: 21px;
    margin-top: 12px;
}

.nav-content {
    margin-top: 8px;
    padding-bottom: 30px;
}

.nav-content ul {
    border-bottom: 2px solid #F8F8F8;
    padding: 12px 0;
}

.nav-content ul:last-child {
    border-bottom: none
}

.nav-content ul li {
    width: 100%;
    height: 54px;
    position: relative;
}

.nav-content ul li a {
    display: block;
    height: 54px;
    line-height: 54px;
    font-size: 14px;
    color: #474C59;
}
.nav-content ul li a:hover {
    background: #F0F6FF
}

.nav-content ul li a {
    padding-left: 47px;
}


.nav-content ul li a i.hd {
    background-position: 0 0;
}

.nav-content ul li a i.ppt {
    background-position: -24px 0;
}

.nav-content ul li a i.zj {
    background-position: -48px 0;
}

.nav-content ul li a i.zl {
    background-position: -72px 0
}

.nav-content ul li a i.tz {
    background-position: -96px 0
}

.nav-content ul li a i.tl {
    background-position: -120px 0
}

.nav-content ul li a i.zy {
    background-position: -144px 0
}

.nav-content ul li a i.ks {
    background-position: -168px 0
}

.nav-content ul li a i.tj {
    background-position: -192px 0
}

.nav-content ul li a i.gl {
    background-position: -216px 0
}

.nav-content ul li.curNav a {
    color: #3B90FF;
    background: #F0F6FF
}

.nav-content ul li.curNav a i.hd {
    background-position: 0 -24px;
}

.nav-content ul li.curNav a i.ppt {
    background-position: -24px -24px;
}

.nav-content ul li.curNav a i.zj {
    background-position: -48px -24px;
}

.nav-content ul li.curNav a i.zl {
    background-position: -72px -24px
}

.nav-content ul li.curNav a i.tz {
    background-position: -96px -24px
}

.nav-content ul li.curNav a i.tl {
    background-position: -120px -24px
}

.nav-content ul li.curNav a i.zy {
    background-position: -144px -24px
}

.nav-content ul li.curNav a i.ks {
    background-position: -168px -24px
}

.nav-content ul li.curNav a i.tj {
    background-position: -192px -24px
}

.nav-content ul li.curNav a i.gl {
    background-position: -216px -24px
}

/******右侧开始*****/
.content {
    width: 100%;
    min-width: 804px;
    border-radius: 6px;
    margin: 0;
    background: #f2f4f7;
    position: relative;
    left: 0;
    top: 0px;
}

.content .main {
    min-width: 1040px;
    background: #FFFFFF;
    box-shadow: 0 2px 10px 0 rgba(237, 238, 240, 0.50);
    border-radius: 8px;
    position: relative
}

/***************分页****************/
.HetPage106 {
    width: 100%;
    height: 106px;
}

.pagePosition {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 40px 0;
    width: 100%;
    height: 26px;
}

#page {
    text-align: center;
    height: 26px;
}

#page li {
    display: inline-block;
    min-width: 24px;
    height: 24px;
    border-radius: 99px;
    text-align: center;
    line-height: 24px;
    color: #8A8B99;
    font-size: 14px;
    margin: 0 2px;
    cursor: pointer;
    overflow: hidden;
    padding: 0 8px;
    box-sizing: border-box;
}

#page li:hover {
    color: #3A8BFF;
}

#page li.xl-nextPage i {
    display: block;
    width: 9px;
    height: 14px;
    /* background: url(../images/page_next.png) no-repeat; */
    margin: 0 auto;
    vertical-align: middle;
    margin-top: 5px;
}
#page li.xl-prevPage i {
    display: block;
    width: 9px;
    height: 14px;
    /* background: url(../images/page_prve.png) no-repeat; */
    margin: 0 auto;
    vertical-align: middle;
    margin-top: 5px;
}

#page li.xl-active {
    background: linear-gradient(139.98deg, #6CC7FF -38.96%, #5A33FF 168.95%), #FFFFFF;
    color: #fff;
    box-shadow: 0 2px 6px 0 rgba(39, 125, 255, 0.30);
    color: #fff
}

#page li.xl-disabled i {
    display: block;
    width: 9px;
    height: 14px;
    /* background: url(../images/disable_page_prve.png) no-repeat; */
    vertical-align: middle;
    margin-top: 5px;
}
#page li.xl-nextPage.xl-disabled i {
    display: block;
    width: 9px;
    height: 14px;
    /* background: url(../images/disable_page_next.png) no-repeat; */
    vertical-align: middle;
    margin-top: 5px;
}
/*防止按钮分页点击按钮有蓝色底*/
#page li {
/*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
}
/*开关与文字注解*/

.mui-switch {
    width: 36px;
    height: 20px;
    position: relative;
    display: inline-block;
    background: #D0D5DB;
    border-radius: 14px;
    -webkit-appearance: none;
    user-select: none;
    outline: none;
    cursor: pointer
}

.mui-switch:before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    background: #fff;;
}

.mui-switch:checked {
    border-color: #3A8BFF;;
    box-shadow: #09f 0 0 0 .16rem inset;
    background-color: #09f;
}

.mui-switch:checked:before {
    left: 18px;
}

.mui-switch.mui-switch-animbg {
    transition: background-color ease 0.4s;
}

.mui-switch.mui-switch-animbg:before {
    transition: left 0.3s;
}

.mui-switch.mui-switch-animbg:checked {
    box-shadow: #dfdfdf 0 0 0 0 inset;
    background-color: #3A8BFF;
    transition: border-color 0.4s, background-color ease 0.4s;
}

.mui-switch.mui-switch-animbg:checked:before {
    transition: left 0.3s;
}


/*开关按钮2*/
.switch {
    display: inline-block;
    width: 38px;
    height: 20px;
    position: relative;
    display: inline-block;
    background: #D0D5DB;
    border-radius: 14px;
    -webkit-appearance: none;
    user-select: none;
    outline: none;
    position: relative;
}

.switch.Dgblue {
    background: #3A8BFF;
}

.switch i {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    background: #fff
}

.switch.Dgblue i {
    left: 20px;
    background: #fff;
}


/*8.14红点*/
.redRound {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #F33F34;
    position: absolute;
    top: 18px;
    right: 51px
}

.into_ItemBank {
    margin: 0 auto;
    width: 102px;
    height: 74px;
}

.into_ItemBank a {
    display: inline-block;
    width: 76px;
    height: 32px;
    border: 1px solid #94c1ff;;
    border-radius: 16px;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    color: #3a8bff;;
}

.into_ItemBank a:hover {
    background: #eaf0ff;
    border: 1px solid #93bfff;
}

.into_ItemBank a:active {
    background: #e4ecff;
    border: 1px solid #93bfff;
}
.into_tiku_Icon {
    font-family: "into_tiku_Icon" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
}

.into_tiku_Icon:before {
    content: "\e606";
}

/*公共二级导航*/
.subNav {
    width: 100%;
    height: 40px;
    background: #3A4357;
    box-shadow: 0 2px 17px 0 rgba(211, 211, 211, 0.50);
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #8A8B99;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000
}

.het40 {
    height: 40px;
    width: 100%
}

.sub-button a {
    display: inline-block;
    width: 94px;
    height: 40px;
    border-left: 1px solid #313A4C;
    font-size: 14px;
    color: #FFFFFF;
}

.sub-button a:hover {
    background: #48536B;
}

.sub-button a:active {
    background: #32394A;
    color: rgba(255, 255, 255, 0.7);
}

.sub-button a.completeBtn {
    background: #3A8BFF;
}

.sub-button a.completeBtn:hover {
    background: #5CA0FF;
}

.sub-button a.completeBtn:active {
    background: #2F70CC;
    color: rgba(255, 255, 255, 0.7);
}

.subBack {
    font-size: 14px;
    color: #878996;
    margin-left: 30px;
    position: absolute;
    left: 0;
    top: 0;
}

.subBack:hover {
    color: #8A8B99;
}

.subBack:hover .icon-BackIcon {
    color: #8A8B99;
}

.BackIcon {
    font-family: "BackIcon" !important;
    font-size: 17px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-right: 6px;
}

.BackIcon:before {
    content: "\e604";
}

/*右侧下载按钮*/
.DownloadaDiv {
    position: fixed;
    right: 20px;
    bottom: 94px;
    box-shadow: 0 1px 7px 0 rgba(198, 204, 217, 0.58);
    border-radius: 4px;
}

.Downloada {
    display: inline-block;
    overflow: hidden;
    width: 40px;
    height: 40px;
    background: #FFF;
    border-radius: 4px;
    overflow: hidden
}


.Downloada {
    font-family: "Downloada" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #3A8BFF;
    text-align: center;
    line-height: 40px;
}

.Downloada em {
    font-size: 13px;
    color: #FFFFFF;
    display: inline-block;
    min-width: 12px;
    height: 18px;
    background: #F33131;
    line-height: 18px;
    border-radius: 10px;
    font-style: normal;
    position: absolute;
    right: -7px;
    top: -9px;
    font-family: PingFangSC-Regular;
    padding: 0 3px;
}

.Downloada:before {
    content: "\e605";
}

.Downloada:hover {
    color: #fff;
    background: #3A8BFF;
}

.DownloadaHover {
    position: absolute;
    right: 50px;
    bottom: 0px;
    width: 82px;
    height: 40px;
    background: rgba(24, 30, 51, 0.80);
    border-radius: 4px;
    margin-left: -28px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity 0.3s 1s, visibility 0s 0.3s;
    transition: opacity 0.3s 1s, visibility 0s 0.3s;
    text-align: center;
    line-height: 40px;
    color: #fff;
}

.DownloadaHover i {
    display: block;
    width: 0px;
    height: 0px;
    border: solid rgba(24, 30, 51, 0.80) 4px;
    position: absolute;
    right: -8px;
    top: 16px;
    bottom: auto;
    border-color: rgba(24, 30, 51, 0.80) transparent transparent transparent;
    transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
}

.bntHoverTips i.active {
    display: block;
    width: 0px;
    height: 0px;
    border: solid rgba(24, 30, 51, 0.80) 4px;
    position: absolute;
    left: 50%;
    margin-left: -4px;
    bottom: 40px;
    top: auto;
    border-color: transparent transparent rgba(24, 30, 51, 0.80) transparent;
}

.DownloadaDiv:hover .DownloadaHover {
    display: block;
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity 0.3s 1s, visibility 0.3s 1s;
    transition: opacity 0.3s 1s, visibility 0.3s 1s;
}

/*苏婧需求*/
/*右侧固定按钮*/
.fixed-right-btm {
    position: fixed;
    right: 20px;
    bottom: 94px;
}

.fixed-right-btm .item {
    position: relative;
    margin-bottom: 10px;
    text-align: right;
}

.fixed-right-btm .item:last-child {
    margin-bottom: 0;
}

.fixed-right-btm .item .item-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #FFF;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 1px 7px 0 rgba(198, 204, 217, 0.58);
    border-radius: 4px;
}

.fixed-right-btm .item:hover .item-icon {
    background: #3A8BFF;
    color: #FFFFFF;
}

.fixed-right-btm .item:hover .item-hover, .fixed-right-btm .item:hover .item-hover-list {
    display: block;
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity 0.3s 1s, visibility 0.3s 1s;
    transition: opacity 0.3s 1s, visibility 0.3s 1s;
}

.fixed-right-btm .item .item-icon em {
    font-size: 13px;
    color: #FFFFFF;
    display: inline-block;
    min-width: 12px;
    height: 18px;
    background: #F33F34;
    line-height: 18px;
    border-radius: 10px;
    font-style: normal;
    position: absolute;
    right: -7px;
    top: -9px;
    font-family: PingFangSC-Regular;
    padding: 0 3px;
}

.fixed-right-btm .item .item-hover {
    position: absolute;
    right: 50px;
    bottom: 0px;
    width: 82px;
    height: 40px;
    background: rgba(24, 30, 51, 0.80);
    border-radius: 4px;
    margin-left: -28px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity 0.3s 1s, visibility 0s 0.3s;
    transition: opacity 0.3s 1s, visibility 0s 0.3s;
    transition: opacity 0.3s 1s, visibility 0s 0.3s;
    text-align: center;
    line-height: 40px;
    color: #fff;
}

.fixed-right-btm .item .item-hover i {
    display: block;
    width: 0px;
    height: 0px;
    border: solid rgba(24, 30, 51, 0.80) 4px;
    position: absolute;
    right: -8px;
    top: 16px;
    bottom: auto;
    border-color: rgba(24, 30, 51, 0.80) transparent transparent transparent;
    transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
}

.fixed-right-btm .item .item-hover i.active {
    display: block;
    width: 0px;
    height: 0px;
    border: solid rgba(24, 30, 51, 0.80) 4px;
    position: absolute;
    left: 50%;
    margin-left: -4px;
    bottom: 40px;
    top: auto;
    border-color: transparent transparent rgba(24, 30, 51, 0.80) transparent;
}

.fixed-right-btm .item-hover-list {
    display: none;
    position: absolute;
    right: 50px;
    top: 0px;
    padding: 6px 0;
    background: #FFFFFF;
    border-radius: 6px;
    box-shadow: 0px 2px 12px 0px rgba(175, 187, 204, 0.75);
    font-size: 14px;
    color: #474C59;
    width: 98px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity 0.3s 1s, visibility 0s 0.3s;
    transition: opacity 0.3s 1s, visibility 0s 0.3s;
    transition: opacity 0.3s 1s, visibility 0s 0.3s;
}

.fixed-right-btm .item-hover-list a {
    display: block;
    height: 40px;
    line-height: 40px;
    text-align: center;
}

.fixed-right-btm .item-hover-list a:hover {
    background: #F0F6FF;
    color: #3B90FF;
}

.fixed-right-btm .icon-suggest {
    display: inline-block;
    width: 16px;
    height: 16px;
    /* background: url("../stat2/images/common/icon_suggest.png") no-repeat center; */
    -webkit-background-size: cover;
    background-size: cover;
    margin-top: 12px;
}

.fixed-right-btm .item-suggest {
    width: 55px;
}

.fixed-right-btm .item-suggest:hover .icon-suggest {
    /* background: url("../stat2/images/common/icon_suggest_hover.png") no-repeat center; */
    -webkit-background-size: cover;
    background-size: cover;
}

/*空值页面*/
.nullMain {
    width: 100%;
    height: calc(100vh);
}

.null_wid700 {
    width: 700px;
    height: 250px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
}

.null_img {
    width: 237px;
    height: 192px;
}

.word_null {
    width: 355px;
    padding-top: 32px;
}

.popWord {
    padding: 0 30px;
}

.word_null p {
    color: #8A8B99;
    font-size: 16px;
    margin-bottom: 30px;
}

.mui-switch {
    width: 36px;
    height: 20px;
    position: relative;
    display: inline-block;
    background: #D0D5DB;
    border-radius: 14px;
    -webkit-appearance: none;
    user-select: none;
    outline: none;
    cursor: pointer
}

.mui-switch:before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    background: #fff;;
}

.mui-switch.checked {
    border-color: #3A8BFF;
    box-shadow: #09f 0 0 0 .16rem inset;
    background-color: #09f;
}

.mui-switch.checked:before {
    left: 18px;
}

.mui-switch.mui-switch-animbg {
    transition: background-color ease 0.4s;
}

.mui-switch.mui-switch-animbg:before {
    transition: left 0.3s;
}

.mui-switch.mui-switch-animbg.checked {
    box-shadow: #dfdfdf 0 0 0 0 inset;
    background-color: #3A8BFF;;
    transition: border-color 0.4s, background-color ease 0.4s;
}

.mui-switch.mui-switch-animbg.checked:before {
    transition: left 0.3s;
}

.mui-switch > input {
    opacity: 0;
}

.disable_btn {
    color: rgba(58, 139, 255, 0.3);
    cursor: default;
}

/*2021.1.26日新加公共样式*/

/*文字颜色*/
.color0 {
    color: #3A8BFF;
}

/*标准蓝*/
.color1 {
    color: #131B26;
}

/*一级文字*/
.color2 {
    color: #474C59;
}

/*二级文字*/
.color3 {
    color: #8A8B99;
}

/*三级文字*/
.color4 {
    color: #acb4bf;
}

/*四级文字*/
.color5 {
    color: #6B89B3;
}

/*可点文字*/
.color_green {
    color: #00B368;
}

/*绿色文字*/
.color_yellow {
    color: #F28C24;
}

/*黄色文字*/
.color_red {
    color: #F33131;
}

/*红色文字*/

/*需要hover的才加带_hover的class*/
.color1_hover:hover {
    color: #3A8BFF;
}

.color2_hover:hover {
    color: #131B26;
}

.color3_hover:hover {
    color: #474C59;
}

/*输入框border颜色*/
.border_color {
    border: 1px solid #D5D7D9
}

.border_color:hover {
    border: 1px solid #3A8BFF
}

.border_color:focus {
    border: 1px solid #3A8BFF
}

.border_color_red {
    border: 1px solid #f36161
}

.border_color_red:hover {
    border: 1px solid #f36161
}

.border_color_red:focus {
    border: 1px solid #f36161
}


/*弹框样式*/
.maskDiv .popHead .colorDeep {
    font-weight: 500;
}
.classRanking {
    font-size: 14px;
    color: #6B89B3;
    padding-top: 80px;
    margin-left: 20px;
}

.classRanking i {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin: -2px 4px 0 0;
}

   </style>