function onuser(){ 
	var user = document.getElementById( "user" );
	if(user.value == "")
		document.getElementById("couser").innerHTML="<font color='red'>×</font>";
	else
		document.getElementById("couser").innerHTML="<font color='green'>√</font>";
	
}
function onpa(){
	var password = document.getElementById( "password" );
	if(password.value == "")
		document.getElementById("copassword").innerHTML="<font color='red'>×</font>";
	else
		document.getElementById("copassword").innerHTML="<font color='green'>√</font>";
}
function onrepa(){
	var repassword = document.getElementById( "repassword" );
	var password = document.getElementById( "password" );
	if(repassword.value == "")
		document.getElementById("corepassword").innerHTML="<font color='red'>不可为空</font>";
	else if( password.value == repassword.value)
		document.getElementById("corepassword").innerHTML="<font color='green'>√</font>";
	else
		document.getElementById("corepassword").innerHTML="<font color='red'>两次密码不一致</font>";
}
function onte(){
	var a = document.getElementById("tenumber");
	var str = /^[\d]{11}$/;
	if(a.value == ""){
		document.getElementById("cotenumber").innerHTML = "<font color='red'>手机号不能为空</font>";
		
	}
	else if(!str.test(a.value)){
		document.getElementById("cotenumber").innerHTML = "<font color='red'>手机号格式不正确</font>";
		
	}
	else{
		document.getElementById("cotenumber").innerHTML = "<font color='green'>√</font>";
	}
}
function onqq(){
	var reg=/^[0-9a-zA-Z]+@qq+\.[(com\cn)]/;
	var email=document.getElementById("qq");
	if(email.value == "")
		document.getElementById("coqq").innerHTML="<font color='red'>邮箱不能为空</font>";
	else if( ! reg.test(email.value)) 
		document.getElementById("coqq").innerHTML="<font color='red'>邮箱格式不正确</font>"; 
    else
        document.getElementById("coqq").innerHTML="<font color='green'>√</font>";
}
$("#born").datepicker();
