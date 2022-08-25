"use strict";

// Lab 6: Xử lý string
console.log("Lab 6: Xử lý string ==>");
// Lab 6. Xử lý chuỗi
console.log("Lab 6. Xử lý chuỗi ==>");

// Cho một loạt các nhiệt độ tối đa đã được dự báo, nhiệt kế hiển thị một string với các nhiệt độ đã cho. Ví dụ: [17, 21, 23] sẽ in ra console "... 17ºC in 1 day ... 21ºC in 2 days ... 23ºC in 3 days ..."

// 1. Nhiệm vụ của bạn
// Tạo hàm 'printForecast' lấy array 'arr' và in một string như trên ra console. Hãy thực hành với cả hai dữ liệu kiểm tra.

// 2. Dữ liệu kiểm tra
// Dữ liệu 1: [17, 21, 23]
// Dữ liệu 2: [12, 5, -5, 0, 4]
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(data1);

// console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log("..." + str);
};
printForecast(data1);

// Biểu thức hàm thực thi Find max, min temperature  và trả về amplitude
const calcTemperature = function (arr) {
  // Khởi tạo biến có thể change và gán với arr là phần tử đầu tiên được cho là phần tử max , tương tự với min
  let max = arr[0];
  let min = arr[0];
  // Loop for , xét condition để tìm được số lớn nhất trong array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  console.log(max, min);
  // trả về biên độ ampliture
  return max - min;
};
// calcTemperature([2, 5, 7, 1]);
// Gọi hàm và in ra console
const amplitude = calcTemperature(data1);
console.log(amplitude);

// Nối data1 với data2
const data = data1.concat(data2);
console.log(data);

const calcTemperatureNew = function (arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  console.log(max, min);
  return max - min;
};
// calcTemperatureNew([2, 5, 7, 1]);

const amplitudeNew = calcTemperatureNew(data);
console.log(amplitudeNew);

// A) INDENTFY Xác định lỗi

// B) FIND Tìm kiếm lỗi

// C) FIX chỉnh sữa lỗi

// D) PREVENT ngăn chặn lỗi xảy ra

// debugger; // trong VS code
// Hoặc debugger browser sources ==> script.js ===> breaking point --> step F9( mũi tên)
