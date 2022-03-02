jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 600) {
        $('.test').removeClass('blue');
      } else if (ww >= 601) {
        $('.test').addClass('blue');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });

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