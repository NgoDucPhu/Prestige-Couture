let imgCollectionSwiper = new Swiper(".pc-image-collection > .swiper-container", {
  slidesPerView: 1,
  speed: 1800,
  loop: true,
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: () => {
      anime({
        targets: '.swiper-container .pc-collection__content',
        delay: 500,
        translateY: ['100%', '0%'],
        opacity: ['0', '1'],
        easing: 'easeInOutQuad',
      });
    },
    transitionEnd: () => {
      anime({
        targets: '.swiper-container .pc-collection__content',
        delay: 1000,
        translateY: ['0%', '100%'],
        opacity: ['1', '0'],
        easing: 'easeInOutQuad',
      });
    }
  }
  }); 
  
export default imgCollectionSwiper;