/*
	Plugin: ryuScroll.
	Description: Function that add new element dyncamically, turning into a inifinite scroll
	Author: RenanYU
	Version: 1.0.0

*/
(function($){

	$.fn.ryuScroll = (function(options){

		var _this = this;

		var onAJAX = false;

		var opts = {
			gap:100,	//Gap between the scroll position and the bottom. when this gap is reached the plugin will 
						//trigger the ajax again adding new children elements into the current element
			nextAjax:true,	//Boolean. true to keeping doing ajax each time the gap value is reached
			ajax:{
				method:'GET',				//Ajax method. Default GET
				url:'',						//URL for ajax
				dataType:'json',			//Ajax data type return
				data:{
					start:0,				//From which position it should start
					page:0					//From which page it should start
				}
			},
			events:{
				beforeajax:undefined,	//A function that will be called before Ajax
				afterajax:undefined,	//A function that will be called after ajax
				reachedbottom:undefined,//A function that will be called when reached the bottom of the element
				reachedtop:undefined,	//A function that will be called when reached the top of the element
				callback:undefined,		//A function that will be called when ajax has finished
				failure:undefined		//A function that will be called when ajax has failed
			},
			config:{
				debug:false,			//Show in the console information about how the plugin is working 
				addlog:false			//Show in the console information about how the plugin is working (Added a LOG)
			},
		}

		$.extend(opts, options);

		if ( options.config != undefined ) {

			if ( options.config.addlog === true ) {

				opts.config.debug = true;		
			}
		}

		var privation = {

			debug:function(location, text){

				if(opts.config.addlog){

					console.log(location, text);

				}else{

					console.info(location, text);

				}

			},

			error:function(location, text){
				
				console.error(location, text);

			},

			beginAjax: function (){

				if ( typeof opts.events.beforeajax == "function" ) {

					if ( opts.config.debug ) privation.debug("BEFORE AJAX","Calling method before ajax");

					opts.events.beforeajax();

				}

				if ( opts.nextAjax === true && onAJAX === false) {

					onAJAX = true;

					if ( opts.config.debug ) privation.debug("EXECUTE AJAX","Ajax being executed");

					privation.ajax();

				}
				
			},

			ajax: function(){

				$.ajax(opts.ajax).done( function ( resp ) {

					var data = $.parseJSON(resp);

					if ( opts.config.debug ) privation.debug("CALLING CALLBACK","Returning data from ajax");

					if ( typeof opts.events.callback == "function" ) opts.events.callback( data );

					if ( opts.config.debug ) privation.debug("AFTER AJAX","Calling method after ajax");

					if ( typeof opts.events.afterajax == "function" ) opts.events.afterajax( data, _this.update );

					onAJAX = false;

				}).fail(function ( resp ){

					if ( typeof opts.events.failure == "function" ) opts.events.failure( data );

					onAJAX = false;

				});
				

			}

		}

		var init = (function(){

			opts.clientHeight = $(_this).get(0).clientHeight;

			$(_this).scroll(function(){
				
				opts.scrollPosition = $(_this).scrollTop();

				if ( opts.config.debug ) privation.debug("GET SCROLL POSITION", opts.scrollPosition);

				if ( opts.scrollPosition + opts.clientHeight == $(_this).get(0).scrollHeight ){
					
					if ( opts.config.debug ) privation.debug("IT REACHED BOTTOM OF THE ELEMENT", $(_this).get(0).scrollHeight);

					if ( typeof opts.events.reachedbottom == "function" )	opts.events.reachedbottom();

				}

				if ( opts.scrollPosition == 0 ) {
					
					if ( opts.config.debug ) privation.debug("IT REACHED TOP OF THE ELEMENT", $(_this).get(0).scrollHeight);

					if ( typeof opts.events.reachedtop == "function" )	opts.events.reachedtop();

				}

				if ( $(_this).get(0).scrollHeight - ( opts.scrollPosition + opts.clientHeight ) <= opts.gap ) {

					privation.beginAjax();

				}


			});
		});

		_this.update = (function(options){

			$.extend(opts, options);

			if ( options.config != undefined ) {

				if ( options.config.addlog === true ) {

					opts.config.debug = true;		
				}
			}

		});

		init();

	});

})($);