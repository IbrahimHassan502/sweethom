/* global console, document,$*/
/*disallowMultipleLineBreaks: true*/
/*jslint devel: true, evil: true, plusplus: true */
/*eslint no-console: off */
 /*eslint no-unused-vars: off, no-unused-labels: off*/

$(function (){ 'use strict';
              
              let gridItems = $('.grid-item'),
                  li = $('.gallery ul li');
                          
             li.click(function () {

                $(this).addClass('active').siblings().removeClass('active');
                if($(this).is(':first-of-type'))
                {
                  $(gridItems).removeClass('d-none');  
                }
                else 
                {
                    let dataOption = $('.gallery ul li.active').attr('data-option');

                    $(gridItems).each(function () {
                    if($(this).attr('data-type') != dataOption) {$(this).addClass('d-none');}
                    else {$(this).removeClass('d-none');}
                    });
                }

                $('.grid').masonry({
                  itemSelector: '.grid-item',
                  columnWidth: '.grid-sizer',
                  percentPosition: true
                });

            });

        setTimeout(function(){
                $('.grid').masonry({
              itemSelector: '.grid-item',
              columnWidth: '.grid-sizer',
              percentPosition: true
            });
        }, 500);
});
