<template >
	<!-- <input  type="file" @change="getFile" /> -->
<!-- 数据载入 -->
<h1>Lot</h1>
  <el-table :data="tableData" 
	highlight-current-row 
	
	border height="200" style="width: 60%">
<!-- 	增加索引 -->
	<el-table-column type="index" width="50" />
<!-- 表头载入 -->
	<!-- ===================================================================== -->
	<el-table-column label="Operations" fixed = "left" width="100" >
	      <template #default="scope">
	        <el-button size="mini" @click="handleEdit(scope.$index+1)">详情</el-button>
	      </template>
	    </el-table-column>
		<!-- =================================================================== -->
	<el-table-column v-for="(item,index) in rowCells" :key = "item+index" :prop="item" :label="item" width="200" >  </el-table-column>

	</el-table>
	<router-view/>
</template>

<script>
	import {reactive,onBeforeMount,ref} from 'vue'
	import axios from 'axios'
export default {
	name: 'readcsv',	
	// props: ['file'],
	methods:{
		handleEdit(index1) {
			console.log(index1)
			this.$router.push(
			{path:"/readcsv/Button",
			query:{num:index1}
			}
			)
		},
			// handleCurrentChange(e){
			// 	console.log(e)
			// 	this.$router.push(
			// 	{path:"/Button"}
			// 	)
			// }
	},
	setup(){
			var files = [];
			let allRows = ref([]);
			let rowCells = ref([]);
			let tableData1 = [];
			onBeforeMount(async()=>{
				const res =await axios.get('lx.csv');
				allRows.value = res.data.split(/\r?\n|\r/);
				rowCells.value = allRows.value[0].split(',');
					
				//===========================================
				
				let length = rowCells.value.length;
				for (let index0 = 1; index0 < allRows.value.length; index0++){    //换行读取
				let nextcell = allRows.value[index0].split(',');
				for (let index = 0; index < length; index++){                     //读每行元素
					addname(rowCells.value[index],nextcell[index])
				}
				tableData.push(tableData1);                             //对象推入
				tableData1 = [];                                        //对象清空
				}
			});
		const tableData = reactive([ ])
			function addname(name,value){
				tableData1[name] = value
			}
		return {tableData,rowCells,}
	}
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> -->
