jQuery(function() {
	var header_height = jQuery('header').height();

	jQuery(window).scroll(function() {
		var scroll_height = jQuery(document).scrollTop();

		if (scroll_height >= header_height) {			
			jQuery('#navigation').addClass('fixed-nav');
			jQuery('.empty').css('height', 76);

		}

		else {
			jQuery('#navigation').removeClass('fixed-nav');
			jQuery('.empty').css('height', 0);
		}
	});
});