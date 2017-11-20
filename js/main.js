/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// JS by https://codepen.io/jackrugile/pen/juBGD?page=23

(function($) {

	var settings = {

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

	};

	skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer'),
			$main = $('#main');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.mobile) {

				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);

			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Footer.
			skel.on('+medium', function() {
				$footer.insertAfter($main);
			});

			skel.on('-medium !medium', function() {
				$footer.appendTo($header);
			});

		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
					if (skel.vars.browser == 'ie'
					||	skel.vars.mobile)
						settings.parallax = false;

				if (settings.parallax) {

					skel.on('change', function() {

						if (skel.breakpoint('medium').active) {

							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');

						}
						else {

							$header.css('background-position', 'left 0px');

							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});

						}

					});

					$window.on('load', function() {
						$window.triggerHandler('scroll');
					});

				}

		// Main Sections: Two.

			// Lightbox gallery.
				$window.on('load', function() {

					$('#two').poptrox({
						caption: function($a) { return $a.next('h3').text(); },
						overlayColor: '#2c2c2c',
						overlayOpacity: 0.85,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.work-item a.image',
						usePopupCaption: true,
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
					});

				});

	});

})(jQuery);

var c = document.createElement( 'canvas' ),
    ctx = c.getContext( '2d' ),
    rows = cols = 36,
    gap = 1,
    grays = [
      [ 26, 29 ],
      [ 32, 37 ],
      [ 42, 50 ],
      [ 46, 56 ],
      [ 54, 66 ]
    ],
    sizes = [ 4, 9, 14 ],
    frequency = [ false, 30, 9 ],
    cw = ch = c.width = c.height = ( sizes[ 0 ] + gap ) * rows;

function random( max, min ) {
  var min = min || 0;
  return Math.random() * ( max - min ) + min;
}

function cell( x, y, size ) {
  var gray = Math.floor( random( grays.length ) ),
      fill = grays[ gray ][ 0 ],
      stroke = grays[ gray ][ 1 ];
  ctx.fillStyle = 'rgb(' + fill + ', ' + fill + ', ' + fill + ')';
  ctx.strokeStyle = 'rgb(' + stroke + ', ' + stroke + ', ' + stroke + ')';
  ctx.fillRect( x, y, size, size );    
  ctx.strokeRect( x + 0.5, y + 0.5, size - 1, size - 1 );
}

function generate() {
  var store = [];
  
  ctx.fillStyle = 'rgb(18, 18, 18)';
  ctx.fillRect( 0, 0, cw, ch );
  
  for( var x = 0; x < cols; x ++ ){
    for( var y = 0; y < rows; y ++ ){
      cell( 
        ( x * sizes[ 0 ] ) + ( x * gap ), 
        ( y * sizes[ 0 ] ) + ( y * gap ), 
        sizes[ 0 ] 
      );   
    }
  }
  
  for( var freq = 0; freq < frequency.length; freq++ ) {
    if( frequency[ freq ] ){
      for( var i = 0; i < frequency[ freq ]; ) {
        var canDraw = true,
            sizeNew = sizes[ freq ],
            pad = Math.ceil( ( sizeNew / cw ) * rows );
            xNew = Math.floor( random( 1, cols - pad ) ) * ( ch / cols ),
            yNew = Math.floor( random( 1, rows - pad ) ) * ( cw / rows ),            
            storeLength = store.length;
        if( storeLength ) {
          for( var j = 0; j < storeLength; j++ ) {
            var storeCell = store[ j ];
            if( !(
              xNew + sizeNew + ( cw / cols ) < storeCell.x ||
              yNew + sizeNew + ( ch / rows ) < storeCell.y ||
              xNew > storeCell.x + storeCell.size + ( cw / cols ) ||
              yNew > storeCell.y + storeCell.size + ( ch / rows )
            ) ) {
              canDraw = false;
              break;
            }
          }          
        }
        if( canDraw ) {
          cell( xNew, yNew, sizeNew );
          store.push( { x: xNew, y: yNew, size: sizeNew } );
          i++;
        }
      }
    }
  }
  
  document.body.style.background = 'url(' + c.toDataURL() + ')';
}

window.addEventListener( 'click', generate );
generate();