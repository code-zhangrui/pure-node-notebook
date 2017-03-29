const fs = require('fs');
const path = require('path')
const staticServer = require('./static-server')
const apiServer=require('./api');
class App {
    constructor(){
    }
    initServer(){
        return (request,response) =>{
				let {url} = request;
					response.setHeader('X-powered-by','Node.js');
					response.setHeader('statusCode',200);
					response.setHeader('statusMessage','resolve ok')
					apiServer(url).then((data)=>{
						if(!data){
							return staticServer(url);
						}else{
							response.setHeader('Content-type','application/json');
							response.end(JSON.stringify(data));
						}
					}).then((data)=>{
						response.end(data);
					}).catch((err)=>{
						response.writeHeader('404','找不到');
						response.end(err);
					})
				}
			}
		 }

module.exports= App