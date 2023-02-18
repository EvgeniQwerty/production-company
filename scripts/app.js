const clickables = document.querySelectorAll(".clickable");
const videoPlayer = document.querySelector(".video-player");

function onImgClick(event) {
    console.log(0);
  
    const dataType = event.target.getAttribute("data-type");
  if (dataType === "video") {
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
  console.log(event);
}

function onDocClick(event) {
  console.log(event);
  console.log(4);
  if (
    event.key === "Escape" ||
    (event.type === "click" &&
      event.target !== videoPlayer &&
      !event.target.classList.contains('clickable'))
  ) {
    videoPlayer.classList.toggle("display-none");

    videoPlayer.setAttribute("src", "");

    document.removeEventListener("keydown", onDocClick);
    document.removeEventListener("click", onDocClick);
  }
}

//main
for (let img of clickables) {
  img.addEventListener("click", onImgClick);
}
//main
