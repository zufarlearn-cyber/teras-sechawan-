
document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".cta-button");

    button.addEventListener("click", function () {
        console.log("Selamat datang di SECHAWAN!");
    });

});

/* CHRISTMAS PROMO POPUP */

const christmasPopup = document.getElementById("christmasPopup");
const closePopup = document.getElementById("closePopup");

// Tampilkan popup saat pertama kali berkunjung
if (!sessionStorage.getItem("christmasPopupClosed")) {
    christmasPopup.style.display = "flex";
}

// Tombol tutup popup
closePopup.addEventListener("click", function () {
    christmasPopup.style.display = "none";

    sessionStorage.setItem("christmasPopupClosed", "true");
});

/* =================================
   SEBESEK CATALOG SLIDER
================================= */

const sebesekTrack = document.querySelector(".sebesek-track");
const sebesekSlides = document.querySelectorAll(".sebesek-slide");
const sebesekPrev = document.querySelector(".slider-prev");
const sebesekNext = document.querySelector(".slider-next");
const sebesekCounter = document.querySelector(".slider-counter");

let sebesekIndex = 0;

function updateSebesekSlider() {

    sebesekTrack.style.transform =
        `translateX(-${sebesekIndex * 100}%)`;

    sebesekCounter.textContent =
        `0${sebesekIndex + 1} / 0${sebesekSlides.length}`;

}

sebesekNext.addEventListener("click", function() {

    sebesekIndex++;

    if (sebesekIndex >= sebesekSlides.length) {
        sebesekIndex = 0;
    }

    updateSebesekSlider();

});


sebesekPrev.addEventListener("click", function() {

    sebesekIndex--;

    if (sebesekIndex < 0) {
        sebesekIndex = sebesekSlides.length - 1;
    }

    updateSebesekSlider();

});
