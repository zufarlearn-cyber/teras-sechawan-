
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


document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".sebesek-track");
    const slides = document.querySelectorAll(".sebesek-slide");
    const prevButton = document.querySelector(".slider-prev");
    const nextButton = document.querySelector(".slider-next");
    const counter = document.querySelector(".slider-counter");

    if (!track || !prevButton || !nextButton || !counter || slides.length === 0) {
        return;
    }

    let currentIndex = 0;

    function updateSlider() {

        track.style.transform =
            "translateX(-" + (currentIndex * 100) + "%)";

        counter.textContent =
            String(currentIndex + 1).padStart(2, "0") +
            " / " +
            String(slides.length).padStart(2, "0");

    }

    nextButton.addEventListener("click", function () {

        currentIndex = (currentIndex + 1) % slides.length;

        updateSlider();

    });

    prevButton.addEventListener("click", function () {

        currentIndex =
            (currentIndex - 1 + slides.length) % slides.length;

        updateSlider();

    });

    updateSlider();

});
