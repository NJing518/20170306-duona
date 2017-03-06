$(function(){
	var oVal = decodeURI(getURL().val);
	console.log(oVal);
	$('.life_search_c_t .search_input').val(oVal);
	function getURL(){
		var oUrl_ser = location.search;
		var oUrl = location.href;
//		console.log(oUrl);
		var oArr = {};
		if (oUrl.indexOf('?') != -1) {
			var oVal = oUrl.split('?')[1];
			var oObj = oVal.split('&');
			for (var i = 0; i < oObj.length;i++) {
				oArr[oObj[i].split('=')[0]] = oObj[i].split('=')[1];
			}
		}
//		console.log(oArr);
		return oArr;
	}
})