const buttonElement = document.querySelector("[data-js=bookmark]");

buttonElement.addEventListener("click", () => {
  buttonElement.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector("[data-js=answer-button]");
const answerCard = document.querySelector("[data-js=card__answer]");

function textAnswerButton(text) {
  if (text !== "Show answer") {
    return "Show answer";
  }
  return "Hide answer";
}

answerButton.addEventListener("click", () => {
  answerCard.classList.toggle("card__answer--active");
  answerButton.innerHTML = textAnswerButton(answerButton.innerHTML);
});
