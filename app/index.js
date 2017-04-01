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

			urlParser(request).then(()=>{
				return apiServer(request)
			}).then(val=>{
				if(!val){
					return staticServer(request)
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