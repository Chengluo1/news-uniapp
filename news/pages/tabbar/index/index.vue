<template>
	<view class="home">
		<!-- 自定义组件 -->
		<navbar></navbar>
		<tab :list="tabList" @tab="tab"></tab>
		<list-scroll>
			<list-card v-for="item in 5"></list-card>
		</list-scroll>
	
	</view>
</template>

<script>
	// import navbar from '@/components/navbar/navbar.vue'
	export default {
		// components:{
		// 	navbar
		// }
		data() {
			return {
				title: 'Hello',
				tabList:[]
			}
		},
		onLoad() {
			this.getLabel();
		},
		methods: {
			getLabel(){
				//console.log("hrere????")
				console.log("here:"+this.$api);
				this.$api.get_label({
					name:'get_label'
				}).then((res)=>{
					console.log(res);
					const{data} = res;
					this.tabList = data
				})
				// uniCloud.callFunction({
				// 	name:'get_label',
				// }).then((res)=>{
				// 	const{result} = res
				// 	this.tabList = result.data
				// 	//console.log("here "+this.tabList)
				// })
			},
			tab(data,index){
				// console.log("test00");
				console.log(data,index);
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex:1;
		border:1px red solid;
		overflow: hidden;
	}
</style>
