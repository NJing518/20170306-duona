$(function(){
	$('.ul_det li').click(function(){
	switch ($(this).index()){
		case 0:
			$('html,body').animate({
				scrollTop:$('.side1').offset().top-75
			},10);
			break;
		case 1:
			$('html,body').animate({
				scrollTop:$('.side2').offset().top-75
			},10);
			break;
		case 2:
			$('html,body').animate({
				scrollTop:$('.side3').offset().top-75
			},10);
			break;
		case 3:
			$('html,body').animate({
				scrollTop:$('.side4').offset().top-75
			},10);
			break;
		case 4:
			$('html,body').animate({
				scrollTop:$('.side5').offset().top-75
			},10);
			break;
		default:
			break;
		}
	});
	
	$('.pinglun_text').html('可输入255个字');
	$('body').on('propertychange input','#pinglun',function(){
		var num = Number($(this).val().length);
		
		if (num<=255) {
			$('.pinglun_text').html('可输入'+(255-num)+'个字');
			$('.pinglun_text').css('color','red');
		}
		if (num == 0) {
			
			$('.pinglun_text').css('color','black');
		}
	});
	//数量的加减
	$('.de_up').click(function(){
		var values = Number($('.de_num').val())+1;
		$('.de_num').val(values);
		if ($('.de_num').val() > 99) {
			$('.de_num').val(99);
		}
	});
	$('.de_down').click(function(){
		var values = Number($('.de_num').val())-1;
		if (values == 0){
			return;
		};
		$('.de_num').val(values);
	});
	$('.de_num').blur(function(){
		var data = $('.de_num').val();
		var oLength = $('.de_num').val().length;
		if (data == '' || data == 0) {
			$('.de_num').val(1);
		}
		var oNums;
		for (var i = 0; i<oLength; i++) {
			//charAt()返回指定位置的字符
			//charCodeAt()返回指定位置的编码
			oNums = data.charAt(i).charCodeAt();
			if(oNums < 48 || oNums >57){
				$('.de_num').val(1);
			}
		}
	});
	$('.de_t_r_b > button').click(function(){
		var oVal = $('.de_num').val();
		location.href = 'gouwuche.html?val='+oVal;
	});
});
$(window).scroll(function(){
	var odis=document.documentElement.scrollTop||document.body.scrollTop;
	if(odis>629){
		$('.de_b_l_t').css({'position':'fixed','top':'0','width':'70%'});
		if(odis>=$('.side1').offset().top-75&&odis<$('.side2').offset().top-75){
			$('.ul_det li').css({'background-color': '#f0f0f0','border-top-color':'f0f0f0'}).first().css({'background-color': '#fff','border-top-color':'red'});
		}
		else if(odis>=$('.side2').offset().top-75&&odis<$('.side3').offset().top-75){
			$('.ul_det li').css({'background-color': '#f0f0f0','border-top-color':'f0f0f0'}).eq(1).css({'background-color': '#fff','border-top-color':'red'});
		}
		else if(odis>=$('.side3').offset().top-75&&odis<$('.side4').offset().top-75){
			$('.ul_det li').css({'background-color': '#f0f0f0','border-top-color':'f0f0f0'}).eq(2).css({'background-color': '#fff','border-top-color':'red'});
		}
		else if(odis>=$('.side4').offset().top-75&&odis<$('.side5').offset().top-200){
			$('.ul_det li').css({'background-color': '#f0f0f0','border-top-color':'f0f0f0'}).eq(3).css({'background-color': '#fff','border-top-color':'red'});
		}
		else if(odis>=$('.side5').offset().top-200){
			$('.ul_det li').css({'background-color': '#f0f0f0','border-top-color':'f0f0f0'}).eq(4).css({'background-color': '#fff','border-top-color':'red'});
		}
	}else{
		$('.de_b_l_t').css({'position':'relative','width':'100%'});
	}
});