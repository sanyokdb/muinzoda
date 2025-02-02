// Nav
$("#burger").click(function () {
  $(this).toggleClass('burger--active');
  $("body").toggleClass("no-scroll");
  $("#menu").toggleClass("nav__menu--active");
  $("#overlay").toggleClass("overlay--active");
});