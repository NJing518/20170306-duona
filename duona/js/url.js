$(function(){
	save();
	function save(){
		var oName = getURL().name;
//		console.log(oName);
		if(oName){
			$('#url').find('li').eq(0).css('display','none');
			$('#url').find('li').eq(1).css('display','none');
			$('#url').find('li').eq(2).find('a').text(oName).css('display','block');
		}
	}
	
	
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
	}
	
	var oWith = $('#content_dong li a img').css('width');
	var oHeight = $('#content_dong li a img').css('height');
	
	$('#content_dong li a img').hover(function(){
		$(this).css({'padding':0,'width':'150px'})
	},function(){
		$(this).css({'padding':'4px','width':oWith})
	})
	
	$('.content_c1 ul li img').hover(function(){
		$(this).css('opacity',0.5);
		
	},function(){
		$(this).css('opacity',1);
	})
	
	$.getmessage = function(data){
		var apiurl = 'https://api.douban.com/book/subjects';
		$.ajax({
			type:"get",
			url:apiurl,
			async:true,
			dataType:'jsonp',
			data:{'q':data,'alt':'xd'},
			jsonpCallback:'$jq',
			success:function(data,status){
				var arr = data.entry;
				$('.seaCtbox ul li').remove();
				$('.seaCtbox').show();
				$.each(arr, function(i) {
					var author = arr[i].author[0].name.$t;
					$('.seaCtbox ul').append("<li><a href='##' target='_self'>"+author+"</a></li>");
					$('.seaCtbox ul li').click(function(){
						$('#seaCtbox_F').val($(this).text());
						$('.seaCtbox').hide();
						$(this).children('a').attr('href',"html/tasty.html?val="+$('#seaCtbox_F').val());
					});
				});
				$('.seaCtbox ul li').mouseover(function(){
					$(this).css('background','darkgrey').siblings().css('background','white');
				})
			}
		});
	}
	$('body').on('propertychange input','#seaCtbox_F',function(){
		var txt = $('#seaCtbox_F').val();
		$.getmessage(txt);
//		$.ajax({
//			type:"get",
//			url:'http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?',
//			async:true,
//			dataType:'jsonp',
//			data:{'tel':txt},
//			callback:"jsonp",
//			success:function(data){
//				console.log(data);
//			}
//		});
	});
//	$('#seaCtbox_F').blur(function(){
//		$('.seaCtbox').hide();
//	})
	
})