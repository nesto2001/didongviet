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
    var fscarou= $('.flashsale-carousel');
    var apcarou= $('.apple-carousel');
    var popcarou= $('.popular-people-slider');
    var volunteercarou= $('.volunteer-right.influencer-slider');
    if (ww < 500) {
      for (i=0; i < container.length ; i++){
          $(container[i]).removeClass('container-md');
          $(container[i]).removeClass('px-0');
      };
      $('.desktop-product-view').unwrap();
      $('.homepage-menu-cate .menu-cate.d-flex a').unwrap();
      $('.homepage-menu-cate .menu-cate-content').addClass('desktop-menu-cate');
      fscarou.trigger('destroy.owl.carousel');
      apcarou.trigger('destroy.owl.carousel');
      popcarou.trigger('destroy.owl.carousel');
      volunteercarou.trigger('destroy.owl.carousel');
      $('.homepage-content-top .group-featured .homepage-content-wrapper .slider-content .products').removeClass('owl-carousel owl-theme');
      $('.apple-carousel').removeClass('owl-carousel owl-theme');
      $('.popular-people-slider').removeClass('owl-carousel owl-theme');
      $('.volunteer-right.influencer-slider').removeClass('owl-carousel owl-theme');
      $('.group-featured-apple .box-group-featured .group-left img').attr("src","img/banner/ph_-ki_n-apple-2.jpg");

    } else if (ww >= 800) {
        $('.desktop-product-view').wrapAll("<div class='product-specs-info d-flex desktop-container'></div>");
        var desktop = $('.desktop-container');
        for (i=0; i < desktop.length ; i++){
            $(desktop[i]).addClass('container-md');
            $(desktop[i]).addClass('px-0');
        };
        $('.apple-carousel').addClass('owl-carousel owl-theme');
        $('.volunteer-right.influencer-slider').addClass('owl-carousel owl-theme');
        $('.popular-people-slider').addClass('owl-carousel owl-theme');
        $('.product-specs-info').removeClass('px-0');
        $('.homepage-menu-cate .menu-cate-content.desktop-menu-cate a').wrapAll("<div class='menu-cate d-flex'></div>");
        $('.homepage-menu-cate .menu-cate-content').removeClass('desktop-menu-cate');
        $('.homepage-content-top .group-featured.desktop-container .homepage-content-wrapper .slider-content .products').addClass('owl-carousel owl-theme');
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

        $(".popular-people-slider").owlCarousel({
            items:4,
            dots: false,
            autoplay: true,
            autoplayTimeout:5000,
            autoplayHoverPause:false,
            touchDrag: true,
            margin: 10,
            loop: true,
            autoWidth:true
        });

        $(".news-slider").owlCarousel({
            items: 6,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause:false,
            touchDrag: true,
            margin: 10,
        });


        $('.group-featured-apple .box-group-featured .group-left img').attr("src","img/banner/apple.jpg");
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  alterClass();
});

function showImage(obj){
    $this=$(obj);
    $('.wait-showroom').css('display','inline-block');
    var color=$this.data('title');
    var imgholder=$('.fotorama__active img');
    var currentActive = $('.opt_attr.active');
    currentActive.removeClass('active');
    setTimeout(function(){
        $('.wait-showroom').css('display','none');
        if (color === 'Màu xanh'){
            imgholder.attr('src','img/media/product/samsung-galaxy-s22-128gb-mau-xanh-didongviet.jpeg');
            $('.fotorama__nav-wrap').attr('style','display: none;');
        }
        else if (color === 'Màu trắng'){
            imgholder.attr('src','img/media/product/samsung-galaxy-s22-128gb-didongviet.jpg');
            $('.fotorama__nav-wrap').attr('style','display: none;');
        }
        else if (color === 'Màu đen'){
            imgholder.attr('src','img/media/product/samsung-galaxy-s22-128gb-mau-den-didongviet.jpeg');
            $('.fotorama__nav-wrap').attr('style','display: none;');
        }
        else if (color === 'Màu hồng'){
            imgholder.attr('src','img/media/product/samsung-galaxy-s22-128gb-mau-hong-didongviet.jpeg');
            $('.fotorama__nav-wrap').attr('style','display: none;');
        };
    }, 200);
    $this.addClass('active');
    
}


function showSubmenu(obj){
    $this=$(obj);
    var menu1 = $('#nav-menu-1');
    var menu2 = $('#nav-menu-2');
    var menu3 = $('#nav-menu-3');
    var menu4 = $('#nav-menu-4');
    var menu5 = $('#nav-menu-5');
    var menu6 = $('#nav-menu-6');
    $parent=$this.closest('ul');
    $parent.hide();
    $('.mobile-nav-sidemenu').removeClass('toggle-on');
    if ($this.data('target')==1){
        menu1.addClass('toggle-on');
    }
    else if ($this.data('target')==2){
        menu2.addClass('toggle-on');
    }
    else if ($this.data('target')==3){
        menu3.addClass('toggle-on');
    }
    else if ($this.data('target')==4){
        menu4.addClass('toggle-on');
    }
    else if ($this.data('target')==5){
        menu5.addClass('toggle-on');
    }
    else{
        menu6.addClass('toggle-on');
    };
}

$('.prev-nav').click(function (){
    $('.mobile-nav-sidemenu').removeClass('toggle-on');
    $('.nav-items-wrapper').show();
});

$('.nav-toggler').click(function(){
    $('html').addClass('nav-open');
    $('.mobile-modals-wrapper').show();
    $('.close-nav').show()
});


$('.close-nav').click(function(){
    $('.mobile-modals-wrapper').hide();
    $('.close-nav').hide()
    $('html').removeClass('nav-open');
});

$('#filterMore').click(function(){
    $('.block.filter').show();
    $('.filter-category').show();
    $('.filter-more').hide();
});
