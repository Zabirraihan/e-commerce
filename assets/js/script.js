$(function () {
  /* top  header slick */
  $(".slick_slider").slick({
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
  });

  /* nav section js */
  $(".dropdown_item").on("click", function () {
    $(".dropdown_item1").addClass(".show");
  });

  $(window).on("scroll", function () {
    var sticky = $(window).scrollTop();
    if (sticky > 2000) {
      $(".navbar_menu").addClass("sticky");
    } else {
      $(".navbar_menu").removeClass("sticky");
    }
    // back to top
    if (sticky > 2000) {
      $("#back").show();
    } else {
      $("#back").hide();
    }
  });
  //back to top
  $("#back").on("click", function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });
  // banner slick slider
  $(".banner_section").slick({
    autoplay: true,
    nextArrow: '<i class="fas fa-chevron-right slider_icon arrow_right"></i>',
    prevArrow: '<i class="fas fa-chevron-left slider_icon arrow_left"></i>,',
  });

  //featured categories slick
  $(".featured_categories_slider").slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    prevArrow:
      '<i class="fas fa-long-arrow-alt-right  slider_icon featured_icon_left"></i>',
    nextArrow:
      '<i class="fas fa-long-arrow-alt-left slider_icon  featured_icon_right"></i>',
    responsive:[
      {
        breakpoint:1200,
        settings:{
          slidesToShow:4,
          slidesToScroll:1,
          
        }
      },{
        breakpoint:768,
        settings:{
          slidesToShow:3,
          slidesToScroll:1,
          
        }
      },{
        breakpoint:575,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          
        }
      }
    ]  
  });

  // daily best item
  $(".daily_best_item").slick({
    slidesToShow: 4,
    autoplay: true,
    nextArrow: '<i class="fas fa-chevron-right slider_icon arrow_right"></i>',
    prevArrow: '<i class="fas fa-chevron-left slider_icon arrow_left"></i>,',
    responsive:[
      {
        breakpoint:1200,
        settings:{
          slidesToShow:3,
          slidesToScroll:1,
          
        }
      },{
        breakpoint:576,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
          
        }
      }
    ]
  });

  // deals section countdown
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<ul class="d-flex"><li class="w-25"<span>%D</span><span>Days</span></li><li class="w-25"<span>%H</span><span>Hours</span></li><li class="w-25"<span>%M</span><span>Mins</span></li><li class="w-25"<span>%S</span><span></span></li></ul>'
        )
      );
    });
  });

  //preloader
  $(window).on("load", function () {
    $("#gif").fadeOut(2000);
  });
});
