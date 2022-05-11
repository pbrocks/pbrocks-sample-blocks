document.onreadystatechange = function () {
	if (document.readyState === "interactive") {
		let Swipes = new Swiper('.swiper-container', {
			loop: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
			},
		});
		console.log('document.readyState === "interactive"')
		console.log('Swipes.params')
		console.info(Swipes.params)
	}
};
