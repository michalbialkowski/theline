$(window).on('load', function() {
	$('.logo__overlay .logo__image__apartments').addClass('expanded');
	
	setTimeout(
		function() {
			$('.logo__overlay').addClass('overlay--transparent');
		}, 2500
	);
});