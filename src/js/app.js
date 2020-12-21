import '../styles/app.scss';

// rotate icon menu list
document.querySelectorAll('.pc-menu__item').forEach(ele => {
  $(ele).click(function () {
    $(this).children('.btn--menu-list').toggleClass('active');
    $(this).children('.pc-menu__sublist').toggleClass('pc-menu__sublist--show');
  })
});

// sticky nav
let header = document.querySelector('.pc-header')
let sticky = header.offsetTop;

document.addEventListener('scroll', function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
});

// show currency list
$('.pc-currency__btn').click (() =>{
 $('.pc-currency__list').toggleClass('pc-currency__list--show');
})


$('.pc-menu__input').change(function() {
  if ($('.pc-menu__input').is(":checked")) {
    $('body').css('overflow','hidden');
  } else {
    $('body').css('overflow','auto');
  }
});




