$('.drp_btn').click(function() {
    $(this).siblings('.sub_menu').slideToggle();
})
$('#testimonial_slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: false,
    smartSpeed: 2500,
    dots: true,
    rows: 2,
    responsive: {
        0: {
            items: 1,
            autoplay: true
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('#timeline_slider').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 3000,
    navText: ["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1,
            autoplay: false
        },
        769: {
            items: 2,
            autoplay: false
        },
        1000: {
            items: 3
        }
    }
})
window.addEventListener('scroll', function() {
    var element = document.querySelector('#counter');
    var position = element.getBoundingClientRect();
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }
    if (position.top < window.innerHeight && position.bottom >= 0) {} else {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = 0;
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 100,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }
});
$(document).ready(function() {
    $(".collapse.show").each(function() {
        $(this).prev(".card-header").find(".icon_faq").addClass("icofont-minus").removeClass("icofont-plus");
    });
    $(".collapse").on("show.bs.collapse", function() {
        $(this).prev(".card-header").find(".icon_faq").removeClass("icofont-plus").addClass("icofont-minus");
    }).on("hide.bs.collapse", function() {
        $(this).prev(".card-header").find(".icon_faq").removeClass("icofont-minus").addClass("icofont-plus");
    });
    $(".collapse").on("show.bs.collapse", function() {
        $(this).prev(".card-header").children('h2').children('.btn').addClass("active");
    }).on("hide.bs.collapse", function() {
        $(this).prev(".card-header").children('h2').children('.btn').removeClass("active");
    });
});
window.addEventListener('scroll', function() {
    var element = document.querySelector('.free_text');
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.purple_backdrop').css("opacity", "1");
    } else {
        $('.purple_backdrop').css("opacity", "0");
    }
});
$(window).on('resize', function() {
    if ($(window).width() < 768) {
        window.addEventListener('scroll', function() {
            var element = document.querySelector('.mobile_mockup');
            var position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                $('.purple_backdrop').css("opacity", "1");
            } else {
                $('.purple_backdrop').css("opacity", "0");
            }
        });
    } else {
        window.addEventListener('scroll', function() {
            var element = document.querySelector('.free_text');
            var position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                $('.purple_backdrop').css("opacity", "1");
            } else {
                $('.purple_backdrop').css("opacity", "0");
            }
        });
    }
});
$(document).ready(function() {
    var toTop = $('.go_top');
    toTop.on('click', function() {
        $('html, body').animate({
            scrollTop: $('html, body').offset().top,
        }, 400);
    });
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 750) {
            $(toTop).css("opacity", "1");
        } else {
            $(toTop).css("opacity", "0");
        }
    });
});
$(window).scroll(function() {
    if ($(window).scrollTop() >= 250) {
        $('header').addClass('fix_style');
    } else {
        $('header').removeClass('fix_style');
    }
    if ($(window).scrollTop() >= 260) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});
$('.play-button').click(function(e) {
    var iframeEl = $('<iframe>', {
        src: $(this).data('url')
    });
    $('#youtubevideo').attr('src', $(this).data('url'));
})
$('#close-video').click(function(e) {
    $('#youtubevideo').attr('src', '');
});
$(document).on('hidden.bs.modal', '#myModal', function() {
    $('#youtubevideo').attr('src', '');
});
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        if ($(this).children('span').children('.ico_menu').hasClass('icofont-navigation-menu')) {
            $(this).children('span').children('.ico_menu').removeClass('icofont-navigation-menu').addClass('icofont-close');
        } else {
            $(this).children('span').children('.ico_menu').removeClass('icofont-close').addClass('icofont-navigation-menu');
        }
    });
});
(function() {
    $('.toggle-wrap').on('click', function() {
        $(this).toggleClass('active');
        $('aside').animate({
            width: 'toggle'
        }, 200);
    });
})();
AOS.init();