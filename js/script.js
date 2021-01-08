//=================================================================================

fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  scrollOverflow: true,
  sectionSelector: ".section",
  menu: "#menu",
  scrollingSpeed: 1000,
  licenseKey: null,
  anchors: ["first", "about", "advantages", "characteristics", "questions", "contacts"],
});

//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================
//================================= jQuery ===============================================
//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================

//================================== slider_initialising =============================

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });
});

//========================== spoilers ================================================

$(document).ready(function () {
  $(".dropdown__question").click(function (event) {
    if ($(".questions__dropdown").hasClass("one")) {
      $(".dropdown__question").not($(this)).removeClass("init");
      $(".dropdown__text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("init").next().slideToggle(300);
  });
});
//======================= burger ==================================================

$(document).ready(function () {
  $(".header__burger_wrapper").click(function (event) {
    
    $(".header__menu").toggleClass("header__menu_active");
    $(".menu__list").toggleClass("menu__list_active");
    $(".menu__item").toggleClass("menu__item_active");
    $(".header__burger_wrapper").toggleClass("header__burger_wrapper_active");
    $(".header__burger").toggleClass("header__burger_active");
    $("body").toggleClass("lock");
  });
  $(".menu__link").click(function (event) {
    $(".header__menu").removeClass("header__menu_active");
    $(".menu__list").removeClass("menu__list_active");
    $(".header__burger_wrapper").removeClass("header__burger_wrapper_active");
    $(".header__burger").removeClass("header__burger_active");
    $(".menu__item").removeClass("menu__item_active");
  });
  $(".header__img").click(function (event) {
    $(".header__menu").removeClass("header__menu_active");
    $(".menu__list").removeClass("menu__list_active");
    $(".header__burger_wrapper").removeClass("header__burger_wrapper_active");
    $(".header__burger").removeClass("header__burger_active");
    $(".menu__item").removeClass("menu__item_active");
  });
});

// =================== fixed-HEADER ===============================================

$(document).ready(function () {
  if ($(".about").hasClass("active")) {
    $(".header").toggleClass("fixHeader");
  }
});

//======================================================================================
//======================================================================================
//======================================================================================
//======================================================================================
//======================================================================================
//======================================================================================
