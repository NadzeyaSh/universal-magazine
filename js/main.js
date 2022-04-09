$(document).ready(function () {
  var tabsItem = $(".news-tabs__list");
  var contentItem = $(".news-tabs__content");
  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    var contentItem = $(".news-tabs__content");
    $(activeContent).addClass("news-tabs__content--active");
    tabsItem.removeClass("news-tabs__list--active");
    contentItem.removeClass("news-tabs__content--active");
    $(activeContent).addClass("news-tabs__content--active");
    $(this).addClass("news-tabs__list--active");
  });

  const swiper = new Swiper(".readers-slider", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    pauseOnMouseEnter: false,
  });
  $(".readers-slider").on("mouseenter", function (e) {
    swiper.autoplay.stop();
  });
  $(".readers-slider").on("mouseleave", function (e) {
    swiper.autoplay.start();
  });

  const hotelSlider = new Swiper(".article-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".article-slider__button--next",
      prevEl: ".article-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });
  var menuButton = $(".menu-but");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  $(".news__marker").bind("click", function () {
    $(this).attr("src", "./img/Bookmark-selected.svg");
  });

  $(".bookmark-title").bind("click", function () {
    $(this).attr("src", "./img/Bookmark-selected.svg");
  });

  var commentButton = $(".comments__load");
  commentButton.on("click", function () {
    $(".comments__hidden").addClass("comments__hidden--visible");
  });

  var modalButton = $('[data-toggle="modal"]');
  modalButton.on("click", openModal);
  var closeButton = $(".modal__close");
  closeButton.on("click", closeModal);
  $(".modal__overlay").on("click", closeModal);
  $(document).on("keydown", function (e) {
    if (e.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      var modalWrapper = $(".modal__dialog-wrapper");
      $("body").css("overflow", "display");
      $("body").css("padding-right", "0px");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      modalWrapper.removeClass("modal__dialog-wrapper--visible");
    }
  });
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalWrapper = $(".modal__dialog-wrapper");
    $("body").css("overflow", "hidden");

    if ($(window).width() >= "1200") {
      $("body").css("padding-right", "17px");
    }

    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    modalWrapper.addClass("modal__dialog-wrapper--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    $("body").css("overflow", "display");
    $("body").css("padding-right", "0px");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, введите имя",
          minlength: "Должно быть минимум 2 символа",
        },
        checkbox: {
          required: "Пожалуйста, подтвердите",
        },

        phone: {
          required: "Пожалуйста, укажите номер телефона",
          minlength: "Должно быть минимум 11 символов",
        },
        email: {
          required: "Пожалуйста, введите email",
          email: "Должен быть в формате name@domain.com",
        },
        opinion: {
          required: "Нам важно Ваше мнение",
          email: "Должно быть не менее 100 символов",
        },
      },
    });
  });

  $(".phone").mask("+7(999) 999-99-99", {
    translation: { 9: { pattern: /[0-9*]/ } },
  });
});
