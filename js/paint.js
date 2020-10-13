const greeting = document.querySelector(".js-userName");

const USER_LS = "currentName";

function paintName() {
    greeting.innerText = localStorage.getItem(USER_LS);
}

function init() {
    paintName();
}

init();