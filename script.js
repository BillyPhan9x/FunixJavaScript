'use strict';

// Lab 4.1 - 4.6
// Lab 4.1 Hàm 
console.log('Lab 4.1 Hàm ==>');
// Viết hàm 'describeCountry' nhận ba tham số: 'country', 'population' và 'capitalCity'. Dựa vào input này
const describeCountry = function (country, population, capitalCity) {
    // console.log(country, population, capitalCity);
    // hàm trả về string với định dạng như sau: 'Finland has 6 million people and its capital city is Helsinki'.
    return ` ${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

// Gọi hàm này 3 lần với dữ liệu đầu vào cho 3 nước khác nhau. Lưu các giá trị trả về ở 3 biến khác nhau
const vietnam = describeCountry('VietNam', 98, 'HaNoi');
const canada = describeCountry('Canada', 38, 'Ottawa');
const japan = describeCountry('Japan', 125, 'Tokyo');
// describeCountry('Thailand', 70, 'Bangkok');

// In chúng ra console
console.log(vietnam);
console.log(canada);
console.log(japan);
// console.log(describeCountry('Thailand', 70, 'Bangkok'));



// Lab 4.2. Khai báo hàm với biểu thức hàm 
console.log('Lab 4.2 Khai báo hàm với biểu thức hàm ==>');

// Dân số thế giới là 7.9 tỷ người. Tạo khai báo hàm 'percentageOfWorld1' nhận một giá trị 'population'
let populationWorld = 7900;
// Tạo khai báo hàm 'percentageOfWorld1' nhận một giá trị 'population'
function percentageOfWorld1(population) {
    // trả về phần trăm dân số thế giới theo dân số đã cho. Ví dụ: Trung Quốc có 1.441 tỷ người, chiếm 18.2% dân số thế giới.
    // Để tính phần trăm, chia giá trị 'population' đã biết cho 7900 rồi nhân với 100.
    return (population / populationWorld) * 100;
}

// Gọi 'percentageOfWorld1' cho 3 dân số của các quốc gia bất kỳ, lưu kết quả vào các biến.
const vietnam1 = percentageOfWorld1(98);
const canada1 = percentageOfWorld1(38);
const japan1 = percentageOfWorld1(125);

// in chúng ra console.
console.log(vietnam1);
console.log(canada1);
console.log(japan1);

// Tạo biểu thức hàm thực hiện điều tương tự, gọi là 'percentageOfWorld2' và cũng gọi nó với 3 dân số theo quốc gia (có thể có cùng số dân).
const percentageOfWorld2 = function (population) {
    return (population / populationWorld) * 100;
}

const vietnam2 = percentageOfWorld2(98);
const canada2 = percentageOfWorld2(38);
const japan2 = percentageOfWorld2(125);

console.log(vietnam2);
console.log(canada2);
console.log(japan2);



// Lab 4.3 Hàm mũi tên
console.log('Lab 4.3 Hàm mũi tên ==>');
// Thực hiện lại bài lab trước, nhưng lần này hãy tạo một hàm mũi tên là 'percentageOfWorld3'.
const percentageOfWorld3 = population => (population / populationWorld) * 100;

const vietnam3 = percentageOfWorld2(98);
const canada3 = percentageOfWorld2(38);
const japan3 = percentageOfWorld2(125);

console.log(vietnam3);
console.log(canada3);
console.log(japan3);



// Lab 4.4 Hàm gọi hàm
console.log('Lab 4.4 Hàm gọi hàm ==>');
// Tạo một hàm là 'describePopulation'. Sử dụng kiểu hàm mà bạn muốn nhất. Hàm này nhận hai đối số là 'country' và 'population'
function describePopulation(country, population) {
    // trả về string như sau: 'China has 1441 million people, which is about 18.2% of the world'.
    return ` ${country} has ${population} million people, which is about ${percentageOfWorld1(population).toFixed(2)}% of the world`;
}

// Để tính phần trăm 'describePopulation', hãy gọi 'percentageOfWorld1' mà bạn đã tạo trước đó.

// Gọi 'describePopulation' với dữ liệu cho 3 nước bất kỳ.
console.log(describePopulation('VietNam', 98));
console.log(describePopulation('Canada', 38));
console.log(describePopulation('Japan', 125));


// Lab 4.5 Giới thiệu về Array
console.log('Lab 4.5 Giới thiệu về Array ==>');

// Tạo một array chứa 4 giá trị dân số của 4 quốc gia bất kỳ. Bạn có thể sử dụng các giá trị đã dùng trước đó. Lưu array này vào một biến là 'populations'.
const populations = [98, 38, 125, 70];

// In ra console xem liệu array có 4 phần tử hay không (true hoặc false).
console.log(populations);
console.log(populations.length);

// Tạo một array là 'percentages' có chứa phần trăm dân số thế giới của 4 giá trị dân số đó. Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó để tính toán 4 giá trị phần trăm.

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

// In ra console
console.log(percentages);


// Lab 4.6. Các phép toán cơ bản với array
console.log('Lab 4.6. Các phép toán cơ bản với array ==>');

// Tạo một array chứa tất cả các nước láng giềng của một nước bất kỳ. Chọn một nước có ít nhất 2 hoặc 3 nước láng giềng. Lưu array vào biến 'neighbours'.
const neighbours = ['Lao', 'Campuchia', 'China'];
console.log(neighbours);

// Ở một số thời điểm, một đất nước mới là 'Utopia' được tạo ra trong vùng lân cận của quốc gia bạn chọn. Vậy hãy thêm nó vào cuối array 'neighbours'.
neighbours.push('Utopia');
console.log('push :', neighbours);

// Không may, sau một thời gian, nước mới này biến mất. Vậy hãy xóa nó khỏi cuối array.
neighbours.pop('Utopia');
console.log('pop :', neighbours);

// Nếu array 'neighbours' không chứa nước 'Germany', hãy in ra console rằng: 'Probably not a central European country :D'.
console.log(neighbours.indexOf('Germany'));  // -1
neighbours.indexOf('Germany') === -1 ?
    console.log('Probably not a central European country :D') :
    console.log('It is a central European country :)');


console.log(neighbours.includes('Germany'));  // false
if (neighbours.includes('Germany') === false) {
    console.log('Probably not a central European country :D');
} else {
    console.log('It is a central European country :)');
};

// Thay đổi tên của một trong các nước láng giềng của bạn. Để thực hiện điều đó, hãy tìm chỉ mục của đất nước trong array 'neighbours', rồi sử dụng nó để thay đổi array ở vị trí chỉ mục đó. Chẳng hạn, nếu bạn tìm thấy 'Sweden' trong array, hãy thay nó bằng 'Republic of Sweden'.
neighbours.indexOf('China');
console.log(neighbours.indexOf('China'));

neighbours[2] = 'Republic of China';
console.log(neighbours);

const index = neighbours.indexOf('Lao');
neighbours[index] = 'Laos';
console.log(neighbours);


// Lab 4.7.1. Đội nào chiến thắng? (phần 2)
console.log('Lab 4.7.1. Đội nào chiến thắng? (phần 2) ==>');

// 1. Nhiệm vụ của bạn:
// Tạo hàm mũi tên 'calcAverage' để tính trung bình của 3 điểm số.
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Dữ liệu 1: Dolphins ghi được 44, 23 và 71 điểm. Koalas ghi được 65, 54 và 49 điểm.
//Sử dụng hàm để tính trung bình của cả hai đội.
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

// Tạo hàm 'checkWinner' nhận điểm trung bình của mỗi đội làm tham số ('avgDolphins' và 'avgKoalas'), sau đó in đội thắng ra console cùng với số điểm giành chiến thắng theo luật trên. Ví dụ: "Koalas win (30 vs. 13)".

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(` Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(` Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        // Lần này hãy bỏ qua việc hòa.
        console.log(` No team wins...`);
    }
}

//Dùng hàm 'checkWinner' để xác định đội chiến thắng cho cả Dữ liệu 1 và Dữ liệu 2.
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(11, 55);
checkWinner(55, 11);
checkWinner(11, 11);

// Dữ liệu 2: Dolphins ghi được 85, 54 và 41 điểm. Koalas ghi được 23, 34 và 27 điểm.
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);



// Lab 4.7.2. Xây dựng Tip calculator (phần 2)
console.log('Lab 4.7.2. Xây dựng Tip calculator (phần 2) ==>');

// 1. Nhiệm vụ của bạn:
// Viết hàm 'calcTip' nhận giá trị hóa đơn bất kỳ làm đầu vào và trả về tiền tip tương ứng, tính toán theo các quy tắc ở trên (bạn có thể xem lại code từ thử thách tip calculator đầu tiên nếu cần). Sử dụng loại hàm mà bạn thích nhất.

const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
// Kiểm tra hàm sử dụng giá trị hóa đơn là 100.
console.log(calcTip(100));

// Giờ hãy dùng array. Hãy tạo array 'bills' có chứa dữ liệu kiểm tra bên dưới.
// 2. Dữ liệu kiểm tra: 125, 555 và 44.
const bills = [125, 555, 44];

// Tạo array 'tips' có chứa giá trị tiền tip cho từng hóa đơn, tính từ hàm mà bạn đã tạo trước đó.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Bonus: Tạo array 'total' có chứa tổng giá trị, tức là bill+tip.
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log('Bills :', bills);
console.log('Tips :', tips);
console.log('Totals :', totals);

console.log(` The bill was ${bills[0]}, the tip was ${tips[0]}, and the total values ${totals[0]}`);
console.log(` The bill was ${bills[1]}, the tip was ${tips[1]}, and the total values ${totals[1]}`);
console.log(` The bill was ${bills[2]}, the tip was ${tips[2]}, and the total values ${totals[2]}`);


