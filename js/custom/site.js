if(jQuery){

	var onWindowResize = function(args){
		if(jQuery(window).innerWidth() < 782){
			jQuery(args.menu_toggle_button).show();
		}else{
			jQuery(args.menu_selector).removeClass('visible')
			jQuery(args.menu_toggle_button).hide();
		}

	}

	function initMenu(args){
		args = args || {
			menu_selector: "#menu-main-menu",
			menu_toggle_button: ".toggle-menu-button"
		};

		jQuery(window).resize(function(e){
			onWindowResize(args);
		})
		onWindowResize(args);

		jQuery(args.menu_toggle_button).click(function(e){
					alert('hallo');
			jQuery(args.menu_selector).toggleClass('visible')
		});
	}
}
