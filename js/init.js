$(function(){
	
	$('.slider1').mobilyslider();
	
	$('.slider2').mobilyslider({
		transition: 'vertical',
		animationSpeed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		bullets: false			
	});
	
	$('.slider3').mobilyslider({
		transition: 'fade',		autoplay: true,				animationSpeed: 800,		bullets: false,		arrowsHide: true
	});
	
});
