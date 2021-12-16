<template >
	<el-upload
	    ref="upload"
	    class="upload-demo"
	    action="https://jsonplaceholder.typicode.com/posts/"
		:before-remove="beforeRemove"
		multiple
		:limit="3"
		:on-exceed="handleExceed"
		:file-list="fileList"
	    :auto-upload="false"
	>
<!-- 	<el-container>
		<el-header> -->
	    <template #trigger>
	      <el-button size="small" type="primary" >select file</el-button>
	    </template>
	    <el-button
	      style="margin-left: 10px"
	      size="small"
	      type="success"
	      @click="submitUpload"
	      >upload to server</el-button
	    >
	    <template #tip>
	      <div class="el-upload__tip">
	        jpg/png files with a size less than 500kb
	      </div>
	    </template>
	  </el-upload>
<!-- 	  </el-header>
	</el-container> -->
	  <router-link to="/readcsv">read</router-link>
	  <router-view></router-view>
</template>

<script>
	import readcsv from './readcsv.vue'
	export default {
		name:'Home',
		data() {
			return {
				fileList:[]
			}
		},
	methods: {
	    submitUpload() {
			this.$refs.upload.submit()
	    },
		beforeRemove(file, fileList) {
			return this.$confirm(`Cancel the transfert of ${file.name} ?`)
		},
		handleExceed(files, fileList) {
			this.$message.warning(
			`The limit is 3, you selected ${
			files.length
			} files this time, add up to ${files.length + fileList.length} totally`
		)
		    },
	},
	components: { readcsv},
	}
	
</script>

<style>
</style>
