let weeklySliderSwiper = new Swiper(".pc-weekly .swiper-container", {
    slidesPerView: 4,
    spaceBetween: 10,
    centeredSlides: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        480: {
            slidesPerView: 1.5,
        },
        668: {
            slidesPerView: 2.5,

        },
        1024: {
            slidesPerView: 4,
        },
    }
});

export default weeklySliderSwiper;