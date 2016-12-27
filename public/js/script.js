$(window).on('load', function() {
	if ($("#sidebar").is(":visible")){
  		$("#main-content").css("margin-left", 250 - $("#main-content").offset().left + "px");
  	}	
	else {
		$("#main-content").css("margin-left", "0px");
	}
	$("#sidebar-toggle").click(function() {
  		$("#sidebar").toggle(300, function(){
  			if ($("#sidebar").is(':visible')){
  				$("#main-content").css("margin-left", 250 - $("#main-content").offset().left + "px");
			}
	   		else {
	  			$("#main-content").css("margin-left", "0px");
	  		}
  		});
	});

	$("#home-see-more").css("bottom", $(document).scrollTop());
	$(document).scroll(function(){
		$("#home-see-more").css("bottom", $(document).scrollTop());
	});

	$("#home-header-background-triangle").css("border-width", "0 0 400px " + Math.max($(window).width(), $(".container").width()) + "px");
	$(window).resize(function(){
		$("#home-header-background-triangle").css("border-width", "0 0 400px " + Math.max($(window).width(), $(".container").width()) + "px");
	});

	$("#home-see-more").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#home-menu").offset().top
	    }, 1000);

	});

	$(".sidebar-menu-link").click(function() {
	    $('html, body').animate({
	        scrollTop: $($(this).attr("href")).offset().top - 90
	    }, 1000);
	});
});
