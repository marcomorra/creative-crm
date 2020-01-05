$(document).ready(function() {
    $('.ba-menu-btn').on('click', function(){
        let menu = $('.ba-menu');

        if (menu.hasClass('open')){
            menu.removeClass('open').hide();
        } else {
            menu.addClass('open').show();
        }
    });
    $(window).on('resize', function(){
        if($(this).width() > 991 ){
            $('.ba-menu').addClass('open').show();
        } else {
            $('.ba-menu').removeClass('open').hide();
        }
    })


})