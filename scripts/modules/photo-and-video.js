///////////////////////////////////////////////////////////////////
//portfolio video and photo start
export const clickables = document.querySelectorAll('.clickable');
export const videoPlayer = document.querySelector('.video-player');
const carousel = document.querySelector('.swiper');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const bg = document.querySelector('.bg-black');
const bgShowreel = document.querySelector('.bg-showreel');
const exit = document.querySelector('.exit');
let videoOrPhoto = videoPlayer;

const swiper = new Swiper('.swiper', {
    loop: true,
    // slidesPerView: 3,
    slidesPerView: 1,
    spaceBetween: 40,
    allowTouchMove: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

export function addPhotos(container, folder, quantity) {
    for (let i = 1; i < quantity + 1; i++) {
        swiper.appendSlide(
            `<div class="swiper-slide"><img src='img/${folder}/${i}.jpg'></img></div>`
        );
    }
}

export function changeVideoPlayerSize() {
    if (window.innerWidth > window.innerHeight) {
        videoPlayer.setAttribute('width', (120 * window.innerHeight) / 100);
        videoPlayer.setAttribute(
            'height',
            (((120 * window.innerHeight) / 100) * 9) / 16
        );
    } else {
        videoPlayer.setAttribute('width', (90 * window.innerWidth) / 100);
        videoPlayer.setAttribute(
            'height',
            (((90 * window.innerWidth) / 100) * 9) / 16
        );
    }
}

export function onImgClick(event) {
    exit.classList.toggle('display-none');

    const dataType = event.target.getAttribute('data-type');
    if (dataType === 'video') {
        videoOrPhoto = videoPlayer;

        const url = event.target.getAttribute('data-url');
        videoPlayer.setAttribute('src', url);
        changeVideoPlayerSize();

        videoPlayer.classList.toggle('display-none');
    } else if (dataType === 'photo') {
        videoOrPhoto = carousel;

        const folder = event.target.getAttribute('data-folder');
        const quantity = +event.target.getAttribute('data-quantity');

        swiper.removeAllSlides();
        //removeAllChildren(swiperWrapper);
        addPhotos(swiperWrapper, folder, quantity);
        swiper.updateSlides();

        carousel.classList.toggle('display-none');
    }

    if (!videoOrPhoto.classList.contains('display-none')) {
        document.addEventListener('keydown', onDocClick);
        document.addEventListener('click', onDocClick);
        bg.classList.toggle('display-none');

        bg.style.opacity = 0;
        requestAnimationFrame(function () {
            bg.style.transition = 'opacity .5s';
            bg.style.opacity = 1;
        });

        videoOrPhoto.style.opacity = 0;
        requestAnimationFrame(function () {
            videoOrPhoto.style.transition = 'opacity 1s';
            videoOrPhoto.style.opacity = 1;
        });
    }
}

export function onDocClick(event) {
    const swiperSlides = Array.from(document.querySelectorAll('.swiper-slide'));

    if (
        event.key === 'Escape' ||
        (event.type === 'click' &&
            (event.target === bg || event.target === exit)) ||
        swiperSlides.includes(event.target)
    ) {
        videoOrPhoto.classList.toggle('display-none');
        exit.classList.toggle('display-none');
        if (videoOrPhoto === videoPlayer) {
            videoOrPhoto.setAttribute('src', '');
        }

        document.removeEventListener('keydown', onDocClick);
        document.removeEventListener('click', onDocClick);

        bg.classList.toggle('display-none');
    }
}
//portfolio video and photo end
