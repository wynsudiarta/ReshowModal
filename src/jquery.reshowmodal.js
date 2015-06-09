/*
 *  jquery-reshowmodal - v1.0
 *  Reshow the module depends on the count of pages visited.
 *
 *
 *  Made by Wayan Sudiarta
 *  Under MIT License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

	"use strict";

	var defaults = {
			delay: 1000,
			visitNumber: 3
		};

	// The actual plugin constructor
	function Plugin ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this.init();
	}

	// Avoid Plugin.prototype conflicts
	$.extend(Plugin.prototype, {
		init: function () {

			var delay = this.settings.delay,
				number = this.settings.visitNumber;

			var modal = $(this.element),
				close = modal.find( ".md-close" );

			close.click(function(e){
				e.preventDefault();

				modal.removeClass('md-show');

				if(modal.hasClass('md-setperspective')){
					$(document).removeClass('md-perspective')
				}
			});


			if ( $.cookie("visited") == null) {
				$.cookie('visited', '0');
			}else{
				var visited = $.cookie("visited", Number);
					visited++;
					$.cookie("visited", visited);
			}

			setTimeout(function(){
				var visited = $.cookie("visited", Number);
				if (visited % number !== 0) return;
				modal.addClass('md-show');
			},delay);
		}
	});

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn.ReshowModal = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_ReshowModal" ) ) {
				$.data( this, "plugin_ReshowModal", new Plugin( this, options ) );
			}
		});
	};

})( jQuery, window, document );
