
$(document).ready(function(){
    $('.testimonial-active').owlCarousel({
        loop:true,
        animateIn: 'animate__lightSpeedInRight',
        animateOut: 'animate__zoomOut',
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        margin:10,
        nav:true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
  });





























