function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};
include('js/jquery.cookie.js');
include('js/jquery.easing.1.3.js');;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/tmstickup.js');
        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');
        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa fa-angle-up'
            });
        });
    }
})(jQuery);;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.mousewheel.min.js');
        include('js/jquery.simplr.smoothscroll.min.js');
        $(document).ready(function () {
            $.srSmoothscroll({
                step: 150,
                speed: 800
            });
        });
    }
})(jQuery);;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);;
(function ($) {
    include('js/superfish.js');
})(jQuery);;
(function ($) {
    include('js/jquery.rd-navbar.js');
})(jQuery);;
(function ($) {
    var o = document.getElementById("google-map");
    if (o) {
        include('//maps.google.com/maps/api/js?sensor=false');
        include('js/jquery.rd-google-map.js');
        $(document).ready(function () {
            var o = $('#google-map');
            if (o.length > 0) {
                o.googleMap();
            }
        });
    }
})
(jQuery);;
(function ($) {
    var o = $('html');
    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');
            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);;
(function ($) {
    var o = $('#contact-form');
    if (o.length > 0) {
        include('js/modal.js');
        include('js/TMForm.js');
        if ($('#contact-form .recaptcha').length > 0) {
            include('//www.google.com/recaptcha/api/js/recaptcha_ajax.js');
        }
    }
})(jQuery);
$(function () {
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,
        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },
        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };
    scaleFix();
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(function () {
                        return false;
                    }, function () {
                        window.location.href = $(this).attr("href");
                    });
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');;
(function ($) {
    var o = $('.owl-carousel');
    if (o.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                margin: 0,
                smartSpeed: 450,
                loop: true,
                dots: true,
                dotsEach: 1,
                nav: true,
                navClass: ['owl-prev fa  fa-caret-left', 'owl-next fa  fa-caret-right'],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    980: {
                        items: 3
                    }
                }
            });
        });
    }
})(jQuery);;
(function ($) {
    var o = $('.owl-carousel2');
    if (o.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                margin: 12,
                smartSpeed: 450,
                loop: true,
                dots: true,
                dotsEach: 1,
                nav: true,
                navClass: ['owl-prev fa  fa-caret-left', 'owl-next fa  fa-caret-right'],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 3
                    },
                    980: {
                        items: 4
                    }
                }
            });
        });
    }
})(jQuery);;
(function ($) {
    var o = $('.resp-tabs');
    if (o.length > 0) {
        include('js/jquery.responsive.tabs.js');
        $(document).ready(function () {
            o.easyResponsiveTabs();
        });
    }
})(jQuery);;
(function ($) {
    include('js/jquery.rd-styleswitcher.js');
    $(document).ready(function () {
        $.rdstyleswitcher({
            schemes: [{
                'id': 'Scheme 1',
                'icon': 'images/scheme1.jpg'
            }, {
                'id': 'Scheme 2',
                'url': 'css/colorScheme-1.css',
                'icon': 'images/scheme2.jpg'
            }, {
                'id': 'Scheme 3',
                'url': 'css/colorScheme-2.css',
                'icon': 'images/scheme3.jpg'
            }, {
                'id': 'Scheme 4',
                'url': 'css/colorScheme-3.css',
                'icon': 'images/scheme4.jpg'
            }, {
                'id': 'Scheme 5',
                'url': 'css/colorScheme-4.css',
                'icon': 'images/scheme5.jpg'
            }]
        });
    });
})(jQuery);