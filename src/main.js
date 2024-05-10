import { createApp } from 'vue'
import App from './App.vue'

import router from './router';

// import * as API from "@/api"

const app = createApp(App);
app.use(router);
// 添加全局属性
// app.config.globalProperties.$API = API;

app.mount('#app');
