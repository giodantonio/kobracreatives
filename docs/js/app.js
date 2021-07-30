let open = true;
let modalGallery = [
	{
		pos: 1,
		img: './images/item-1.jpg'
	},
	{
		pos: 2,
		img: './images/item-2.jpg'
	},
	{
		pos: 3,
		img: './images/item-3.jpg'
	},
	{
		pos: 4,
		img: './images/item-4.jpg'
	},
	{
		pos: 5,
		img: './images/item-5.jpg'
	},
	{
		pos: 6,
		img: './images/item-6.jpg'
	}

];

$(document).ready(function () {

	AOS.init({
		easing: 'ease-out-back',
		duration: 1000
	});
	$('.back-to-top').hide();
	clMasonryFolio();
	clStatCount();
	clClientsCarousel();
	clTestimonials();
	clBackToTop();
;

	$('.project-container').click(function (event) {
		// Se captura la posicion, titulo, caption
		let posImg = +this.children[0].children[0].children[0].dataset['imgMostrar'];
		let title = this.children[0].children[0].title;
		let caption_project = this.children[1].children[0].innerText;
		let link_project = this.children[0].children[1].children[2].attributes[0].value;
		contador = 0;
		// Contador de imagenes
		$('#modal-gallery').text(`${posImg}/${modalGallery.length}`);
		// Se rellena la imagen en el modal con su informacion
		for (let p = 0; p < modalGallery.length; p++ ) {
			if(posImg == modalGallery[p].pos) {
				$('.carousel__modal-img').attr("src", modalGallery[p].img);
				$('.modal-info__name').text(title);
				$('.modal-info__caption').text(caption_project);
				$('#btn-link').attr('href', link_project);
				contador = posImg;
				break;
			}
		}
	});

	$(".carousel__modal button").click(function (event) {

		let tgt = event.currentTarget;
		let btn = $(tgt).data('btn');

		if (btn == "prev") {
			let index = contador - 1;
			let imgProjects = $('#p-gallery .project-container');

			if (contador > 1) {
				// Se rellena la imagen en el modal con su informacion
				for (let i = 0; i < imgProjects.length; i++ ) {
					if(index == i+1) {
						// Actualiza contador de imagenes
						$('#modal-gallery').text(`${index}/${modalGallery.length}`);
						// Capta los valores correspondientes
						let imgP = imgProjects[i].children[0].children[0].children[0].attributes[0].value;
						let titleP = imgProjects[i].children[0].children[0].title;
						let captionP = imgProjects[i].children[1].children[0].innerText;
						let linkP = imgProjects[i].children[0].children[1].children[2].attributes[0].value;
						// rellena con la informacion captada
						$('.carousel__modal-img').attr("src", imgP);
						$('.modal-info__name').text(titleP);
						$('.modal-info__caption').text(captionP);
						$('#btn-link').attr('href', linkP);
						contador--;
						break;
					}
				}

			} else {
				$('#modal-gallery').text(`6/${modalGallery.length}`);
					// Capta los valores correspondientes
					let imgP = imgProjects[5].children[0].children[0].children[0].attributes[0].value;
					let titleP = imgProjects[5].children[0].children[0].title;
					let captionP = imgProjects[5].children[1].children[0].innerText;
					let linkP = imgProjects[5].children[0].children[1].children[2].attributes[0].value;
					// rellena con la informacion captada
					$('.carousel__modal-img').attr("src", imgP);
					$('.modal-info__name').text(titleP);
					$('.modal-info__caption').text(captionP);
					$('#btn-link').attr('href', linkP);
					contador = 6;
			}

		} else if (btn == "next") {
			let index = contador + 1;
			let imgProjects = $('#p-gallery .project-container');

			if (contador < imgProjects.length) {
				if (contador == 0) {
					// Actualiza contador de imagenes
					$('#modal-gallery').text(`2/${modalGallery.length}`);
					// Capta los valores correspondientes
					let imgP = imgProjects[1].children[0].children[0].children[0].attributes[0].value;
					let titleP = imgProjects[1].children[0].children[0].title;
					let captionP = imgProjects[1].children[1].children[0].innerText;
					let linkP = imgProjects[1].children[0].children[1].children[2].attributes[0].value;
					// rellena con la informacion captada
					$('.carousel__modal-img').attr("src", imgP);
					$('.modal-info__name').text(titleP);
					$('.modal-info__caption').text(captionP);
					$('#btn-link').attr('href', linkP);
					contador = 2;
				}else {
					// Se rellena la imagen en el modal con su informacion
					for (let i = 0; i < imgProjects.length; i++ ) {
						if(index == i+1) {
							// Actualiza contador de imagenes
							$('#modal-gallery').text(`${index}/${modalGallery.length}`);
							// Capta los valores correspondientes
							let imgP = imgProjects[i].children[0].children[0].children[0].attributes[0].value;
							let titleP = imgProjects[i].children[0].children[0].title;
							let captionP = imgProjects[i].children[1].children[0].innerText;
							let linkP = imgProjects[i].children[0].children[1].children[2].attributes[0].value;
							// rellena con la informacion captada
							$('.carousel__modal-img').attr("src", imgP);
							$('.modal-info__name').text(titleP);
							$('.modal-info__caption').text(captionP);
							$('#btn-link').attr('href', linkP);
							contador++;
							break;
						}
					}
				}
			} else {
				index--;
				for (let i = 0; i < imgProjects.length; i++ ) {
					if(index == imgProjects.length ) {
						// Actualiza contador de imagenes
						$('#modal-gallery').text(`1/${modalGallery.length}`);
						// Capta los valores correspondientes
						let imgP = imgProjects[i].children[0].children[0].children[0].attributes[0].value;
						let titleP = imgProjects[i].children[0].children[0].title;
						let captionP = imgProjects[i].children[1].children[0].innerText;
						let linkP = imgProjects[i].children[0].children[1].children[2].attributes[0].value;
						// rellena con la informacion captada
						$('.carousel__modal-img').attr("src", imgP);
						$('.modal-info__name').text(titleP);
						$('.modal-info__caption').text(captionP);
						$('#btn-link').attr('href', linkP);
						contador = 0;
						break;
					}
				}
			}
		}

	});

	$('#btn-menu').click(function () {
		if ($('#btn-menu').attr('aria-Expanded') == "true") {
			$('#navbarContent').removeClass('swing-out-top-bck');
			$('#navbarContent').addClass('swing-in-top-fwd');
		}else {
			$('#navbarContent').removeClass('swing-in-top-fwd');
			$('#navbarContent').addClass('swing-out-top-bck');
		}
	});

	$(window).resize(function () {
		if ($(window).attr('innerWidth') >= 992) {
			$('#navbarContent').removeClass('swing-out-top-bck');
		}
	});

	// Se programa el hover sobre los items de galeria 'S-Projects'
	$('.project-container').on({
		"mouseover": function() {
			const img = this.children[0].children[0].children[0];
			const contProject = this.children[0].children[1];
			$(img).css("opacity", "0.15").fadeIn("fast");
			$(img).addClass("transition");
			$(contProject).css("display", "block").fadeIn(3000);
		},
		"mouseout": function() {
			const img = this.children[0].children[0].children[0];
			const contProject = this.children[0].children[1];
			$(img).css("opacity", "1");
			$(img).removeClass("transition");
			$(contProject).css("display", "none").fadeOut("fast");
		}
	});



});

