///////////////////////////////////////////////////////////////////
//showreel opacity elements
// const showButton = document.querySelector("h2");
// const textDiv = document.querySelector(".main__maintext");
// textDiv.style.opacity = "1";

function fadeIn(el, speed) {
    let step = 1 / speed;
    el.style.opacity = '0';
    let interval = setInterval(function () {
        if (+el.style.opacity >= 1) {
            el.style.opacity = '1';
            clearInterval(interval);
        }

        el.style.opacity = +el.style.opacity + step;
    }, speed / 1000);
}

function fadeOut(el, speed) {
    let step = 1 / speed;
    el.style.opacity = '1';
    let interval = setInterval(function () {
        if (+el.style.opacity <= 0) {
            el.style.opacity = '0';
            clearInterval(interval);
        }

        el.style.opacity = +el.style.opacity - step;
    }, speed / 1000);
}

///////////////////////////////////////////////////////////////////
//Showing up scrolled projects
function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

export function animationsInit() {
    let options = {
        threshold: [0.5],
    };
    let observer = new IntersectionObserver(onEntry, options);
    //let elements = document.querySelectorAll('.element-animation');

    const projects = document.querySelectorAll('.project');

    for (let el of projects) {
        observer.observe(el);
    }
}
///////////////////////////////////////////////////////////////////
