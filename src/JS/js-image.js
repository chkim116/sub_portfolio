'use strict'



const bg = document.querySelector("body");



const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `image/${imgNumber + 1}.jpg`;
    image.classList.add("bg__show");
    bg.prepend(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();