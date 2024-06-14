<template>
    <div class="task">
        <div class="filter">
                            <span class="title">筛选</span>
                            <span class="ipt-radio circl-choosed">
                                <input name="group-radio" type="radio" @click="changeStatus(0);" checked="checked" tabindex="-1"><i class="icon-radio"></i>
                            </span>
                            <div class=" fs12 color181E33 lineheight20 inlineBlock">全部</div>
                            
                            <span class="ipt-radio circl-choosed">
                                <input name="group-radio" type="radio" @click="changeStatus(1);" tabindex="-1"><i class="icon-radio"></i>
                            </span>
                            <div class="fs12 color181E33 lineheight20 inlineBlock">已完成</div>
                            
                            <span class="ipt-radio circl-choosed">
                                <input name="group-radio" type="radio" @click="changeStatus(2);" tabindex="-1"><i class="icon-radio"></i>
                            </span>
                            <div class="fs12 color181E33 lineheight20 inlineBlock">未完成</div>
        </div>

        <div v-if="!Object.keys(taskAll).length" class="bottomList">
            <div class="not-data color181E33">
                暂无数据
            </div>
       </div>
        <div v-else class="bottomList" tabindex="0" aria-label="作业列表">
                    <ul>
                        <li v-for="value in taskAll" :key="value.taskId" @click="goTask(value.taskId)" 
                        tabindex="0" 
                        :aria-label="value.taskName" 
                        role="link">
                                <div class="tag icon-zy-g"></div>
                                <div class="right-content">
                                    <p class="overHidden2 fl">{{value.taskName}}</p>
                                    <div class="clear"></div>
                                    <p class="status fl">
                                        {{value.status==0?'待批阅':value.status==1?'已批阅':'未完成'}}
                                    </p>
                                    <div class="clear"></div>
                                </div>
                        </li>
                    </ul>
        </div>

    </div>

</template>

<script>
export default {
  props: ['taskAll'],
    methods: {
        changeStatus(changeNum){
            console.log(changeNum);
        },
        goTask(taskId){
            console.log(taskId);
            
            // 构建跳转的完整路径
            let url = '/classTaskDetail/' + taskId;

            // 在新窗口中打开链接
            window.open(url, '_blank');
        }
    },

}
</script>

<style scoped>
.task .bottomList{
    position: relative;
    min-height: 600px;
}
.bottomList .not-data{
    width: 100%;
    font-size: 20px;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.filter {
    padding: 20px 30px;
}
.filter .title {
    display: inline-block;
    /* float: left; */
    font-size: 12px;
    color: #A8A8B3;
}
.filter .circl-choosed {
    margin-left: 20px;
    margin-right: 6px;
}
.ipt-radio {
    display: inline-block;
    width: 16px;
    height: 16px;
    position: relative;
}
.lineheight20 {
    line-height: 20px;
}
.color181E33 {
    /* color: #181E33; */
    color: var(--text-color);
}
.inlineBlock {
    display: inline-block;
}

.fs12 {
    font-size: 12px;
}

/* 作业详情样式 */
ul, ol, li {
    list-style-type: none;
}
.bottomList ul li {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    transition: transform 0.3s; /* 添加过渡效果 */
    height: 70px;
}
.bottomList ul li:hover{
    background-color: var(--body-color);
}
.bottomList ul li .tag {
    position: absolute;
    border-radius: 8px;
    top: -5px;
    left: 10px;
}

.icon-zy-g {
    width: 84px;
    height: 84px;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
    background: url(@/assets/homeWork.png);
}
.bottomList ul li .right-content {
    margin-left: 62px;
    padding: 14px 20% 14px 0;
    min-height: 40px;
    border-bottom: 1px solid #F2F2F2;
}
.bottomList ul li .right-content p {
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
    max-width: 92%;
}
.bottomList ul li .right-content p.status {
    font-size: 14px;
    font-weight: 400;
    color: #A8A8B3;
    line-height: 17px;
    margin-top: 4px;
}
.overHidden2 {
    overflow: hidden;
    color: var(--text-color);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.fl {
    float: left;
}
.clear {
    clear: both;
}

.status::after {
content: "";
display: block;
clear:both;
}
</style>