/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_portfolio_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/portfolio-data */ \"./scripts/modules/portfolio-data.js\");\n/* harmony import */ var _modules_hamb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamb */ \"./scripts/modules/hamb.js\");\n/* harmony import */ var _modules_photo_and_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/photo-and-video */ \"./scripts/modules/photo-and-video.js\");\n/* harmony import */ var _modules_sorting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sorting */ \"./scripts/modules/sorting.js\");\n/* harmony import */ var _modules_move_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/move-to */ \"./scripts/modules/move-to.js\");\n/* harmony import */ var _modules_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/animations */ \"./scripts/modules/animations.js\");\n//imports\n\n\n\n\n\n\n\n//main\n(0,_modules_portfolio_data__WEBPACK_IMPORTED_MODULE_0__.createPortfolio)();\n(0,_modules_move_to__WEBPACK_IMPORTED_MODULE_4__.moveToInit)();\n(0,_modules_hamb__WEBPACK_IMPORTED_MODULE_1__.burgerMenu)('.burger-menu');\n(0,_modules_animations__WEBPACK_IMPORTED_MODULE_5__.animationsInit)();\nconst clickables = document.querySelectorAll('.clickable');\nconst videoPlayer = document.querySelector('.video-player');\nconst navItems = document.querySelectorAll('.nav__item');\nfor (let img of clickables) {\n  img.addEventListener('click', _modules_photo_and_video__WEBPACK_IMPORTED_MODULE_2__.onImgClick);\n}\nfor (let li of navItems) {\n  console.log(li);\n  li.firstElementChild.addEventListener('click', _modules_sorting__WEBPACK_IMPORTED_MODULE_3__.onLinkClick);\n}\nwindow.addEventListener('resize', function () {\n  //for video\n  if (!videoPlayer.classList.contains('display-none')) {\n    (0,_modules_photo_and_video__WEBPACK_IMPORTED_MODULE_2__.changeVideoPlayerSize)();\n  }\n});\n\n//# sourceURL=webpack://production-company/./scripts/index.js?");

/***/ }),

/***/ "./scripts/modules/animations.js":
/*!***************************************!*\
  !*** ./scripts/modules/animations.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animationsInit: () => (/* binding */ animationsInit)\n/* harmony export */ });\n///////////////////////////////////////////////////////////////////\n//showreel opacity elements\n// const showButton = document.querySelector(\"h2\");\n// const textDiv = document.querySelector(\".main__maintext\");\n// textDiv.style.opacity = \"1\";\n\nfunction fadeIn(el, speed) {\n  let step = 1 / speed;\n  el.style.opacity = '0';\n  let interval = setInterval(function () {\n    if (+el.style.opacity >= 1) {\n      el.style.opacity = '1';\n      clearInterval(interval);\n    }\n    el.style.opacity = +el.style.opacity + step;\n  }, speed / 1000);\n}\nfunction fadeOut(el, speed) {\n  let step = 1 / speed;\n  el.style.opacity = '1';\n  let interval = setInterval(function () {\n    if (+el.style.opacity <= 0) {\n      el.style.opacity = '0';\n      clearInterval(interval);\n    }\n    el.style.opacity = +el.style.opacity - step;\n  }, speed / 1000);\n}\n\n///////////////////////////////////////////////////////////////////\n//Showing up scrolled projects\nfunction onEntry(entry) {\n  entry.forEach(change => {\n    if (change.isIntersecting) {\n      change.target.classList.add('element-show');\n    }\n  });\n}\nfunction animationsInit() {\n  let options = {\n    threshold: [0.5]\n  };\n  let observer = new IntersectionObserver(onEntry, options);\n  //let elements = document.querySelectorAll('.element-animation');\n\n  const projects = document.querySelectorAll('.project');\n  for (let el of projects) {\n    observer.observe(el);\n  }\n}\n///////////////////////////////////////////////////////////////////\n\n//# sourceURL=webpack://production-company/./scripts/modules/animations.js?");

/***/ }),

