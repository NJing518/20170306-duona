$(function(){
	if (getURL().val) {
		var val = getURL().val;
		val = val.replace(/[^0-9]/ig,'');
		$('.tra_ul_ch').val(val);
		var num = Number($('.tra_ul_ch').val());
		var price = $('.tra_ul2 > .price1').html();
		var price2 = $('.tra_ul2 > .price2').html();
		prices(num,price,price2);
	}else{
//		$('.tra_sub_c').empty();
//		$('.tra_sub_c').append("<p style='text-align:center;color:red;'>您没有购物信息</p>")
		location.href = 'konggouwu.html';
	};
	
	function getURL(){
		var oUrl_ser = location.search;
		var oUrl = location.href;
		console.log(oUrl);
		var oArr = {};
		if (oUrl.indexOf('?') != -1) {
			var oVal = oUrl.split('?')[1];
			var oObj = oVal.split('&');
			for (var i = 0; i < oObj.length;i++) {
				oArr[oObj[i].split('=')[0]] = oObj[i].split('=')[1];
			}
		}
		console.log(oArr);
		return oArr;
	};
	
	$('.increase').click(function(){
		var values = Number($('.tra_ul_ch').val())+1;
		$('.tra_ul_ch').val(values);
		if ($('.tra_ul_ch').val() > 99) {
			$('.tra_ul_ch').val(99);
		}
		var num = Number($('.tra_ul_ch').val());
		var price = $('.tra_ul2 > .price1').html();
		var price2 = $('.tra_ul2 > .price2').html();
		prices(num,price,price2);
	});
	$('.decrease').click(function(){
		var values = Number($('.tra_ul_ch').val())-1;
		if (values == 0){
//			$('.tra_sub_c').empty();
//			$('.tra_sub_c').append("<p style='text-align:center;color:red;'>您没有购物信息</p>");
			location.href = 'konggouwu.html';
		};
		$('.tra_ul_ch').val(values);
		var num = Number($('.tra_ul_ch').val());
		var price = $('.tra_ul2 > .price1').html();
		var price2 = $('.tra_ul2 > .price2').html();
		prices(num,price,price2);
	});
	$('.tra_ul_ch').blur(function(){
		var data = $('.tra_ul_ch').val();
		var oLength = $('.tra_ul_ch').val().length;
		if (data == '' || data == 0) {
			$('.tra_ul_ch').val(1);
		}
		var oNums;
		for (var i = 0; i<oLength; i++) {
			oNums = data.charAt(i).charCodeAt();
			if(oNums < 48 || oNums >57){
				$('.tra_ul_ch').val(1);
			}
		}
		var num = Number($('.tra_ul_ch').val());
		var price = $('.tra_ul2 > .price1').html();
		var price2 = $('.tra_ul2 > .price2').html();
		prices(num,price,price2);
	});
	
	function prices(number,price,price2){
		$('.tra_ul_ch').val(number);
		$('.tra_ul2 > .price').html((number*price).toFixed(2));
		$('span.tra_sub_red').html((number*price).toFixed(2));
		$('span.tra_sub_bold').html((number*price2).toFixed(2));
	}
})