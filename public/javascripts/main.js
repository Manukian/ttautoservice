$(document).ready(function() {
    
    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
              scrollTop: $(this).offset().top
            }, 1000);
        });
    }
    
    $('.bottom').click(function(){
        $('#map').scrollView();
    });
    
    setTimeout(function() {
        $('.we_work').addClass('transform_clear');
        $('.phone').addClass('transform_clear');
        $('.vw').addClass('transform_clear');
        $('.email').addClass('transform_clear');
    }, 600);
    setTimeout(function() {
        $('.header_big').addClass('transform_clear');
    }, 900);
    setTimeout(function() {
        $('.header_big_label').addClass('transform_clear');
    }, 1200);
    setTimeout(function() {
        $('.bottom_left').css('opacity','1');
        $('.bottom_right').css('opacity','1');
    }, 1700);
    setTimeout(function() {
        $('.bottom').css('opacity','1');
    }, 2200);
    
});