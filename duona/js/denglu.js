window.onload = function(){
	var oName = document.getElementById('name');
	var aName = document.getElementById('name_text');
	var oPass = document.getElementById('password');
	var aPass = document.getElementById('password_text');
	var oRech = document.getElementById('recheck');
	var aRech = document.getElementById('recheck_text');
	var a=0;
	var b=0;
	var b=0;
	
	oName.onblur = function(){
		var re1 = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$|^\w+@[a-z0-9]+\.[a-z]{2,}$/;
		if (re1.test(oName.value)) {
			aName.innerHTML = '<p style="color: green;">输入正确</p>';
			a=1;
		} else{
			aName.innerHTML = '<p style="color: red;">请输入正确的手机号/邮箱</p>';
			a=0;
		}
	}
	oPass.onblur = function(){
		var re2 = /^\w{6,16}$/;
		if (re2.test(oPass.value)) {
			aPass.innerHTML = '<p style="color: green;">输入正确</p>';
			b=1;
		} else{
			aPass.innerHTML = '<p style="color: red;">请输入正确的密码</p>';
			b=0;
		}
	}
	//四位随机数字
	var code = Math.floor(Math.random()*9000)+1000;
	var oRec_num = document.getElementById('recheck_num');
	oRec_num.innerHTML = code;
	//四位随机验证码
//	var codes = [];
//	for(var i = 48;i < 57;codes.push(i),i++);
//	for(var i = 60;i < 90;codes.push(i),i++);
//	for(var i = 97;i < 122;codes.push(i),i++);
//	var arr = [];
//	for (var i = 0; i < 4; i++) {
//		var index = Math.floor(Math.random()*(61-0+1)+0);
//		var char = String.fromCharCode(codes[index]);
//		arr.push(char);
//	}
//	var code = arr.join('');
//	var oRec_num = document.getElementById('recheck_num');
//	oRec_num.innerHTML = code;
	
	oRech.onblur = function(){
		var re3 = /^\w{4}$/;
		if (re3.test(oRech.value) && oRech.value == code) {
			aRech.innerHTML = '<p style="color: green;">输入正确</p>';
			c=1;
		} else{
			aRech.innerHTML = '<p style="color: red;">验证码不正确</p>';
			code = Math.floor(Math.random()*9000)+1000;
//			for(var i = 48;i < 57;codes.push(i),i++);
//			for(var i = 60;i < 90;codes.push(i),i++);
//			for(var i = 97;i < 122;codes.push(i),i++);
//			for (var i = 0; i < 4; i++) {
//				var index = Math.floor(Math.random()*(61-0+1)+0);
//				var char = String.fromCharCode(codes[index]);
//				arr.push(char);
//			}
//			code = arr.join('');
			oRec_num.innerHTML = code;
			c=0;
		}
	}
	
	var oRem = document.getElementById('remember');
	var oBtn = document.getElementById('login');
//	var sName = oName.value;
//	var sPass = oPass.value;
//	document.onclick = function(){
//		alert(oName.value);
//		alert(oPass.value);
//	
//	}
	
//	oName.value = getCook("sName");
//	oPass.value = getCook("sPass");

//	oBtn.onclick = function(){
//		if (a==1&&b==1&&c==1) {
//			if (oRem.checked == true) {
//				setCook("sName",oName.value,1);
//				setCook("sPass",oPass.value,1);
//			} else{
//				alert("确定不记住密码？")
//			}
//		} else{
//			alert('您的输入有误，请重新输入！');
//		}
//	}
	$('#login').click(function(){
		if (!$('#name').val() || !$('#password').val()) {
			alert('请输入账号密码');
		} else{
			$.ajax({
				type:'get',
				url:'../json/password.json',
				async:true,
				dataType:'json',
				data:'',
				success:function(data,status){
					console.log(data.data);
					if ($('#name').val() == data.data.name && $('#password').val() == data.data.password) {
						location.href = '../index.html?name='+data.data.name;
					} else{
						alert('账号或密码错误');
					}
				}
			})
		}
	})
	
	
	
}
