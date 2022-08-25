// Lap 3.1 -3.5

// Lab 3.1. Chuyển đổi kiểu và ép kiểu (10 phút)
console.log('Lab 3.1 Chuyển đổi kiểu và ép kiểu ==>');

// 1. Dự đoán kết quả của 5 phép toán sau mà không cần thực thi:
console.log('1. Dự đoán kết quả của 5 phép toán sau mà không cần thực thi:');

'9' - '5';                  // 4
'19' - '13' + '17';         // 617
'19' - '13' + 17;           // 23
'123' < 57;                 // false
5 + 6 + '4' + 9 - 4 - 2;    // 1143

// 2. Thực hiện các phép toán để kiểm tra xem bạn đoán đúng không.
console.log('2. Thực hiện các phép toán để kiểm tra xem bạn đoán đúng không.');

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// Lab 3.2 Toán tử bằng: == với === (40 phút)
console.log('Lab 3.2 Toán tử bằng: == với ===    ==>');

// 1. Khai báo biến 'numNeighbours' dựa trên prompt input sau: prompt('How many neighbor countries does your country have?'). 
// let numNeighbours = prompt('How many neighbor countries does your country have?');

// if (numNeighbours == 1) {
//     // 2. Nếu chỉ có 1 neighbour, hãy in ra console 'Only 1 border!' (sử dụng ==).
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     // 3. Sử dụng else-if block để ghi 'More than 1 border' trong trường hợp 'numNeighbours' lớn hơn 1.
//     console.log('More than 1 border');
// } else {
//     // 4. Sử dụng else block để ghi 'No borders' (block này sẽ được thực thi khi 'numNeighbours' là 0 hoặc bất kỳ giá trị nào khác).
//     console.log('No borders');
// }

// 5. Kiểm tra code với các giá trị 'numNeighbours' khác nhau, gồm 1 và 0.
// Khi so sánh cân bằng lỏng lẻo (loose) == sẽ tự động ép kiểu trước khi so sánh

// Nhập vào prompt input: 1 => console hiển thị thông báo  Only 1 border!

// Nhập vào prompt input: 0 => console hiển thị thông báo  No borders
// Nhập vào promt input: Các giá trị khác không phải số (number) => console hiển thị thông báo là  No borders

// Nhập vào prompt input: 2 => console hiển thị thông báo  More than 1 border
// Nhập vào prompt input: (các số lơn hơn 1) ==> console hiên thị thông báo  More than 1 border ( vì phù hợp điều kiện numNeighbours > 1)


// 6. Thay == thành ===, và kiểm tra lại code với các giá trị 'numNeighbours' tương tự. Điều gì sẽ xảy ra khi numNeighbours = 1? Tại sao lại như vậy?

// let numNeighbours = prompt('How many neighbor countries does your country have?');

// if (numNeighbours === 1) {
//     // 2. Nếu chỉ có 1 neighbour, hãy in ra console 'Only 1 border!' (sử dụng ==).
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     // 3. Sử dụng else-if block để ghi 'More than 1 border' trong trường hợp 'numNeighbours' lớn hơn 1.
//     console.log('More than 1 border');
// } else {
//     // 4. Sử dụng else block để ghi 'No borders' (block này sẽ được thực thi khi 'numNeighbours' là 0 hoặc bất kỳ giá trị nào khác).
//     console.log('No borders');
// }

// Nhập vào prompt input: 0 => console hiển thị thông báo  No borders
// Nhập vào promt input: Các giá trị khác không phải số (number) => console hiển thị thông báo là  No borders

// Nhập vào prompt input: 2 => console hiển thị thông báo  More than 1 border
// Nhập vào prompt input: (các số lơn hơn 1) ==> console hiên thị thông báo  More than 1 border ( vì phù hợp điều kiện numNeighbours > 1)

