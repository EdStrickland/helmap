$(document).ready(function(){
	$("#register-btn").click(function(){
		var uid = $.cookie('uid');
		$.ajax({
			type:'post',
      contentType: "application/json; charset=utf-8",
			url: 'http://115.28.101.55:3000/user/personal-info',
			data: {
				'uid': uid
			}
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