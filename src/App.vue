<template>
	<router-link to="/">home</router-link><br />
	
<!-- 	<Home />
	<readcsv /> -->
	<router-view></router-view>
</template>

<script>
import readcsv from './components/readcsv.vue'
import Home from './components/Home.vue'
// import axios from 'axios'
	export default {
		name: 'App',
		components: { readcsv ,Home},
		// methods:{
		// 	show(){
		// 		this.$router.push(
		// 		{path:"/Button"}
		// 		)
		// 	}
		// }
		}
</script>

<style>

</style>
