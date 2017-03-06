$(function(){
	$('.ul_con li').click(function(){
	switch ($(this).index()){
		case 0:
			$('html,body').animate({
				scrollTop:$('.side1').offset().top-75
			},10);
			break;
		case 1:
			$('html,body').animate({
				scrollTop:$('.side6').offset().top-75
			},10);
			break;
		case 2:
			$('html,body').animate({
				scrollTop:$('.side7').offset().top-75
			},10);
			break;
		case 3:
			$('html,body').animate({
				scrollTop:$('.side8').offset().top-75
			},10);
			break;
		case 4:
			$('html,body').animate({
				scrollTop:$('.side9').offset().top-75
			},10);
			break;
		default:
			break;
		}
	});
});
$(window).scroll(function(){
	var odis=document.documentElement.scrollTop||document.body.scrollTop;
	if(odis>629){
		$('.de_b_l_t').css({'position':'fixed','top':'0','width':'70%'});
		if(odis>=$('.side1').offset().top-75&&odis<$('.side6').offset().top-75){
			$('.ul_con li').css({'background-color': '#f0f0f0','border-top-color':'f0f0f0'}).first().css({'background-color': '#fff','border-top-color':'red'});
		}
		else if(odis>=$('.side6').offset().top-75&&odis<$('.side7').offset().top-75){
			$('.ul_con li').css({'background-color': '#f0f0f0','border-top-color':'f0f0f0'}).eq(1).css({'background-color': '#fff','border-top-color':'red'});
		}
		else if(odis>=$('.side7').offset().top-75&&odis<$('.side8').offset().top-75){
			$('.ul_con li').css({'background-color': '#f0f0f0','border-top-color':'f0f0f0'}).eq(2).css({'background-color': '#fff','border-top-color':'red'});
		}
		else if(odis>=$('.side8').offset().top-75&&odis<$('.side9').offset().top-200){
			$('.ul_con li').css({'background-color': '#f0f0f0','border-top-color':'f0f0f0'}).eq(3).css({'background-color': '#fff','border-top-color':'red'});
		}
		else if(odis>=$('.side9').offset().top-200){
			$('.ul_con li').css({'background-color': '#f0f0f0','border-top-color':'f0f0f0'}).eq(4).css({'background-color': '#fff','border-top-color':'red'});
		}
	}else{
		$('.de_b_l_t').css({'position':'relative','width':'100%'});
	}
});