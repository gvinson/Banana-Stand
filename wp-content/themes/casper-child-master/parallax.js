jQuery(document).ready(function() {
	var $ = jQuery;
	$(window).bind('scroll',function(e){
   		parallaxScroll();
   	});
	function parallaxScroll(){
   		var scrolledY = $(window).scrollTop();
   		$("#masthead").css('background-position','center -'+((scrolledY*0.26))+'px');
		/*$('.bgWrapper').css('background-position','center -'+((scrolledY*0.2))+'px');
		$('.shark').css('top','-'+((scrolledY*0.5))+'px');
		$('.fish').css('top','-'+((scrolledY*0.8))+'px');*/
   	}
});