// Nhập vào prompt input: 1 => console hiển thị thông báo  No borders
// Tại vì so sánh === (strict) cân bằng nghiêm ngặt sẽ không ép kiểu trước khi so sánh nên sẽ trả về false (kiểu input nhập vào là string)


// 7. Cuối cùng, chuyển đổi 'numNeighbours' thành một số, và xem điều gì sẽ xảy ra khi bạn nhập vào 1.

// let numNeighbours = prompt('How many neighbor countries does your country have?');

// if (Number(numNeighbours) === 1) {
//     // 2. Nếu chỉ có 1 neighbour, hãy in ra console 'Only 1 border!' (sử dụng ==).
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     // 3. Sử dụng else-if block để ghi 'More than 1 border' trong trường hợp 'numNeighbours' lớn hơn 1.
//     console.log('More than 1 border');
// } else {
//     // 4. Sử dụng else block để ghi 'No borders' (block này sẽ được thực thi khi 'numNeighbours' là 0 hoặc bất kỳ giá trị nào khác).
//     console.log('No borders');
// }

// Nhập vào prompt input: 1 => console hiển thị thông báo  Only 1 border!
// Tại vì đã chuyển đổi thủ công kiểu Number nên so sánh giống nhau cả giá trị và kiểu , so sánh chỉ trả về true nên cả 2 giá trị so sánh hoàn toàn giống nhau

// 8. Hãy nêu lý do chúng ta nên sử dụng toán tử === và chuyển đổi kiểu trong trường hợp này.

// Chúng ta nên sử dụng toán tử  === (strict) và chuyển đổi kiểu thủ công trong trường hợp này để chắc chắc rằng so sánh cân bằng ngiêm ngặt được giá trị nhập vào với giá trị ta gán giống nhau, điều này giúp logic và chính xác hơn, dễ degbug, chỉnh sửa và nâng cấp

// Lab 3.3 Toán tử logic 
console.log('Lab 3.3 Toán tử logic ==>');
// 1. Hãy vô hiệu hóa code trước đó để prompt không xuất hiện.
// 2. Giả sử Sarah đang tìm một quốc gia mới để sinh sống. Cô ấy muốn ở một đất nước sử dụng ngôn ngữ Tiếng Anh, dân số ít hơn 50 triệu người và không phải đảo quốc.
const country = 'Canada';
let population = 38;

const isIsland = false;
let language = 'English';

// 3. Bạn cần tạo các biến tương ứng với ngôn ngữ, dân số, có phải đảo quôcs không. Giá trị các biến này sẽ được nhập bằng hàm prompt.

// 4. Hãy viết một câu lệnh if giúp Sarah tìm kiếm quốc gia phù hợp. Bạn cần viết điều kiện đánh giá  tất cả các tiêu chí của Sarah. Hãy dành thời gian thực hiện điều này.
if (language === 'English' && population < 50 && isIsland === false) {
    // 5. Nếu đất nước nhập vào phù hợp, in ra string như sau: 'You should live in Portugal :)'.
    console.log(` You should live in ${country} :)`);
} else {
    // Ngược lại, hãy in 'Portugal does not meet your criteria :('
    console.log(` ${country} does not meet your criteria :(`);
    // Thực thi dòng này vì population < 50
}

// 6. Có thể đất nước mà bạn nhập không đáp ứng toàn bộ tiêu chí. Hãy quay trở lại và thay đổi tạm thời một số biến để điều kiện trở nên đúng (trừ khi bạn sống ở Canada).


// Lab 3.4 Câu lệnh switch
console.log('Lab 3.4 Câu lệnh switch ==>');

switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log(` ${language}: MOST number of native speakers!`);
        break;
    case 'Spanish':
        console.log(` ${language}: 2nd place in number of native speakers`);
        break;
    case 'English':
        console.log(` ${language}: 3rd place`);
        break;
    case 'Hindi':
        console.log(` ${language}: Number 4`);
        break;
    case 'Arabic':
        console.log(` ${language}: 5th most spoken language`);
        break;
    default:
        console.log(` ${language}: Great language too :D`);
        break;
}

