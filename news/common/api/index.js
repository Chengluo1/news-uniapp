// import{get_label}from'./list.js'
// export default{
// 	get_label
// }
//批量导出文件 
const requireApi = require.context(
	//要查找的文件路径
	'.',
	//是否查找子目录
	false,
	//要匹配文件的正则
	/.js$/
)

let module = {}

requireApi.keys().forEach((key,index)=>{
	if(key === './index.js') return
	console.log('1'+key);
	console.log('2'+ requireApi(key));
	Object.assign(module,requireApi(key))
})
// console.log("module:"+module);
export default module