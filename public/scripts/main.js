
// Review carousel
const reviewCarousel = new Swiper(".review-carousel", {
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 24,
	loop: true,
	navigation: {
		nextEl: ".review-carousel-button-next",
		prevEl: ".review-carousel-button-prev",
	},
	breakpoints: {
		1: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
	},
});

// Blog carousel
const blogCarousel = new Swiper(".blog-carousel", {
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 24,
	loop: true,
	navigation: {
		nextEl: ".blog-carousel-button-next",
		prevEl: ".blog-carousel-button-prev",
	},
	breakpoints: {
		1: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
	},
});
