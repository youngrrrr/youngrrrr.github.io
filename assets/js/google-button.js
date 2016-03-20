const numLi = 4;

$("button").hover(function() {
	var self = this;
	var pos = -(Math.floor(Math.random() * (numLi - 1)) + 1) * 55
	setTimeout(function(){
		$(self).find("ul").css("margin-top", pos + "px");
	}, 500);
}, function(){
	$(this).find("ul").css("margin-top", "0px");
});

$("button").dblclick(function() {
	console.log("a");
	$(this).remove("button > ul");
	$(this).append("<a href=\"mailto:young-rae_kim@brown.edu\" target=\"_blank\">Let's Get Acquainted</a><br><a href=\"https://www.linkedin.com/in/youngraekim\" target=\"_blank\">Let's Get Professional</a><br><a href=\"https://www.facebook.com/youngrae.95\" target=\"_blank\">Let's Get Friendly</a><br><a href=\"https://github.com/youngrrrr\" target=\"_blank\">Let's Get To Work</a>");
});