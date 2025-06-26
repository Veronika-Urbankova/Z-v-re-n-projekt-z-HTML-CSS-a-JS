// UDÁLOST SCROLOVÁNÍ
const scrollTop = document.getElementById("scrollTopBtn") as HTMLElement;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    scrollTop.classList.add("visible");
    // scrollTop.style.opacity = "1";
    // scrollTop.style.pointerEvents = "auto";
  } else {
    scrollTop.classList.remove("visible");
    // scrollTop.style.opacity = "0";
    // scrollTop.style.pointerEvents = "none";
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
