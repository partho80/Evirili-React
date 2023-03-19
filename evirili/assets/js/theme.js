(function ($) {
  "use strict";



  /*---------------------
  preloader
  --------------------- */

  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });


  /*----------------------------
   jQuery MeanMenu
  ------------------------------ */
  $('nav#dropdown').meanmenu();

  /*-----------------
  meanmenu 
  -----------------*/
  $('nav#mobile_menu_active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu-area .container',
  });


  /*-----------------
  Scroll-Up
  -----------------*/
  $.scrollUp({
    scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
    easingType: 'linear',
    scrollSpeed: 1500,
    animation: 'fade'
  });

  /*---------------------
  Product Slider js
  --------------------- */
  function product_slider() {
    var owl = $(".product_slider");
    owl.owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      navigation: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      nav: true,
      items: 5,
      smartSpeed: 2000,
      dots: true,
      autoplay: true,
      autoplayTimeout: 4000,
      center: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        760: {
          items: 1
        }
      }
    });
  }
  product_slider();

  /*---------------------
  Tabs
  --------------------- */
  $(function () {
    $("#tabs").tabs({

    });
  });


  /*---------------------
  Quantity Button
  --------------------- */
  $('.add').on('click', function () {
    if ($(this).prev().val() < 1000) {
      $(this).prev().val(+$(this).prev().val() + 1);
    }
  });
  $('.sub').on('click', function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
  });


  /*---------------------
  Product Details Page 
  --------------------- */
  $(window).on('load', function () {
    $('.xzoom, .xzoom-gallery').xzoom({
      zoomWidth: 400,
      title: true,
      tint: '#333',
      Xoffset: 15
    });


    //Integration with hammer.js
    var isTouchSupported = 'ontouchstart' in window;

    if (isTouchSupported) {
      //If touch device
      $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function () {
        var xzoom = $(this).data('xzoom');
        xzoom.eventunbind();
      });

      //Integration with magnific popup plugin
      $('#xzoom-magnific').bind('click', function (event) {
        var xzoom = $(this).data('xzoom');
        xzoom.closezoom();
        var gallery = xzoom.gallery().cgallery;
        var i, images = new Array();
        for (i in gallery) {
          images[i] = {
            src: gallery[i]
          };
        }
        $.magnificPopup.open({
          items: images,
          type: 'image',
          gallery: {
            enabled: true
          }
        });
        event.preventDefault();
      });
    }
  });

  /*---------------------
  Scroll to top
  --------------------- */
  $(window).on('load', function () {
    $('body').materialScrollTop();
  });

}(jQuery));