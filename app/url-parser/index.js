//处理客户端数据

module.exports = (ctx)=>{
	let { method,url,context } = ctx.req;
	let { reqCtx } = ctx;

	method = method.toLowerCase();
	return Promise.resolve({
		then:(resolve,reject)=>{

			if(method == 'post'){
				let data = '';
		 		request.on('data',(chunk)=>{
			 		data += chunk;
			 	}).on('end',()=>{
			 		reqCtx.body = JSON.parse(data);
			 		resolve()
			 	});
			}else{
				resolve()
			}
		}
	})	 		
} 
