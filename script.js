"use strict";

// Lab 9: Gieo xúc xắc

// Lựa chọn các phần tử cần sử dụng trong html và css file
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
// console.log(player0El, player1El);
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
// console.log(score0EL, score1EL);
const diceEl = document.querySelector(".dice");
// console.log(diceEl);
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
// console.log(current0El, current1El);
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
// console.log(btnRoll, btnHold, btnNew);

let scores, currentScore, activePlayer, playing;
// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
// Gọi function init để javascript tìm được function này và thực thi
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove("hidden");
    // 3. Check for rolled 1: if true
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      // 3. Switch to next player
      switchPlayer();
    }
  }
});
// ở đây chúng ta 0 gọi function init
btnNew.addEventListener("click", init);
// Javascrpit sẽ gọi function init khi người dùng nhấp vào nút new

// function () {
//   playing = true;
//   score0EL.textContent = 0;
//   score1EL.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   player0El.classList.remove("player--winner");
//   player1El.classList.remove("player--winner");
//   player0El.classList.add("player--active");
//   player1El.classList.remove("player--active");
//   currentScore = 0;
//   activePlayer = 0;
//   scores = [0, 0];
// });
