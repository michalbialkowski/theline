function sendMail(form_id, btn_class, process_class, success_class, error_class) {
	$(form_id).submit(function(event) {
		event.preventDefault();
		
		// $(form_id).find('button[type="submit"] span').html('Wysyłanie formularza…');
		
		$(form_id).find('button[type="submit"]').removeClass(btn_class);
		$(form_id).find('button[type="submit"]').addClass(process_class);

		var form_action = $(this).attr('data-action');
		var form_data = new FormData(jQuery(this)[0]);

		$.ajax({
			url: form_action,
			data: form_data,
			cache: false,
			contentType: false,
			processData: false,
			method: 'POST',
			success: function(data) {
				if (data == 0) {
					$(form_id).find('button[type="submit"] span').html('Formularz został wysłany');
					
					// $(form_id).find('button[type="submit"]').removeClass(process_class);
					// $(form_id).find('button[type="submit"]').addClass(success_class);
					
					$(form_id).find('input').attr("disabled", true);
					$(form_id).find('textarea').attr("disabled", true);
					$(form_id).find('select').attr("disabled", true);
					$(form_id).find('button[type="submit"]').attr("disabled", true);
				} else {
					// $(form_id).find('button[type="submit"] span').html('Wystąpił błąd, odśwież stronę, aby spróbować ponownie');

					// $(form_id).find('button[type="submit"]').removeClass(process_class);
					// $(form_id).find('button[type="submit"]').addClass(error_class);
					
					$('.fom__area__confirmation').removeClass('d-none');
					$('.form__area__submit').removeClass('d-flex');
					$('.form__area__submit').addClass('d-none');
				}
			}
		});
	});
}

sendMail('form[data-form="kontakt"]', 'btn-primary', 'btn-dark', 'btn-info', 'btn-primary');