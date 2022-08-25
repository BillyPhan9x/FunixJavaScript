"use strict";

// Lab 11.1 Ứng dụng khảo sát
console.log("Lab 11.1 Ứng dụng khảo sát ==>");

// tạo một object pool có dạng:
const poll = {
  question: "What is your favourite programming languages?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  numberOfVotes: new Array(4).fill(0),

  // a. Tạo một phương thức cho object poll có tên 'registerNewAnswer'.
  registerNewAnswer() {
    // Hiển thị cửa sổ prompt để người dùng nhập số của đáp án đã chọn.
    const answers = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    // console.log(answers);

    // Kiểm tra người dùng nhập giá trị vào có hợp lệ không
    if (!isFinite(answers) || answers < 0 || answers > 3) {
      alert("Vui lòng nhập 1 giá trị trong các số từ 0 đến 3 !");
    } else {
      this.numberOfVotes[answers]++;
    }

    // typeof answers === "number" &&
    //   answers < this.numberOfVotes.length &&
    //   this.numberOfVotes[answers]++;

    // console.log(this.numberOfVotes);
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.numberOfVotes);
    } else if (type === "string") {
      console.log(`Poll results are ${this.numberOfVotes.join(", ")}`);
    }
  },
};

// poll.registerNewAnswer();

// Bắt sự kiện khi click vào nút button
const btnPoll = document.querySelector(".poll");
btnPoll.addEventListener("click", function () {
  // Gọi 2 phương thức của object poll
  poll.registerNewAnswer.call(poll);
  poll.displayResults.call(poll);
});

// btnPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

// 2. Dữ liệu kiểm tra:
// Dữ liệu 1: [5, 2, 3]
// Dữ liệu 2: [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ numberOfVotes: [5, 2, 3] });
poll.displayResults.call({ numberOfVotes: [5, 2, 3] }, "string");
poll.displayResults.call({ numberOfVotes: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ numberOfVotes: [1, 5, 3, 9, 6, 1] }, "string");
