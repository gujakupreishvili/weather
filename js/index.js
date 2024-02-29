const input = document.querySelector(".input");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const hour = document.querySelector(".time");
const week_day = document.querySelector(".week-day");
const data = document.querySelector(".data");
const month = document.querySelector(".month");
const max_temp = document.querySelector(".max-temp");
const min_temp = document.querySelector(".min-temp");
const humadity = document.querySelector(".humadity");
const cloud = document.querySelector(".cloud");
const wind_speed = document.querySelector(".wind-speed-span");

const proxyUrl = "https://api.allorigins.win/raw?url="; // Use AllOrigins as the proxy
function check_weather() {
  fetch(
    `${proxyUrl}https://lobster-app-kps4x.ondigitalocean.app/api/weather/${input.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      temp.textContent = data.currentTemp;
      city.textContent = data.city;
      week_day.textContent = data.day;
      hour.textContent = formattedTime;
      data.textContent = get_data;
      month.textContent = get_month;
      max_temp.textContent = data.maxTemp;
      min_temp.textContent = data.minTemp;
      humadity.textContent = data.humidity;
      wind_speed.textContent = data.windSpeed;
      if (data.currentWeatherDesc === "sunny") {
        document.body.style.backgroundImage = `url('../img/thunder.png')`;
      }
      if (data.currentWeatherDesc === "rain") {
        document.body.style.backgroundImage = `url('../img/rain.png')`;
      }
      if (data.currentWeatherDesc === "snowy") {
        document.body.style.backgroundImage = `url('../img/snow.png')`;
      }
    })

    .catch((error) => {
      console.error("Error fetching data:", error);
      const input_form = document.querySelector(".input-form");
      input_form.style.borderBottom = "1px solid red";
    });
  input.value = "";
}

// window.addEventListener("load", () => {
//   const loader = document.querySelector(".loader");
//   loader.classList.add("loader-hidden");
//   loader.addEventListener("transitionend", () => {
//     document.body.removeChild("loader");
//   });
// });

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    // const loader = document.querySelector(".loader");
    check_weather();
    // loader.classList.remove("loader-hidden");
    // loader.style.display = "none";
  }
});

const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const get_data = time.getDate();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const get_month = months[time.getMonth()];
const formattedTime = `${hours}:${minutes}`;
const input_desktop = document.querySelector(".input-desktop");
