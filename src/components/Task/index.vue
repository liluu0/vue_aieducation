<template>
    <div>
        <div class="filter">
                            <span class="title">筛选</span>
                            <span class="ipt-radio circl-choosed">
                                <input name="group-radio" type="radio" @click="changeStatus(this);" checked="checked" data="0" tabindex="-1"><i class="icon-radio"></i>
                            </span>
                            <div class=" fs12 color181E33 lineheight20 inlineBlock">全部</div>
                            
                            <span class="ipt-radio circl-choosed">
                                <input name="group-radio" type="radio" @click="changeStatus(this);" data="2" tabindex="-1"><i class="icon-radio"></i>
                            </span>
                            <div class="fs12 color181E33 lineheight20 inlineBlock">已完成</div>
                            
                            <span class="ipt-radio circl-choosed">
                                <input name="group-radio" type="radio" @click="changeStatus(this);" data="1" tabindex="-1"><i class="icon-radio"></i>
                            </span>
                            <div class="fs12 color181E33 lineheight20 inlineBlock">未完成</div>
        </div>

        <div class="bottomList" tabindex="0" aria-label="作业列表">
                    <ul>
                     <li onclick="goTask(this);" data="https://mooc1.chaoxing.com/mooc-ans/mooc2/work/task?courseId=92244744&amp;classId=92709281&amp;cpi=283002507&amp;workId=34615621&amp;answerId=52501387&amp;enc=e22c953f1a89f12c0d4e54ad7f6f39dd" onkeydown="if(event.keyCode == 13){goTask(this);}" tabindex="0" aria-label="作业03 Vue开发环境配置、插值使用 ; 待批阅" role="link">
                            <div class="tag icon-zy-g"></div>
                            <div class="right-content">
                                <p class="overHidden2 fl">作业03 Vue开发环境配置、插值使用</p>
                                <div class="clear"></div>
                                <p class="status fl">待批阅</p>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li onclick="goTask(this);" data="https://mooc1.chaoxing.com/mooc-ans/mooc2/work/task?courseId=92244744&amp;classId=92709281&amp;cpi=283002507&amp;workId=33964882&amp;answerId=52386593&amp;enc=fbdda93815b31406dc59fb0a545e61fa" onkeydown="if(event.keyCode == 13){goTask(this);}" tabindex="0" aria-label="实验三 CSS技术 ; 已完成" role="link">
                            <div class="tag icon-zy-g"></div>
                            <div class="right-content">
                                <p class="overHidden2 fl">实验三 CSS技术</p>
                                                                <div class="clear"></div>
                                <p class="status fl">已完成</p>
                            <div class="clear"></div>
                            </div>
                        </li>
                        <li onclick="goTask(this);" data="https://mooc1.chaoxing.com/mooc-ans/mooc2/work/task?courseId=92244744&amp;classId=92709281&amp;cpi=283002507&amp;workId=33679085&amp;answerId=52351432&amp;enc=cc43bdb2747a4a8e9b9bf564e0537d76" onkeydown="if(event.keyCode == 13){goTask(this);}" tabindex="0" aria-label="实验二 HTML技术 ; 已完成" role="link">
                            <div class="tag icon-zy-g"></div>
                            <div class="right-content">
                                <p class="overHidden2 fl">实验二 HTML技术</p>
                                                                <div class="clear"></div>
                                <p class="status fl">已完成</p>
                              <div class="clear"></div>
                             </div>
                        </li>
                    </ul>
                </div>

    </div>

</template>

<script>
export default {
    methods: {
        changeStatus(thisa){
            console.log(thisa);

        }
    },

}
</script>

<style>
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
    /* color: #181E33; */
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