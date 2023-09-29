
//!  KONUM BİLGİSİ ALMA //////////////////////////////////////////////
let lat;
let lon;

if ("geolocation" in navigator) {

  navigator.geolocation.getCurrentPosition(function(position) {
    lat= position.coords.latitude;
    lon = position.coords.longitude;
    // console.log("Latitude: " + lat + ", Longitude: " + lon);
    checkWeather();
  }, function(error) {
    console.error("Konum bilgisi alinamadi: " + error.message);
  });
} else {
  console.error("Konum bilgisi desteklenmiyor.");
}   

//! //////////////////////////////////////////////////////////////////

const body = document.querySelector("body"),
  modeSwitch = document.querySelector(".mode-switch");


if (localStorage.getItem("mode") === "Dark Mode"){
    body.classList.add("dark");
    modeSwitch.textContent = "Light";
}

modeSwitch.addEventListener("click", () => {

    body.classList.toggle("dark");
    
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light" : "Dark";
    localStorage.setItem("mode", isDarkMode ? "Dark" : "Light");
  })


//! //////////////////////////////////////////////////////////////////
const weatherIcon = document.querySelector(".weather-icon");
const day1Icon= document.querySelector(".day1img");
const day2Icon = document.querySelector(".day2img");
const day3Icon = document.querySelector(".day3img");
const day4Icon = document.querySelector(".day4img");
const day5Icon = document.querySelector(".day5img");

