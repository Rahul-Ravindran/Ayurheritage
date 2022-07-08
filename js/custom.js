$(document).ready(function () {

  // Mobile menu
  $('.menu-btn').click(function () {
    $('.overlay').fadeIn();
    $('.menubar').addClass("open");
  });
  $('.overlay').click(function () {
    $('.menubar').removeClass("open");
    $('.overlay').fadeOut();
  });

  // Banner
  $('.banner').slick({
    autoplay: true,
    infinite: true,
    dots: true,
    arrows: false,
    pauseOnHover:false,
    speed: 1000,
  });
  
});