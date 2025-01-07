(function ($) {
    "use strict";

    // Hide Spinner after load
    const hideSpinner = () => {
        const spinner = $('#spinner');
        if (spinner.length) {
            setTimeout(() => spinner.removeClass('show'), 1);
        }
    };
    hideSpinner();

    // Initiate WOW.js for animation on scroll
    new WOW().init();

    // Navbar visibility on scroll
    const navbar = $('.navbar');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            navbar.fadeIn('slow').css('display', 'flex');
        } else {
            navbar.fadeOut('slow').css('display', 'none');
        }
    });

    // Smooth scrolling for navbar links
    $(".navbar-nav a").on('click', function (event) {
        const hash = this.hash;
        if (hash) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: $(hash).offset().top - 45 }, 1500, 'easeInOutExpo');

            $(".navbar-nav .active").removeClass('active');
            $(this).closest('a').addClass('active');
        }
    });

    // Back-to-top button functionality
    const backToTop = $('.back-to-top');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            backToTop.fadeIn('slow');
        } else {
            backToTop.fadeOut('slow');
        }
    });

    backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Initialize Typed.js for dynamic text typing
    const typedOutput = $('.typed-text-output');
    if (typedOutput.length) {
        const typedStrings = $('.typed-text').text().split(', ');
        new Typed('.typed-text-output', {
            strings: typedStrings,
            typeSpeed: 100,
            backSpeed: 20,
            loop: true
        });
    }

    // Modal video autoplay
    let videoSrc;
    $('.btn-play').on('click', function () {
        videoSrc = $(this).data('src');
    });

    $('#videoModal').on('shown.bs.modal', function () {
        $('#video').attr('src', `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`);
    });

    $('#videoModal').on('hide.bs.modal', function () {
        $('#video').attr('src', videoSrc);
    });

    // Counter-up for facts
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Skill progress bar animation
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", `${$(this).attr("aria-valuenow")}%`);
        });
    }, { offset: '80%' });

    // Portfolio isotope filter
    const portfolioContainer = $('.portfolio-container');
    const portfolioFilters = $('#portfolio-flters li');
    if (portfolioContainer.length) {
        const portfolioIsotope = portfolioContainer.isotope({ itemSelector: '.portfolio-item', layoutMode: 'fitRows' });
        portfolioFilters.on('click', function () {
            portfolioFilters.removeClass('active');
            $(this).addClass('active');
            portfolioIsotope.isotope({ filter: $(this).data('filter') });
        });
    }

    // Testimonials carousel using OwlCarousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

})(jQuery);
