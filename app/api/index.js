module.exports=(ctx)=>{
 	 let {url,method}=ctx.req;
	 let { resCtx } = ctx;

 	let apiMap={
		'/list.action':['鼓励','鼓劲','鼓气'],
		'/user.action':['张睿','男人','中国人']
 	};
	 method = method.toLowerCase();
	 return Promise.resolve({
		 then:(resolve,reject)=>{
        if(method == 'get'){    //localhost:7000?a=1&b=2
 		resCtx.body=apiMap[url]
		 
 	 }else{
 		let {body} = reqCtx;               //处理post B post  ==socket==  S
 		resCtx.body=body
 	 }
	  resolve()
	}})
   }