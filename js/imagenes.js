$(document).ready(function() {
    var $sm = 480;
    var $md = 768;

    function resizeThis() {
        $imgH = $('.middle img').width();
        if ($(window).width() >= $sm) {
            $('.left,.right,.seccion').css('height', $imgH);
        } else {
            $('.left,.right,.seccion').css('height', 'auto');
        }
    }
    resizeThis();
    $(window).resize(function() {
        resizeThis();
    });
    $(window).scroll(function() {
        $('.seccion').each(function() {
            var $elementPos = $(this).offset().top;
            var $scrollPos = $(window).scrollTop();
            var $seccionH = $(this).height();
            var $h = $(window).height();
            var $seccionVert = (($h / 2) - ($seccionH / 4));
            if (($elementPos - $seccionVert) <= $scrollPos && ($elementPos - $seccionVert) + $seccionH > $scrollPos) {
                $(this).addClass('animada');
            } else {
                $(this).removeClass('animada');
            }
        });
    });
    $('.btn-primary').click(function() {
        alert('I lied');
    });
});
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animada({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});