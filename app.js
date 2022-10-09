const carousel = document.querySelector('.corousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let h4 = document.createElement('h4'); 
    let p = document.createElement('p');

    // attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    h4.appendChild(document.createTextNode(movies[slideIndex].sub));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(h4);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].Image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';
    imgElement.className = 'slider-image';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    h4.className = 'movie-sub-head';
    p.className = 'movie-des';

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }

}

for(let i = 0; i < 3; i++){
    createSlide();
}

// createSlide();


setInterval(() => {
    createSlide();
}, 3000);


// VIDEO CARDS

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {

    item.addEventListener("mouseover" , () => {
        let video = item.children[2];
        video.play();
    })

    item.addEventListener("mouseleave" , () => {
        let video = item.children[2];
        video.pause();
    })
})


// CARD SLIDER

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item , i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click" , () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener("click" , () => {
        item.scrollLeft -= containerWidth + 200;
    })
})