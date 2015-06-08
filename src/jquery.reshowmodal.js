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


	var pluginName = "ReshowModal",
		defaults = {
			delay: 1000,
			visitNumber: 3
		};

	// The actual plugin constructor
	function Plugin ( element, options ) {
		this.el_id = "#"+element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	// Avoid Plugin.prototype conflicts
	$.extend(Plugin.prototype, {
		init: function () {

			var delay = this.settings.delay;
			var modal = document.querySelector(  this.el_id ),
				close = modal.querySelector( ".md-close" );

			var that = this;

			close.addEventListener( "click", function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( modal, 'md-setperspective' ) );
			}

			if ( $.cookie("visited") == null) {
				setTimeout(function(){
					classie.add( modal, "md-show" );
				},delay);
				$.cookie('visited', '1', { path: '/' });
			}else{
				var visited = $.cookie("visited", Number);
				if (visited == this.settings.visitNumber){
					$.removeCookie('visited', { path: '/' });
				}else{
					visited++;
					$.cookie('visited', visited, { path: '/' });
				}
			}
		}
	});

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new Plugin( $(this).attr("id"), options ) );
			}
		});
	};

})( jQuery, window, document );
