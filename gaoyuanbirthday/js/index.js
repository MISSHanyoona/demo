 $('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="高远" &&  pwd=="0809"){
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="BirthdayCake.html";},2000);
	}
	else{
		alert("你是傻子呀，账号密码不都告诉你了吗？");
	}
});
