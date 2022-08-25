"use strict";

// Lab 8: Cửa sổ modal
// console.log("Lab 8: Cửa sổ modal ==>");

// Lựa chọn các phần tử cần sử dụng trong html và css file
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// console.log(modal, overlay, btnCloseModal);

// Hạn chế của document.querySelector: tìm theo tên class luôn lấy ra phần tử xuất hiện đầu tiên => muốn chọn tất cả các phần tử  có cùng class thì bị hạn chế
//==>Sử dụng document.querySelectorAll để lấy ra tất cả các phần tử có cùng class
const btnShowModal = document.querySelectorAll(".show-modal");
//Hàm trả về 1 Nodelist là 1 mảng các phần tử được tìm thấy
// console.log(btnShowModal);

// Biêu thức hàm
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Nếu muốn thao tác với các phần tử này đơn giản ta tạo một vòng lặp trên mảng và xử lý chúng
for (let i = 0; i < btnShowModal.length; i++)
  //   console.log(showModal[i].textContent);
  //

  btnShowModal[i].addEventListener("click", showModal);

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e);
  // console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
/*
// // Gọi phương thức sự kiện lắng nghe show modal
// btnShowModal[i].addEventListener("click", function () {
//   // console.log("Button clicked");

//   // Lớp ẩn (hidden class) Thuộc tính classList và phương thức remove()
//   modal.classList.remove("hidden");
//   // Hiện cửa sổ khi click vào, hiện overlay (lớp phủ)
//   overlay.classList.remove("hidden");
// });

//
// Gọi phương thức sự kiện lắng nghe close modal
btnCloseModal.addEventListener("click", function () {
  // Thuộc tính classList và phương thức add()
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Gọi phương thức sự kiện lắng nghe overlay
// Ẩn cửa sổ khi nhấn vào vị trí khác bị mờ trên màn hình
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
*/

// ==> Dry - Don't Repeat YourSelf

// Handling ( Xử lý) an "Esc" Keypress Event

// Khai báo 1 tham số vào hàm xử lý sự kiện, tham số đầu tiên chính là mô tả về đối tượng event, nhờ đó ta có thể biết chi tiết sự kiện đã diễn ra như thế nào (phím nào đã được nhấn)
// document.addEventListener('keydown', function (e) {
//     //   console.log(e);
//     //   console.log(e.key);
//     if (e.key === 'Escape') console.log('Esc was pressed');
//   });

// Phương thức contains() là phương thức của Java để kiểm tra sự tồn tại của chuỗi trong chuỗi giúp đưa ra quyết định tiêp theo khi lập trình. Phương thức contains() trả về giá trị boolean để nó có thể sử dụng trực tiếp bên trong cấu trúc if
// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escap') {
//         if(!modal.classList.contains('hidden')) {
//             closeModal();
//         }
//     }
// })
