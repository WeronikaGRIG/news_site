$(function () {

	$('.logo-litera').each(function () {
		var ths = $(this);
		ths.html(ths.html().replace('o', '<span>o</span>'));
	});

	$('.search').click(function () {
		$('.search-field').slideToggle();
		$('.search-field input').focus();
	});

	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$('.search-field').slideUp();
		}
	}).click(function () {
		$('.search-field').slideUp();
	});

	$('.search-wrap').click(function (e) {
		e.stopPropagation();
	});

	$('.top-line').after('<div class="mobile-menu d-lg-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function () {
		$('.mobile-menu').stop().slideToggle();
	});


});