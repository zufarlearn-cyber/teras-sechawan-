
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
