const inputFirst = document.querySelector(".login__input__first");
const inputTwo = document.querySelector(".login__input");
const inputParagraph = document.querySelector(".input__paragraph__two");
const subs_btn = document.querySelector(".subs-btn");
const pageTwo = document.querySelector(".page__two");
const email = "ash@loremcompany.com";
const leftFirstPage = document.querySelector(".grid");
const leftTwoPage = document.querySelector(".page__two");

subs_btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputFirst.value === "") {
    inputFirst.classList.add("hidden");
    inputTwo.classList.remove("hidden");
    inputParagraph.classList.remove("hidden");
  }
  if (inputFirst.value === email) {
    leftFirstPage.classList.add("hidden");
    leftTwoPage.classList.remove("hidden");
  }
});
