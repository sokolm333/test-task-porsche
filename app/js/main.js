$(function () {
	var widthScreen = $(window).width();
	var widthMain = $('.main').width();
	if (widthScreen < widthMain) {
		$('body').removeClass('center');
	} else {
		$('body').addClass('center');
	}

	$('.menu__burger, .menu__list a').on('click', function () {
		$('.menu').toggleClass('menu--active');
		$('.menu__burger').toggleClass('menu__burger--active');
		$('.menu__list').toggleClass('menu__list--active');
		// $('body').toggleClass('hide');
	});

	$('.header__search-button').on('click', (event) => {
		event.preventDefault();
		event.stopPropagation();
		$('.header__input').removeClass('header__input--empty');
		if ($('.header__input').hasClass('header__input--active')) {
			if ($('.header__input').val() == "") {
				$('.header__input').addClass('header__input--empty').focus();
			} else {
				$('.header__search').submit();
				$('.header__input').val("").removeClass('header__input--active');
			}
		} else {
			$('.header__input').addClass('header__input--active').focus();
		}
	});

	$('.header__input').on('click', function () {
		$('.header__input').removeClass('header__input--empty');
	});

	$('.header__input').on('blur', function () {
		if ($('.header__search-button:hover').length == 0) {
			$('.header__input').val("");
			$('.header__input').removeClass('header__input--empty').removeClass('header__input--active');
		}
	});

	$('.product__btn').on('click', function () {
		if ($('.product__desc').hasClass('product__desc--hidden')) {
			$('.product__desc').removeClass('product__desc--hidden');
			$('.product__desc p:not(:first-child)').slideDown('slow');
			$(this).html('Сlose');
		} else {
			$('.product__desc').addClass('product__desc--hidden');
			$('.product__desc p:not(:first-child)').slideUp('slow');
			$(this).html('Details');
		}
	});

	var scroll = window.innerHeight;
	$('.product__more').on('click', function (window) {
		if ($('.product__more').hasClass('product__more--active')) {
			$('.product__more').removeClass('product__more--active');
			$('.product__content').slideUp('slow');
		} else {
			$('.product__more').addClass('product__more--active');
			$('.product__content').slideDown('slow');
			$('body,html').animate({
				scrollTop: scroll
			}, 500);
		}
	});

	$('.demo-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: false,
		autoplay: true,
		autoplaySpeed: 2300,
		prevArrow: '<button type="button" class="slick-prev"><svg width="90" height="60"><use xlink:href="img/sprite.svg#icons--left-arrow"></use></svg></button >',
		nextArrow: '<button type="button" class="slick-next"><svg width="90" height="60"><use xlink:href="img/sprite.svg#icons--right-arrow"></use></svg></button >',
		responsive: [{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 575.98,
			settings: {
				slidesToShow: 1
			}
		}],
		dots: true,
	});
});