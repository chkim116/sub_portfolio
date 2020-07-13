'use strict'

const title = document.querySelector(".title")
const CLICK_COLOR = "clicked"


function colorChange() {
   title.classList.toggle(CLICK_COLOR);
}

title.addEventListener("click", colorChange);



// 클릭하면 색깔이 바뀌는 함수들