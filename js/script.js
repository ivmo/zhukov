$(document).ready(function() {
  $('.js_slider-top').slick({
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
  });

  $('.js_main-slider').slick({
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    infinite: true
  });




  $('.js_slider-books').slick({
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
  });

  $('.js_slider-hat').slick({
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
  });


  $("[data-fancybox]").fancybox({
      loop: true
  });


  $(".set > a").on("click", function(evt){
    evt.preventDefault();
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
    }else{
    $(".set > a").removeClass("active");
    $(this).addClass("active");
    $('.content').slideUp(200);
    $(this).siblings('.content').slideDown(200);
    }

  });
  $('.accordion-container .set').first().children('a').trigger('click');
  jQuery("body").on('click', '.main-menu__link', function(e){
    var fixed_offset = 35;
    jQuery('html,body').stop().animate({ scrollTop: jQuery(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  $('a[href="#header-top"]').click(function(){
         $('html, body').animate({scrollTop:0}, 'slow');
         return false;
     });

 $(window).scroll(function () {
   if ($(this).scrollTop() > 600) {
     $('.totop').addClass('show');
   }
   else {
     $('.totop').removeClass('show');
   }
 });


 $('[data-popup]').on('click', function (evt) {
   evt.preventDefault();
   $('.books-popup-bg').addClass('books-popup-bg--show');
   $('[data-id='+$(this).data('popup')+']').addClass('books-popup--show');
 });
 $('.books-popup .popup-close').on('click', function () {
   $('.books-popup').removeClass('books-popup--show');
   $('.books-popup-bg').removeClass('books-popup-bg--show');
 });
 $('.books-popup-bg').on('click', function () {
   $('.books-popup').removeClass('books-popup--show');
   $('.books-popup-bg').removeClass('books-popup-bg--show');
 });

});

$(document).ready(function() {
    // fix by scroll
      var headerInner = $('.main');
      var mobileNav = $('.mobile-nav');
      $(window).scroll(function(){
           if ( $(this).scrollTop() > headerInner.height() ) {
               mobileNav.addClass("mobile-nav--fixed");
               // headerInner.css('margin-bottom', '32px');
           } else {
              if ( $(this).scrollTop() <= headerInner.height() && mobileNav.hasClass("mobile-nav--fixed")) {
              mobileNav.removeClass("mobile-nav--fixed");
               // headerInner.css('margin-bottom', '0');
            }
          }

       });//scroll


       // mmenu initialization
          $('#mobile-menu').mmenu({
            // "extensions": [
            //       "pagedim-black",
            //       "position-right"
            //    ]
             // options
          // }, {
             // configuration
             offCanvas: {
                pageNodetype: "#wrapper-content",
                position: "right"
             }
          });

      var API = $("#mobile-menu").data( "mmenu" );
      $("#cross-btn").click(function(evt) {
        evt.preventDefault();
         API.close();
      });

    //   (function($){
    //     $(window).on("load",function(){
    //         $(".slider-free").mCustomScrollbar({
    //           axis:"x",
    //           theme:"dark-3",
    //           documentTouchScroll: true
    //         });
    //     });
    // })(jQuery);

     });
