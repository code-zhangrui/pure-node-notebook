//这个是去'抓'静态文件的js
const path = require('path');
const fs = require('fs');
const mime = require('mime');
let getPath = url=>path.resolve(process.cwd(),'public',`.${url}`);
let staticFunc = (ctx)=>{
	let {url}=ctx.req;
	let {resCtx}=ctx;
	return new Promise((resolve,reject)=>{
	    if(url.match(/\./) && !url.match('action')){
			let _path = getPath(url);
			resCtx.headers = Object.assign(resCtx.headers,{
					'Content-Type':mime.lookup(_path)
				});	
			
			let body = fs.readFile(_path,(err,data)=>{
				if(err){
					resCtx.body=`NOT FOUND${err.stack}`
				}
				resCtx.body=data;
				resolve()
			})	
		}else{
				resolve()
			}
		})
	};

module.exports = staticFunc
