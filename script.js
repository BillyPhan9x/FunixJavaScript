"use strict";

// Lab 5.1- 5.7
// Lab 5.1 Giới thiệu về Object
console.log("Lab 5.1 Giới thiệu về Object ==>");

// 1. Tạo một object là 'myCountry' cho quốc gia bạn chọn, chứa các thuộc tính 'country', 'capital', 'language', 'population' and 'neighbours' (array như chúng ta đã thực hành trong bài trước).

const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["Switzerland", "Russia", "Norway"],
};
// console.log(myCountry);
console.log(myCountry.neighbours[2]);
// const myNation = {
//     country: 'VietNam',
//     capital: 'HaNoi',
//     language: 'vietnamese',
//     population: 98,
//     neighbours: ['Lao', 'Camphuchia', 'China'],
//     describe: function () {
//         console.log(this);
//         console.log(` ${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//     }
// };
// console.log(myNation);

// Lab 5.2 Dấu chấm với dấu ngoặc
console.log("Lab 5.2 Dấu chấm với dấu ngoặc ==>");

// 1. Sử dụng object từ bài tập trước, in string sau ra console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

console.log(
  ` ${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

// console.log(` ${myNation.country} has ${myNation.population} million ${myNation.language}-speaking people, ${myNation.neighbours.length} neighbouring countries and a capital called ${myNation.capital}.`);

// 2. Tăng dân số của đất nước thêm hai triệu người bằng cách sử dụng dấu chấm (object.population), và sau đó giảm đi hai triệu người bằng dấu ngoặc (object['population']) để truy cập vào các thuộc tính.

myCountry.population += 2;

console.log(
  `◼ Increase the population of the country by two million people :`,
  myCountry.population
);

myCountry["population"] = myCountry["population"] - 2;

console.log(
  `◼ Reduce the population of the country by two million people :`,
  myCountry.population
);

// Lab 5.3. Phương thức Object
console.log("Lab 5.3. Phương thức Object ==>");

// 1. Thêm một phương thức có tên là 'describe' vào object 'myCountry'. Phương thức này sẽ in một string ra console với nội dung như sau: "Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki" nhưng lần này sử dụng từ khóa 'this'.
myCountry.describe = function () {
  console.log(
    ` ${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  );
};

// 2. Gọi phương thức 'describe'
myCountry.describe();
// console.log(myCountry);

// 3. Thêm phương thức 'checkIsland' vào object 'myCountry'. Phương thức này sẽ thiết lập một thuộc tính mới trên object là 'isIsland'. 'isIsland' sẽ là giá trị true nếu không có nước láng giềng, ngược lại là false. Sử dụng toán tử điều kiện để đặt giá trị cho thuộc tính.
myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length === 0 ? true : false;
  // this.isIsland = !Boolean(this.neighbours.length);
};
// Gọi phương thức 'checkIsland'
myCountry.checkIsland();
console.log(myCountry.isIsland);

// Lab 5.4. Vòng lặp For
console.log("Lab 5.4. Vòng lặp For ==>");
// Ở đất nước bạn có các cuộc bầu cử. Ở một thị trấn nhỏ, chỉ có 50 cử tri. Sử dụng vòng lặp for để mô phỏng 50 cử tri này, bằng cách in string sau ra console (cho các số từ 1 đến 50): 'Voter number 1 is currently voting'.

for (let rep = 1; rep <= 50; rep++) {
  console.log(`Voter number ${rep} is currently voting 📢`);
}

// Lab 5.5. Lặp trong array, break và continue
console.log("Lab 5.5. Lặp trong array, break và continue ==>");

// 1. Hãy lấy lại array 'populations' từ bài lab trước.
const populations = [98, 38, 125, 70];
console.log("Populations:", populations);
console.log(populations.length);

// 2. Sử dụng vòng lặp for để tạo array 'percentages2' chứa phần trăm dân số thế giới cho 4 giá trị population. Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó.
let populationWorld = 7900;
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push((populations[i] / populationWorld) * 100);
}
console.log("Percentages2 :", percentages2);

// 3. Xác nhận rằng 'percentages2' chứa chính xác các giá trị trong array 'percentages' mà chúng ta đã tạo theo cách thủ công ở lab trước, để xem giải pháp này tốt hơn như thế nào.
const percentageOfWorld1 = function (population) {
  return (population / populationWorld) * 100;
};
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log("Percentages :", percentages);

