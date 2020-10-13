const logOut = document.querySelector(".js-logOut");

const USER_LS = "currentName";


function logOutUser(event) {
    localStorage.removeItem(USER_LS);
}

function init() {
    logOut.addEventListener("click", logOutUser);
}

init();