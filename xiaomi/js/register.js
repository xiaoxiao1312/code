checkRegister()
    var  spanArr = document.getElementsByTagName('span');
    //1 书写监测注册电话号码的函数
	function checkRegister(){
		//测试用户名的正则
		var reg = /^\w{11,12}$/;
		//获取的输入的用户名
		var phone = document.querySelector('#phone').value;
		if(reg.test(phone)){
			//如果输入的用户名符合正则,正确
			spanArr[0].innerHTML = "电话号码可以使用";
			return true;
		}else{
			//如果输入的用户名不符合正则,错误
			spanArr[0].innerHTML = '电话号码必须是11或12位的数字';
			return false;
		}
	}