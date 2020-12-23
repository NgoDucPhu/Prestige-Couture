import '../styles/app.scss';

// Rotate Icon Menu List
document.querySelectorAll('.pc-menu__item').forEach(ele => {
  $(ele).click(function () {
    $(this).children('.btn--menu-list').toggleClass('active');
    $(this).children('.pc-menu__sublist').toggleClass('pc-menu__sublist--show');
  })
});

// Sticky Nav
let header = document.querySelector('.pc-header')
let sticky = header.offsetTop;
document.addEventListener('scroll', function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
});

// Show Currency List
$('.pc-currency__btn').click (() =>{
 $('.pc-currency__list').toggleClass('pc-currency__list--show');
})

// Show/hidden Scrollbar 
$('.pc-menu__input').change(function() {
  if ($('.pc-menu__input').is(":checked")) {
    $('body').css('overflow','hidden');
  } else {
    $('body').css('overflow','auto');
  }
});

// Resize width change background slider
$(function () {
  let reszWindow = function () {
    var reswidth = screen.width;
    if (reswidth > 638){
      $('.slide-1').css('background-image', "url('https://cdn.shopify.com/s/files/1/0011/9242/7564/files/Slide-desktop---6_1600x.jpg?v=1527703158')");
      $('.slide-2').css('background-image', "url('https://cdn.shopify.com/s/files/1/0011/9242/7564/files/Slide-desktop---8_1400x.jpg?v=1527703171')");
      $('.slide-3').css('background-image', "url('https://cdn.shopify.com/s/files/1/0011/9242/7564/files/Slide-desktop---11_1400x.jpg?v=1527703679')");
      $('.slide-4').css('background-image', "url('https://cdn.shopify.com/s/files/1/0011/9242/7564/files/Slide-desktop---4_1400x.jpg?v=1527703679')");
    }
  };
  reszWindow();
  $(window).resize(reszWindow);
});

// Slider Swiper
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});






