
// 引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/lib/theme-chalk/index.css'
// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//引入图表
import * as echarts  from 'echarts'
//创建实例
import { createApp } from 'vue'
import App from './App.vue'
// 引入vuerouter
import router from './router/index.js'

const appp = createApp(App)
appp.config.globalProperties.$echarts = echarts
appp.use(router)
appp.use(VueAxios, axios);
appp.use(ElementPlus);
appp.mount('#app')