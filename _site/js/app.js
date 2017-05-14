

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
$(".slider").slick();

$(".headerslider").slick();

/* initialize the brand slider, the images in there are more horizontal.. */
$(".brandslider").slick({

  // normal options...
  //infinite: false,

  // the magic
  responsive: [{

      breakpoint: 12000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }

    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }

    }, {

      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }

    }, {

      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
      //breakpoint: 300,
      //settings: "unslick" // destroys slick

    }]
});
