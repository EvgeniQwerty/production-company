///////////////////////////////////////////////////////////////////
//data init

const portfolio = [
  {
    type: "video", //"video" or "photo"
    sort: "commercial-video", // "commercial-video", "photoshoot" etc
    cover: "img/1.png", //path to cover
    videoUrl: "https://player.vimeo.com/video/293588631?h=f2104258d8",
    photoFolder: null, //photo folder
    photoQuantity: null, //quantity of photos in folder
    title: 'Тренажёрный зал "Звёздный"',
    sortText: "Рекламный видеоролик",
  },
  {
    type: "video", //"video" or "photo"
    sort: "commercial-video", // "commercial-video", "photoshoot" etc
    cover: "img/2.gif", //path to cover
    videoUrl: "https://player.vimeo.com/video/103431880?h=05ba961527",
    photoFolder: null, //photo folder
    photoQuantity: null, //quantity of photos in folder
    title: 'Кинотеатр "Смена"',
    sortText: "Рекламный видеоролик",
  },
  {
    type: "photo", //"video" or "photo"
    sort: "photoshoot", // "commercial-video", "photoshoot" etc
    cover: "img/3.jpg", //path to cover
    videoUrl: null,
    photoFolder: "1", //photo folder
    photoQuantity: 6, //quantity of photos in folder
    title: "Maria",
    sortText: "Студийная фотосъёмка",
  },
  {
    type: "photo", //"video" or "photo"
    sort: "commercial-photo", // "commercial-video", "photoshoot" etc
    cover: "img/4.jpg", //path to cover
    videoUrl: null,
    photoFolder: "2", //photo folder
    photoQuantity: 6, //quantity of photos in folder
    title: "Коста Лакоста - Поневоле",
    sortText: "Коммерческая фотосъёмка",
  },
  {
    type: "photo", //"video" or "photo"
    sort: "photoshoot", // "commercial-video", "photoshoot" etc
    cover: "img/5.jpg", //path to cover
    videoUrl: null,
    photoFolder: "3", //photo folder
    photoQuantity: 6, //quantity of photos in folder
    title: "Maria",
    sortText: "Студийная фотосъёмка",
  },
  {
    type: "photo", //"video" or "photo"
    sort: "photoshoot", // "commercial-video", "photoshoot" etc
    cover: "img/6.jpg", //path to cover
    videoUrl: null,
    photoFolder: "4", //photo folder
    photoQuantity: 6, //quantity of photos in folder
    title: "Polina",
    sortText: "Студийная фотосъёмка",
  },
  {
    type: "photo", //"video" or "photo"
    sort: "photoshoot", // "commercial-video", "photoshoot" etc
    cover: "img/7.jpg", //path to cover
    videoUrl: null,
    photoFolder: "5", //photo folder
    photoQuantity: 1, //quantity of photos in folder
    title: "Dary Dary",
    sortText: "Студийная фотосъёмка",
  },
  {
    type: "video", //"video" or "photo"
    sort: "clip", // "commercial-video", "photoshoot" etc
    cover: "img/8.png", //path to cover
    videoUrl: "https://player.vimeo.com/video/293588631?h=f2104258d8",
    photoFolder: null, //photo folder
    photoQuantity: null, //quantity of photos in folder
    title: 'Студия звукозаписи "Acid sound"',
    sortText: "Музыкальный клип",
  },
  {
    type: "photo", //"video" or "photo"
    sort: "photoshoot", // "commercial-video", "photoshoot" etc
    cover: "img/9.jpg", //path to cover
    videoUrl: null,
    photoFolder: "6", //photo folder
    photoQuantity: 2, //quantity of photos in folder
    title: "Margarita",
    sortText: "Студийная фотосъёмка",
  },
];

//portfolio.sort(() => Math.random() - 0.5);

const projectsWrapper = document.querySelector(".projects");
projectsWrapper.innerHTML = "";
for (let elem of portfolio) {
  const innerHTML = `<div class="project project_${elem.type}" data-sort="${elem.sort}">
  <img
    src="${elem.cover}"
    alt=""
    class="project__img clickable lazyload"
    data-type="${elem.type}"
    data-url="${elem.videoUrl}"
    data-folder="${elem.photoFolder}"
    data-quantity="${elem.photoQuantity}"
  />
  <div class="project__textarea">
    <p class="project__title">${elem.title}</p>
    <p class="project__type">${elem.sortText}</p>
  </div>
</div>`;
  projectsWrapper.innerHTML += innerHTML;
}

