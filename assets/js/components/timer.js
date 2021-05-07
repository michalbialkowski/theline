$(window).on('load', function() {
	let countDownDateString = '2021-07-01T12:00:00';
	
	var countDownDate = new Date(countDownDateString).getTime();
	var x = setInterval(function() {
		var now = new Date().getTime();
		var distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if (days < 10) {
			days = '0' + days;
		}
		
		if (hours < 10) {
			hours = '0' + hours;
		}
		
		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		
		$('.timer--time--days').text(days);
		$('.timer--time--hours').text(hours);
		$('.timer--time--minutes').text(minutes);
		$('.timer--time--seconds').text(seconds);
	}, 1000);
});
