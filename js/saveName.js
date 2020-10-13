const form = document.querySelector(".login");
const loginName = document.querySelector(".login-form__name");


const USER_LS = "currentName";

function saveName() {
    const currentValue = loginName.value;
    localStorage.setItem(USER_LS, currentValue);
}

function askForName() {
    form.addEventListener("submit", saveName);
}

function init() {
    askForName();
}

init();