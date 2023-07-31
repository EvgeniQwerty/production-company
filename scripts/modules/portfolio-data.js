///////////////////////////////////////////////////////////////////
//data init

const portfolio = [
    {
        type: 'video', //"video" or "photo"
        sort: 'commercial-video', // "commercial-video", "photoshoot" etc
        cover: 'img/1.png', //path to cover
        videoUrl: 'https://player.vimeo.com/video/293588631?h=f2104258d8',
        photoFolder: null, //photo folder
        photoQuantity: null, //quantity of photos in folder
        title: 'Тренажёрный зал "Звёздный"',
        sortText: 'Рекламный видеоролик',
    },
    {
        type: 'video', //"video" or "photo"
        sort: 'commercial-video', // "commercial-video", "photoshoot" etc
        cover: 'img/2.png', //path to cover
        videoUrl: 'https://player.vimeo.com/video/103431880?h=05ba961527',
        photoFolder: null, //photo folder
        photoQuantity: null, //quantity of photos in folder
        title: 'Кинотеатр "Смена"',
        sortText: 'Рекламный видеоролик',
    },
    {
        type: 'photo', //"video" or "photo"
        sort: 'photoshoot', // "commercial-video", "photoshoot" etc
        cover: 'img/3.jpg', //path to cover
        videoUrl: null,
        photoFolder: '1', //photo folder
        photoQuantity: 6, //quantity of photos in folder
        title: 'Maria',
        sortText: 'Студийная фотосъёмка',
    },
    {
        type: 'photo', //"video" or "photo"
        sort: 'commercial-photo', // "commercial-video", "photoshoot" etc
        cover: 'img/4.jpg', //path to cover
        videoUrl: null,
        photoFolder: '2', //photo folder
        photoQuantity: 6, //quantity of photos in folder
        title: 'Коста Лакоста - Поневоле',
        sortText: 'Коммерческая фотосъёмка',
    },
    {
        type: 'photo', //"video" or "photo"
        sort: 'photoshoot', // "commercial-video", "photoshoot" etc
        cover: 'img/5.jpg', //path to cover
        videoUrl: null,
        photoFolder: '3', //photo folder
        photoQuantity: 6, //quantity of photos in folder
        title: 'Maria',
        sortText: 'Студийная фотосъёмка',
    },
    {
        type: 'photo', //"video" or "photo"
        sort: 'photoshoot', // "commercial-video", "photoshoot" etc
        cover: 'img/6.jpg', //path to cover
        videoUrl: null,
        photoFolder: '4', //photo folder
        photoQuantity: 6, //quantity of photos in folder
        title: 'Polina',
        sortText: 'Студийная фотосъёмка',
    },
    {
        type: 'photo', //"video" or "photo"
        sort: 'photoshoot', // "commercial-video", "photoshoot" etc
        cover: 'img/7.jpg', //path to cover
        videoUrl: null,
        photoFolder: '5', //photo folder
        photoQuantity: 1, //quantity of photos in folder
        title: 'Dary Dary',
        sortText: 'Студийная фотосъёмка',
    },
    {
        type: 'video', //"video" or "photo"
        sort: 'clip', // "commercial-video", "photoshoot" etc
        cover: 'img/8.png', //path to cover
        videoUrl: 'https://player.vimeo.com/video/293588631?h=f2104258d8',
        photoFolder: null, //photo folder
        photoQuantity: null, //quantity of photos in folder
        title: 'Студия звукозаписи "Acid sound"',
        sortText: 'Музыкальный клип',
    },
    {
        type: 'photo', //"video" or "photo"
        sort: 'photoshoot', // "commercial-video", "photoshoot" etc
        cover: 'img/9.jpg', //path to cover
        videoUrl: null,
        photoFolder: '6', //photo folder
        photoQuantity: 2, //quantity of photos in folder
        title: 'Margarita',
        sortText: 'Студийная фотосъёмка',
    },
];

//portfolio.sort(() => Math.random() - 0.5);

const projectsWrapper = document.querySelector('.projects');

export function createPortfolio() {
    projectsWrapper.innerHTML = '';
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
}
