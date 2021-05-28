let content_slider = '.content--slider';

$(window).on('load', function() {
	$(content_slider).flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: false,
		pageDots: false,
		autoPlay: false,
		prevNextButtons: false,
		watchCSS: true
	});
});

var isMoving=false;

$(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(event, delta) {
	event.preventDefault();
	if (isMoving) return;
	let mouseWheel = event.originalEvent.deltaY;
	if (mouseWheel > 0){
		$(content_slider).flickity('next');
	} else {
		$(content_slider).flickity('previous');
	}
	console.log();
	navigateTo();
	
});

function navigateTo(){
	isMoving = true;
	setTimeout(function() {
		isMoving = false;
	}, 1000);
}