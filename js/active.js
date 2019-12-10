(function ($) {
    'use strict';
    // $("#my-tabs li").click(function () {
    //     var myID = $(this).attr("id");
    //     $("#navi-toggle").prop("checked", false);
    //     $(this).removeClass("inactive").siblings().addClass("inactive");
    //     $(".the-tabs .tab-content").removeClass("shown-tab").addClass("hidden-tab");
    //     $("#" + myID + "-content").addClass("shown-tab");
    // });
    $(".egyprosoft-catagory-slider").owlCarousel({
        // items: 3,
        margin: 0,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
        smartSpeed: 2000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            689:{
                items:3,
                nav:false
            }
        }
    });


$('.main_categories .nav-item').on('click', function() {
    
    $('.egyprosoft-catagory-slider').trigger('refresh.owl.carousel');
    // $('.egyprosoft-catagory-slider').trigger('destroy.owl.carousel');
    // $(".egyprosoft-catagory-slider").owlCarousel({
    //     // items: 3,
    //     margin: 0,
    //     loop: true,
    //     dots: false,
    //     autoplay: true,
    //     autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
    //     smartSpeed: 2000,
    //     nav: true,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:true
    //         },
    //         689:{
    //             items:3,
    //             nav:false
    //         }
    //     }
    // });

    setTimeout(()=> {
      
        $('.egyprosoft-catagory-slider').trigger('refresh.owl.carousel');
        
    }, 1000)

    // var $owl = $('.egyprosoft-catagory-slider').owlCarousel({
    //     items: 1,
    //     loop:true
    // });
    
    // $owl.trigger('refresh.owl.carousel');
})
    var $window = $(window);

    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // :: Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 20) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    });

    // :: Tooltip Active Code
    $('[data-toggle="tooltip"]').tooltip();

    // :: Owl Carousel Active Code
    if ($.fn.owlCarousel) {

        var welcomeSlide = $('.hero-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 2000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        $('.hero-post-slide').owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 1000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });

        $(' .egyprosoft-catagory-slider2').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 2000,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
        // $('.egyprosoft-catagory-slider').owlCarousel({
        //     items: 3,
        //     margin: 0,
        //     loop: true,
        //     dots: false,
        //     autoplay: true,
        //     autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
        //     smartSpeed: 2000,
        //     nav: true,
        //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        // });


        

       
  
    }

    // :: Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.sonar-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.sonar-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: Magnific Popup Active Code
    if ($.fn.magnificPopup) {
        $('.gallery-img').magnificPopup({
            type: 'image'
        });
        $('.video-btn').magnificPopup({
            type: 'iframe'
        });
    }

    // :: MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.equalize').matchHeight({
            byRow: true,
            property: 'height'
        });
    }

    // :: CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    /* Search Area */
    var search = document.getElementById('search'),
        searchWrapper = document.getElementById('search-wrapper'),
        closeIcon = document.getElementById('close-icon');
    search.onfocus = function () {
        searchWrapper.classList.add('search-expanded');
        this.addEventListener('transitionend', function () {
            closeIcon.style.display = 'block';
        });
    }
    search.onblur = function () {
        searchWrapper.classList.remove('search-expanded');
        closeIcon.classList.add('closing');
        this.addEventListener('transitionend', function () {
            closeIcon.classList.remove('closing');
            closeIcon.style.display = 'none';
        });
    }
    closeIcon.onclick = function () {
        this.classList.add('closing');
        document.activeElement.blur();
        setTimeout(function () {
            closeIcon.classList.remove('closing');
        }, 1000);
    }

})(jQuery);