$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        dots: true,
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        touchDrag: true,
        dotsEach:1
    });
  });

function cateReadMore() {
    $(".cate-read-more").remove();
    $(".full-text").removeClass('min-full-text');
    return false;
}