/***/ "./scripts/modules/hamb.js":
/*!*********************************!*\
  !*** ./scripts/modules/hamb.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   burgerMenu: () => (/* binding */ burgerMenu)\n/* harmony export */ });\n///////////////////////////////////////////////////////////////////\n//hamb start\nfunction burgerMenu(selector) {\n  let menu = $(selector);\n  let button = menu.find('.burger-menu__button', '.burger-menu__lines');\n  let links = menu.find('.burger-menu__link');\n  let overlay = menu.find('.burger-menu__overlay');\n  button.on('click', e => {\n    e.preventDefault();\n    toggleMenu();\n  });\n  links.on('click', () => toggleMenu());\n  overlay.on('click', () => toggleMenu());\n  function toggleMenu() {\n    menu.toggleClass('burger-menu_active');\n    if (menu.hasClass('burger-menu_active')) {\n      $('body').css('overlow', 'hidden');\n    } else {\n      $('body').css('overlow', 'visible');\n    }\n  }\n}\n//hamb end\n\n//# sourceURL=webpack://production-company/./scripts/modules/hamb.js?");

/***/ }),

/***/ "./scripts/modules/move-to.js":
/*!************************************!*\
  !*** ./scripts/modules/move-to.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   moveToInit: () => (/* binding */ moveToInit)\n/* harmony export */ });\n///////////////////////////////////////////////////////////////////\n//move to start\n\nfunction moveToInit() {\n  const moveto = new MoveTo();\n  const navItems = document.querySelectorAll('.nav__item');\n  navItems.forEach(li => moveto.registerTrigger(li.firstElementChild));\n}\n//move to end\n\n//# sourceURL=webpack://production-company/./scripts/modules/move-to.js?");

/***/ }),

/***/ "./scripts/modules/photo-and-video.js":
/*!********************************************!*\
  !*** ./scripts/modules/photo-and-video.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPhotos: () => (/* binding */ addPhotos),\n/* harmony export */   changeVideoPlayerSize: () => (/* binding */ changeVideoPlayerSize),\n/* harmony export */   clickables: () => (/* binding */ clickables),\n/* harmony export */   onDocClick: () => (/* binding */ onDocClick),\n/* harmony export */   onImgClick: () => (/* binding */ onImgClick),\n/* harmony export */   videoPlayer: () => (/* binding */ videoPlayer)\n/* harmony export */ });\n///////////////////////////////////////////////////////////////////\n//portfolio video and photo start\nconst clickables = document.querySelectorAll('.clickable');\nconst videoPlayer = document.querySelector('.video-player');\nconst carousel = document.querySelector('.swiper');\nconst swiperWrapper = document.querySelector('.swiper-wrapper');\nconst bg = document.querySelector('.bg-black');\nconst bgShowreel = document.querySelector('.bg-showreel');\nconst exit = document.querySelector('.exit');\nlet videoOrPhoto = videoPlayer;\nconst swiper = new Swiper('.swiper', {\n  loop: true,\n  // slidesPerView: 3,\n  slidesPerView: 1,\n  spaceBetween: 40,\n  allowTouchMove: true,\n  // Navigation arrows\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev'\n  }\n});\nfunction addPhotos(container, folder, quantity) {\n  for (let i = 1; i < quantity + 1; i++) {\n    swiper.appendSlide(`<div class=\"swiper-slide\"><img src='img/${folder}/${i}.jpg'></img></div>`);\n  }\n}\nfunction changeVideoPlayerSize() {\n  if (window.innerWidth > window.innerHeight) {\n    videoPlayer.setAttribute('width', 120 * window.innerHeight / 100);\n    videoPlayer.setAttribute('height', 120 * window.innerHeight / 100 * 9 / 16);\n  } else {\n    videoPlayer.setAttribute('width', 90 * window.innerWidth / 100);\n    videoPlayer.setAttribute('height', 90 * window.innerWidth / 100 * 9 / 16);\n  }\n}\nfunction onImgClick(event) {\n  exit.classList.toggle('display-none');\n  const dataType = event.target.getAttribute('data-type');\n  if (dataType === 'video') {\n    videoOrPhoto = videoPlayer;\n    const url = event.target.getAttribute('data-url');\n    videoPlayer.setAttribute('src', url);\n    changeVideoPlayerSize();\n    videoPlayer.classList.toggle('display-none');\n  } else if (dataType === 'photo') {\n    videoOrPhoto = carousel;\n    const folder = event.target.getAttribute('data-folder');\n    const quantity = +event.target.getAttribute('data-quantity');\n    swiper.removeAllSlides();\n    //removeAllChildren(swiperWrapper);\n    addPhotos(swiperWrapper, folder, quantity);\n    swiper.updateSlides();\n    carousel.classList.toggle('display-none');\n  }\n  if (!videoOrPhoto.classList.contains('display-none')) {\n    document.addEventListener('keydown', onDocClick);\n    document.addEventListener('click', onDocClick);\n    bg.classList.toggle('display-none');\n    bg.style.opacity = 0;\n    requestAnimationFrame(function () {\n      bg.style.transition = 'opacity .5s';\n      bg.style.opacity = 1;\n    });\n    videoOrPhoto.style.opacity = 0;\n    requestAnimationFrame(function () {\n      videoOrPhoto.style.transition = 'opacity 1s';\n      videoOrPhoto.style.opacity = 1;\n    });\n  }\n}\nfunction onDocClick(event) {\n  const swiperSlides = Array.from(document.querySelectorAll('.swiper-slide'));\n  if (event.key === 'Escape' || event.type === 'click' && (event.target === bg || event.target === exit) || swiperSlides.includes(event.target)) {\n    videoOrPhoto.classList.toggle('display-none');\n    exit.classList.toggle('display-none');\n    if (videoOrPhoto === videoPlayer) {\n      videoOrPhoto.setAttribute('src', '');\n    }\n    document.removeEventListener('keydown', onDocClick);\n    document.removeEventListener('click', onDocClick);\n    bg.classList.toggle('display-none');\n  }\n}\n//portfolio video and photo end\n\n//# sourceURL=webpack://production-company/./scripts/modules/photo-and-video.js?");

