/* global console, document,$*/
/*disallowMultipleLineBreaks: true*/
/*jslint devel: true, evil: true, plusplus: true */
/*eslint no-console: off */
 /*eslint no-unused-vars: off, no-unused-labels: off*/

$(function () { 'use strict';
    
    let navbarButton = $('.nav-button'),
    sections = $('section'),
    resMenu = $('.res-menu');

    navbarButton.click(function () {
        $(sections).toggleClass('blur');
        $(resMenu).toggleClass('active');
    });

    resMenu.click(function() {
        $(resMenu).toggleClass('active');
        $(sections).toggleClass('blur');
    });


               
    


    let navBar = $('header .navbar');
    window.addEventListener('scroll', () => {
        let pageScroll = $(window).scrollTop();
        if(pageScroll > 700) {navBar.addClass('alt');}
                             else {navBar.removeClass('alt');}
    });


    let currentYearSpan = $('.current-year'),
        currentYear = new Date().getFullYear();
    currentYearSpan.text(currentYear);

    /*$('.lft').each(function () {
        let lfft = $(this).prev().offset().left + $(this).prev().width() ;
        $(this).css("left", lfft);
    });*/

    if ($(window).width() >= 768){
            let whyUsImg = $('.why-us img'),
            whyUsP = $('.why-us p').offset().top;
            $(whyUsImg).offset({top:whyUsP , left: '-50%'});
    }


    $('.gallery ul li').click(function (){
                       let lastClass = $('.gallery-grid').attr('class').split(' ').pop(),
                           option = $(this).attr('data-option');

                       $('.gallery-grid').removeClass(lastClass).addClass(option);
                       $(this).addClass('active').siblings().removeClass('active');
                   });

    function viewImg() {
        let imgInside = $('.cloned').find('.img-inside'),
            bg = imgInside.css('background-image');

        bg = bg.replace('url(','').replace(')','').replace(/"/g,'');
        $('.view-box img').attr('src', bg);
        $('.gallery .view-box').addClass('d-flex');
    }


    $('.gallery .img').click( function (){

        $('.gallery .img').removeClass('cloned');
        $(this).addClass('cloned');
        viewImg();

    });

    $('.close-icon').click (function (){
        $('.view-box').removeClass('d-flex');
        $('.gallery .img').removeClass('cloned');
    });
    $('.right-icon').click(function () {
        let cloned = $('.cloned'),
            nextCloned = cloned.next();
        if($(nextCloned).is('.img')){
            $(cloned).removeClass('cloned');
            $(nextCloned).addClass('cloned');
            viewImg();
        }
        else {
            $('.gallery .img').removeClass('cloned');
            $('.gallery .img').eq(0).addClass('cloned');
            viewImg();
        }
    });


    $('.left-icon').click(function () {
        let cloned = $('.cloned'),
            prevCloned = cloned.prev();
        if($(prevCloned).is('.img')){
            $(cloned).removeClass('cloned');
            $(prevCloned).addClass('cloned');
            viewImg();
        }
        else {
            $('.gallery .img').removeClass('cloned');
            $('.gallery .img:last-of-type').addClass('cloned');
            viewImg();
        }
    });


    $('body').keyup(function (e) {
        let key = e.which;
        if(key === 27){$('.bx-x-circle').click();return false;}
        else if(key === 37){$('.left-icon').click();return false;}
        else if(key === 39){$('.right-icon').click();return false;}

    });


    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        center:true
    });

    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        responsive:{

            0: {
                    items:3
                },
            450: {
                    items:4
                }
        }
    });
               
    let loading = $('.loading-layer');
    
    loading.fadeOut(1000);
});

