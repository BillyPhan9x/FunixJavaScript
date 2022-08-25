"use strict";

// Lab 15.1: Đọc và hiển thị hình ảnh
console.log("Lab 15.1: Đọc và hiển thị hình ảnh ==>");

// Tạo hàm wait với tham số giây
const wait = function (seconds) {
  // Trả về 1 lời hứa mới với callback thành công, và đặt thời gian trễ mặc định là thành công với công thức nhân với 1000 để chuyển đổi thành giây
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// Lấy phần tử DOM và lưu vào biến
const imgContainer = document.querySelector(".images");
// Tạo hàm và nhận 1 tham số
const createImage = function (imgPath) {
  // Hàm trả về 1 lời hứa tạo ảnh mới với 2 tham số thành công và thất bại
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    // Thiết lập thuộc tính src cho đường dẫn cấp
    img.src = imgPath;
    // Lắng nghe sự kiện load với handle event
    img.addEventListener("load", function () {
      // Phần tử DOM nối với ảnh đã thành công
      imgContainer.append(img);
      resolve(img);
    });
    // Lắng nge sự kiên error event, báo lỗi
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

// Tạo biến toàn cục
let currentImg;
// Gọi hàm  để hiển thị ảnh lên
createImage("img/img-1.jpg")
  .then(function (img) {
    currentImg = img;
    console.log("Ảnh 1 đã tải xong");
    // trả về tạm dừng 2 giây sau khi image đã được tải
    return wait(2);
  })
  .then(function () {
    // sau khi tạm dừng kết thúc thì image được ẩn đi
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then(function (img) {
    currentImg = img;
    console.log("Ảnh 2 đã tải xong");
    // trả về tạm dừng 2 giây sau khi image đã được tải
    return wait(2);
  })
  .then(() => (currentImg.style.display = "none"))
  .catch(function (err) {
    console.error(err);
  });

// 2. Dữ liệu kiểm tra:

// Hình ảnh trong thư mục img. Kiếm tra trình xử lý lỗi bằng cách dùng đường dẫn ảnh sai. Đặt tốc độ mạng thành “Fast 3G” trong tab Network, nếu không thì hình ảnh sẽ tải quá nhanh.

// Lab 15.2: Hiển thị một tập hợp ảnh

console.log("Lab 15.2: Hiển thị một tập hợp ảnh ==>");
// Phần 1
// Hàm 0 đồng bộ 0 có bất kỳ đối số nào hoặc bị thiếu đối số
const loadNPause = async function () {
  // try/catch
  try {
    // Lời hứa đầu tiên async/ await và chờ đợi lời hứa đó và lưu trữ kết quả thành image
    // Dùng let để không cần dùng biến currentImg
    // Load image 1
    let img = await createImage("img/img-1.jpg");
    console.log("Image 1 loaded");
    // chờ đợi thời gian trễ
    // vì lời hứa trọng số 0 có bất kỳ giá trị nào được phân giải, chúng ta thực sự 0 cần lưu bất kỳ thứ gì vào bất kỳ biến nào.
    await wait(2);
    // về cơ bản chúng ta chỉ vượt qua quá trình thực thi trong hai giây, và sau đó những gì chúng ta muốn làm là điều này, nhưng 0 chính xác là điều này, bởi vì bây giờ thay vì hình ảnh hiện tại, chúng ta có thể sử dụng hình ảnh đơn giản.
    // Vì cùng 1 hàm và cùng phạm vi nên không cần biến toàn cục
    img.style.display = "none";
    // Load image 2
    // 0 cần khai báo biến vì chỉ gán lại giá trị
    img = await createImage("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// Phần 2
// Tạo hàm async 'loadAll' nhận array đường dẫn ảnh 'imgArr'.
const loadAll = async function (imgArr) {
  try {
    // Sử dụng .map để lặp lại trên array, tải tất cả các hình ảnh với hàm ‘createImage' (gọi array kết quả là 'imgs').
    const imgs = imgArr.map(async (img) => await createImage(img));
    // hàm này trả về 1 lời hứa và chờ đợi lời hứa
    // Kiểm tra array 'imgs' trong console! Kết quả hiển thị có giống như bạn dự kiến không?
    console.log(imgs);

    // Sử dụng hàm kết hợp promise để thực sự lấy được hình ảnh từ array.
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    // Thêm class ‘parallel' cho tất cả các hình ảnh (có một số CSS style).
    imgsEl.forEach((img) => img.classList.add("parallet"));
  } catch (err) {
    console.error(err);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
