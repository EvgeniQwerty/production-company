//carousel init start
const swiper = new Swiper(".swiper", {
  loop: true,
  // slidesPerView: 3,
  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//carousel init end