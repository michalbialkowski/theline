$('#navbar__desktop .btn__menu').on('click', function() {
	$('#navbar__desktop .nav__menu').toggleClass('collapsed');
	$('#navbar__desktop .btn__menu').toggleClass('menu--opened');
});

let menu_content_slider = '.content--slider';

$('#navbar__desktop .link__inwestycja').on('click', function(event) {
	event.preventDefault();
	$(menu_content_slider).flickity('select', 0);
});

$('#navbar__desktop .link__przedsprzedaz').on('click', function(event) {
	event.preventDefault();
	$(menu_content_slider).flickity('select', 1);
});

$('#navbar__desktop .link__apartamenty').on('click', function(event) {
	event.preventDefault();
	$(menu_content_slider).flickity('select', 2);
});

$('#navbar__desktop .link__kontakt').on('click', function(event) {
	event.preventDefault();
	$(menu_content_slider).flickity('select', 3);
});