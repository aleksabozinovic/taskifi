const burger = document.querySelector(".burger");
const closeBurger = document.querySelector(".close__burger");
const mobileUl = document.querySelector(".mobile__nav ul");

burger.addEventListener("click", () => {
  mobileUl.classList.add("active");
});

closeBurger.addEventListener("click", () => {
  mobileUl.classList.remove("active");
});
