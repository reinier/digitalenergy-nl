$(document).ready(function(){

	var dpr = 1;
    if(window.devicePixelRatio !== undefined) dpr = window.devicePixelRatio;
    $(".retina").each( function() {
        var imgStr = $(this).attr('image-x' + dpr);
        if(!imgStr )
            imgStr  = $(this).attr('image-x1');
        $(this).attr('src',  imgStr);
    });


});