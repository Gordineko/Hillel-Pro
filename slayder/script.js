const btnRight = document.querySelector(".button_right");
const btnLeft = document.querySelector(".button_left");
const swap = document.querySelector(".swaper");
const swapEls = document.querySelectorAll(".swaper_item");

btnRight.addEventListener("click", goRight);

function goRight() {
  swapEls.forEach((swapEl) => {
    if (swapEl.classList.contains("visible")) {
      swapEl.classList.add("visible");
    }
  });
}

