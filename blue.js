		$(document).ready(function(){
			$(".dropdown").hover(            
				function() {
					$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
					$(this).toggleClass('open');        
				},
				function() {
					$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
					$(this).toggleClass('open');       
				}
				);
		});

		$(document).ready(function(){
			$('.owl-carousel').owlCarousel({
						rtl:true,
				    loop:true,
				    margin:10,
				    nav:true,
				responsive:{
				600:{
					items:1
					},
					1000:{
						items:1
					}
				}
			})
	});	

		$(document).ready(function(){
			// init Isotope
			var $grid = $('.grid').isotope({
				itemSelector: '.element-item'
			});
			var filterFns = {

			};
			$('.button').on('click', function () {
				var filterValue = $(this).attr('data-filter');
				// use filterFn if matches value
				filterValue = filterFns[filterValue] || filterValue;
				$grid.isotope({
					filter: filterValue
				});
			});
		});	

// ham dso tu tang 
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


// js animate.css
	new WOW().init();