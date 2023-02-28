$(document).ready(function () {

    //tabbing js
    tabControl();

    var resizeTimer;
    $(window).on('resize', function(e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        tabControl();
      }, 250);
    });

    function tabControl() {
      var tabs = $('.tabbed-content').find('.tabs');
      if(tabs.is(':visible')) {
        tabs.find('a').on('click', function(event) {
          event.preventDefault();
          var target = $(this).attr('href'),
              tabs = $(this).parents('.tabs'),
              buttons = tabs.find('a'),
              item = tabs.parents('.tabbed-content').find('.item');
          buttons.removeClass('active');
          item.removeClass('active');
          $(this).addClass('active');
          $(target).addClass('active');
        });
      } else {
        $('.item').on('click', function() {
          var container = $(this).parents('.tabbed-content'),
              currId = $(this).attr('id'),
              items = container.find('.item');
          container.find('.tabs a').removeClass('active');
          items.removeClass('active');
          $(this).addClass('active');
          container.find('.tabs a[href$="#'+ currId +'"]').addClass('active');
        });
      } 
    }

    if($(window).width() > 767){

      //accordion js
      $(function () {
      
          'use strict';
          
          // Give Active Class
          
          $('.work-item').first().addClass('active');
          
          // Show First Info
          
          $('.info').first().show().css('display', 'flex').animate({width: '65%'});
          
          // Show Info On Click
          
          $('.work-item').click(function () {
              
              $(this).addClass("active").siblings('.work-item').removeClass('active');
              
              $(this).next().show().css('display', 'flex').animate({width: '65%'}).siblings('.info').animate({width: 0}, function () {
                  
                  $(this).hide();
                  
              });
              
          });
          
      });
    }

    if($(window).width() <= 767){
      $('.work-item').click(function(e){
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $('.work-item').removeClass('active');
            $('.info').slideUp(500);
            $(this).addClass('active');
            $(this).next('.info').slideDown(500);
        }
        else if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next('.info').slideUp(500);
        }
      });
    }
});
