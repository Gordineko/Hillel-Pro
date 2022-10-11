class Accordeon {
  el = null;
  constructor(el) {
    this.el = el;
    this.onBtnClick();
  }

  onBtnClick() {
    const titles = this.el.querySelectorAll(".accordion-item");

    titles.forEach((titleEl) => {
      titleEl.addEventListener("click", (e) => {
        const nextEl = e.target.nextElementSibling;
        if (e.target.classList.contains("accordion-title")) {
          if (nextEl.classList.contains("body_visible")) {
            nextEl.classList.remove("body_visible");
            nextEl.style.height = 0;
          } else {
            this.clearClass();
            nextEl.classList.add("body_visible");
            nextEl.style.height = nextEl.scrollHeight + "px";
          }
        }
      });
    });
  }

  clearClass() {
    const bodyes = this.el.querySelectorAll(".accordion-body");
    bodyes.forEach((bodyEl) => {
      bodyEl.style.height = 0;
      bodyEl.classList.remove("body_visible");
    });
  }
}
