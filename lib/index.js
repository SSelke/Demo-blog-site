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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $(".slides");
  var dots = $(".dot");
  
  if(n > slides.length){
  	slideIndex = 1
  } 
  if(n < 1){
  	slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

