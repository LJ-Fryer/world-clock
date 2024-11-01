function updateTime() {
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTimeUnitElement = sydneyElement.querySelector(".seconds-unit");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("h:mm");
    sydneyTimeUnitElement.innerHTML = sydneyTime.format("ss<br />A");
  }
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTimeUnitElement =
      losAngelesElement.querySelector(".seconds-unit");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm");
    losAngelesTimeUnitElement.innerHTML = losAngelesTime.format("ss<br />A");
  }
  //Shanghai
  let shanghaiElement = document.querySelector("#shanghai");
  if (shanghaiElement) {
    let shanghaiDateElement = shanghaiElement.querySelector(".date");
    let shanghaiTimeElement = shanghaiElement.querySelector(".time");
    let shanghaiTimeUnitElement =
      shanghaiElement.querySelector(".seconds-unit");
    let shanghaiTime = moment().tz("Asia/Shanghai");

    shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
    shanghaiTimeElement.innerHTML = shanghaiTime.format("h:mm");
    shanghaiTimeUnitElement.innerHTML = shanghaiTime.format("ss<br />A");
  }
  //Madrid
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTimeUnitElement = madridElement.querySelector(".seconds-unit");
    let madridTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
    madridTimeElement.innerHTML = madridTime.format("h:mm");
    madridTimeUnitElement.innerHTML = madridTime.format("ss<br />A");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let replaceCity = `<div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time-element">
              <div class="time">${cityTime.format("h:mm")}</div>
              <div class="seconds-unit">${cityTime.format("ss<br />A")}</div>
            </div>
          </div><a href="index.html">All cities</a>`;

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = replaceCity;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
