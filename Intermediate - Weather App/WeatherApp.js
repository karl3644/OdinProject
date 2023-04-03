import { api as key } from "./Util.js";

// function logger(){
//     console.log(key);
//     console.log('logger');
// }

function inputtedData() {
    const location = document.getElementById("location").value
    const airQuality = document.getElementById("airQuality-select").value
    const selected = document.getElementById("weather-select").value
    return { location, airQuality, selected }
}

function showFailure(failMessage) {
    const para = document.getElementById("failure")
    para.textContent = failMessage;
    para.hidden = false;
}

function hideFailure() {
    const para = document.getElementById("failure")
    para.hidden = true;
}

function setLocation(results) {
    const locNameSpan = document.getElementById("locationName")
    locNameSpan.textContent = results.location.name;

    const locCountrySpan = document.getElementById("locationCountry")
    locCountrySpan.textContent = results.location.country;

    const locRegionSpan = document.getElementById("locationRegion")
    locRegionSpan.textContent = results.location.region;

    const locCoordSpan = document.getElementById("locationCoord")
    locCoordSpan.textContent = `Lat: ${results.location.lat} Lon: ${results.location.lon}`;
}

function setResults(results) {
    const tempCSpan = document.getElementById("tempCResult")
    tempCSpan.textContent = results.current.temp_c;
    
    const tempFSpan = document.getElementById("tempFResult")
    tempFSpan.textContent = results.current.temp_f;
        
    const humiditySpan = document.getElementById("humidityResult")
    humiditySpan.textContent = results.current.humidity;
    
    const windMPHSpan = document.getElementById("windMPHResult")
    windMPHSpan.textContent = results.current.wind_mph;
    
    const windDegreeSpan = document.getElementById("windDegreeResult")
    windDegreeSpan.textContent = results.current.wind_degree;
    
    const windDirSpan = document.getElementById("windDirectionResult")
    windDirSpan.textContent = results.current.wind_dir;
    
    const feelsLikeCSpan = document.getElementById("feelsLikeCResult")
    feelsLikeCSpan.textContent = results.current.feelslike_c;
    
    const feelsLikeFSpan = document.getElementById("feelsLikeFResult")
    feelsLikeFSpan.textContent = results.current.feelslike_f;
    
    const pressumeMBSpan = document.getElementById("pressureMBResult")
    pressumeMBSpan.textContent = results.current.pressure_mb;
    
    const precipParaSpan = document.getElementById("precipitationMMResult")
    precipParaSpan.textContent = results.current.precip_mm;
    
    const uvSpan = document.getElementById("uvResult")
    uvSpan.textContent = results.current.uv;
}

function hideLoadingStatus(status) {
    // status is true or false
    const loadingPara = document.getElementById("loading")
    loadingPara.hidden = status;
}

async function getWeather() {
    hideLoadingStatus(false)
    const baseURL = "http://api.weatherapi.com/v1"
    const {location, airQuality, selected } = inputtedData()

    const response = await fetch(`${baseURL}/${selected}.json?key=${key}&q=${location}&q=${airQuality}`);
    if (response.ok) {
        const body = await response.json()
        console.log('bod', body);
        setResults(body)
        setLocation(body)
        hideFailure()
        hideLoadingStatus(true)
    } else {
        const body = await response.json()
        showFailure(body.error.message)
        hideLoadingStatus(true)
    }
}

const submitButton = document.getElementById("apiButton")
submitButton.addEventListener("click", () => getWeather())

export { getWeather }