$(document).ready(function() {

    // jQuery methods go here...

    //banner slider
    $('.slider_banner').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    })

    //best selling add
    $(".best_selling_add").owlCarousel({
        nav: true,
        dots: false,
        loop: false,
        row: 2,

        rewind: true,
        // autoWidth: true,
        stagePadding: 0,
        margin: 4,
        checkVisibility: true,
        navElement: 'div',
        responsive: {
            0: {
                items: 1,
                slideBy: 1
            },
            768: {
                items: 2,
                slideBy: 2
            },
            1024: {
                items: 6,
                slideBy: 3
            },
            1280: {
                items: 6,
                slideBy: 3
            },
            1440: {
                items: 6,
                slideBy: 1
            }
        }
    });

    //trending slider
    $('.trending_slider_add').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 6,


            }
        }
    })



});