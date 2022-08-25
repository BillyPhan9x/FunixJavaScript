// Lab 2.1 Các kiểu dữ liệu
console.log("Lab 2.1 ==>");

const country = "Viet Nam";
const continent = "Asian";
let population = 98;   // 98 triệu người
// population = 100;
const isIsland = false;

// const language;
let language;

console.log("  isIsland:", isIsland,
    ", population: ", population,
    ", country: ", country,
    ", language: ", language, ".");

// Lab 2.2 Let, const và var 
console.log("Lab 2.2 ==>");

language = "Vietnamese";


//  Nên sử dụng const theo mặc định và chỉ sử dụng let khi thực sự chắc chắn rằng biến cần thay đổi vào một thời điểm nào đó trong tương lai.

// Các biến có thể khai báo bằng từ khóa const: country , continent, isIsland ( kiểu boolean)
// Các biến có thể khai báo bằng từ khóa let: population (dân số) tương lai có thể thay đổi tăng hoặc giảm , language (ngôn ngữ) có thể là tiếng việt hoặc tiếng anh.....một số quốc gia có nhiều ngôn ngữ

// isIsland = true; // Uncaught TypeError: Assignment to constant variable. at script.js:22:10

// Bắt lỗi loại: Gán cho biến hằng số. tại script.js:22:10
// Báo lỗi vì biến được khai báo với từ khóa const để khai báo các biến chỉ gán giá trị một lần và không thể thay đổi giá trị sau đó đã được lưu trữ

// Uncaught SyntaxError: Missing initializer in const declaration (at script.js:11:7)
// Bắt lỗi cú pháp: Thiếu bộ khởi tạo trong khai báo const

// language: undefined lúc đầu khai báo không gán giá trị ngay nên sẽ là undefined

// Lab 2.3 Các toán tử cơ bản
console.log("Lab 2.3 ==>")

console.log("  1.Dân số sinh sống ở mỗi miền là:", population / 2);  // 49

// console.log("   Tăng giá trị của biến population thêm 1:", population += 1); // 99
console.log("  2.Tăng giá trị của biến population thêm 1:", ++population);  //99
// console.log("   Tăng giá trị của biến population thêm 1:", population++);
console.log("  ..Giảm giá trị của biến population bớt 1:", --population);

console.log("  3.Quốc gia bạn có nhiều hơn so với Phần Lan không? (true hoặc false):", population > 6); // true

console.log("  4.Quốc gia bạn có ít dân hơn so với các mức dân số trung bình không? (true hoặc false:", population < 33);  // false

let description = "  5." + country + " and its " + population + " million people speak " + language;
console.log(description); // Viet Nam and its 98 million people speak VietNamese

// Lab 2.4 String và Template Literal
console.log("Lab 2.4 ==>");

description = `  ${country} and its ${population} million people speak ${language}`;

console.log(description); // Viet Nam and its 98 million people speak Vietnamese

// Lab 2.5 Đưa ra quyết định: Câu lệnh if/else
console.log("Lab 2.5 ==>");

// population = 13;   // Thay đổi giá trị tạm thời thành 13
// population = 130;  // Sau đó thay đổi giá trị tạm thời thành 130 
// Quan sát các kết quả khác nhau và đặt lại giá trị ban đầu

if (population > 33) {
    // console.log("  " + country + "'s population is above average");
    console.log(`  ${country}'s population is above average`); // population = 130 thì dòng này thực thi
} else {
    // console.log("  " + country + "'s population is " + (33 - population) + " miliion below average");
    console.log(`  ${country}'s population is ${33 - population} million below average`);  // population = 13 thì dòng này thực thi 
}

// Lab 2.6 Bài toán tổng hợp #1
// Lab 2.6.1 So sánh chỉ số IBM (phần 1)
// Lab 2.6.2. So sánh chỉ số IBM (phần 2)
console.log("Lab 2.6 ==>");

// Mark và John đang cố so sánh chỉ số BMI (Body Mass Index) của họ
// công thức: BMI = mass/[(height)^2)] = mass/(height*height)
// (mass tính bằng kg và height tính bằng mét)

// 1. Nhiệm vụ của bạn:
// Lưu khối lượng và chiều cao của Mark và John vào các biến.

//Dữ liệu 1: Mark nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m.
// Có thể khai báo biến bằng từ khóa const nhưng dùng let để cập nhật gán lại giá trị ở dữ liệu số 2 
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// Tính chỉ số BMI của John và Mark theo công thức (bạn có thể tính cả hai).
let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);

// Tạo biến Boolean 'markHigherBMI' chứa thông tin về việc liệu chỉ số BMI của Mark có cao hơn BMI của John không.
let markHigherBMI = BMIMark > BMIJohn;

console.log(" Kiểm tra dữ liệu 1:");

console.log("  Chỉ số BMI của Mark:", BMIMark);
console.log("  Chỉ số BMI của John:", BMIJohn);
console.log("  So sánh chỉ số BMI (Mark > John) (true hoặc false):", markHigherBMI);

if (markHigherBMI) {
    console.log(`  Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
} else {
    console.log(`  John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
}

// Dữ liệu 2: Mark nặng 95 kg và cao 1.88 m. John nặng 85 kg và cao 1.76 m.
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;
markHigherBMI = BMIMark > BMIJohn;

console.log(" Kiểm tra dữ liệu 2:");

console.log("  Chỉ số BMI của Mark:", BMIMark);
console.log("  Chỉ số BMI của John:", BMIJohn);
console.log("  So sánh chỉ số BMI (Mark > John) (true hoặc false):", markHigherBMI);

if (markHigherBMI) {
    console.log(`  Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
} else {
    console.log(`  John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
}


