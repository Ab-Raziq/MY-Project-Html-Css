$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:5
    }
}
});


$(window).scroll(function(){

    if ($(window).scrollTop() > 350) {
        $('nav.header').addClass('is-sticky');
    } else {
        $('nav.header').removeClass('is-sticky');
    }

});
