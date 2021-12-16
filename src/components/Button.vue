<template>
	<!-- <img :src="require('@/assets/'+$route.query.num+'.png')"> -->
	<h1>路由组件展示，取出第{{$route.query.num}}行lot进行展示</h1>
	<div class="about" id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
	export default{
		name:'Button',
		mounted() {
		    // 基于准备好的dom，初始化echarts实例
		    var myChart = this.$echarts.init(document.getElementById("main"));
		    // 绘制图表
		    myChart.setOption({
		      title: {
		        text: "ECharts 入门示例",
		      },
		      tooltip: {},
		      xAxis: {
		        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
		      },
		      yAxis: {},
		      series: [
		        {
		          name: "销量",
		          type: "bar",
		          data: [5, 20, 36, 10, 10, 20],
		        },
		      ],
		    });
		},
	} 
</script>

<style >

</style>
