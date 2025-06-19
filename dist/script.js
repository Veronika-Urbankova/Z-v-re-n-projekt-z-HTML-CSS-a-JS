"use strict";
// UDÁLOST SCROLOVÁNÍ
const scrollTop = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        scrollTop.style.opacity = "1";
        scrollTop.style.pointerEvents = "auto";
    }
    else {
        scrollTop.style.opacity = "0";
        scrollTop.style.pointerEvents = "none";
    }
});
scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
