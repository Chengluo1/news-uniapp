<template>
	<view>
		<view class="icon" @click.stop="likeTap">
			<uni-icons size="20" color="#f07373" :type="like?'heart-filled':'heart'"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				Type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				like:false
			};
		},
		created() {
			this.like = this.item.is_like
		},
		watch:{
			item(newVal){
				this.like = this.item.is_like
			}
		},
		methods:{
			likeTap(){
				this.like=!this.like;
				this.setupdateLikes();
				console.log("收藏成功");
			},
			setupdateLikes(){
				uni.showLoading();
				this.$api.update_like({
					user_id:"603208b0d6547d0001924ce6",
					article_id:this.item._id
				}).then(res =>{
					uni.hideLoading();
					uni.showToast({
						title:this.like?'收藏成功':'取消收藏',
						icon:'none'
					})
					console.log(res);
					
				}).catch(()=>{
					uni.hideLoading()
				})
			}
		}
		
	}
</script>

<style>
	.icon{
			position: absolute;
			height: 30px;
			width: 30px;
			right: 0px;
			top: 0px;
			// border: 1px solid red;
	}
</style>