//  ==> Kết hợp vòng lặp và array để thực hiện các toán tử với array là giải pháp tốt hơn, hưu ích và quan trọng.

// Lab 5.6. Vòng lặp ngược và Vòng lặp trong vòng lặp
console.log("Lab 5.6. Vòng lặp ngược và Vòng lặp trong vòng lặp ==>");

// 1. Lưu trữ array của những array này vào biến 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Span"],
  ["Norway", "Sweden", "Russia"],
];
console.log(listOfNeighbours);

// 2. Hiển thị các quốc gia láng giềng vào màn hình console, không phải toàn bộ array. Ví dụ 'Neighbour: Canada' cho từng quốc gia.

// for (let i = listOfNeighbours.length - 1; i >= 0; i--) {
//     console.log('Neighbours: ', i, listOfNeighbours[i]);
// }

// Bạn sẽ cần một vòng lặp bên trong vòng lặp cho điều này.
for (let i = 0; i < listOfNeighbours.length; i++) {
  // let listX = listOfNeighbours[i].length;
  console.log(` ---- Neighbours: ${i} `);
  for (let rep = 0; rep < listOfNeighbours[i].length; rep++) {
    console.log(`---- Neighbours: ${listOfNeighbours[i][rep]}`);
  }
}

// console.log('Neighbours: ', listOfNeighbours[0]);
// console.log('Neighbours: ', listOfNeighbours[1]);
// console.log('Neighbours: ', listOfNeighbours[2]);

// Lab 5.7. Vòng lặp While
console.log("Lab 5.7. Vòng lặp While ==>");

// 1. Lấy lại từ lab Lặp trong array, break và continue, nhưng lần này hãy sử dựng vòng lặp while (gọi array 'percentages3').
const percentages3 = [];

let rep = 0;
while (rep < populations.length) {
  percentages3.push((populations[rep] / populationWorld) * 100);
  rep++;
}
console.log("Percentages3 :", percentages3);

// 2. Bạn thích giải pháp nào hơn cho nhiệm vụ này: vòng lặp for hay vòng lặp while?

// Lab 5.8: Bài toán tổng hợp #4
console.log("Lab 5.8: Bài toán tổng hợp #4 ==>");

// Lab 5.8.1. So sánh chỉ số IBM (phần 3)
console.log("Lab 5.8.1. So sánh chỉ số IBM (phần 3) ==>");

// 1. Nhiệm vụ của bạn:
// Với mỗi người (Mark Miller và John Smith), hãy tạo một object có các thuộc tính như full name, mass, and height
// 2. Dữ liệu kiểm tra: Marks nặng 78 kg và cao 1m69. John nặng 92kg và cao 1m95.
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  //Tạo phương thức 'calcBMI' ở mỗi object để tính BMI
  calcBMI: function () {
    //  Lưu giá trị BMI vào một thuộc tính
    this.bmi = this.mass / this.height ** 2;
    // trả về từ phương thức.
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(mark, john);
console.log(mark.calcBMI(), john.calcBMI());

const markBMI = mark.calcBMI().toFixed(1);
const johnBMI = john.calcBMI().toFixed(1);
// In ra console người có BMI cao hơn cùng với tên đầy đủ và BMI tương ứng. Ví dụ: "John's BMI (28.3) is higher than Mark's (23.9)!"
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s (${markBMI})!`
  );
}

// Lab 5.8.2. Cải thiện Tip calculator
console.log("Lab 5.8.2. Cải thiện Tip calculator ==>");

// Tạo array 'bills' chứa tất cả 10 giá trị hóa đơn kiểm tra.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// Tạo các array rỗng cho 'tips' và 'totals'.
const tips = [];
const totals = [];

// Sử dụng hàm 'calcTip' mà chúng ta đã viết trước đó (không cần lặp lại) để tính các giá trị tips và totals (hóa đơn + tiền boa) cho mỗi giá trị bill trong bills array. Sử dụng vòng lặp for để thực hiện 10 phép tính!.
const calTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  // Gọi ‘calcTip‘ trong vòng lặp và dùng phương thức push để thêm giá trị cho các array tips và totals.
  const tip = calTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(tips, totals);

// Bonus: Viết hàm 'calcAverage' nhận array 'arr' làm đối số. Hàm này tính trung bình tất cả các số đã cho trong array. Đây là một thử thách khó (chúng ta chưa từng thực hiện điều này trước đây)! Dưới đây là hướng dẫn thực hiện:

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  // console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
