$(document).ready(function(){

// Sidebar dropdown items
	(function () {
		$('.js-sidebarDropdown').click(function(event){
			event.preventDefault();
			$(this).parent().next().slideToggle();
			$(this).toggleClass('dropdown-opened');
		
		});
	})();
// Slider init function
	(function () {
		$('.js-articleSlider').slick({
			 dots: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  infinite: true,
		  responsive: [
		    {
		        breakpoint: 960,
		        settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		        breakpoint: 768,
		        settings: {
		        slidesToShow: 1
		      }
		    }
		  ]
		});
	})();

	// Hiding sidebar{
	(function () {
		$('.js-sidebarBtn').click(function(){
			$(this).toggleClass('closedIcon');
			$('.js-sidebar').toggleClass('closedSidebar');
			$('.js-wrapper').toggleClass('biggerWrapper');
		});
	})();

	
})