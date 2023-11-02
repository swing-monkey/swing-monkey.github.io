"use strict";
(function ($) {
    $(window).on("load", function () {
        $(".content").mCustomScrollbar();
    });
})(jQuery);
$(document).ready(function () {
    $(".burger").click(function () {
        if($(".side-menu").hasClass('show')){
            $(this).find('i').removeClass('fa-times');
            $(this).find('i').addClass('fa-bars');
            if($(".header").hasClass('show')){
                $(".header").removeClass('show');
            }
        }else{
            $(this).find('i').removeClass('fa-bars');
            $(this).find('i').addClass('fa-times');
            if($(".header").hasClass('show')){
                $(".header").removeClass('show');
            }
        }

        $(".side-menu").toggleClass("show");
    });
    $(".side-header .bt-more").click(function () {
        $(".header").toggleClass("show");
    });
    if (window.innerWidth < 1025) {
        $('.has-dropdown').click(function (d) {
            d.preventDefault();
            $(this).children(".drop-ct").toggle();
        });
    }
    var $el = $(".user-pic a");
    var $ee = $(".user-dropdown");
    $el.click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(".user-dropdown").toggleClass('show');
    });
    $(document).on('click', function (e) {
        if (($(e.target) != $el) && ($ee.hasClass('show'))) {
            $ee.removeClass('show');
        }
    });
    var last_offset = 12;
    var load_amount = 12;
    $('#load-more1').click((e) => {
        e.preventDefault();
        $(this).addClass('disabled');
        fetch_games(load_amount, 'new');
    });


    search();
slider_js();

    $("#navb").on('show.bs.collapse', function () {
        $('.user-avatar').hide();
    });
    $("#navb").on('hidden.bs.collapse', function () {
        $('.user-avatar').show();
    });

    $('.user-avatar').on('click', () => {
        let element = $('.user-links');
        if (element.is(":hidden")) {
            element.removeClass('hidden');
        } else element.addClass('hidden');
    });
    $('#btn_prev').on('click', function () {
        $('.profile-gamelist ul').animate({
            scrollLeft: '-=150'
        }, 300, 'swing');
    });
    $('#btn_next').on('click', function () {
        $('.profile-gamelist ul').animate({
            scrollLeft: '+=150'
        }, 300, 'swing');
    });

    var btn = $('#button-gotop');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    $(".scrollTo").on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
            let id_target = $('#'+target);
             console.log(id_target);
        $('html, body').animate({
            scrollTop: (id_target.offset().top)
        }, 500,'swing');
    });

});


function open_fullscreen() {
    let game = document.getElementById("game-area");
    if (game.requestFullscreen) {
        game.requestFullscreen();
    } else if (game.mozRequestFullScreen) {
        game.mozRequestFullScreen();
    } else if (game.webkitRequestFullscreen) {
        game.webkitRequestFullscreen();
    } else if (game.msRequestFullscreen) {
        game.msRequestFullscreen();
    }
};

function search() {
    $('input#search_input').on('keyup', function (e) {
        let empty = false;
        $('input#search_input').each(function () {
            empty = $(this).val().length == 0;
        });

        if (empty) {
            $('#btn_search').attr('disabled', 'disabled');
        } else {
            $('#btn_search').attr('disabled', false);
            if (e.keyCode === 13) {
                window.location.replace("/search?q=" + $("#search_input").val());
            }
            $("#btn_search").on('click', function () {
                window.location.replace("/search?q=" + $("#search_input").val());
            });
        }

    });
}
function slider_js() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        center: false,
        dots: false,
        stagePadding: 50,
        margin: 12,
        nav: true,
        navText: [
            '<i class="fal fa-angle-left"></i>',
            '<i class="fal fa-angle-right"></i>'
        ],
        navContainer: '.main-content .custom-nav',
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
			768: {
                items: 3
            },
			982: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

}