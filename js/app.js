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
    $('#showSearch').on('click', function(){

        let searchForm = $('.ba-search-form');
        // let toolbar = $('.ba-toolbar');

        // if(!searchFrom.hasClass('open')){

        //     let searchPositionY = toolbar.offset().top + toolbar.innerHeight();
        //     searchFrom.css('transform', 'translateY(' + searchPositionY + 'px)' );
        // } else {
        //     searchFrom.css('transform', 'translateY(-100%)')
        // }
        searchForm.toggleClass('open');
    })

})