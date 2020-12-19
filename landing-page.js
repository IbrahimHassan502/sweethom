/* global console, document,$*/
/*disallowMultipleLineBreaks: true*/
/*jslint devel: true, evil: true, plusplus: true */
/*eslint no-console: off */
 /*eslint no-unused-vars: off, no-unused-labels: off*/

$(function (){ 'use strict';
        let headerImgs = $('.land-page .img-box'),
        headerHeadings = $('.land-page .heading-box'),
        headerHeight = $('.land-page').innerHeight(),
        headerShadow = $('.land-page .shadow');

        headerHeadings.delay(300).animate({opacity: 1}, 900);

        setTimeout(function(){
                           headerImgs.height($('.img-box .tallest').height()  + headerHeadings.height());
                       }, 500);

        window.addEventListener('scroll', () => {
            let pageScroll = $(window).scrollTop();
            if (pageScroll <= 700){
                headerImgs.css("transform", `translateY(${pageScroll * -0.4}px)`);
                headerHeadings.css("opacity", - pageScroll / (headerHeight / 2) + 1);

                headerHeadings.css("transform", `translate(-50%, ${pageScroll * 0.3}px)`);

                headerShadow.height(pageScroll * .5);   
                }
        });
});
              
    


