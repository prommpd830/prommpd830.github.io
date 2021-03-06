$(window).scroll(function(){
    $('.navbar').toggleClass('scrolling-active', $(this).scrollTop() > 0);
    if ($(this).scrollTop() > 500) {
        $('.gobtn').fadeIn();
    } else {
        $('.gobtn').fadeOut();
    }
});

$('.page-scroll').on('click', function(){
    
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 100
    }, 500);
    
});

$('.gobtn').click(function(){
    $('html, body').animate({scrollTop: 0},800);
});