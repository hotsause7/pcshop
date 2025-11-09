const modalBtn = document.querySelector(".assembly__button");
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal__inner");

const closeBtn = document.createElement("div");
closeBtn.textContent = "X";
closeBtn.classList.add("modal__close-btn");

modalInner.appendChild(closeBtn);

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", (e) => {
  modal.style.display = "";
});

modal.addEventListener("click", (e) => {
  const modalContent = e.target.closest(".modal__inner");
  if (!modalContent) {
    modal.style.display = "";
  }
});
