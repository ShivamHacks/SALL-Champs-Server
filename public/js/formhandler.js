var thankYouMessageSubscribe = "<i>Thank You. Please check your email.</i>";
var thankYouMessageContact = "<i>Thank You. We will get back to you soon.</i>";

$(function() {

	$('#subscribe-form').submit(function(event) {
		var formData = {
			'email': $('#subscribe-email').val()
		};
		var errors = formEmpty(formData);
		if (typeof errors != "undefined") {
			$("#subscribe-errors").text(errors + " is empty!");
		} else {
			$.ajax({
				type: 'POST',
				url: '/subscribe',
				data: formData,
				dataType: 'json',
				encode: true
			});
			$('#subscribe-form')[0].reset();
			$("#subscribe-errors").html(thankYouMessageSubscribe);
		}
		event.preventDefault();
	});

	$('#contact-form').submit(function(event) {
		$("#contact-errors").css("visibility", "visible");
		var formData = {
			'name': $("#contact-name").val(),
			'email': $("#contact-email").val(),
			'subject': $("#contact-subject").val(),
			'message': $("#contact-message").val()
		};
		var errors = formEmpty(formData);
		if (typeof errors != "undefined") {
			$("#contact-errors").removeClass("alert-success").addClass("alert-danger");
			$("#contact-errors > p").text(errors + " is empty!");
		} else {
			$.ajax({
				type: 'POST',
				url: '/contact',
				data: formData,
				dataType: 'json',
				encode: true
			});
			$('#contact-form')[0].reset();
			$("#contact-errors > p").html(thankYouMessageContact);
			$("#contact-errors").removeClass("alert-danger").addClass("alert-success");
		}
		console.log(formData);
		event.preventDefault();
	});

});

function formEmpty(form) {
	for (var key in form) {
		if (form[key].trim() == "") {
			return key;
		}
	}
}