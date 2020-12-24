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






