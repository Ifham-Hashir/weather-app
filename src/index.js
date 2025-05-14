import './styles/reset.css';
import './styles/global.css';

const location = document.querySelector("#location");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", () => {
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.value}?key=NPNMUE3L6YWN2B95NY3CFQDG3`, {mode: 'cors'})
  .then((response) => response.json())
  .then((response) => {
    console.log(response.currentConditions.temp);
    console.log(response);
  })
  .catch((error) => {
    console.log("Error");
  })
});
