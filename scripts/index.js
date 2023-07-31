//imports
import { createPortfolio } from './modules/portfolio-data';
import { burgerMenu } from './modules/hamb';
import { changeVideoPlayerSize, onImgClick } from './modules/photo-and-video';
import { onLinkClick } from './modules/sorting';
import { moveToInit } from './modules/move-to';
import { animationsInit } from './modules/animations';

//main
createPortfolio();
moveToInit();
burgerMenu('.burger-menu');
animationsInit();

const clickables = document.querySelectorAll('.clickable');
const videoPlayer = document.querySelector('.video-player');
const navItems = document.querySelectorAll('.nav__item');

for (let img of clickables) {
    img.addEventListener('click', onImgClick);
}

for (let li of navItems) {
    console.log(li);
    li.firstElementChild.addEventListener('click', onLinkClick);
}

window.addEventListener('resize', function () {
    //for video
    if (!videoPlayer.classList.contains('display-none')) {
        changeVideoPlayerSize();
    }
});
