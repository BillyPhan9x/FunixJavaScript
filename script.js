"use strict";

// Lab 13.1: Tạo Object
console.log("Lab 13.1: Tạo Object ==>");

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// console.dir(Car);

// Hàm tạo giống hàm thường chỉ khác là ta gọi hàm tạo với từ khóa
// Mỗi 1 hàm trong JS atuo có 1 thuộc tính gọi là prototype
// đối tượng được tạo ra bởi hàm tạo nhất định có quyền truy cập vào tất cả thuộc tính của đối tượng mà ta xác định trên thuộc tính prototype của hàm

// Car.prototype này chính là 1 method của hàm tạo Car này
// nhưng giá trị của nó là 1 {}, còn gọi là {} nguyên mẫu prototype
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Tốc độ của ô tô tăng thêm 10 km/h: ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Tốc độ của ô tô giảm bớt 5 km/h: ${this.speed}km/h`);
};

// Can use 1 cách khác để tạo thêm các method là use __proto__ mọi {} đều có 1 thuộc tính là __proto__ , nó chính là {} nguyên mẫu

// dùng từ khóa new để tạo 1 đối tượng
// 1. New tạo 1 {} mới
// 2. hàm tạo được gọi ==> this dc trỏ đến {} vừa tạo
// 3. {} được tạo sẽ linked đến 1 {} nguyên mẫu là phương thức của hàm tạo
// 4. Hàm tạo auto return về {} và gán vào biến
console.log("");
console.log("Dữ liệu car 1: 'BMW' đi với tốc độ 120 km/h");
const bmv = new Car("BMV", 120);
console.log(bmv);
bmv.accelerate();
bmv.brake();
bmv.accelerate();
bmv.brake();
console.log("");
console.log("Dữ liệu car 2: 'Mercedes' đi với tốc độ 95km/h");
const mer = new Car("Mercedes", 95);
console.log(mer);
mer.accelerate();
mer.brake();
mer.accelerate();
mer.brake();

//////////////////////////////////////////
// Lab 13.2: Sử dụng ES6 Class
console.log("");
console.log("Lab 13.2: Sử dụng ES6 Class ==>");

// Tạo lại như class Car lab 13.1, nhưng lần này sử dụng ES6 class (gọi nó là 'CarCl').
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; // km/h
  }

  accelerate() {
    this.speed += 10;
    console.log(`Tốc độ của ô tô tăng thêm 10 km/h: ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Tốc độ của ô tô giảm bớt 5 km/h: ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(sp) {
    this.speed = sp * 1.6;
  }
}
console.log("");
console.log("Dữ liệu car 1: 'BMW' đi với tốc độ 120 km/h");
const bmvCl = new CarCl("BMV", 120);
// console.log(bmvCl);
bmvCl.accelerate();
bmvCl.brake();
bmvCl.brake();

console.log(bmvCl.speedUS);
bmvCl.speedUS = 160;
console.log(bmvCl);

console.log("");
console.log("Dữ liệu car 2: 'Mercedes' đi với tốc độ 95km/h");
const merCl = new CarCl("Mercedes", 95);
merCl.accelerate();
merCl.brake();
merCl.brake();

console.log(merCl.speedUS);
merCl.speedUS = 100;
console.log(merCl);

////////////////////////////////////////
// Lab 13.3: Tính kế thừa
console.log("");
console.log("Lab 13.3: Tính kế thừa ==>");

const EV = function (make, speed, charge) {
  // gọi lại hàm tạo này với con trỏ this là con trỏ this của hàm tạo EV này ==> tức là this sẽ trỏ đến {} được tạo ra bởi hàm tạo EV
  Car.call(this, make, speed);
  this.charge = charge;
};
// => tạo liên kết __proto__ thủ công cho EV_prototype
// dẫn đến kế thừa mọi methods, thuộc tinhs
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// ghi đè lại method => kiểu {} được tạo ra sẽ tìm trong prototype
// nếu cả hàm tạo và hàm cho của hàm tạo đều có thì sẽ ưu tiên lấy của hàm cho của hàm tạo
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} đi với tốc độ ${this.speed} km/h, với mức sạc pin là ${this.charge}%`
  );
};

console.dir(EV);

// Dữ liệu car 1: 'Tesla' đi với tốc độ 120 km/h, với mức sạc pin là 23%

const tesla = new EV("Tesla", 120, 23);

tesla.accelerate(); // ghi đè method
tesla.chargeBattery(90);
console.log("mức pin sau khi thay đổi:", tesla.charge);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();

//////////////////////////////
// Lab 13.4: Tính kế thừa sử dụng ES6
console.log("");
console.log("Lab 13.4: Tính kế thừa sử dụng ES6 ==>");

// 1. public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (there is also the static version)
class EVCl extends CarCl {
  // private
  #charge;
  constructor(make, speed, charge) {
    super(make, speed); // gọi constructor function của class cha thông qua super()
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} đi với tốc độ ${this.speed} km/h, với mức sạc pin là ${
        this.#charge
      }%`
    );
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  get getcharge() {
    return this.#charge;
  }
}

// Dữ liệu car 1: 'Rivian' đi với tốc độ 120 km/h, với mức sạc pin là 23%
const rivian = new EVCl("Rivian", 120, 23);
rivian.accelerate(); // ghi đè method
rivian.chargeBattery(100);
console.log("mức pin sau khi thay đổi:", rivian.getcharge);
rivian.accelerate();
rivian.accelerate();
rivian.accelerate();
rivian.accelerate();
rivian.brake();
