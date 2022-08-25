"use strict";

// Lab 12.1: Phân loại thú cưng
console.log("Lab 12.1: Phân loại thú cưng ==>");

// Lab 12.1 Phân loại thú cưng

// Tạo hàm 'checkDogs', nhận 2 array tuổi của chó ('dogJulia' và 'dogKate')
const checkDogs = function (dogJuila, dogKate) {
  // Julia phát hiện ra rằng chủ nhân của chú chó đầu tiên và cuối cùng thực ra nuôi mèo chứ không phải chó!
  const newDogJuila = dogJuila.slice();
  newDogJuila.splice(0, 1);
  newDogJuila.splice(-1);
  console.log(newDogJuila);

  // Tạo một array với cả dữ liệu của Julia (đã sửa) và của Kate.
  const dogs = newDogJuila.concat(dogKate);
  console.log(dogs);

  // Đối với mỗi chú chó còn lại, hãy in ra console đó là chú chó trưởng thành
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// Chạy hàm cho cả hai tập dữ liệu kiểm tra.
// Dữ liệu 1: Dữ liệu của Julia [3, 5, 2, 12, 7], dữ liệu của Kate [4, 1, 15, 8, 3]
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// Dữ liệu 2: Dữ liệu của Julia [9, 16, 6, 8, 3], dữ liệu của Kate [10, 5, 6, 1, 4]
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//////////////////////////////////////
// Lab 12.2: Chuyển đổi tuổi thú cưng
console.log("");
console.log("Lab 12.2: Chuyển đổi tuổi thú cưng ==>");

// Tạo hàm 'calcAverageHumanAge', hàm này nhận array tuổi của chó ('age')
const calcAverageHumanAge = function (ages) {
  // Tính tuổi của chó theo năm như tuổi người
  const humanAge = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  console.log(humanAge);

  //   Loại trừ tất cả những chú chó có humanAge dưới 18
  const adults = humanAge.filter(function (age) {
    return age % 2 >= 0;
  });
  console.log(adults);

  //   Tính humanage trung bình của các chú chó trưởng thành
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

// Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
const test1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]
const test2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log("Dữ liệu 1:", test1, "Dữ liệu 2:", test2);

//////////////////////////////////
// Lab 12.3: Sử dụng Arrow Function
console.log("");
console.log("Lab 12.3: Sử dụng Arrow Function ==>");

// Viết lại hàm 'calcAverageHumanAge' từ Lab 12.2, nhưng lần này là hàm mũi tên và sử dụng chaining!
const calcAverageHumanAgeNew = (ages) => {
  const averageHumanAges = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, arr[0]);
  return averageHumanAges;
};

// Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]
const data2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log("Dữ liệu 1:", data1, "Dữ liệu 2:", data2);
