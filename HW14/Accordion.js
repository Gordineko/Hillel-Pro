class Accordeon {
  el = null;
  constructor(el) {
    this.el = el;
    this.onBtnClick();
  }

  onBtnClick() {
    this.el.addEventListener("click", (e) => {
      if (!e.target.classList.contains("accordion-title")) return;
      const nextEl = e.target.nextElementSibling;
      if (nextEl.classList.contains("body_visible")) {
        this.close(nextEl, 0);
      } else {
        this.clearClass();
        nextEl.classList.add("body_visible");
        this.setHeight(nextEl, nextEl.scrollHeight + "px");
      }
    });
  }
  close(elem, val) {
    elem.classList.remove("body_visible");
    this.setHeight(elem, val);
  }
  setHeight(elem, val) {
    elem.style.height = val;
  }
  clearClass() {
    this.el
      .querySelectorAll(".accordion-body")
      .forEach((bodyEl) => this.close(bodyEl, 0));
  }
}
