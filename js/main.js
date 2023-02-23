`use strict`;

// define variables
let boxesWeather = document.querySelector(`#boxesWeather`);
let search = document.querySelector(`#search`);
// define variables

// Recepion API and call dispaly functions with arguments form API
async function getApi(cityName) {
  let apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5e020d77e8a24b9e97c154735232002&q=${cityName}&days=3`);
  let apiJson = await apiResponse.json();
  let allTemp = [];
  allTemp = apiJson.forecast.forecastday;
  // getDetailsCurrentDay(apiJson);
  displayCurrentDay(apiJson);
  displayOtherWeather(allTemp);
  // getDetailsOtherDays(allTemp);
}
getApi(`dammam`);
// Recepion API and call dispaly functions with arguments form API




// function getDetailsCurrentDay(apiJson) {
//   let detailsCurrentDay = {
//     currentDay: sendDay(`${apiJson.location.localtime}`),
//     currentMonth: sendMonth(`${apiJson.location.localtime}`),
//     currentNumDay: sendNumOfDay(`${apiJson.location.localtime}`),
//     city: apiJson.location.name,
//     currentTemp: apiJson.current.temp_c,
//     currentImg: apiJson.current.condition.icon,
//     currentState: apiJson.current.condition.text,
//   };
// }

// function getDetailsOtherDays(allTemp) {
//   for (let i = 1; i < allTemp.length; i++) {
//     let detailsOthertDays = {
//       otherDay: sendDay(`${allTemp[i].date}`),
//       otherImg: allTemp[i].day.condition.icon,
//       maxTemp: allTemp[i].day.maxtemp_c,
//       minTemp: allTemp[i].day.mintemp_c,
//       otherState: allTemp[i].day.condition.text,
//     };
//     otherDaysArr.push(detailsOthertDays);
//   }
//   displayOtherWeather(otherDaysArr);
// }



//  dispaly current day
function displayCurrentDay(apiJson) {
  boxesWeather.innerHTML = `
  <div class="col-lg-4 col-12 overflow-hidden mt-3 mt-lg-0">
  <div class="date py-2 px-3 d-flex justify-content-between">
  <span>${sendDay(`${apiJson.location.localtime}`)}</span>
  <span>
  ${sendNumOfDay(`${apiJson.location.localtime}`)}
  ${sendMonth(`${apiJson.location.localtime}`)}
  </span>
  </div>
  <div class="px-3 py-4">
    <p class="m-0">${apiJson.location.name}</p>
    <p class="text-white">${apiJson.current.temp_c}<sup>o</sup>C
      <img src="https:${apiJson.current.condition.icon}" alt="" width="100">
    </p>
    <p>${apiJson.current.condition.text}</p>
    <div>
      <span class="pe-4">
        <img src="img/icon-umberella.png" alt="">
        20%
      </span>
      <span class="pe-4">
        <img src="img/icon-wind.png" alt="">
        18km/h
      </span>
      <span class="pe-4">
        <img src="img/icon-compass.png" alt="">
        East
      </span>
    </div>
  </div>      
  </div>`;
}
//  dispaly current day


// display other days
function displayOtherWeather(allTemp) {
  let box = ``;
  for (let i = 1; i < allTemp.length; i++) {
    box += `<div class="col-lg-4 col-12 overflow-hidden text-center mt-3 mt-lg-0">
    <div class="date2 py-2 px-3">
      <span>${sendDay(`${allTemp[i].date}`)}</span>
    </div>
    <div class="px-4 py-4">
      <img src="https:${allTemp[i].day.condition.icon}" class="mb-4" alt="">
      <p class="text-white mb-4">${allTemp[i].day.maxtemp_c}<sup>o</sup>C</p>
      <p>${allTemp[i].day.mintemp_c}<sup>o</sup></p>
      <p class="my-4">${allTemp[i].day.condition.text}</p>
    </div>
  </div>`;
  }
  boxesWeather.innerHTML += box;
}
// display other days



// search input about cities
search.addEventListener(`input`, function () {
  getApi(search.value);
});
// search input about cities



// know details of date
function sendDay(dateAndTime) {
  const weekDay = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
  const d = new Date(dateAndTime);
  let day = weekDay[d.getDay()];
  return day;
}
function sendMonth(dateAndTime) {
  const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
  const m = new Date(dateAndTime);
  let month = months[m.getMonth()];
  return month;
}
function sendNumOfDay(dateAndTime) {
  const n = new Date(dateAndTime);
  let num = n.getDate();
  return num;
}
// know details of date