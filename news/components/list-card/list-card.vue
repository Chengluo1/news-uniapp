<template>
	<view>
		<!-- 基础卡片 -->
	<!-- 	<view class="listcard">
			<view class="listcard-image">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text>
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-lable">
						<view class="listcard-content_des-lable-item">前端</view>
					</view>
					<view class="listcard-content_des-browse">浏览人数:120</view>
				</view>
			</view>
		</view> -->
		<!-- 多图模式 -->
		<!-- <view class="listcard mode-column">
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text>
				</view>
				<view class="listcard-image">
					<view v-for="item in 3 " class="listcard-image_item">
						<image src="../../static/logo.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-lable">
						<view class="listcard-content_des-lable-item">前端</view>
					</view>
					<view class="listcard-content_des-browse">浏览人数:120</view>
				</view>
			</view>
		</view> -->
		<!-- 大图模式 -->
		<view class="listcard mode-column">
			<view class="listcard-content">
				<view class="listcard-image">
					<view  class="listcard-image_item">
						<image src="../../static/logo.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-content_title">
					<text>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text>
				</view>

				<view class="listcard-content_des">
					<view class="listcard-content_des-lable">
						<view class="listcard-content_des-lable-item">前端</view>
					</view>
					<view class="listcard-content_des-browse">浏览人数:120</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
	
</script>

<style lang="scss">
	.listcard{
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow:0 0 5px 1px rgba($color: #000000, $alpha: 0.1) ;
		box-sizing: border-box;
		.listcard-image{
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			overflow: hidden;
			border-radius: 5px;
			image{
				height: 100%;
				width: 100%;
			}
		}
		.listcard-content{
			display: flex;
			justify-content:space-between ;
			flex-direction: column;
			padding-left: 10px;
			width: 100%;
			align-content:space-between ;
			.listcard-content_title{
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;
				text{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
					
				}
			}
			.listcard-content_des{
				display: flex;
				justify-content:space-between ;
				font-size: 12px;
				.listcard-content_des-lable{
					display: flex;
					.listcard-content_des-lable-item{
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						border: 1px $mk-base-color solid;
						color:$mk-base-color ;
					}
					
				}
				.listcard-content_des-browse{
					color: #999;
					line-height: 1.5;
				}
			}
		
		}
		&.mode-column{
			.listcard-content{
				width: 100%;
				padding-left:0 ;
			}
			.listcard-image{
				margin-top: 10px;
				display: flex;
				width: 100%;
				height: 70px;
				.listcard-image_item{
					
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;
					&:first-child{
						margin-left:0 ;
					}
					image{
						width: 100%;
						height:100%;
					}
				}
			}
			.listcard-content_des{
				margin-top: 10px;
			}
		}
	}
</style>
