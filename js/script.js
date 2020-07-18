$(document).ready(function () {
	$('.menu__link').click(function(e){
		e.preventDefault();
		$('.menu__link').removeClass('menu__link--active');
		$('.tab').removeClass('tab--active');
		$(this).addClass('menu__link--active');
		$($(this).attr('href')).addClass('tab--active');
	});

	$('.menu__link:first').click();

	$('.comments-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		initialSlide: 0,
		infinite: true,
		draggable: false,
		swipe: true,
		waitForAnimate: true,
		rows: 5,
		slidesPerRow: 1,
		fade: true,
	});
});