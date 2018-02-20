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


// IMAGE SLIDESHOW //

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = $(".slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}
