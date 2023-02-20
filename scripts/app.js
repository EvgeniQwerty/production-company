//carousel init start
const swiper = new Swiper(".swiper", {
  loop: true,
  // slidesPerView: 3,
  slidesPerView: 1,
  spaceBetween: 30,
  allowTouchMove: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//carousel init end

//portfolio video and photo start
const clickables = document.querySelectorAll(".clickable");
const videoPlayer = document.querySelector(".video-player");
const carousel = document.querySelector(".swiper");
const swiperWrapper = document.querySelector(".swiper-wrapper");
const bg = document.querySelector(".bg-black");
let videoOrPhoto = videoPlayer;

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function addPhotos(container, folder, quantity) {
  for (let i = 1; i < quantity + 1; i++) {
    // const div = document.createElement("div");
    // div.classList.toggle("swipper-slide");
    // const img = document.createElement("img");
    // img.setAttribute("src", `img/${folder}/${i}.jpg`);
    // div.appendChild(img);
    // container.appendChild(div);

    swiper.appendSlide(
      `<div class="swiper-slide"><img src='img/${folder}/${i}.jpg'></img></div>`
    );
  }
}

function onImgClick(event) {
  console.log(0);

  const dataType = event.target.getAttribute("data-type");
  if (dataType === "video") {
    videoOrPhoto = videoPlayer;

    const url = event.target.getAttribute("data-url");
    videoPlayer.setAttribute("src", url);
    videoPlayer.setAttribute("width", window.innerWidth * 0.8);
    videoPlayer.setAttribute("height", window.innerHeight * 0.8);

    videoPlayer.classList.toggle("display-none");

    console.log(1);
  } else if (dataType === "photo") {
    videoOrPhoto = carousel;

    const folder = event.target.getAttribute("data-folder");
    const quantity = +event.target.getAttribute("data-quantity");

    swiper.removeAllSlides();
    //removeAllChildren(swiperWrapper);
    addPhotos(swiperWrapper, folder, quantity);
    swiper.updateSlides();
    console.log(swiper.slides);

    console.log("photo");
    carousel.classList.toggle("display-none");
    console.log(carousel.classList.contains("display-none"));
  }
  console.log(event);

  if (!videoOrPhoto.classList.contains("display-none")) {
    console.log(2);
    document.addEventListener("keydown", onDocClick);
    document.addEventListener("click", onDocClick);
    bg.classList.toggle("display-none");
    console.log(bg.classList.contains("display-none"));
    console.log(3);
  }
}

function onDocClick(event) {
  console.log(event);
  console.log(4);
  if (
    event.key === "Escape" ||
    (event.type === "click" && event.target === bg)
  ) {
    console.log("display-none");
    videoOrPhoto.classList.toggle("display-none");
    if (videoOrPhoto === videoPlayer) {
      videoOrPhoto.setAttribute("src", "");
    }

    document.removeEventListener("keydown", onDocClick);
    document.removeEventListener("click", onDocClick);
    bg.classList.toggle("display-none");
  }
}
//portfolio video and photo end

//sorting start
const projects = document.querySelectorAll(".project");
const navItems = document.querySelectorAll(".nav__item");

function onLinkClick(event) {
  const target = event.target;
  const sort = target.getAttribute("data-sort");

  if (sort !== "all") {
    for (let project of projects) {
      if (project.getAttribute("data-sort") !== sort) {
        project.classList.add("display-none");
      } else {
        project.classList.remove("display-none");
      }
    }
  } else {
    for (let project of projects) {
      project.classList.remove("display-none");
    }
  }
}
//sorting end

//move to start
const moveto = new MoveTo();
navItems.forEach((li) => moveto.registerTrigger(li.firstElementChild));
//move to end

//hamb start
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu__button", ".burger-menu__lines");
  let links = menu.find(".burger-menu__link");
  let overlay = menu.find(".burger-menu__overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu_active");

    if (menu.hasClass("burger-menu_active")) {
      $("body").css("overlow", "hidden");
    } else {
      $("body").css("overlow", "visible");
    }
  }
}

burgerMenu(".burger-menu");
//hamb end

//main
for (let img of clickables) {
  img.addEventListener("click", onImgClick);
}

for (let li of navItems) {
  li.firstElementChild.addEventListener("click", onLinkClick);
}
//main
