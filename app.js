let userScore = 0;
let botScore = 0;
const userScore_span = document.getElementById("user-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getBotChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertWord(letter) {
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  return "Scissors";
}

function win(userChoice, botChoice) {
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallBotWord = "(bot)".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  botScore_span.innerHTML = botScore;
  result_p.innerHTML = `${convertWord(
    userChoice
  )}${smallUserWord} beats ${convertWord(
    botChoice
  )}${smallBotWord}. You win! :)`;
  userChoice_div.classList.add("green-glow");
  setTimeout(function () {
    userChoice_div.classList.remove("green-glow");
  }, 300);
}

function lose(userChoice, botChoice) {
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallBotWord = "(bot)".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  botScore++;
  userScore_span.innerHTML = userScore;
  botScore_span.innerHTML = botScore;
  result_p.innerHTML = `${convertWord(
    userChoice
  )}${smallUserWord} loses to ${convertWord(
    botChoice
  )}${smallBotWord}. You lose! :(`;
  userChoice_div.classList.add("red-glow");
  setTimeout(function () {
    userChoice_div.classList.remove("red-glow");
  }, 300);
}

function draw(userChoice, botChoice) {
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallBotWord = "(bot)".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertWord(
    userChoice
  )}${smallUserWord} equals ${convertWord(
    botChoice
  )}${smallBotWord}. It's a draw! -_-`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(function () {
    userChoice_div.classList.remove("gray-glow");
  }, 300);
}

function game(userChoice) {
  const botChoice = getBotChoice();
  switch (userChoice + botChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, botChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, botChoice);
      break;
    case "ss":
    case "rr":
    case "pp":
      draw(userChoice, botChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
