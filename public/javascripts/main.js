$(document).ready(function() {
    setTimeout(function() {
        $('.header_big').addClass('transform_clear');
    }, 600);
    setTimeout(function() {
        $('.header_big_label').addClass('transform_clear');
    }, 900);
    setTimeout(function() {
        $('.arrow').css('opacity','1');
    }, 1500);
    
    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
              scrollTop: $(this).offset().top
            }, 1000);
        });
    }
    
    $('.arrow').click(function(){
        $('#about').scrollView();
    });
});