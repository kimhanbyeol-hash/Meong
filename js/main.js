// <!-- Initialize Swiper -->
var mainSwiper = new Swiper(".mainSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mainSwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mainSwiper .swiper-button-next",
    prevEl: ".mainSwiper .swiper-button-prev",
  },
});

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// <!-- Initialize Swiper -->
var pushSwiper = new Swiper(".pushSwiper", {
  slidesPerView: 1.45, 
  spaceBetween: 20,
  pagination: {
    el: ".pushSwiper .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView:
        4.9,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".pushSwiper .swiper-button-next",
    prevEl: ".pushSwiper .swiper-button-prev",
  },
});

