// slider
$('.main_slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots:true,
    
   });   

//    mixit up 

var containerEl = document.querySelector('.portfolio');

var mixer = mixitup(containerEl);