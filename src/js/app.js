import "../styles/app.scss";

// Rotate Icon Menu List
document.querySelectorAll(".pc-menu__item").forEach((ele) => {
  $(ele).click(function () {
    $(this)
      .children(".btn--menu-list")
      .toggleClass("active");
    $(this)
      .children(".pc-menu__sublist")
      .toggleClass("pc-menu__sublist--show");
  });
});

// Sticky Nav
let stickyNavTop = $('.pc-header').offset().top;
let stickyNav = function () {
  let scrollTop = $(window).scrollTop(); // our current vertical position from the top
  // if we've scrolled more than the navigation, change its position to fixed to stick to top,
  // otherwise change it back to relative
  if (scrollTop > stickyNavTop) {
    $('.pc-header').addClass('sticky');
  } else {
    $('.pc-header').removeClass('sticky');
  }
};
stickyNav();
// and run it again every time you scroll
$(window).scroll(function () {
  stickyNav();
});


// Show Currency List
$(".pc-currency__btn").click(() => {
  $(".pc-currency__list").toggleClass("pc-currency__list--show");
});

// Show/hidden Scrollbar
$(".pc-menu__input").change(function () {
  if ($(".pc-menu__input").is(":checked")) {
    $("body").css("overflow", "hidden");
  } else {
    $("body").css("overflow", "auto");
  }
});

// Slider Swiper
let swiper1 = new Swiper(".pc-slider > .swiper-container", {
  slidesPerView: 1,
  speed: 1500,
  loop: true,
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// Change slidePerView when window resize
$(document).ready(function () {
  if ($(window).width() < 900) {
    let swiper2 = new Swiper(".pc-weekly .swiper-container", {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  else if ($(window).width() < 910) {
    let swiper2 = new Swiper(".pc-weekly .swiper-container", {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  else {
    let swiper2 = new Swiper(".pc-weekly .swiper-container", {
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  $(window).resize(function () {
    if ($(window).width() < 800) {
      let swiper2 = new Swiper(".pc-weekly .swiper-container", {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }

    else if ($(window).width() < 910) {
      let swiper2 = new Swiper(".pc-weekly .swiper-container", {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
    else {
      let swiper2 = new Swiper(".pc-weekly .swiper-container", {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  })
});



