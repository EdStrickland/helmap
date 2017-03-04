$(document).ready(function(){
	$("#register").click(function(){
		$.ajax({
			type:'post',
      contentType: "application/json; charset=utf-8",
			url: 'https://115.28.101.55:3000/user/signup',
			data: {
				'id': $("#username input").val().toString(),
				'pwd': $("#password input").val().toString()
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

