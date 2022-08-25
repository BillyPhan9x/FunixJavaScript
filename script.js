"use strict";

const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  // (10:00) Tạo file nội dung html
  const html = `<article class="${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
      </article>`;

  // Đẩy file html lên webpage với phương thức insertAdjacentHTML
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // Set lại opacity của CSS style sang 1 với .style.opacity
  countriesContainer.style.opacity = 1;
  document.querySelector("h1").style.opacity = 0;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  document.querySelector("h1").style.opacity = 0;
  countriesContainer.style.opacity = 1;
};

// Lab 14: Xử lý dữ liệu GPS
console.log("Lab 14. Xử lý dữ liệu GPS ==>");

function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    // trả về 1 promise
    .then(function (response) {
      //   console.log(response);
      // xử lý lỗi truy cập quá nhanh trên 3 lần / giây
      if (!response.ok) throw new Error(`ERROR CODE: ${response.status}`);
      // trả về 1 promise và promise này khi ở trạng thái thành công sẽ trả về data chúng ta mong muốn
      return response.json();
    })
    .then(function (data) {
      // lấy data được trả về khi thành công từ promise ở trên
      //   console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      // trả về 1 promise mới
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(function (response) {
      // xử lý lỗi
      // tạo đối tượng Error để methods .catch có thể bắt được
      if (!response.ok) throw new Error(`ERROR CODE: ${response.status}`);
      return response.json();
    })
    .then(function (data) {
      //   console.log(data);
      renderCountry(data[0]);
    })
    .catch(function (err) {
      //   console.log(err);
      console.error(`ERROR: ${err.message}`);
      renderError(`🎯 ${err.message}. Try again!`);
    });
}
whereAmI(52.508, 13.381);
whereAmI(-33.933, 18.474);
whereAmI(19.037, 72.873);

setTimeout(function () {}, 1000);

setTimeout(function () {}, 2000);

setTimeout(function () {}, 3000);

// 2. Dữ liệu kiểm tra:

// Tọa độ 1: 52.508, 13.381 (Vĩ độ, Kinh độ)
// Tọa độ 2: 19.037, 72.873
// Tọa độ 3: -33.933, 18.474
