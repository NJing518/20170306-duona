$(function(){
	$('#phone').blur(function(){
		var re1 = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$|^\w+@[a-z0-9]+\.[a-z]{2,}$/;
		if (re1.test($('#phone').val())) {
			$('#p11').css('opacity',1);
			$('#p1').css('opacity',0);
		} else{
			$('#p1').css('opacity',1);
			$('#p11').css('opacity',0);
		}
	})
	$('#yanzheng').blur(function(){
		var re2 = /^\w{4}$/;
		if (re2.test($('#yanzheng').val())) {
			$('#p12').css('opacity',1);
			$('#p2').css('opacity',0);
		} else{
			$('#p2').css('opacity',1);
			$('#p12').css('opacity',0);
		}
	})
	$('#password').blur(function(){
		var re3 = /^\w{6,16}$/;
		if (re3.test($('#password').val())) {
			$('#p13').css('opacity',1);
			$('#p3').css('opacity',0);
		} else{
			$('#p3').css('opacity',1);
			$('#p13').css('opacity',0);
		}
	})
	$('#recheck').blur(function(){
		var re3 = /^\w{6,16}$/;
		if ($('#recheck').val()==$('#password').val() && $('#recheck').val() !=0 && re3.test($('#recheck').val())) {
			$('#p14').css('opacity',1);
			$('#p4').css('opacity',0);
		} else{
			$('#p4').css('opacity',1);
			$('#p14').css('opacity',0);
		}
	})
	$('#submit').click(function(){
		if (!$('#phone').val() || !$('#password').val() || !$('#recheck').val()) {
			alert('请完善信息');
		} else{
			cookiesManager.set('name',$('#phone').val());
			cookiesManager.set('password',$('#password').val());
			location.href = 'denglu.html';
		}
	})
	cookiesManager = {
		set: function(key, value) {
	        if (window.localStorage) {
	            window.localStorage.setItem(key, value);
	        } else {
	            var exdate = new Date();
	            var expiredays = 15;
	            exdate.setDate(exdate.getDate() + expiredays);
	            document.cookie = key+ "=" + escape(value) + ((expiredays == null) ? "" : ";expires="+exdate.toGMTString());
	        }
		},
		 get: function(key) {
	        if (window.localStorage) return window.localStorage.getItem(key);
	        else {
	            if (document.cookie.length > 0) {
	                c_start = document.cookie.indexOf(c_name + "=");
	                if (c_start != -1) { 
	                    c_start = c_start + c_name.length + 1;
	                    c_end = document.cookie.indexOf(";", c_start);
	                    if (c_end == -1) c_end = document.cookie.length;
	                    return unescape(document.cookie.substring(c_start, c_end));
	                } 
	            }
	            return "";
	        }
		 },
		 del: function(key) {
	        if (window.localStorage) localStorage.removeItem(key);
	        else {
	            var exp = new Date(); 
	            exp.setTime(exp.getTime() - 1); 
	            var cval = getCookie(name); 
	            if(cval != null) document.cookie = name + "=" + cval+";expires=" + exp.toGMTString();
	        }
		},
	    clearCookie: function() { 
	        if (window.localStorage) localStorage.clear();
	        else {
	            var keys = document.cookie.match(/[^ =;]+(?=\=)/g); 
	            if (keys) { 
	                for (var i = keys.length; i--;) 
	                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
	                } 
	            } 
	        }
	};
})