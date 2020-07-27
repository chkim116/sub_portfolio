'use strict'

const clockSeacrh = document.querySelector(".clock");
const clockTitle = document.querySelector(".clock__title");

function clockTime() {
    const date = new Date();
    const clockHours = date.getHours();
    const clockMinutes = date.getMinutes();
    const clockSeconds = date.getSeconds();
    clockTitle.innerHTML = (`${clockHours < 10 ? `0${clockHours}` : clockHours}:${
        clockMinutes < 10 ? `0${clockMinutes}` : clockMinutes}:${
        clockSeconds < 10 ? `0${clockSeconds}` : clockSeconds}`);

};

function now () {
    clockTime();
}

now();
setInterval(now, 1000);