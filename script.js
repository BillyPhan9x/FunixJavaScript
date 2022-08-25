"use strict";

// Lab 7: Project đoán số
console.log("Lab 7: Project đoán số ==>");

// 1. Dấu hỏi ? sẽ tạo số ngẫu nhiên ? random

// 2. lắng nge sự kiện của nút check! ? DOM và lắng nge sự kiện (với 2 thông số đầu vào) EventListener
// xử lý sự kiên ? event handler
// xử lý sự kiện ( biểu thức hàm)
// Lấy dữ liệu người dùng nhập từ ô input? value
// Các trường hợp khi chơi game
// a) Khi người dùng 0 nhập giá trị vào ô input thì ? in ra string thông báo
// b) Khi người dùng đoán số = với ngẫu nhiên random ? thì :
// In ra string thông báo : Correct Number !
// backgrounColor đổi (theo quy tắc camelCase)
// thay đổi kích thước
// dấu hỏi cũng hiển thị trên màn hình ? string
// score sẽ bị tụt sau mỗi lần người dùng đoán sai ? score = score - 1
// c) Khi người dùng đoán số cao hơn ? in ra string thông báo: Too high !
// score vẫn tụt sau khi đoán sai
// c) Khi người dùng đoán soó nhỏ hơn ? in ra thông báo : Too low!
// core vẫn tụt sau khi đoán sai

// 3. Lắng nghe sự kiện của nút Agian!? DOM and lắng nghe sự kiện ( với 2 thông số đầu vào)
// Sự kiện
// xử lý sự kiện ( biểu thức hàm)
// a) input trở về trạng thái chưa nhập số ? empty chuỗi rỗng
// b) thông báo ? Start guessing...
// c) score = 20
// d) highsoce giữ lại số lần score người dùng đoán chính xác
// e) số dự đoán bí ẩn ? trở lại dấu ?
// f) background trở lại ban đầu
// g) kích thước cũng vậy

let serectNumber = Math.trunc(Math.random() * 20 + 1);
console.log(serectNumber, typeof serectNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When guess is on input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number !';
    displayMessage("⛔ No Number !");
    // When guess is correct
  } else if (guess === serectNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number !';
    displayMessage("🎉 Correct Number !");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== serectNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > serectNumber ? "📈 Too high !" : "📉 Too low !";
      displayMessage(guess > serectNumber ? "📈 Too high !" : "📉 Too low !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 Game Over';
      displayMessage("💥 Game Over");
      document.querySelector(".score").textContent = "0";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  serectNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
});
