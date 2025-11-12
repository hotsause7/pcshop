const setForm = () => {
  const form = document.querySelector(".modal");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputText = form.querySelector("input[type=text]");
    const inputTel = form.querySelector("input[type=tel]");
    const inputEmail = form.querySelector("input[type=email]");

    const formDataObject = {
      name: inputText.value,
      tel: inputTel.value,
      email: inputEmail.value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formDataObject),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Запрашиваемая страница не найдена");
        }
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((error) => {
        alert(error);
      });

    const formInputs = form.querySelectorAll("input");
    formInputs.forEach((input) => {
      input.value = "";
    });
  });
};

setForm();
