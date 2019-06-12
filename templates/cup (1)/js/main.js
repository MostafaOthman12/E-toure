// interval is in milliseconds. 1000 = 1 second -> so 1000 * 10 = 10 seconds
$('.carousel').carousel({
    interval: 600 * 3
});
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
