$(document).ready(function(){
    $("#promotion-carousel").owlCarousel({
        items:1,
        dots: true,
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        touchDrag: true,
        dotsEach:1
    });

    $(".bottom-banner").owlCarousel({
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        touchDrag: true,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                dots: true,
                dotsEach: 1
            },
            600:{
                items: 2,
                nav:true,
                margin: 10,
                dots: false 
            }
        }
    });
});

function cateReadMore() {
    $(".cate-read-more").remove();
    $(".full-text").removeClass('min-full-text');
    return false;
}

function pickColor(obj){
    $(obj).closest('div').find(".active").removeClass('active');
    $(obj).addClass('active');
    $('input[name="color"]').val($(obj).data("color"));
}

function pickDeposit(obj){
    $this=$(obj);
    $parent=$this.closest('div');
    $parent.find('.active').removeClass('active');
    $this.addClass('active');

    $(".register input[name='payment_method']").val($this.data('deposit'));
    return false;
}

jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    var container = $('.container-md.px-0');
    var desktop = $('.desktop-container');
    if (ww < 500) {
      for (i=0; i < container.length ; i++){
          $(container[i]).removeClass('container-md');
          $(container[i]).removeClass('px-0');
      };
      $('.homepage-menu-cate .menu-cate.d-flex a').unwrap();
      $('.homepage-menu-cate .menu-cate-content').addClass('desktop-menu-cate');
      $('.group-featured-apple .box-group-featured .group-left img').attr("src","img/banner/ph_-ki_n-apple-2.jpg");
    } else if (ww >= 800) {
        for (i=0; i < desktop.length ; i++){
            $(desktop[i]).addClass('container-md');
            $(desktop[i]).addClass('px-0');
        };
        $('.homepage-menu-cate .menu-cate-content.desktop-menu-cate a').wrapAll("<div class='menu-cate d-flex'></div>");
        $('.homepage-menu-cate .menu-cate-content').removeClass('desktop-menu-cate');
        $('.homepage-content-top .group-featured .homepage-content-wrapper .slider-content .products').addClass('owl-carousel owl-theme');
        
        $(".flashsale-carousel").owlCarousel({
            items:5,
            dots: false,
            autoplay: true,
            autoplayTimeout:5000,
            autoplayHoverPause:false,
            touchDrag: true
        });

        $(".volunteer-carousel").owlCarousel({
          items:4,
          dots: false,
          autoplay: true,
          autoplayTimeout:5000,
          autoplayHoverPause:false,
          touchDrag: true,
          margin: 10,
          loop: true
        });

        $(".apple-carousel").owlCarousel({
          items:4,
          dots: false,
          autoplay: true,
          autoplayTimeout:5000,
          autoplayHoverPause:false,
          touchDrag: true,
          margin: 10,
          loop: true
        });
        
        $('.group-featured-apple .box-group-featured .group-left img').attr("src","img/banner/apple.jpg");
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  alterClass();
});
