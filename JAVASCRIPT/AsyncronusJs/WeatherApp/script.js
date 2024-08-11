
// getting the refrence of required html element 
const seachBoxEle = document.getElementById("searchBox");
const searchBtnEle = document.querySelector(".search-btn");
const weatherImgEle = document.getElementById("weatherImg");
const tempTextEle = document.querySelector(".temp-data");
const locationTextEle = document.querySelector(".area");
const humidityTextEle = document.querySelector(".humidity-text");
const windspeedTextEle = document.querySelector(".windspeed-text");
const weatherText = document.querySelector(".weather-text");
let apiKey;

function saveToLocalStorage (location = "") {
    localStorage.setItem("location", JSON.stringify(location));
}
function getPrevLocationFromStorage(){
    const location = localStorage.getItem("location") || "Kolkata";
    return JSON.parse(location);
}

function saveAPIKey (text = ""){
    localStorage.setItem("apiKey", JSON.stringify(text));
}


function getAPIKey (){
    const apiKey = localStorage.getItem("apiKey");
    return JSON.parse(apiKey);
}


const getAPIKeyFromUser = () =>  {
    let api = getAPIKey();
    if(!api){
        api = prompt("Enter your api key -");
    }

    return api;
}

const getWeatherData = async (location = "") => {
    try{
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`);
        const data = await result.json();
        const temp = Math.floor(data?.main.temp);
        const humidity = Math.round(data?.main.humidity);
        const name = data?.name;
        const windSpeed = Math.round(data?.wind.speed);
        const weatherType = (data?.weather[0].main).toLowerCase();
        const weatherImage = `./images/${weatherType}.png`
        tempTextEle.textContent = `${temp}°C`;
        locationTextEle.textContent = `${name}`;
        humidityTextEle.textContent = `${humidity}`;
        windspeedTextEle.textContent = `${windSpeed}km/h`;
        weatherText.textContent = `${weatherType.toUpperCase()}`;
        weatherImgEle.src = weatherImage;
    }
    catch{
        console.error("Unable to get data from api");
    }
   
}

(()=>{
    apiKey = getAPIKeyFromUser();
    saveAPIKey(apiKey);
    getWeatherData(getPrevLocationFromStorage())
})();

searchBtnEle.addEventListener("click", () => {
    const loacation = seachBoxEle.value;
    if (loacation){
        getWeatherData(loacation);
        saveToLocalStorage(loacation);
        seachBoxEle.value = "";
    }
    else{
        alert("Please enter proper location name.")
    }
})
