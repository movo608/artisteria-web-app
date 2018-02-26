
jQuery(document).ready(function() {
	
    /*
        Background slideshow
    */    
    $('.testimonials-container').backstretch([
        "/images/portraits/2.jpg",
        "/images/portraits/1.jpg"
    ], {duration: 3000, fade: 750});
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });
	
});
