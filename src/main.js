import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
//按需引入
import 'element3/lib/theme-chalk/button.css'
import {  ElTabs,
    ElTabPane,
    ElButton,
    ElInput,
    ElSelect,
    ElOption,
    setupGlobalOptions,
    ElImage,
    ElForm,
    ElFormItem,
    ElPopover,
    ElTable,
    ElTableColumn,
    ElPageHeader,
    ElDialog} from 'element3'

    import * as echarts from 'echarts';

import * as API from "@/api"


const app = createApp(App);
app.use(router);
app.use(setupGlobalOptions({ size: 'small', zIndex: 3000 }));
app.use(ElTabs);
app.use(ElTabPane).use(ElButton).use(ElInput)
app.use(ElSelect).use(ElOption).use(ElImage).use(ElForm).use(ElFormItem).use(ElPopover)
app.use(ElTable).use(ElTableColumn).use(ElPageHeader).use(ElDialog)
// 添加全局属性
app.config.globalProperties.$API = API;

app.mount('#app');
