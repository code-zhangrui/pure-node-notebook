let p = new Promise((resolve,reject)=>{
  setTimeout(reject,1000,'hello world')
});
console.log(p)
// then可接受两个参数, 第一个参数是resolve的结果
// then可接受两个参数, 第二个参数是reject的结果

var another = p.then(val=>{
  //处理 resolve 的结果
  console.log(`resolve val is ${val}`)
},val=>
  //处理 reject 的结果
  console.log(`reject val is ${val}`)
)
console.log(another instanceof Promise)