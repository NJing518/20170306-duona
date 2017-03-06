$(function(){
	/*login*/
	$('input[name="user"]').mousedown(function(){
		if($(this).val()=='请填写邮箱/手机号'){
			$(this).val('').css('color','black');
		}
		$('.tips').eq(0).text('请填写邮箱/手机').css({'color':'#666'});
	});
	var ouser=null,opwd,ocode=null,re_pwd=null;
	var re1=/(^13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
	var re2=/^\w+@[a-z0-9]+\.[a-z]+$/;
	$('input[name="user"]').blur(function(){
		ouser=$('input[name="user"]').val();
		if($(this).val()==''){
			$(this).val('请填写邮箱/手机号').css('color','#999');
			$('.tips').eq(0).text('请填写邮箱/手机').css({'color':'red'});
		}
		else{
			if(re1.test(ouser)||re2.test(ouser)){
				$('.tips').eq(0).text('正确').css({'color':'green'});
			}
			else{
				$('.tips').eq(0).text('请输入存在的手机号或邮箱').css({'color':'red'});
			}
		}
	});
	$('input[name="pwd"]').mousedown(function(){
		if($(this).val()=='密码'){
			$(this).val('').css('color','black').attr('type','password');
			$('.tips').eq(1).text('请输入6-20位的密码').css({'color':'#666'});
		}
	});
	$('input[name="pwd"]').blur(function(){
		if($(this).val()==''){
			$(this).val('密码').css('color','#999').attr('type','text');
			$('.tips').eq(1).text('请输入密码').css({'color':'red'});
		}
		else if(($(this).val().length<6&&$(this).val().length>0)||$(this).val().length>20){
			$('.tips').eq(1).text('请输入6-20位的密码').css({'color':'red'});
		}
		else{
			opwd=$(this).val();
			$('.tips').eq(1).text('正确').css({'color':'green'});
		}
	});
	$('input[name="login_code"]').mousedown(function(){
		if($(this).val()=='填写验证码'){
			$(this).val('').css('color','black');
			$('.tips').eq(2).text('请输入验证码').css({'color':'#666'});
		}
		
	});
	var num=randomNum();
	var num2=randomNum();
	$('.s_code').text(num);
	$('.li_code').text(num2);
	$('.s_code').click(function(){
		num=randomNum();
		$('.s_code').text(num);
		$('input[name="login_code"]').val('');
		$('.tips').eq(2).text('请输入验证码').css({'color':'#666'});
	});
	$('.li_code').click(function(){
		num2=randomNum();
		$('.li_code').text(num2);
		$('input[name="li_code"]').val('');
	});
	$('input[name="li_code"]').blur(function(){
		if($(this).val()==num2){
			$(this).css('border','1px solid green');
		}
		else{
			$(this).css('border','1px solid red');
		}
	});
	$('input[name="login_code"]').blur(function(){
		var ocode=$(this).val();
		if($(this).val()==num){
			$('.tips').eq(2).text('正确').css({'color':'green'});
		}
		else if($(this).val()==''){
			$('.tips').eq(2).text('请输入验证码').css({'color':'red'});
			$(this).val('填写验证码').css('color','999');
		}
		else{
			$('.tips').eq(2).text('验证码错误').css({'color':'red'});
		}
	});
	$('.l_login').click(function(){
		$('.tips').each(function(){
			if($(this).text()=='正确'&&$('input[name="rem"]').is(':checked')){
				setCookie('user',ouser,5);
				setCookie('pwd',opwd,5);
			}
		});
	});
	var user=getCookie('user');
	var pwd=getCookie('pwd');
	if(user==''&&pwd==''){
		$('input[name="user"]').val('请填写邮箱/手机号');
		$('input[name="pwd"]').val('密码');
	}
	else if(user&&pwd==''){
		$('input[name="user"]').val(user);
		$('input[name="pwd"]').val('密码').attr('type','text');
	}
	else if(user==''&&pwd){
		$('input[name="user"]').val('请填写邮箱/手机号');
		$('input[name="pwd"]').val(pwd).attr('type','password');
	}
	else{
		$('input[name="user"]').val(user);
		$('input[name="pwd"]').val(pwd).attr('type','password');
	}
	/*reg*/
	$('input[name="tel"]').mousedown(function(){
		if($(this).val()=='您的手机号'){
			$(this).val('').css('color','black');
		}
	});
	$('input[name="tel"]').blur(function(){
		if($(this).val()==''){
			$(this).val('您的手机号').css('color','#999');
		}
		else{
			if(re1.test($(this).val())){
				$(this).css({'color':'green'});
			}
			else{
				$(this).css({'color':'red'});
			}
		}
	});
	$('input[name="code"]').mousedown(function(){
		if($(this).val()=='短信校验码'){
			$(this).val('').css('color','black');
		}
	});
	$('input[name="code"]').blur(function(){
		/*和验证码判断*/
		if($(this).val()==''){
			$(this).val('短信校验码').css('color','#999');
		}
	});
	var re3=/\w{6,16}/;
	$('input[name="reg_pwd"]').mousedown(function(){
		if($(this).val()=='密码：6-16位字母、数字或字符'){
			$(this).val('').css('color','black').attr('type','password');
		}
	});
	$('input[name="reg_pwd"]').blur(function(){
		if($(this).val()==''){
			$(this).val('密码：6-16位字母、数字或字符').css('color','#999').attr('type','text');;
		}
		else{
			re_pwd=$(this).val();
			if(re3.test($(this).val())){
				$(this).css({'color':'green'});
				$('.reg_tips').html();
			}
			else{
				$(this).css({'color':'red'});
				$('.reg_tips').html('请输入6-16位字母、数字或字符');
			}
		}
	});
	$('input[name="reg_repwd"]').mousedown(function(){
		if($(this).val()=='确认密码'){
			$(this).val('').css('color','black').attr('type','password');
		}
	});
	$('input[name="reg_repwd"]').blur(function(){
		if($(this).val()==''){
			$(this).val('确认密码').css('color','#999').attr('type','text');;
		}
		else{
			if(re_pwd==$(this).val()){
				$(this).css({'color':'green'});
				$('.reg_tips').html('');
			}
			else{
				$(this).css({'color':'red'});
				$('.reg_tips').html('两次密码输入不相同！');
			}
		}
	});
	$('.de_t_l ul li').mousedown(function(){
		$(this).css({'border-color':'red'}).siblings().css('border-color','#fff');
	});
//	$('.de_b_l ul li').click(function(){
//		$(this).css({'background-color':'white','border-top-color':'red'}).siblings().css({'background-color':'#f0f0f0','border-top-color':'#f0f0f0'});
//	});

	$('input[name="li_rec"]').mousedown(function(){
		if($(this).val()=='写下您推荐的内容'){
			$(this).val('').css('color','black');
		}
	});
	$('input[name="li_rec"]').blur(function(){
		if($(this).val()==''){
			$(this).val('写下您推荐的内容').css('color','#999').attr('type','text');
			$('.tips').eq(1).text('请输入密码').css({'color':'red'});
		}
	});
	$('input[name="li_comment"]').mousedown(function(){
		if($(this).val()=='仔细地写评论呦...'){
			$(this).val('').css('color','black');
		}
	});
	$('input[name="li_comment"]').blur(function(){
		if($(this).val()==''){
			$(this).val('仔细地写评论呦...').css('color','#999').attr('type','text');
			$('.tips').eq(1).text('请输入密码').css({'color':'red'});
		}
	});
	$('input[name="li_code"]').mousedown(function(){
		if($(this).val()=='输入验证码'){
			$(this).val('').css('color','black');
		}
	});
	$('.l_c_t ul,.l_c_b ul').click(function(){
		$(this).children().css('background-color','#f8e5e4');
	});
	$('.l_c_b5 ul').click(function(){
		$(this).children().css('background-color','#fff');
	});
	
	$('.build_nav ul li').click(function(){
		if($(this).index()==0){
			$(this).next().children().css({'color':'#ccc'}).end().siblings().children().css({'color':'#428bca'});
		}
		else if($(this).index()==5){
			$(this).prev().children().css({'color':'#ccc'}).end().siblings().children().css({'color':'#428bca'});
		}
		else{
			$(this).children().css({'color':'#ccc'}).end().siblings().children().css({'color':'#428bca'});
		}
	});
	$('.de_t_l_show ul li img').click(function(){
		$('.de_t_c').children().attr('src',$(this).attr('src'));
	});
	
	
});
function randomNum(){
	var r_num=0,arr=[];
	for(var i=0;i<4;i++){
		r_num=Math.ceil(Math.random()*25);
		arr.push(String.fromCharCode(65+r_num));
	}
	r_num=arr.join('');
	return r_num;
}
function setCookie(name,value,iDay){
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie=name+'='+value+';expires='+oDate;
}
function getCookie(name){
	var arr=document.cookie.split('; ');
	var aResult=[];
	for(var i=0;i<arr.length;i++){
		var arr2=arr[i].split('=');
		if(arr2[0]==name){
			aResult.push(arr2[1]);
		}
	}
	return aResult;
}
function removeCookie(name){
	setCookie(name,1,-1);
}