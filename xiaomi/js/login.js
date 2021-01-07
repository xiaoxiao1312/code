var  spanArr = document.getElementsByTagName('span');
	//1 书写监测用户名的函数
	function checkUsername(){
		//测试用户名的正则
		var reg = /^\w{6,13}$/;
		//获取的输入的用户名
		var username = document.querySelector('#username').value;
		if(reg.test(username)){
			//如果输入的用户名符合正则,正确
			spanArr[0].innerHTML = "用户名可以使用";
			return true;
		}else{
			//如果输入的用户名不符合正则,错误
			spanArr[0].innerHTML = '用户名必须是6-13位的字母数字或者下划线';
			return false;
		}
	}

	//2 书写监测密码的函数
     function checkPassword(){
	// 	//测试密码的正则
        var reg = /^[\w~!@#]{8,16}$/;
    //获取输入的密码
		var password = document.querySelector('#password').value;
		if(reg.test(password)){
			//如果输入的密码符合正则,正确
			spanArr[1].innerHTML = "密码可以使用";
			return true;
		}else{
			//如果输入的用户名不符合正则,错误
			spanArr[1].innerHTML = '密码必须是8-16的字母,数字或者特殊符号';
			return false;
		}

	}

