<template>
<div class="pptModel">
   <div class="px-20px pt-28px pb-8px">
      <span class="deep-color text-16px font-700">幻灯片模板</span>
   </div>
   <div class="template-list-wrap">

      <div class="ppt-list-item"
       v-for="(item,index) in this.pptList" 
       :key="index" 
       @click="pptItem(item)">
          <div class="img-box img-box-has-operates" 
            :style="'background-image: url(' + item.thumbnail + ');'">
          </div>
          <div class="list-item-content">
            <h4 class="list-item-title" :title="item.name">{{item.name}}</h4>
          </div>
      </div>

   </div>

</div>
</template>

<script>
import {reqPptTemplateList} from '@/api'
export default {
  data () {
    return {
      pptList:[]
    }
  },
  mounted() {
    this.loadPptList()
  },

  methods: {
    async loadPptList(){
      try {
        const res = await reqPptTemplateList()
        // console.log(res.data.data.data);
        this.pptList = res.data.data.data
      } catch (error) {
        console.log('reqPptTemplateList',error);
      }
    },
    pptItem(item){
        // console.log(key);
        this.$router.push({
          path:'/student/myCollect/ppt/pptDesc',
          query:{
            key:item.key,
            name:item.name,
            thumbnail:item.thumbnail
          }
        })
    }
  },

}
</script>

<style>
.pptModel {
      padding: 0 20px 30px;
}
.py-7px {
    padding-top: 7px;
    padding-bottom: 7px;
}
.ppt-list-item .img-box:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.32);
    opacity: 0;
    transition: all .3s ease;
    border-radius: 12px;
}
.ppt-list-item .list-item-content {
    padding: 16px 12px 12px;
}
.ppt-list-item .img-box {
    position: relative;
    height: 160px;
    border: 1px solid #e3deef;
    border-radius: 12px;
    background-size: 100% 100%;
    background-color: #fff;
}
.ppt-list-item {
    width: calc(25% - 32px);
}

.ppt-list-item {
    width: 240px;
    flex-shrink: 0;
    margin: 15px;
    cursor: pointer;
    border-radius: 12px;
    background: rgba(255,255,255,.72);
    overflow: hidden;
    transition: transform 0.05s;
}

.ppt-list-item:hover {
    transform: scale(1.02); /* 鼠标移入时放大图片 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
}
.template-list-wrap {
    display: flex;
    flex-wrap: wrap;
}
/* 模块title */
.pt-28px {
    padding-top: 28px;
}
.pb-8px {
    padding-bottom: 8px;
}
.px-20px {
    padding-left: 20px;
    padding-right: 20px;
}
.text-16px {
    font-size: 16px;
    line-height: 1;
}
.font-700, .font-bold {
    font-weight: 700;
}
</style>