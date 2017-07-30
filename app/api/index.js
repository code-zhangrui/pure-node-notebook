//抓 get 方法

module.exports=(ctx)=>{
 	 let { url,method } = ctx.req;
	 let { resCtx,reqCtx } = ctx;
	 let { res }=ctx;

 	let apiMap={
		'/list.action':['鼓励','鼓劲','鼓气'],
		'/user.action':['张睿','男人','中国人']
 	};
	 method = method.toLowerCase();
     return Promise.resolve({
 		then:(resolve,reject)=>{
		 	// 因为我们对method没有过滤
		 	if(url.match('action')){
		 		 if(method == 'get'){ //localhost:7000?a=1&b=2
					resCtx.body = JSON.stringify(apiMap[url])
				 }else{
					//post 方法是有数据的，因此要拿到数据
				 	let { body } = reqCtx;
					 //处理post Browser post  ==socket==  Server
					 //原路返回
					resCtx.body = JSON.stringify(body)
				 };
				 resCtx.headers = Object.assign(resCtx.headers,{
				 		"Content-Type":"application/json"
				 })
		 	}
		 	resolve()
		 }})
   }