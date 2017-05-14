

// Initialise FlexSlider for Carousels
/*
$(window).load(function() {
    $('.flexslider').flexslider({
    animation: "fade",
    controlNav: false,
    directionNav: true,
    slideshowSpeed: 5000,
    animationSpeed: 600,
    touch: true
    });
});
*/


/* initialize slick slider.. */
//$(".slider").slick();

$(".slider").slick({

  // normal options...
  //infinite: false,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }

    }, {

      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
      //breakpoint: 300,
      //settings: "unslick" // destroys slick

    }]
});
