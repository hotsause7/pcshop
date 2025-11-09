const accordioncontents = document.querySelectorAll(".program-line__content");

accordioncontents.forEach((elem) => {
    
  const accordeonTitle = elem.querySelector(".program-line__title");
  const accordeonDesc = elem.querySelector(".program-line__descr");

  accordeonTitle.addEventListener("click", () => {
    // Убираем класс active у всех описаний
    accordioncontents.forEach((otherElem) => {
      const otherDesc = otherElem.querySelector(".program-line__descr");
      if (otherDesc !== accordeonDesc) {
        otherDesc.classList.remove("active");
      }
    });
    
    // Переключаем класс active у текущего элемента
    accordeonDesc.classList.toggle("active");
  });

  
});