var clClientsCarousel = function () {
	new Glider(document.querySelector('.carousel__clients-list'), {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: "auto",
		draggable: true,
		dots: '.carousel__dots',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 6
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			}
		]
	});
};

var clTestimonials = function () {
	new Glider(document.querySelector('.carousel__testimonials-list'), {
		slidesToShow: 1,
		dots: '.testimonials__dots',
		draggable: false,
		arrows: {
		  prev: '.testimonials__prev',
		  next: '.testimonials__next'
		}
	});

};

var clMasonryFolio = function () {
	var containerBricks = $('.grid-container');

	containerBricks.imagesLoaded(function () {
		containerBricks.masonry({
			itemSelector: '.project-container',
			resize: true
		});
	});
};

/* Stat Counter
    * ------------------------------------------------------ */
function clStatCount() {

	var statSection = $(".about-stats"),
		stats = $(".stats__count");

	statSection.waypoint({

		handler: function(direction) {

			if (direction === "down") {

				stats.each(function () {
					var $this = $(this);

					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2500,
						easing: 'swing',
						step: function (curValue) {
							$this.text(Math.ceil(curValue));
						}
					});
				});

			}

			// trigger once only
			this.destroy();

		},

		offset: "90%"

	});
};

/* Back to Top
    * ------------------------------------------------------ */
var clBackToTop = function() {
        
	var pxShow  = 300,         // height on which the button will show
	fadeInTime  = 400,         // how slow/fast you want the button to show
	fadeOutTime = 400,         // how slow/fast you want the button to hide
	scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
	goTopButton = $(".back-to-top");
	
	// Show or hide the sticky footer button
	$(window).on('scroll', function() {
		if ($(window).scrollTop() >= pxShow) {
			$('.back-to-top').show();
			goTopButton.fadeIn(fadeInTime);
		} else {
			goTopButton.fadeOut(fadeOutTime);
		}
	});
};