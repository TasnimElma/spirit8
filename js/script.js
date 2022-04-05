// team part start

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  prevArrow: false,
  nextArrow: false,
  dots: true,
});

// team part end

// client part start
$('.clients-slide').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 4,
  prevArrow: false,
  nextArrow: false,
  dots: true,
});

// client part end

// testimonial part start
$('.single-item').slick({
  prevArrow: false,
  nextArrow: false,
  dots: true,
});

// testimonial part end

// navigation bar part start

$(window).scroll(function () {

  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
// navigation bar part end

// our work part start
var mixer = mixitup('.portfolio');
// our work part end