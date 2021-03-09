<template>
	<view class="list">
		<swiper class="home-swiper" :current="activeIndex" @change="change">
			<swiper-item v-for="(item,index) in tab" :key="index" class="swiper-item">
				<list-item :list="listCatchData[index]" :load="load[index]" @loadMore="loadMore"></list-item>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				listCatchData:{},
				load:{},
				pageSize:5
			};
		},
		props:{
			tab:{
				type:Array,
				default(){
					return []
				}
			},
			activeIndex:{
				type:Number,
				default:0
			}
		},
		created(){
			//云函数，加载时tab可能是空数组
			// this.getList(0);
		},
		watch:{
			tab(newValue){//tab改变的时候再调用getlist
				if(newValue.length === 0)
					return
				this.listCatchData = {}
				this.load = {}
				this.getList(this.activeIndex)
			}
		},
		methods:{
			change(e){
				console.log(e);
				const {current} = e.detail;
				this.$emit('change',current);
				//TODO 数据不存在或者长度为0的时候才请求数据
				if(!this.listCatchData[current] || this.listCatchData.length === 0)
				{
					this.getList(current);
				}				
			},
			getList(current){
				if(!this.load[this.activeIndex]){
					this.load[this.activeIndex] ={
						page:1,
						loading:'loading'
					}
				}
				console.log("page:"+this.load[this.activeIndex].page);
				this.$api.get_list({
					name:this.tab[current].name,
					page:this.load[this.activeIndex].page,
					pageSize:this.pageSize
				})
				.then(res=>{
					console.log(res);
					const {data} = res;
					if(data.length === 0){
						let oldLoad = {}
						oldLoad.loading = 'noMore'
						oldLoad.page = this.load[current].page
						this.$set(this.load, current, oldLoad)
						// 强制渲染页面
						this.$forceUpdate()
						return
					}
					let oldData = this.listCatchData[current] || [];
					oldData.push(...data);
					this.$set(this.listCatchData,current,oldData);
					//this.listCatchData = data;
					// console.log("this.tab[current].name"+this.tab[current].name);
					//console.log("data:"+data);
					// console.log("data:"+data);
				})
			},
			loadMore(){
				if(this.load[this.activeIndex].loading==='noMore')
					return;
				
				this.load[this.activeIndex].page++;
				this.getList(this.activeIndex);
				
			}
		}
	}
</script>

<style lang="scss">
	.list{
		height: 100%;
		width: 100%;
		display: flex;
		.home-swiper{
			display: flex;
			height: 100%;
			width: 100%;
			// border: 1px red solid;
		}
	
	}
	
	
</style>
