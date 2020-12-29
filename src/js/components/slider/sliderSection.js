let sliderSectionSwiper = new Swiper(".pc-slider > .swiper-container", {
  slidesPerView: 1,
  speed: 2000,
  loop: true,
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 2700,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideNextTransitionStart: () => {
      anime({
        targets: '.pc-slider .swiper-slide',
        scale: ['1.2', '1'],
        duration: 1800,
        easing: 'easeInOutQuad',
      });
    },
    slideChange: () => {
      anime({
        targets: '.swiper-container .slide__content',
        delay: 1200,
        translateY: ['100%', '0%'],
        opacity: ['0', '1'],
        easing: 'easeInOutQuad',
      });

    },
    slideNextTransitionEnd: () => {
      anime({
        targets: '.swiper-container .slide__content',
        delay: 1200,
        translateY: ['0%', '100%'],
        opacity: ['1', '0'],
        easing: 'easeInOutQuad',
      });
    }, 
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,

  },
});

export default sliderSectionSwiper;