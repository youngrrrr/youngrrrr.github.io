const numLi = 4;

$("button").hover(function(){
	var self = this;
	var pos = -(Math.floor(Math.random() * (numLi - 1)) + 1) * 55
	setTimeout(function(){
		$(self).find("ul").css("margin-top", pos + "px");
	}, 500);
}, function(){
	$(this).find("ul").css("margin-top", "0px");
})
