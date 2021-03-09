<template>
	<list-scroll @loadMore='loadMore'>
		<list-card :item="item" v-for="item in list" :key="item._id"></list-card>
		<uni-load-more v-if="list.length>4||list.length===0"iconType="snow" :status="load.loading"></uni-load-more>
		<uni-load-more v-if="list.length<4 & list.length!==0"iconType="snow" status="noMore"></uni-load-more>
	</list-scroll>
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
			load:{
				type: Object,
				default(){
					return{
						loading:"loading"
					}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			loadMore(){
				this.$emit('loadMore');
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll{
		height: 100%;
	}
</style>
