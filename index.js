const buttonElement = document.querySelector("[data-js=bookmark]");
// const bookmarkActive = document.querySelector("[data-js=bookmark--active]");
// const classes = bookmarkActive.classList;

buttonElement.addEventListener("click", () => {
  buttonElement.classList.toggle("bookmark--active");
});
