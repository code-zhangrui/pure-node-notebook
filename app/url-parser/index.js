//处理客户端数据

module.exports = (request)=>{
	let { method,url,context } = request;
	method = method.toLowerCase();
	return Promise.resolve({
		then:(resolve,reject)=>{
			context.method = method;
			context.query = {};
			if(method == 'post'){
				let data = '';
		 		request.on('data',(chunk)=>{
			 		data += chunk;
			 	}).on('end',()=>{
			 		context.body = JSON.parse(data);
			 		resolve()
			 	});
			}else{
				resolve()
			}
		}
	})	 		
} 
