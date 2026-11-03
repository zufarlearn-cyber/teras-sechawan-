

document.addEventListener("DOMContentLoaded", function () {

    /* CTA HOME */
    const button = document.querySelector(".cta-button");

    if (button) {
        button.addEventListener("click", function () {
            console.log("Selamat datang di SECHAWAN!");
        });
    }


    /* CHRISTMAS PROMO POPUP */
    const christmasPopup = document.getElementById("christmasPopup");
    const closePopup = document.getElementById("closePopup");

    if (christmasPopup && closePopup) {

        if (!sessionStorage.getItem("christmasPopupClosed")) {
            christmasPopup.style.display = "flex";
        }

        closePopup.addEventListener("click", function () {
            christmasPopup.style.display = "none";
            sessionStorage.setItem("christmasPopupClosed", "true");
        });

    }


    /* SEBESEK CATALOG SLIDER */
    const track = document.querySelector(".sebesek-track");
    const slides = document.querySelectorAll(".sebesek-slide");
    const prevButton = document.querySelector(".slider-prev");
    const nextButton = document.querySelector(".slider-next");
    const counter = document.querySelector(".slider-counter");

    if (track && slides.length > 0 && prevButton && nextButton && counter) {

        let currentIndex = 0;

        function updateSlider() {

            const slideWidth = slides[0].getBoundingClientRect().width;

            track.style.transform =
                "translateX(-" + (currentIndex * slideWidth) + "px)";

            counter.textContent =
                String(currentIndex + 1).padStart(2, "0") +
                " / " +
                String(slides.length).padStart(2, "0");

        }

        nextButton.addEventListener("click", function () {

            currentIndex++;

            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }

            updateSlider();

        });

        prevButton.addEventListener("click", function () {

            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            }

            updateSlider();

        });

        window.addEventListener("resize", updateSlider);

        updateSlider();

    }

});
