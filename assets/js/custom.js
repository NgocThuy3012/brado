// eslint-disable-next-line no-undef
jQuery(document).ready(function ($) {
  $(function () {
    $('#tabs').tabs();
  });

  $(function () {
    $('#tabs-blog').tabs();
  });

  // Page loading animation

  $('#preloader').animate(
    {
      opacity: '0',
    },
    600,
    function () {
      setTimeout(function () {
        $('#preloader').css('visibility', 'hidden').fadeOut();
      }, 300);
    },
  );

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $('header').addClass('background-header');
    } else {
      $('header').removeClass('background-header');
    }
  });

  if ($('.owl-partners').length) {
    $('.owl-partners').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 4,
          margin: 30,
        },
      },
    });
  }

  if ($('.owl-blogs').length) {
    $('.owl-blogs').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 10,
      margin: 25,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 3,
        },
        576: {
          items: 5,
          margin: 20,
        },
        992: {
          items: 6,
        },
      },
    });
  }

  $('.Modern-Slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  // services homepage

  $('.services-slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    draggable: false,
    prevArrow:
      '<div class="arrow-item prev-arrow"><i class="fa fa-angle-left"></i></div>',
    nextArrow:
      '<div class="arrow-item next-arrow"><i class="fa fa-angle-right"></i></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // projects homepage

  $('.project-slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    draggable: false,
    prevArrow:
      '<div class="arrow-item prev-arrow"><i class="fa fa-angle-left"></i></div>',
    nextArrow:
      '<div class="arrow-item next-arrow"><i class="fa fa-angle-right"></i></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.partners-slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    dots: true,
    draggable: false,
    prevArrow:
      '<div class="arrow-item prev-arrow"><i class="fa fa-angle-left"></i></div>',
    nextArrow:
      '<div class="arrow-item next-arrow"><i class="fa fa-angle-right"></i></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.testimonials-slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    dots: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  function visible(partial) {
    var $t = partial,
      // eslint-disable-next-line no-undef
      $w = jQuery(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset()?.top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return (
      compareBottom <= viewBottom && compareTop >= viewTop && $t.is(':visible')
    );
  }

  $(window).scroll(function () {
    if (visible($('.count-digit'))) {
      if ($('.count-digit').hasClass('counter-loaded')) return;
      $('.count-digit').addClass('counter-loaded');

      $('.count-digit').each(function () {
        var $this = $(this);
        // eslint-disable-next-line no-undef
        jQuery({ Counter: 0 }).animate(
          { Counter: $this.text() },
          {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            },
          },
        );
      });
    }
  });
});
