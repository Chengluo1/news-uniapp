<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll_box">
				<view v-for="(item,index) in list " :class="{active:activeIndex===index}" :key=index class="tab-scroll_item" @click="clickTab(item,index)">
					{{item.name}} 
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			tabIndex:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		//监听 data props值的改变
		watch:{
			tabIndex(newVal){
				this.activeIndex=newVal
			}
		},
		data() {
			return {
				activeIndex:0
			}
		},
		methods: {
			 clickTab(item,index){
				 // console.log(item,index);
				 this.activeIndex=index;
				 //传给调用组建的页面
				 this.$emit('tab',{
					 data:item,
					 index:index
				 })
			 }
		}
	}
</script>

<style lang="scss">
	.tab{
		display: flex;
		background-color: #FFFFFF;
		width: 100%;
		border-bottom: 1px #f5f5f5 solid;
		box-sizing: border-box;
		//border: 1px red solid;
		.tab-scroll{
			flex:1;
			overflow: hidden;
			box-sizing: border-box;
			.tab-scroll_box{
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			height: 45px;
				.tab-scroll_item{
					flex-shrink: 0;
					padding: 0 10px;
					color: #333;
					font-size: 14px;
					&.active{
						color: $mk-base-color;
					}
				}

			}
		}
		
		.tab-icons{
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
			&::before{
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left:0;
				width: 1px;
				background-color: #ddd;
			}
		}
	}

	
</style>
