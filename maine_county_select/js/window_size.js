function window_size(page_id) {
	var w=window.outerWidth;
	//var h=window.outerHeight;
	//var txt="Window size: width=" + w + ", height=" + h;
	//document.getElementById("demo").innerHTML = txt;
	
	//if (page_id == 0) {
	//	img0_width=$('#img0').width();
	//	img0_height=$('#img0').height();
	//	//console.log("BEFORE: img0_width="+img0_width+" img0_height="+img0_height+" img0_ratio="+img0_ratio);
	//
	//	img0_height=815;
	//	document.getElementById("content-wrap").style.height = "875px";
	//}
	
	//var fnt_name="Palatino,serif";
	var fnt_name="Helvetica Neue,sans-serif";
	var fnt_wgt="200";	//"normal"
	
	if (w >= 2100) {
		document.getElementById("top_banner").style.height = "350px";
		document.getElementById("MSCO_div").style.padding = "100px 0px 0px 0px";
		document.getElementById("MSCO_h1").style.font = fnt_wgt+" 110px "+fnt_name;
	} else if (w >= 1800 && w < 2100) {
		document.getElementById("top_banner").style.height = "350px";
		document.getElementById("MSCO_div").style.padding = "80px 0px 0px 0px";
		document.getElementById("MSCO_h1").style.font = fnt_wgt+" 110px "+fnt_name;
	} else if (w >= 1700 && w < 1800) {
		document.getElementById("top_banner").style.height = "350px";
		document.getElementById("MSCO_div").style.padding = "70px 0px 0px 0px";
		document.getElementById("MSCO_h1").style.font = fnt_wgt+" 110px "+fnt_name;
	} else if (w >= 1550 && w < 1700) {
		document.getElementById("top_banner").style.height = "325px";
		document.getElementById("MSCO_div").style.padding = "60px 0px 0px 0px";
		document.getElementById("MSCO_h1").style.font = fnt_wgt+" 100px "+fnt_name;
	} else if (w >= 1250) {
		document.getElementById("top_banner").style.height = "310px";
		document.getElementById("MSCO_div").style.padding = "60px 0px 0px 0px";
		document.getElementById("MSCO_h1").style.font = fnt_wgt+" 90px "+fnt_name;
	} else if (w >= 1024 && w < 1250) {
		document.getElementById("top_banner").style.height = "300px";
		document.getElementById("MSCO_div").style.padding = "20px 0px 0px 0px";
		document.getElementById("MSCO_h1").style.font = fnt_wgt+" 80px "+fnt_name;
	} else {
		document.getElementById("top_banner").style.height = "275px";
		document.getElementById("MSCO_div").style.padding = "15px 0px 0px 0px";
		document.getElementById("MSCO_h1").style.font = fnt_wgt+" 70px "+fnt_name;
		//img0_height=675;
		//document.getElementById("content-wrap").style.height = "800px";
	};
	
	//if (page_id == 0) {
	//	if (w >= 1024 && w < 1175) {
	//		img0_height=720;
	//		console.log("******* resizing image *******");
	//		//document.getElementById("content_wrap").style.height = "850px";
	//	};
	//
	//	img0_width=img0_height*img0_ratio;
	//	document.getElementById("img0").style.width = img0_width+"px";
	//	document.getElementById("img0").style.height = img0_height+"px";
	//	//console.log("AFTER: img0_height="+img0_width+" img0_height="+img0_height+" img0_ratio="+img0_ratio);
	//}
	
};