$(document).ready(function () {
    
    // Efecto Menu
    $('.menu a').each(function (index, elemento) {
        $(this).css({
            top: '-200px'
        });

        $(this).animate({
            top: 0
        }, 1000 + (index * 300));
    });

    // Efecto Header
    if ($(window).width() > 768) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    // Scroll Elementos Menu
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 150
        }, 300);
    });

    $('#btn-menu').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 300);
    });

    $('#btn-galeria').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 300);
    });

    $('#btn-ubicacion').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion + 50
        }, 300);
    });

});