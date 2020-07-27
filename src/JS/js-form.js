'use strict'

const form = document.querySelector(".formjs");
const input = form.querySelector('input');
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser"
const SHOWING_ON = "showing"

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    console.log(input.value);
}

function askForName () {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        // none
        askForName();
    }   else {
        // has
        paintGreeting(currentUser);
    }
}

function now() {}
    loadName();
now();