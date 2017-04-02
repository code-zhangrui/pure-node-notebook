//主要入口
const fs = require('fs');
const path = require('path');
const staticServer = require('./staic-server');
const apiServer = require('./api');
const urlParser = require('./url-parser');
class App {
	constructor(){
	}
	
	initServer(){
		return (request,response)=>{
			let { url,method } = request; 
			request.context = {
				body:'',
				query:{},
				method:'get'
			};
			let context = {
				req:request,
				reqCtx:{
					body:'',//post请求的数据
					query:{},//处理客户端get请求
				},
				res:response,
				resCtx:{
					headers:{},//response的返回报文
					body:'',//返回给前端的内容区
				}
			};

			urlParser(context).then(()=>{
				return apiServer(context)
			}).then(val=>{
				if(!val){
					return staticServer(context)
				}else{
					return val
				}

			}).then(val=>{
				let base ={'X-powered-by':'Node.js'};
				let body = '';
				if(val instanceof Buffer){
					body = val;
				}else{
					body = JSON.stringify(val);
					let fianlHeader = Object.assign(base,{
						'Content-Type':'application/json'
					});
					response.writeHead(200,'resolve ok',fianlHeader)
				}
				response.end(body)	
			})
		 }


	}
}
module.exports =  App