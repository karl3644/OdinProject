import { api as key } from "./Util.js";

function logger(){
    console.log(key);
    console.log('logger');
}

function inputtedData() {
    const location = document.getElementById("location").value
    const airQuality = document.getElementById("airQuality-select").value
    const selected = document.getElementById("weather-select").value
    return { location, airQuality, selected }
}

function showFailure(failMessage) {
    const para = document.getElementById("failure")
    console.log('para', para);
    para.textContent = failMessage;
    para.hidden = false;
}

function setResults(result) {
    const para = document.getElementById("results")
    
    para.textContent = results.current.temp_c;
    para.textContent = results.current.temp_f;
    para.textContent = results.current.humidity;
    para.textContent = results.current.wind_mph;
    para.textContent = results.current.wind_degree;
    para.textContent = results.current.wind_dir;
    para.textContent = results.current.feelslike_c;
    para.textContent = results.current.feelslike_f;
    para.textContent = results.current.pressure_mb;
    para.textContent = results.current.precip_mm;
    para.textContent = results.current.uv;
}

// {
//     "last_updated_epoch": 1680192900,
//     "last_updated": "2023-03-30 23:15",
//     "temp_c": -6.2,
//     "temp_f": 20.8,
//     "is_day": 0,
//     "condition": {
//         "text": "Heavy snow",
//         "icon": "//cdn.weatherapi.com/weather/64x64/night/338.png",
//         "code": 1225
//     },
//     "wind_mph": 3.8,
//     "wind_kph": 6.1,
//     "wind_degree": 326,
//     "wind_dir": "NNW",
//     "pressure_mb": 1028,
//     "pressure_in": 30.35,
//     "precip_mm": 2,
//     "precip_in": 0.08,
//     "humidity": 75,
//     "cloud": 100,
//     "feelslike_c": -9.2,
//     "feelslike_f": 15.4,
//     "vis_km": 2,
//     "vis_miles": 1,
//     "uv": 1,
//     "gust_mph": 4.5,
//     "gust_kph": 7.2
// }

async function getWeather() {
    const baseURL = "http://api.weatherapi.com/v1"
    const {location, airQuality, selected } = inputtedData()

    const response = await fetch(`${baseURL}/${selected}.json?key=${key}&q=${location}&q=${airQuality}`);
    if (response.ok) {
        const body = await response.json()
        console.log('bod', body.current);
        setResults(body)
        console.log('bod', body.forecast);
        console.log('bod', body.location);
    } else {
        const body = await response.json()
        showFailure(body.error.message)
    }
}

const submitButton = document.getElementById("apiButton")
submitButton.addEventListener("click", () => getWeather())

export { getWeather }