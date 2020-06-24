var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");
var mapLink = document.querySelector(".contacts__link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map-close");


//Форма входа

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("login");
} catch (err) {
isStorageSupport = false;
}



link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");

if (storage) {
login.value = storage;
password.focus();
} else {
login.focus();
}
});


close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});


form.addEventListener("submit", function (evt) {
if (!login.value || !password.value) {
evt.preventDefault();
popup.classList.add("modal-error");
popup.offsetWidth = popup.offsetWidth;
popup.classList.add("modal-error");
} else {
if (isStorageSupport) {
localStorage.setItem("login", login.value);
}
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode ===27) {
if (popup.classList.contains("modal-show")) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
}
}
});


//Карта
mapLink.addEventListener("click", function (evt) {
evt.preventDefault();
mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
evt.preventDefault();
mapPopup.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode ===27) {
if (mapPopup.classList.contains("modal-map-show")) {
evt.preventDefault();
mapPopup.classList.remove("modal-map-show");
}
}
});
