const headerNav = document.querySelector(".header__nav");
const navLinks = headerNav.querySelectorAll("a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    seamless.scrollIntoView(document.querySelector(link.getAttribute("href")), {
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  });
});
