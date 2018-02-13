$(".hamburger").on("click", function(){
	$(".hamburger").toggleClass("is-active");
	if($(".hamburger").hasClass("is-active")){
		$("#main").css("right", "320px");
	} else {
		$("#main").css("right", "20px");
	}
	$(".side-nav").toggleClass("hidden");
	$("body").toggleClass("menu-active");
});

