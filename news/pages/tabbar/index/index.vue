<template>
	<view class="home">
		<!-- 自定义组件 -->
		<navbar></navbar>
		<tab :list="tabList" :tabIndex="tabIndex" @tab="tab" ></tab>
		<list :tab="tabList" :activeIndex="activeIndex"  @change="change"></list>
	</view>
</template>

<script>
	// import list from '../../../components/list/list.vue'
	// import navbar from '@/components/navbar/navbar.vue'
	export default {
		// components:{
		// 	navbar
		// }
		data() {
			return {
				title: 'Hello',
				tabList:[],
				tabIndex:0,
				activeIndex:0
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
					data.unshift({
						name:'全部'
					})
					this.tabList = data;
					console.log("here!!!"+JSON.stringify(this.tabList));
					
					
				})
				// uniCloud.callFunction({
				// 	name:'get_label',
				// }).then((res)=>{
				// 	const{result} = res
				// 	this.tabList = result.data
				// 	//console.log("here "+this.tabList)
				// })
			},
			tab({data,index}){
				// console.log("test00");
				console.log(data,index);
				this.activeIndex = index;
				this.tabIndex=index;
				console.log("当前activeIndex值",this.activeIndex)
			},
			change(current){
				// console.log("当前swiper的值："+current);
				this.tabIndex=current;
				this.activeIndex = current;
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
		// border:1px red solid;
		overflow: hidden;
	}
</style>
