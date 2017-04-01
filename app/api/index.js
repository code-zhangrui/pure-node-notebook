module.exports=(request)=>{
 	let { url,method,context } = request;

 	let apiMap={
		'/list.action':['鼓励','鼓劲','鼓气'],
		'/user.action':['张睿','男人','中国人']
 	};
 	method = method.toLowerCase();

 	if(method == 'get'){    //localhost:7000?a=1&b=2
 		return Promise.resolve(apiMap[url])


 	 }else{
 		let {body} = context;               //处理post B post  ==socket==  S
 		return Promise.resolve(body)
 	 }
   }