$(window).on('load', function() {
	$('.flickity--slider').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: false,
		pageDots: true,
		autoPlay: false,
		prevNextButtons: false
	});
});