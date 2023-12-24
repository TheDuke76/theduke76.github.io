document.addEventListener('DOMContentLoaded', function () {
	const slider = new A11YSlider(document.querySelector('.slider'), {
	  slidesToShow: 1,
	  dots: true,
	  arrows: false,
	  responsive: {
		320: {
		  slidesToShow: 1,
		},
		475: {
		  slidesToShow: 2,
		},
		768: {
		  slidesToShow: 3,
		},
		960: {
		  slidesToShow: 4,
		}
	  }
	});
	
	
	document.querySelectorAll('.js-nav-link').forEach(el => el.addEventListener('click', (e) => {
		e.preventDefault();
		let navTarget = e.target.href;
		navTarget = navTarget.split('#')[1];

		let navPos = document.getElementById(navTarget);

		let newPos = navPos.getBoundingClientRect().top;

		let offsetPos = newPos + window.pageYOffset - 45;

	window.scrollTo({
		top: offsetPos, 
		behavior: 'smooth'
	});
		
	}));

    document.querySelectorAll('.js-tab').forEach(el => el.addEventListener('click', (e) => {
		let slideControl = e.target.getAttribute('aria-controls');
		Array.from(document.querySelectorAll('.js-tab, .slide')).forEach(function(el) {
			el.classList.remove('active');			
		});
		document.querySelector('[aria-controls=' + slideControl+']').classList.add("active");
		document.getElementById(slideControl).classList.add("active");
	}));
	
	
}, false);