// Lab 3.5 Toán tử điều kiện (3 ngôi)
console.log('Lab 3.5 Toán tử điều kiện (3 ngôi) ==>');

// Nếu dân số của đất nước lớn hơn 33 triệu người, sử dụng toán tử ba ngôi để in string sau ra console: 'Portugal's population is above average'. Ngược lại, hãy in 'Portugal's population is below average'. Lưu ý giữa hai câu này chỉ có một từ thay đổi!

// Sau khi kiểm tra kết quả, hãy tạm thay đổi dân số thành 13 rồi thành 130.
// population = 13;
// population = 130;

population > 33 ? console.log(` ${country}'s population is above average`) : console.log(` ${country}'s population is below average`);


/////////////////////////////////////////////////////////////////

// Lab 3.6 Bài toán tổng hợp #2
// Lab 3.6.1 Đội nào chiến thắng? (phần 1)
console.log('Lab 3.6.1 Đội nào chiến thắng? (phần 1) ==>');
// Có hai đội thể dục dụng cụ là Dolphins và Koalas. Họ thi đấu với nhau 3 lần. Đội nào có điểm trung bình cao nhất sẽ chiến thắng!

// Dữ liệu 1: Dolphins được 96, 108 và 89 điểm. Koalas được 88, 91 và 110 điểm
// 1. Nhiệm vụ của bạn:
// Tính điểm cho từng đội 

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

// So sánh điểm trung bình của 2 đội để tìm ra đội chiến thắng và in ra console

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy!');
// }

// Bonus 1: Chúng ta được thêm một quy tắc như sau: số điểm tối thiểu là 100 điểm . Theo quy tắc này, một đội sẽ giành chiến thắng chỉ khi họ có điểm trung bình cao hơn đội còn lại, và đồng thời có ít nhất 100 điểm

// Bonus 2: Điểm số tối thiểu cũng áp dụng cho việc hòa trận! Trường hợp hòa nhau chỉ xảy ra khi cả hai đội có số điểm giống nhau mà phải lớn hơn hoặc bằng 100 điểm. Nếu không thì không có đội nào giành chiến thắng cả.

// Dữ liệu Bonus 1: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 123 điểm.
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

// Dữ liệu Bonus 2: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 106 điểm
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(' Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log(' Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(' Both win the trophy!');
} else {
    console.log(' No one wins the trophy 😭');
}


// Lab 3.6.2 Tip calculator (phần 1)
console.log('Lab 3.6.2 Tip calculator (phần 1) ==>');
//Steven muốn tạo một tip calculator (công cụ tính tiền tip) đơn giản cho những khi anh ta muốn ăn ở nhà hàng. Ở đất nước của anh ta, người ta thường tip 15% nếu giá trị hóa đơn nằm trong khoảng 50-300. Với những giá trị khác, tip thường là 20%.

// Dữ liệu 1: Kiểm tra giá trị bill 275, 40 và 430

// 1. Nhiệm vụ của bạn:
// Tính tip dựa theo giá trị hóa đơn. Tạo biến 'tip' cho điều này. Không dùng câu lệnh if/else (Để dễ hơn, bạn có thể bắt đầu với lệnh if/else sau đó chuyển đổi nó thành toán tử ba ngôi!)
// const bill = 275;
// const bill = 40;
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 15 / 100 : bill * 20 / 100;
const total = bill + tip;
// // In string ra console có chứa giá trị hóa đơn (bill), tiền tip và giá trị cuối cùng (bill + tip). Ví dụ: “The bill was 275, the tip was 41.25, and the total value 316.25”
console.log('Bill:', bill);
console.log('Tip:', tip);
console.log('Total:', total);
console.log(` The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);



// const bill = 275;

// if (bill <= 300 && bill >= 50) {
//     console.log(` The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill + bill * 0.15}`);
// } else {
//     console.log(` The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill + bill * 0.2}`);
// }







