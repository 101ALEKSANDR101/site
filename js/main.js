"use strict"

function ibg() {
	let ibg = document.querySelectorAll('.ibg');
	for(let i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelectorAll('img')) {
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
};

ibg();

$(window).resize(function(event) {
	mainblock();
});
function mainblock() {
	let h = $(window).outerHeight();
	$('.mainblock').css('min-height', h);
};

mainblock();

let scrolls = document.querySelectorAll('.menu__link[data-goto]');
if(scrolls.length > 0) {
	scrolls.forEach(scroll => {
		scroll.addEventListener('click', scroller)
	});

	function scroller(event) {
		event.preventDefault();
		let scroll = event.target;
		if(scroll.dataset.goto && document.querySelector(scroll.dataset.goto)) {
			let scrollObject = document.querySelector(scroll.dataset.goto);
			let scrollValue = scrollObject.getBoundingClientRect().top + scrollY;

			window.scrollTo({
				top: scrollValue,
				behavior: 'smooth'
			});
		}
	}
};

$('.menu__link[data-goto]').click(function(event) {
	$('.menu__link[data-goto]').removeClass('active__link');
	$(this).addClass('active__link');
});

$('.menu__link[data-filter]').click(function(e) {
	let i = $(this).data('filter');
	if(i == 1) {
		$('.portfolio__element.element').show();
	}else{
		$('.portfolio__element.element').hide();
		$('.portfolio__element.element.f_' + i).show();
	}
	$('.menu__link[data-filter]').removeClass('active__filter');
	$(this).addClass('active__filter');
	return false;
});

$(window).scroll(function(event) {
	let s = 0 - $(this).scrollTop()/2;
	$('.mainblock__bg').css('transform', 'translate3d(0, '+s+'px, 0)');
});