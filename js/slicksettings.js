$('.team-carousel').slick({
	arrows: false, //wylaczyenie strzalek
    autoplay: true, //automatyczne przewijanie
    autoplaySpeed: 1500, //czas przewijanie kart domyslnie jest 3000ms
    mobileFirst: true,  //najpierw mobilne urzadzenia
    slidesToShow: 1, //ilosc pokazanych kart
	slidesToScroll: 1, //ilosc przewijanych kart

	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});