const checkWeather = async() =>{

    // const apiKey = "9bd7cef2305ec3cae8f8a8cc57a2ff54";
    // const apiUrl =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const apiKey = "f433529a4488402f980181636232509"
    const apiUrl =`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=6&aqi=no&alerts=no`

    console.log(apiUrl,"apiurl")
    
    fetch(apiUrl)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok. Status: ' + response.status);
            }
            return response.json();
        })
        .then(function(data) {
          console.log(data)

    //! //
    document.querySelector(".temp").innerHTML = data?.current.temp_c + "°c";
    document.querySelector(".city").innerHTML =  data?.location.name;
    document.querySelector(".humidity").innerHTML = data?.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data?.current.wind_kph + "km/h";
    document.querySelector(".vis").innerHTML = data?.current.vis_km + "km";
    document.querySelector(".cor").innerHTML = data?.forecast?.forecastday[0].day.daily_chance_of_rain + "%";
    document.querySelector(".uv").innerHTML = data?.current.uv;



    //*
    document.querySelector(".day1temp").innerHTML = data?.forecast?.forecastday[0].day.avgtemp_c + "°c";
    document.querySelector(".day2temp").innerHTML = data?.forecast?.forecastday[1].day.avgtemp_c + "°c";
    document.querySelector(".day3temp").innerHTML = data?.forecast?.forecastday[2].day.avgtemp_c + "°c";
    document.querySelector(".day4temp").innerHTML = data?.forecast?.forecastday[3].day.avgtemp_c + "°c";
    document.querySelector(".day5temp").innerHTML = data?.forecast?.forecastday[4].day.avgtemp_c + "°c";


 

    var conditionCode = data?.forecast?.forecastday[0].day.condition.code;

    if(conditionCode === 1003 || conditionCode === 1006 || conditionCode === 1009 || conditionCode === 1030){
      weatherIcon.src = "animated/cloudy.svg";
    }else if(conditionCode === 1000){
      weatherIcon.src = "animated/day.svg";
    }else if(conditionCode === 1192 || conditionCode == 1195 || conditionCode == 1198 || conditionCode == 1201 ||conditionCode == 1252 || conditionCode == 1276){
      weatherIcon.src = "animated/rainy-6.svg";
    }else if(conditionCode == 1063 ||conditionCode == 1150 ||conditionCode == 1153 ||conditionCode ==1168 ||conditionCode ==1171 ||conditionCode ==1180 ||conditionCode ==1183 ||conditionCode ==1186 ||conditionCode ==1189 ||conditionCode ==1192 ||conditionCode ==1240 ||conditionCode == 1273){
      weatherIcon.src = "animated/rainy-1.svg";
    }else if(conditionCode == 1135 ||conditionCode == 1147){
      weatherIcon.src = "animated/cloudy.svg";
    }
     
    var conditionCode1 = data?.forecast?.forecastday[1].day.condition.code;

    if(conditionCode1 === 1003 || conditionCode1 === 1006 || conditionCode1 === 1009 || conditionCode1 === 1030){
      day1Icon.src = "animated/cloudy.svg";
    }else if(conditionCode1 === 1000){
      day1Icon.src = "animated/day.svg";
    }else if(conditionCode1 === 1192 || conditionCode1 == 1195 || conditionCode1 == 1198 || conditionCode1 == 1201 ||conditionCode1 == 1252 || conditionCode1 == 1276){
      day1Icon.src = "animated/rainy-6.svg";
    }else if(conditionCode1 == 1063 ||conditionCode1 == 1150 ||conditionCode1 == 1153 ||conditionCode1 ==1168 ||conditionCode1 ==1171 ||conditionCode1 ==1180 ||conditionCode1 ==1183 ||conditionCode1 ==1186 ||conditionCode1 ==1189 ||conditionCode1 ==1192 ||conditionCode1 ==1240 ||conditionCode1 == 1273){
      day1Icon.src = "animated/rainy-1.svg";
    }else if(conditionCode1 == 1135 ||conditionCode1 == 1147){
      day1Icon.src = "animated/cloudy.svg";
    }

    var conditionCode2 = data?.forecast?.forecastday[2].day.condition.code;

    if(conditionCode2 === 1003 || conditionCode2 === 1006 || conditionCode2 === 1009 || conditionCode2 === 1030){
      day2Icon.src = "animated/cloudy.svg";
    }else if(conditionCode2 === 1000){
      day2Icon.src = "animated/day.svg";
    }else if(conditionCode2 === 1192 || conditionCode2 == 1195 || conditionCode2 == 1198 || conditionCode2 == 1201 ||conditionCode2 == 1252 || conditionCode2 == 1276){
      day2Icon.src = "animated/rainy-6.svg";
    }else if(conditionCode2 == 1063 ||conditionCode2 == 1150 ||conditionCode2 == 1153 ||conditionCode2 ==1168 ||conditionCode2 ==1171 ||conditionCode2 ==1180 ||conditionCode2 ==1183 ||conditionCode2 ==1186 ||conditionCode2 ==1189 ||conditionCode2 ==1192 ||conditionCode2 ==1240 ||conditionCode2 == 1273){
      day2Icon.src = "animated/rainy-1.svg";
    }else if(conditionCode2 == 1135 ||conditionCode2 == 1147){
      day2Icon.src = "animated/cloudy.svg";
    }

    var conditionCode3 = data?.forecast?.forecastday[3].day.condition.code;

    if(conditionCode3 === 1003 || conditionCode3 === 1006 || conditionCode3 === 1009 || conditionCode3 === 1030){
      day3Icon.src = "animated/cloudy.svg";
    }else if(conditionCode3 === 1000){
      day3Icon.src = "animated/day.svg";
    }else if(conditionCode3 === 1192 || conditionCode3 == 1195 || conditionCode3 == 1198 || conditionCode3 == 1201 ||conditionCode3 == 1252 || conditionCode3 == 1276){
      day3Icon.src = "animated/rainy-6.svg";
    }else if(conditionCode3 == 1063 ||conditionCode3 == 1150 ||conditionCode3 == 1153 ||conditionCode3 ==1168 ||conditionCode3 ==1171 ||conditionCode3 ==1180 ||conditionCode3 ==1183 ||conditionCode3 ==1186 ||conditionCode3 ==1189 ||conditionCode3 ==1192 ||conditionCode3 ==1240 ||conditionCode3 == 1273){
      day3Icon.src = "animated/rainy-1.svg";
    }else if(conditionCode3 == 1135 ||conditionCode3 == 1147){
      day3Icon.src = "animated/cloudy.svg";
    }

    var conditionCode4 = data?.forecast?.forecastday[4].day.condition.code;

    if(conditionCode4 === 1003 || conditionCode4 === 1006 || conditionCode4 === 1009 || conditionCode4 === 1030){
      day4Icon.src = "animated/cloudy.svg";
    }else if(conditionCode4 === 1000){
      day4Icon.src = "animated/day.svg";
    }else if(conditionCode4 === 1192 || conditionCode4 == 1195 || conditionCode4 == 1198 || conditionCode4 == 1201 ||conditionCode4 == 1252 || conditionCode4 == 1276){
      day4Icon.src = "animated/rainy-6.svg";
    }else if(conditionCode4 == 1063 ||conditionCode4 == 1150 ||conditionCode4 == 1153 ||conditionCode4 ==1168 ||conditionCode4 ==1171 ||conditionCode4 ==1180 ||conditionCode4 ==1183 ||conditionCode4 ==1186 ||conditionCode4 ==1189 ||conditionCode4 ==1192 ||conditionCode4 ==1240 ||conditionCode4 == 1273){
      day4Icon.src = "animated/rainy-1.svg";
    }else if(conditionCode4 == 1135 ||conditionCode4 == 1147){
      day4Icon.src = "animated/cloudy.svg";
    }

    var conditionCode5 = data?.forecast?.forecastday[5].day.condition.code;

    if(conditionCode5 === 1003 || conditionCode5 === 1006 || conditionCode5 === 1009 || conditionCode5 === 1030){
      day5Icon.src = "animated/cloudy.svg";
    }else if(conditionCode5 === 1000){
      day5Icon.src = "animated/day.svg";
    }else if(conditionCode5 === 1192 || conditionCode5 == 1195 || conditionCode5 == 1198 || conditionCode5 == 1201 ||conditionCode5 == 1252 || conditionCode5 == 1276){
      day5Icon.src = "animated/rainy-6.svg";
    }else if(conditionCode5 == 1063 ||conditionCode5 == 1150 ||conditionCode5 == 1153 ||conditionCode5 ==1168 ||conditionCode5 ==1171 ||conditionCode5 ==1180 ||conditionCode5 ==1183 ||conditionCode5 ==1186 ||conditionCode5 ==1189 ||conditionCode5 ==1192 ||conditionCode5 ==1240 ||conditionCode5 == 1273){
      day5Icon.src = "animated/rainy-1.svg";
    }else if(conditionCode5 == 1135 ||conditionCode5 == 1147){
      day5Icon.src = "animated/cloudy.svg";
    }

    //! //
      
        })
        .catch(function(error) {
            console.error('Hata ile karşilaşildi:', error);
        });
    
    };

 //!  GÜNLERİ SIRALAMA ////////////////////////////////////////////////
    var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
    
//! Sayfa yüklendiğinde fonksiyonu çağırma //

window.onload = async function() {
  checkWeather();
};