///////////////////////////////////////////////////////////////////
//carousel init start
const swiper = new Swiper(".swiper", {
  loop: true,
  // slidesPerView: 3,
  slidesPerView: 1,
  spaceBetween: 40,
  allowTouchMove: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//carousel init end

///////////////////////////////////////////////////////////////////
//portfolio video and photo start
const clickables = document.querySelectorAll(".clickable");
const videoPlayer = document.querySelector(".video-player");
const carousel = document.querySelector(".swiper");
const swiperWrapper = document.querySelector(".swiper-wrapper");
const bg = document.querySelector(".bg-black");
const bgShowreel = document.querySelector(".bg-showreel");
const exit = document.querySelector(".exit");
let videoOrPhoto = videoPlayer;

function addPhotos(container, folder, quantity) {
  for (let i = 1; i < quantity + 1; i++) {
    console.log(`${folder}/${i}`);
    swiper.appendSlide(
      `<div class="swiper-slide"><img src='img/${folder}/${i}.jpg'></img></div>`
    );
  }
}

function onImgClick(event) {
  console.log(0);

  exit.classList.toggle("display-none");

  const dataType = event.target.getAttribute("data-type");
  if (dataType === "video") {
    videoOrPhoto = videoPlayer;

    const url = event.target.getAttribute("data-url");
    videoPlayer.setAttribute("src", url);
    if (window.innerWidth > window.innerHeight) {
      videoPlayer.setAttribute("width", window.innerWidth * 0.8);
      videoPlayer.setAttribute("height", window.innerHeight * 0.8);
    } else {
      videoPlayer.setAttribute("width", window.innerHeight * 0.5);
      videoPlayer.setAttribute("height", window.innerWidth * 0.5);
    }

    videoPlayer.classList.toggle("display-none");

    console.log(1);
  } else if (dataType === "photo") {
    videoOrPhoto = carousel;

    const folder = event.target.getAttribute("data-folder");
    const quantity = +event.target.getAttribute("data-quantity");

    console.log(folder, quantity);

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
    document.addEventListener("keydown", onDocClick);
    document.addEventListener("click", onDocClick);
    bg.classList.toggle("display-none");
  }
}

function onDocClick(event) {
  const swiperSlides = Array.from(document.querySelectorAll(".swiper-slide"));
  const vpcenter = document.querySelector(".vp-center");
  console.log(event);
  console.log(4);
  if (
    event.key === "Escape" ||
    (event.type === "click" && (event.target === bg || event.target === exit || event.target === vpcenter)) ||
    swiperSlides.includes(event.target)
  ) {
    console.log("display-none");
    videoOrPhoto.classList.toggle("display-none");
    exit.classList.toggle("display-none");
    if (videoOrPhoto === videoPlayer) {
      videoOrPhoto.setAttribute("src", "");
    }

    document.removeEventListener("keydown", onDocClick);
    document.removeEventListener("click", onDocClick);
    bg.classList.toggle("display-none");
  }
}
//portfolio video and photo end

///////////////////////////////////////////////////////////////////
//sorting start
const projects = document.querySelectorAll(".project");
const navItems = document.querySelectorAll(".nav__item");

function onLinkClick(event) {
  const target = event.target;
  const sort = target.getAttribute("data-sort");

  if (sort !== "all" && sort !== "all-photo" && sort !== "all-video") {
    for (let project of projects) {
      if (project.getAttribute("data-sort") !== sort) {
        project.classList.add("display-none");
      } else {
        project.classList.remove("display-none");
      }
    }
  } else {
    if (sort === "all") {
      for (let project of projects) {
        project.classList.remove("display-none");
      }
    } else if (sort === "all-video") {
      for (let project of projects) {
        if (project.classList.contains("project_video")) {
          project.classList.remove("display-none");
        } else {
          project.classList.add("display-none");
        }
      }
    } else if (sort === "all-photo") {
      for (let project of projects) {
        if (project.classList.contains("project_photo")) {
          project.classList.remove("display-none");
        } else {
          project.classList.add("display-none");
        }
      }
    }
  }
}
//sorting end

///////////////////////////////////////////////////////////////////
//move to start
const moveto = new MoveTo();
navItems.forEach((li) => moveto.registerTrigger(li.firstElementChild));
//move to end

///////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////
//main
for (let img of clickables) {
  img.addEventListener("click", onImgClick);
}

for (let li of navItems) {
  li.firstElementChild.addEventListener("click", onLinkClick);
}
//main

///////////////////////////////////////////////////////////////////
//listener for orientation change
window.addEventListener("resize", function () {
  //for video
  if (!videoPlayer.classList.contains("display-none")) {
    if (window.innerWidth > window.innerHeight) {
      videoPlayer.setAttribute("width", window.innerWidth * 0.8);
      videoPlayer.setAttribute("height", window.innerHeight * 0.8);
    } else {
      videoPlayer.setAttribute("width", window.innerHeight * 0.5);
      videoPlayer.setAttribute("height", window.innerWidth * 0.5);
    }
  }
});
//listener

///////////////////////////////////////////////////////////////////
//showreel opacity elements
// const showButton = document.querySelector("h2");
// const textDiv = document.querySelector(".main__maintext");
// textDiv.style.opacity = "1";

// function fadeIn(el, speed) {
//   let step = 1 / speed;
//   el.style.opacity = "0";
//   let interval = setInterval(function () {
//     if (+el.style.opacity >= 1) {
//       el.style.opacity = "1";
//       clearInterval(interval);
//     }

//     el.style.opacity = +el.style.opacity + step;
//   }, speed / 1000);
// }

// function fadeOut(el, speed) {
//   let step = 1 / speed;
//   el.style.opacity = "1";
//   let interval = setInterval(function () {
//     if (+el.style.opacity <= 0) {
//       el.style.opacity = "0";
//       clearInterval(interval);
//     }

//     el.style.opacity = +el.style.opacity - step;
//   }, speed / 1000);
// }

// function onBgVideoClick(event) {
//   console.log(event.target);
//   //const secondWrapper = document.querySelector(".main__second-wrapper");
//   //const h2 = document.querySelector("h2");
//   //const bgGrad = document.querySelector(".bg-grad");

//   console.log(textDiv.style.opacity);

//   if (
//     event.target === bgShowreel
//   ) {
//     if (+textDiv.style.opacity >= 1) fadeOut(textDiv, 100);
//     else fadeIn(textDiv, 100);
//   }
// }

// document.addEventListener("click", onBgVideoClick);

///////////////////////////////////////////////////////////////////
//Showing up scrolled projects
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
//let elements = document.querySelectorAll('.element-animation');

for (let el of projects) {
  observer.observe(el);
}
///////////////////////////////////////////////////////////////////

document.addEventListener("click", e => {console.log(e.target)});