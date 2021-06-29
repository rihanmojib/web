// venobox start
$('.venobox').venobox();
// venobox end


// slick slider start
$('.service-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  arrows: true,
  prevArrow: '<i class="fas fa-chevron-up prev"></i>',
  nextArrow: '<i class="fas fa-chevron-down next"></i>',
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.port-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.img-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  arrows: true,
  centerMode: true,
  centerPadding: "0",
  prevArrow: '<i class="fas fa-chevron-up prev"></i>',
  nextArrow: '<i class="fas fa-chevron-down next"></i>',
  asNavFor: '.text-slider',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.text-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.img-slider',

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.sponser-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: "0",

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//   slick slider end 

// counter part start

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// counter part end

// btt arrows 
$(".btt").click(function(){
  $("html,body").animate({
    scrollTop: 0,
  },1000)
})

// fixed manu and btt fixed
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".element").addClass("fixed-element")
  }else {
    $(".element").removeClass("fixed-element")
  }

  if($(window).scrollTop() > 700){
    $(".btt").fadeIn()
  } else {
    $(".btt").fadeOut()
  }
})