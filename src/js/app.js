import "../styles/app.scss";
import sliderSectionSwiper from './components/slider/sliderSection';
import weeklySliderSwiper from './components/slider/weeklySlider';
import newCollectionSliderSwiper from './components/slider/newCollection';
import imgCollectionSwiper from "./components/slider/imgCollection";

// Rotate Icon Menu List
$(".pc-menu__item").each((idx, ele) => {
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
function stickyHeader() {
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
}
stickyHeader();

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
// <---- Slider Section ---->
let sliderSection = sliderSectionSwiper;

// <--- Weekly Slider ---> 
let weeklySlider = weeklySliderSwiper;

// <--- Collection Image Slider --- >
let imgCollection = imgCollectionSwiper;

// <--- New Collection Slider --->
let newCollectionSlider = newCollectionSliderSwiper;

// Show image box when circle clicked
$('.circle').each((idx, item) => {
  $(item).click(function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      let imgNewBoxArr = $(this).closest('.shop-box-left').next().children('.shop-box-right__img')
      if (idx == 0) {
        $(imgNewBoxArr[0]).addClass('hide');
        $(imgNewBoxArr[1]).removeClass('hide');
      }
      else if (idx == 1) {
        $(imgNewBoxArr[0]).removeClass('hide');
        $(imgNewBoxArr[1]).addClass('hide');
      }
    }
  })
})