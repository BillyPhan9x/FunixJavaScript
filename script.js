"use strict";

// Lab 7: Project đoán số
// console.log("Lab 10: DOM ==>");
// Lựa chọn các phần tử cần sử dụng trong html và css flie
const guessEL = document.querySelector(".guess");

const scoreEl = document.querySelector(".score");
const highScoreEL = document.querySelector(".highscore");
const numberEL = document.querySelector(".number");
const messageEL = document.querySelector(".message");

const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

let serectNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(serectNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  messageEL.textContent = message;
};
// Chọn phần tử với class "check" và đưa thêm vào một click event handler
btnCheck.addEventListener("click", function () {
  // Tạo biến đoán số và giá trị là kiểu chuyển đổi Number
  const guessNumber = Number(guessEL.value);
  console.log(guessNumber, typeof guessNumber);
  // When guessNumber is no input
  if (!guessNumber) {
    messageEL.textContent = "⛔No Number!";
    // When guessNumber is correct serectNumber
  } else if (guessNumber === serectNumber) {
    displayMessage("🎉 Correct Number!");
    numberEL.textContent = guessNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    numberEL.style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      highScoreEL.textContent = highscore;
    }
    // When guessNumber is wrong serectNumber
  } else if (guessNumber !== serectNumber) {
    // When score more than 1
    if (score > 1) {
      displayMessage(
        guessNumber > serectNumber ? "📈 Too high !" : "📉 Too low !"
      );
      score--;
      scoreEl.textContent = score;
    } else {
      // When score equal 0
      displayMessage("💥 Game Over");

      scoreEl.textContent = 0;
    }
  }
});

// Chọn phần tử với class "again" và đưa thêm vào một click event handler.
btnAgain.addEventListener("click", function () {
  // Trong handle function, khôi phục các giá trị khởi tạo của 2 biến 'score' và 'secretNumber'.
  score = 20;
  serectNumber = Math.trunc(Math.random() * 20) + 1;

  // Khôi phục các điều kiện khởi tạo khác của các message, number, score, guess và các trường input khác.
  displayMessage("Start guessing...");
  numberEL.textContent = "?";
  scoreEl.textContent = score;
  guessEL.value = "";
  highScoreEL.textContent = highscore;
  // Khôi phục màu background ban đầu (#222) và chiều rộng của number (15rem).
  document.querySelector("body").style.backgroundColor = "#222";
  numberEL.style.width = "15rem";
});
