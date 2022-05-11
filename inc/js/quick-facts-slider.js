window.addEventListener("DOMContentLoaded", (event) => {
	let swiper = new Swiper(".quick-facts-slider", {
		autoplay: true,
		loop: true,
		spaceBetween: 30,
		effect: "fade",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
});
