var scrollButton = $("#scroll-top");
$(window).scroll(function(){
    if( $(this).scrollTop() >= 700){
        scrollButton.show();
    }
    else{
        scrollButton.hide();
    }
    
    scrollButton.click(function(){
        $("html,body").animate({scrollTop :0 }, 700);
        preventDefault();
    });
});

$(window).on('load', function() {
    $(".loading-overlay .spinner").fadeOut(5000, 
        function(){
            $(this).parent().fadeOut(1000,
            function(){
                $(this).remove();
        });
    });
    $("body").css("overflow","auto");

});
$(function(){
    "use strict";
    $('.skitter-large').skitter({
        auto_play: true,
        progressbar: true,
        dots: false,
        numbers: true,
        thumbs: true

    });
});
