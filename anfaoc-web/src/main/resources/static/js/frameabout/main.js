$(document).ready(function () {
	"use strict"; // start of use strict

	/*==============================
	Menu
	==============================*/
	$('.header__btn').on('click', function() {
		$(this).toggleClass('header__btn--active');
		$('.header__nav').toggleClass('header__nav--active');
	});

	/*==============================
	Back
	==============================*/
	$('.footer__back').on('click', function() {
		$('body,html').animate({
			scrollTop: 0,
			}, 700
		);
	});

	/*==============================
	Select2
	==============================*/
	$('#skills').select2({
		placeholder: "Skills"
	});

	/*==============================
	Scroll bar
	==============================*/
	$('.messages__list, .messages__chat').mCustomScrollbar({
		axis: "y",
		scrollbarPosition: "outside",
		theme: "custom-bar"
	});

	/*==============================
	Range sliders
	==============================*/
	function initializeSlider() {
		if ($('#filter__range').length) {
			var firstSlider = document.getElementById('filter__range');
			noUiSlider.create(firstSlider, {
				range: {
					'min': 0,
					'max': 100000
				},
				step: 1,
				start: [40000, 60000],
				format: wNumb({
					decimals: 0,
					suffix: '次'
				})
			});
			var firstValues = [
				document.getElementById('filter__range-start'),
				document.getElementById('filter__range-end')
			];
			firstSlider.noUiSlider.on('update', function( values, handle ) {
				firstValues[handle].innerHTML = values[handle];
			});
		} else {
			return false;
		}
		return false;
	}
	$(window).on('load', initializeSlider());

});