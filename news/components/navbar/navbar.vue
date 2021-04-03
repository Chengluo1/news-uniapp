<template>
	<view class="navbar">
		<view class="navbar-fix">
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight+'px'}"></view>
			<!-- 导航栏内容 -->
			<view @click.stop="open"  class="navbar-content" :class="{search:isSearch}" :style="{height:navBarHeight+'px',width:windowWidth+'px'}" >
				<view v-if="isSearch" class="navbar-content__search-icons">
					<uni-icons type="back" size="22" color="#FFF" @click="back"></uni-icons>
				</view>
				<!-- 非搜索页 -->
				<view v-if="!isSearch" class="navbar-search">
					<view class="navbar-search_icon">
						<text class="iconfont icon-sousuo"></text>
					</view>
					<view class="navbar-search_text">uni-app、vue</view>
				</view>
				<view v-else class="navbar-search">
					<input class="navbar-search_text" type="text" v-model="val" placeholder="请输入您要搜索的内容" @input="inputChange"/>
				</view>
			</view>
		</view>
		<view :style="{height: h11+'px'}"></view>
	</view>
</template>

<script>
	import '../../common/css/icons.css';
	export default {
		props:{
			isSearch:{
				type:Boolean,
				defaule:false
			},
			value:{
				type:[String,Number],
				default:''
			}
		},
		watch:{
			value(newVal){
				this.val = newVal
			}
		},
		data() {
			return {
				statusBarHeight:20,
				navBarHeight:55,
				h11:45,
				windowWidth:375,
				val:''
			};
		},
		created() {
			//获取手机系统信息
			const info = uni.getSystemInfoSync();
			//设置状态栏高度
			this.statusBarHeight = info.statusBarHeight;
			this.windowWidth = info.windowWidth;
			console.log(info);
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			//获取胶囊位置
			const menuButtomInofo = uni.getMenuButtonBoundingClientRect();
			console.log(menuButtomInofo);
			//导航栏高度
			this.navBarHeight = (menuButtomInofo.bottom-info.statusBarHeight)+(menuButtomInofo.top-info.statusBarHeight);
			console.log(this.navBarHeight);
			this.windowWidth = menuButtomInofo.left;
			console.log("windowWidth:"+this.windowWidth)
			//#endif
			this.h11=this.navBarHeight+this.statusBarHeight;
		},
		methods:{
			open(){
				if(this.isSearch){
					return;
				}
				uni.navigateTo({
					url:"/pages/home-search/home-search"
				})
			},
			inputChange(e){
				const {value}=e.detail;
				this.$emit('input',value);

			},
			back(){
				uni.switchTab({
					url:'/pages/tabbar/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.navbar{
		.navbar-fix{
			position: fixed;
			top: 0;
			z-index: 99;
			width: 100%;
			//height: 45px;
			background-color: $mk-base-color;
			
			.navbar-content{
				display: flex;
				align-items: center;
				justify-content: center;
				box-sizing: border-box;
				padding: 0 15px;
				// height: 45px;
				
				.navbar-search{
					display: flex;
					align-items: center;
					padding: 0 10px;
					height: 30px;
					width: 100%;
					border-radius: 30px;
					background-color: #fff;
					
					.navbar-search_icon{
						// width: 10px;
						// height: 10px;
						// border: 1px red solid;
						margin-right:10px ;
					}
					
					.navbar-search_text{
						font-size: 14px;
						color: #999;
						width: 100%;
					}
				}
				&.search{
					padding-left: 0;
					
					.navbar-content__search-icons {
						margin-left: 10px;
						margin-right: 10px;
					}
					
					.navbar-search {
						border-radius: 5px;
					}
				}
			}
		}
		
	}
	
</style>
