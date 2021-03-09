'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const{
		user_id,
		name,
		page,
		pageSize
	} = event
	let skipNum = (page-1)*pageSize;
	
	const userinfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userinfo.data[0].article_likes_ids
	if(name === '全部'){
		var list = await db.collection('article')
		.aggregate()
		.skip(skipNum)
		.limit(pageSize)
		.project({
			content:false
		})
		.addFields({
			is_like:$.in(['$_id',article_likes_ids])
		})
		.end();
	}else{
		var list = await db.collection('article')
		.aggregate()
		.match( {
				classify:name
			})
		.skip(skipNum)
		.limit(pageSize)
		.project({
			content:false
		})
		.addFields({
			is_like:$.in(['$_id',article_likes_ids])
		})
		.end();	
	}
	//聚合
	
	
	// const list = await db.collection('article').field({
	// 	//true只返回这个字段，false不返回这个字段
	// 	content:false
	// }).get()
	
	//返回数据给客户端
	console.log("over");
	return {
		code:200,
		msg:'数据请求成功',
		data:list.data
	}
};
