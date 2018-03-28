
function deng(){
	var user;
	var password;
	var select = document.getElementById("select");
	user = document.getElementById( "user" );
	password = document.getElementById( "password" );
	if(select.value == "管理员"){
		if( user.value == "admin" && password.value == "123456" )
		{
			window.location.href="主界面.html";
		}
	    else{
	    	alert( "用户名或密码不正确 ");
	    }
	}
	else if(select.value == "教师"){
		if( user.value == "teacher" && password.value == "123123" )
		{
			window.location.href="教师主界面.html";
		}
	    else{
	    	alert( "用户名或密码不正确 ");
	    }
	}
	else{
		if( user.value == "student" && password.value == "321321" )
		{
			window.location.href="学生主界面.html";
		}
	    else{
	    	alert( "用户名或密码不正确 ");
	    }
	}
}