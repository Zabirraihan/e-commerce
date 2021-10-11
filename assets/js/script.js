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
})