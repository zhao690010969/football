window.onload = function() {
	var wHeight = $(window).height(),
		hHeight = $("header").height(),
		nHeight = $(".nav").height(),
		fHeight = $(".search_footer").height();
		/*console.log(wHeight);
		console.log(hHeight);
		console.log(nHeight);
		console.log(fHeight);*/
	//第一页切换
	$("#scroller").height(wHeight - nHeight - hHeight - fHeight - 20);
	var scroll = new iScroll("scroller", {
		hScrollbar: false,
		vScrollbar: false
	})
	scroll.refresh();
	
}