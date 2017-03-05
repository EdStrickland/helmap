$(document).ready(function(){
	$("#login").click(function(){
		$.ajax({
			type:'post',
			xhrFields: {  
		    withCredentials: false
		  },  
		  crossDomain: true,  
      // contentType: "application/json; charset=utf-8",
			url: 'http://115.28.101.55:3000/user/login',
			data: {
				'id': '10142510110',
				'pwd': 'KQ$(f62k'
			},
			success: function(data){
				alert(data.ret);
				alert(data.message);
			},
			error: function(data){
				alert(data.ret);
				alert(data.message);
			}
		})
	});
})