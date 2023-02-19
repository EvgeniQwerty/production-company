//carousel init start
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//carousel init end

//portfolio video and photo start
const clickables = document.querySelectorAll(".clickable");
const videoPlayer = document.querySelector(".video-player");
const carousel = document.querySelector('.swiper');
let videoOrPhoto = videoPlayer;

function onImgClick(event) {
  console.log(0);

  const dataType = event.target.getAttribute("data-type");
  if (dataType === "video") {
    videoOrPhoto = videoPlayer;
    
    const url = event.target.getAttribute("data-url");
    videoPlayer.setAttribute("src", url);
    videoPlayer.classList.toggle("display-none");

    console.log(1);

    if (!videoPlayer.classList.contains("display-none")) {
      console.log(2);
      document.addEventListener("keydown", onDocClick);
      document.addEventListener("click", onDocClick);
      console.log(3);
    }
  }
  else if (dataType === "photo") {
    
    videoOrPhoto = carousel;
    
    console.log('photo');
    carousel.classList.toggle("display-none");
    console.log(carousel.classList.contains('display-none'));
  }
  console.log(event);
}

function onDocClick(event) {
  console.log(event);
  console.log(4);
  if (
    event.key === "Escape" ||
    (event.type === "click" &&
      event.target !== videoOrPhoto &&
      !event.target.classList.contains("clickable"))
  ) {
    
    videoOrPhoto.classList.toggle("display-none");
    if (videoOrPhoto === videoPlayer) {
      videoOrPhoto.setAttribute("src", "");
    }

    document.removeEventListener("keydown", onDocClick);
    document.removeEventListener("click", onDocClick);
  }
}
//portfolio video and photo end

//sorting start
const projects = document.querySelectorAll('.project');

function onLinkClick(event) {
  const target = event.target;
  const sort = target.getAttribute('data-sort');

  if (sort !== 'all') {
    for (let project of projects) {
      if (project.getAttribute('data-sort') !== sort) {
        project.classList.add('display-none');  
      } 
    }
  }
}
//sorting end

//main
for (let img of clickables) {
  img.addEventListener("click", onImgClick);
}
//main
