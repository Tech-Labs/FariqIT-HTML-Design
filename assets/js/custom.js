// parti background
$(document).ready(function () {
    jQuery('.poly-overlay').each(function () {
        jQuery(this).append('<div class="left-poly-side"></div>');
        jQuery(this).append('<div class="right-poly-side"></div>');
        var sh = jQuery(this).data('bgheight');
        var lw = jQuery(this).data('leftwidth');
        var rw = jQuery(this).data('rightwidth');
        var bgcol = jQuery(this).data('bgcolor');
        var windowWidth = $(window).width();
        $(".left-poly-side").css({
            "border-bottom": '50px solid ' + bgcol
        });
        $(".right-poly-side").css({
            "border-bottom": '50px solid ' + bgcol
        });
        $(".left-poly-side").css({
            "border-right": windowWidth / 2 + 'px solid transparent'
        });
        $(".right-poly-side").css({
            "border-left": windowWidth / 2 + 'px solid transparent'
        });
    });
    // wow scripts
    new WOW().init();
    
    // validate 
    
    $("#signupForm").validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
			},
			
		});

    
    // owl scripts
  
    
    jQuery('.cleints-owl').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    center:true,
        dots:false,
        navText:["<i class='icons8-right-pointing-arrow'></i>","<i class='icons8-left-arrow'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    
});