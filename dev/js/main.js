const swiper = new Swiper('.reviews-swiper', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewhell: true,
    keyboard: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 900,
});

const swiperGallery = new Swiper('.gallery-swiper', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.gallery-btn-next',
        prevEl: '.gallery-btn-prev',
    },
    mousewhell: true,
    keyboard: true,
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 900,
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
});