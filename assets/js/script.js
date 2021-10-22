$(function(){

    /* top  header slick */
    $('.slick_slider').slick({
        arrows:false,
        vertical:true,
        verticalSwiping:true,
        autoplay:true,
    })


    /* nav section js */
    $('.dropdown_item').on('click',function(){
        $('.dropdown_item1').addClass('.show')
    })

    $(window).on("scroll",function(){
        var sticky = $(window).scrollTop();
        if(sticky > 180){
            $(".navbar_menu").addClass("sticky")
        }else{
            $(".navbar_menu").removeClass("sticky")
        }
    })

    // banner slick slider
    $('.banner_section').slick({
        autoplay:true,
        nextArrow:'<i class="fas fa-chevron-right slider_icon arrow_right"></i>',
        prevArrow:'<i class="fas fa-chevron-left slider_icon arrow_left"></i>,'
    })

    //featured categories slick
    $('.featured_categories_slider').slick({
        slidesToShow: 10,
        slidesToScroll: 3,
        prevArrow: '<i class="fas fa-long-arrow-alt-right  slider_icon featured_icon_left"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-left slider_icon  featured_icon_right"></i>',
    })
})