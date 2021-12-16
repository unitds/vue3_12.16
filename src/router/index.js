import {createRouter, createWebHashHistory, createWebHistory}  from "vue-router"
//引入组件
import Button from '../components/Button'
import Home from '../components/Home.vue'
import readcsv from '../components/readcsv.vue'
//创建并暴露一个路由器
const routes = [
		{
			path:'/',
			component:Home,
			children:[
				{
					path:'readcsv',
					component:readcsv,
					children:[
						{
							path:'Button',
						component:Button,
						}
					]
					
				},
			]
		},
		
	];

const router = createRouter({
  // 4. 采用hash 模式
  history: createWebHashHistory(),
  // 采用 history 模式
  // history: createWebHistory(),
  routes, // short for `routes: routes`
});
export default router