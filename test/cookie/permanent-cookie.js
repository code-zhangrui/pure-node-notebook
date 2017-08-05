/* 
 * 学习permanent cookie
 * 指令
 */

module.exports  =(request,response)=>{
	//GMT UTC
	let Expires = `Expires=${(new Date(12121414124124)).toUTCString()}`;
	let MaxAge = `Max-Age=2`;
	//当以上两者都存在时，优先max-age
	let sessionCookie = `userId=slashhuang;${MaxAge}${Expires}`
	response.setHeader('Set-Cookie',sessionCookie);
	return request.headers
}