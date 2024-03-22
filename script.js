let spanElOne = document.getElementById("firstNumber");
let spanElTwo = document.getElementById("secondNumber");
let checkButtonEl = document.getElementById("checkButton");
let restartButtonEl = document.getElementById("restartButton");
let gameResultEl = document.getElementById("gameResult");

let spanNoOne = Math.ceil(Math.random() * 100);
let spanNoTwo = Math.ceil(Math.random() * 100);
let result1 = spanNoOne + spanNoTwo;

spanElOne.textContent = spanNoOne;
spanElTwo.textContent = spanNoTwo;

function checkButton() {
  let inputEl = document.getElementById("userInput");
  let inputElValue = parseInt(inputEl.value);

  inputEl.value = result1;
  if (inputElValue === result1) {
    gameResultEl.textContent = "Congratulations";
    gameResultEl.style.backgroundColor = "#028a0f";
  } else {
    gameResultEl.textContent = "Please try again";
    gameResultEl.style.backgroundColor = "#1e217c";
  }
}

function restartButton() {
  let spanNoOne = Math.ceil(Math.random() * 100);
  let spanNoTwo = Math.ceil(Math.random() * 100);

  spanElOne.textContent = spanNoOne;
  spanElTwo.textContent = spanNoTwo;
  let result = spanNoOne + spanNoTwo;

  result1 = result;

  let inputEl = document.getElementById("userInput");
  inputEl.value = "";
  gameResultEl.textContent = "";
  gameResultEl.style.backgroundColor = "#ffffff";
}
