$(function(){

    /* top  header slick */
    $('.slick_slider').slick({
        arrows:false,
        vertical:true,
        verticalSwiping:true,
        autoPlay:true,
    })


    /* nav section js */
    $('.dropdown_item').on('click',function(){
        $('.dropdown_list').addClass('.show')
    })

    // banner slick slider
    $('.banner_section').slick({
        autoplay:true,
        nextArrow:'<i class="fas fa-chevron-right arrow_right"></i>',
        prevArrow:'<i class="fas fa-chevron-left arrow_left"></i>,'
    })
})