/***/ }),

/***/ "./scripts/modules/portfolio-data.js":
/*!*******************************************!*\
  !*** ./scripts/modules/portfolio-data.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPortfolio: () => (/* binding */ createPortfolio)\n/* harmony export */ });\n///////////////////////////////////////////////////////////////////\n//data init\n\nconst portfolio = [{\n  type: 'video',\n  //\"video\" or \"photo\"\n  sort: 'commercial-video',\n  // \"commercial-video\", \"photoshoot\" etc\n  cover: 'img/1.png',\n  //path to cover\n  videoUrl: 'https://player.vimeo.com/video/293588631?h=f2104258d8',\n  photoFolder: null,\n  //photo folder\n  photoQuantity: null,\n  //quantity of photos in folder\n  title: 'Тренажёрный зал \"Звёздный\"',\n  sortText: 'Рекламный видеоролик'\n}, {\n  type: 'video',\n  //\"video\" or \"photo\"\n  sort: 'commercial-video',\n  // \"commercial-video\", \"photoshoot\" etc\n  cover: 'img/2.png',\n  //path to cover\n  videoUrl: 'https://player.vimeo.com/video/103431880?h=05ba961527',\n  photoFolder: null,\n  //photo folder\n  photoQuantity: null,\n  //quantity of photos in folder\n  title: 'Кинотеатр \"Смена\"',\n  sortText: 'Рекламный видеоролик'\n}, {\n  type: 'photo',\n  //\"video\" or \"photo\"\n  sort: 'photoshoot',\n  // \"commercial-video\", \"photoshoot\" etc\n  cover: 'img/3.jpg',\n  //path to cover\n  videoUrl: null,\n  photoFolder: '1',\n  //photo folder\n  photoQuantity: 6,\n  //quantity of photos in folder\n  title: 'Maria',\n  sortText: 'Студийная фотосъёмка'\n}, {\n  type: 'photo',\n  //\"video\" or \"photo\"\n  sort: 'commercial-photo',\n  // \"commercial-video\", \"photoshoot\" etc\n  cover: 'img/4.jpg',\n  //path to cover\n  videoUrl: null,\n  photoFolder: '2',\n  //photo folder\n  photoQuantity: 6,\n  //quantity of photos in folder\n  title: 'Коста Лакоста - Поневоле',\n  sortText: 'Коммерческая фотосъёмка'\n}, {\n  type: 'photo',\n  //\"video\" or \"photo\"\n  sort: 'photoshoot',\n  // \"commercial-video\", \"photoshoot\" etc\n  cover: 'img/5.jpg',\n  //path to cover\n  videoUrl: null,\n  photoFolder: '3',\n  //photo folder\n  photoQuantity: 6,\n  //quantity of photos in folder\n  title: 'Maria',\n  sortText: 'Студийная фотосъёмка'\n}, {\n  type: 'photo',\n  //\"video\" or \"photo\"\n  sort: 'photoshoot',\n  // \"commercial-video\", \"photoshoot\" etc\n  cover: 'img/6.jpg',\n  //path to cover\n  videoUrl: null,\n  photoFolder: '4',\n  //photo folder\n  photoQuantity: 6,\n  //quantity of photos in folder\n  title: 'Polina',\n  sortText: 'Студийная фотосъёмка'\n}, {\n  type: 'photo',\n  //\"video\" or \"photo\"\n  sort: 'photoshoot',\n  // \"commercial-video\", \"photoshoot\" etc\n  cover: 'img/7.jpg',\n  //path to cover\n  videoUrl: null,\n  photoFolder: '5',\n  //photo folder\n  photoQuantity: 1,\n  //quantity of photos in folder\n  title: 'Dary Dary',\n  sortText: 'Студийная фотосъёмка'\n}, {\n  type: 'video',\n  //\"video\" or \"photo\"\n  sort: 'clip',\n  // \"commercial-video\", \"photoshoot\" etc\n  cover: 'img/8.png',\n  //path to cover\n  videoUrl: 'https://player.vimeo.com/video/293588631?h=f2104258d8',\n  photoFolder: null,\n  //photo folder\n  photoQuantity: null,\n  //quantity of photos in folder\n  title: 'Студия звукозаписи \"Acid sound\"',\n  sortText: 'Музыкальный клип'\n}, {\n  type: 'photo',\n  //\"video\" or \"photo\"\n  sort: 'photoshoot',\n  // \"commercial-video\", \"photoshoot\" etc\n  cover: 'img/9.jpg',\n  //path to cover\n  videoUrl: null,\n  photoFolder: '6',\n  //photo folder\n  photoQuantity: 2,\n  //quantity of photos in folder\n  title: 'Margarita',\n  sortText: 'Студийная фотосъёмка'\n}];\n\n//portfolio.sort(() => Math.random() - 0.5);\n\nconst projectsWrapper = document.querySelector('.projects');\nfunction createPortfolio() {\n  projectsWrapper.innerHTML = '';\n  for (let elem of portfolio) {\n    const innerHTML = `<div class=\"project project_${elem.type}\" data-sort=\"${elem.sort}\">\n  <img\n    src=\"${elem.cover}\"\n    alt=\"\"\n    class=\"project__img clickable lazyload\"\n    data-type=\"${elem.type}\"\n    data-url=\"${elem.videoUrl}\"\n    data-folder=\"${elem.photoFolder}\"\n    data-quantity=\"${elem.photoQuantity}\"\n  />\n  <div class=\"project__textarea\">\n    <p class=\"project__title\">${elem.title}</p>\n    <p class=\"project__type\">${elem.sortText}</p>\n  </div>\n</div>`;\n    projectsWrapper.innerHTML += innerHTML;\n  }\n}\n\n//# sourceURL=webpack://production-company/./scripts/modules/portfolio-data.js?");

