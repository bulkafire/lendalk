// $('.icons_services .icon').on('click',function(){
// $(this).addClass('active');

// })

(function() {

    var $imgs = $('.gallery img');
    var $buttons = $('.buttons');
    var tagged = {};
  
    $imgs.each(function() {
      var img = this;
      var tags = $(this).data('tags');
  
      if (tags) {
        tags.split(',').forEach(function(tagName) {
          if (tagged[tagName] == null) {
            tagged[tagName] = [];
          }
          tagged[tagName].push(img);
        });
      }
    });
  
    // $('<li/>', {
    //   text: 'Show All',
    //   class: 'active',
    //   click: function() {
    //     $(this)
    //       .addClass('active')
    //       .siblings()
    //       .removeClass('active');
    //     $imgs.show();
    //   }
    // }).appendTo($buttons);
  
    $.each(tagged, function(tagName) {
      $('<li/>', {
        text: tagName ,
        click: function() {
          $(this)
            .addClass('active_filter')
            .siblings()
            .removeClass('active_filter');
          $imgs
            .hide()
            .filter(tagged[tagName])
            .fadeIn(800);
           
        }
      }).appendTo($buttons);
    });
  
  }());


  $('.team_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
  });

  $(".slider_news").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    vertical: true,
    // autoplay:true,
    // autoplaySpeed:2000,
    verticalSwiping: true
});


$(document).ready(function() {
    $(".menuToggle").click(function() {
       
      $(this).toggleClass("active");
     
      $('.menu').fadeToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });
