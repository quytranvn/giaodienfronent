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

//hieu ung hoa anh dao 
var pictureSrc="image/laphong.png"; //the location of the snowflakes
var pictureWidth = 60; //the width of the snowflakes
var pictureHeight = 80; //the height of the snowflakes
var numFlakes = 10; //the number of snowflakes
var downSpeed = 0.01; //the falling speed of snowflakes (portion of screen per 100 ms)
var lrFlakes = 15; //the speed that the snowflakes should swing from side to side


if( typeof( numFlakes ) != 'number' || Math.round( numFlakes ) != numFlakes || numFlakes < 1 ) { numFlakes = 10; }

//draw the snowflakes
for( var x = 0; x < numFlakes; x++ ) {
if( document.layers ) { //releave NS4 bug
document.write('<layer id="snFlkDiv'+x+'"><imgsrc="'+pictureSrc+'" height="'+pictureHeight+'"width="'+pictureWidth+'" alt="*" border="0"></layer>');
} else {
document.write('<div style="position:absolute; z-index:9999;"id="snFlkDiv'+x+'"><img src="'+pictureSrc+'"height="'+pictureHeight+'" width="'+pictureWidth+'" alt="*"border="0"></div>');
}
}

//calculate initial positions (in portions of browser window size)
var xcoords = new Array(), ycoords = new Array(), snFlkTemp;
for( var x = 0; x < numFlakes; x++ ) {
xcoords[x] = ( x + 1 ) / ( numFlakes + 1 );
do { snFlkTemp = Math.round( ( numFlakes - 1 ) * Math.random() );
} while( typeof( ycoords[snFlkTemp] ) == 'number' );
ycoords[snFlkTemp] = x / numFlakes;
}

//now animate
function flakeFall() {
if( !getRefToDivNest('snFlkDiv0') ) { return; }
var scrWidth = 0, scrHeight = 0, scrollHeight = 0, scrollWidth = 0;
//find screen settings for all variations. doing this every time allows for resizing and scrolling
if( typeof( window.innerWidth ) == 'number' ) { scrWidth = window.innerWidth; scrHeight = window.innerHeight; } else {
if( document.documentElement && (document.documentElement.clientWidth ||document.documentElement.clientHeight ) ) {
scrWidth = document.documentElement.clientWidth; scrHeight = document.documentElement.clientHeight; } else {
if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
scrWidth = document.body.clientWidth; scrHeight = document.body.clientHeight; } } }
if( typeof( window.pageYOffset ) == 'number' ) { scrollHeight = pageYOffset; scrollWidth = pageXOffset; } else {
if( document.body && ( document.body.scrollLeft ||document.body.scrollTop ) ) { scrollHeight = document.body.scrollTop;scrollWidth = document.body.scrollLeft; } else {
if(document.documentElement && (document.documentElement.scrollLeft ||document.documentElement.scrollTop ) ) { scrollHeight =document.documentElement.scrollTop; scrollWidth =document.documentElement.scrollLeft; } }
}
//move the snowflakes to their new position
for( var x = 0; x < numFlakes; x++ ) {
if( ycoords[x] * scrHeight > scrHeight - pictureHeight ) { ycoords[x] = 0; }
var divRef = getRefToDivNest('snFlkDiv'+x); if( !divRef ) { return; }
if( divRef.style ) { divRef = divRef.style; } var oPix = document.childNodes ? 'px' : 0;
divRef.top = ( Math.round( ycoords[x] * scrHeight ) + scrollHeight ) + oPix;
divRef.left = ( Math.round( ( ( xcoords[x] * scrWidth ) - (pictureWidth / 2 ) ) + ( ( scrWidth / ( ( numFlakes + 1 ) * 4 ) ) * (Math.sin( lrFlakes * ycoords[x] ) - Math.sin( 3 * lrFlakes * ycoords[x]) ) ) ) + scrollWidth ) + oPix;
ycoords[x] += downSpeed;
}
}

//DHTML handlers
function getRefToDivNest(divName) {
if( document.layers ) { return document.layers[divName]; } //NS4
if( document[divName] ) { return document[divName]; } //NS4 also
if( document.getElementById ) { return document.getElementById(divName); } //DOM (IE5+, NS6+, Mozilla0.9+, Opera)
if( document.all ) { return document.all[divName]; } //Proprietary DOM - IE4
return false;
}

window.setInterval('flakeFall();',100);






// js contact
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}