/***/ }),

/***/ "./scripts/modules/sorting.js":
/*!************************************!*\
  !*** ./scripts/modules/sorting.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   onLinkClick: () => (/* binding */ onLinkClick)\n/* harmony export */ });\n///////////////////////////////////////////////////////////////////\n//sorting start\n\nfunction onLinkClick(event) {\n  const projects = document.querySelectorAll('.project');\n  const target = event.target;\n  const sort = target.getAttribute('data-sort');\n  if (sort !== 'all' && sort !== 'all-photo' && sort !== 'all-video') {\n    for (let project of projects) {\n      if (project.getAttribute('data-sort') !== sort) {\n        project.classList.add('display-none');\n      } else {\n        project.classList.remove('display-none');\n      }\n    }\n  } else {\n    if (sort === 'all') {\n      for (let project of projects) {\n        project.classList.remove('display-none');\n      }\n    } else if (sort === 'all-video') {\n      for (let project of projects) {\n        console.log(project);\n        if (project.classList.contains('project_video')) {\n          project.classList.remove('display-none');\n        } else {\n          project.classList.add('display-none');\n        }\n      }\n    } else if (sort === 'all-photo') {\n      for (let project of projects) {\n        if (project.classList.contains('project_photo')) {\n          project.classList.remove('display-none');\n        } else {\n          project.classList.add('display-none');\n        }\n      }\n    }\n  }\n}\n//sorting end\n\n//# sourceURL=webpack://production-company/./scripts/modules/sorting.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;