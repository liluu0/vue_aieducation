<template>
  <div>
    <div class="btn_group" tabindex="-1" aria-hidden="true">
       <div class="search-box">
                <el-input placeholder="请输入内容" 
                v-model="input" 
                prefix-icon="el-icon-search"
                clearable> </el-input>
       </div> 
       <el-button type="primary" plain round> + 添加课程</el-button>
    </div>
    task
  </div>
</template>

<script>
export default {

}
</script>

<style>
.btn_group::after {
content: "";
display: block;
clear:both;
}
.search-box {
            /* background-color: var(--primary-color-light); */
            cursor: pointer;
            transition: all 0.3s ease;
            /* z-index: 2; */
            padding: 0 14px;
            float: left;
}
.el-input__inner {
    border-radius: 20px;
    border: 2px solid #dcdfe6;
}
.el-button--small, .el-button--small.is-round {
    padding: 0;
    width: 104px;
    height: 36px;
    float: right;
    margin-left: 30px;
}
</style>