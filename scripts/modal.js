const modalBtn = document.querySelector(".assembly__button");
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal__inner");
const orderBtn = document.querySelector(".course__button");

const closeBtn = document.createElement("div");
closeBtn.textContent = "X";
closeBtn.classList.add("modal__close-btn");

modalInner.appendChild(closeBtn);

const openModal = () => {
  modal.style.display = "flex";
};

document.addEventListener("click", (e) => {
  if (e.target === modalBtn || e.target === orderBtn) 
    openModal();
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
