$('.navbar__desktop .btn__menu').on('click', function() {
	$('.navbar__desktop .nav__menu').toggleClass('collapsed');
	$('.navbar__desktop .btn__menu').toggleClass('menu--opened');
});

let menu_content_slider = '.content--slider';

// Navbar Desktop

$('.navbar__desktop .link__inwestycja').on('click', function(event) {
	event.preventDefault();
	$(menu_content_slider).flickity('select', 0);
});

$('.navbar__desktop .link__przedsprzedaz').on('click', function(event) {
	event.preventDefault();
	$(menu_content_slider).flickity('select', 1);
});

$('.navbar__desktop .link__apartamenty').on('click', function(event) {
	event.preventDefault();
	$(menu_content_slider).flickity('select', 2);
});

$('.navbar__desktop .link__kontakt').on('click', function(event) {
	event.preventDefault();
	$(menu_content_slider).flickity('select', 3);
});

let menu_modal = '#menu__modal';

// Navbar Mobile

$(`${menu_modal} .link__inwestycja`).on('click', function(event) {
	event.preventDefault();
	if (screenWidth() >= 768) {
		$(menu_content_slider).flickity('select', 0);
	} else {
		let dest = $(this).attr("href");
		$("html, body").animate({
			'scrollTop': $(dest).offset().top - 70
		}, 2000);
	}
	$(menu_modal).modal('hide');
});

$(`${menu_modal} .link__przedsprzedaz`).on('click', function(event) {
	event.preventDefault();
	if (screenWidth() >= 768) {
		$(menu_content_slider).flickity('select', 1);
	} else {
		let dest = $(this).attr("href");
		$("html, body").animate({
			'scrollTop': $(dest).offset().top - 70
		}, 2000);
	}
	$(menu_modal).modal('hide');
});

$(`${menu_modal} .link__apartamenty`).on('click', function(event) {
	event.preventDefault();
	if (screenWidth() >= 768) {
		$(menu_content_slider).flickity('select', 2);
	} else {
		let dest = $(this).attr("href");
		$("html, body").animate({
			'scrollTop': $(dest).offset().top - 70
		}, 2000);
	}
	$(menu_modal).modal('hide');
});

$(`${menu_modal} .link__kontakt`).on('click', function(event) {
	event.preventDefault();
	if (screenWidth() >= 768) {
		$(menu_content_slider).flickity('select', 3);
	} else {
		let dest = $(this).attr("href");
		$("html, body").animate({
			'scrollTop': $(dest).offset().top - 70
		}, 2000);
	}
	$(menu_modal).modal('hide');
});

$(`#przedsprzedaz .link__kontakt`).on('click', function(event) {
	event.preventDefault();
	if (screenWidth() >= 768) {
		$(menu_content_slider).flickity('select', 1);
	} else {
		let dest = $(this).attr("href");
		$("html, body").animate({
			'scrollTop': $(dest).offset().top - 70
		}, 2000);
	}
	$(menu_modal).modal('hide');
});

function screenWidth() {
	let width = $(window).width();
	return width;
}