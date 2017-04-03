setTimeout(function(){
	$.ajax({
		url:'/user.action',
		method:'get',
		//返回数组
		success:function(arr){
			var liStr = arr.map(function(ele){
					return '<li>'+ele+'</li>'
				}).join('');
			
			$('#root').html(liStr);
		},
		error:function(error){
			console.log(error)
		}
	})
	//模拟post
	$.ajax({
		url:'/list.action',
		method:'post',
		headers:{
			'content-type':"application/json"
		},
		data:JSON.stringify(['杭州',"张睿"]),
		//返回数组
		success:function(arr){
			var liStr = arr.map(function(ele){
					return '<li>'+ele+'</li>'
				}).join('');
			
			$('#shop').html(liStr);
		},
		error:function(error){
			console.log(error)
		}
	})
},1000)
