const apikey= "14dea921ef633195398520416b1cabad";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchButton= document.querySelector(".search button")
const weatherIcon= document.querySelector(".weather-icon")


async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName +`&appid=${apikey}`);

    if(response.status ==404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        document.querySelector(".error").style.display ="none";
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const ref= data.weather[0].main
        if(ref =="Clouds"){
            weatherIcon.src ="./images/clouds.png";
        }
        else if(ref =="Clear"){
            weatherIcon.src ="./images/clear.png";
        }
        else if(ref =="Rain"){
            weatherIcon.src ="./images/rain.png";
        }
        else if(ref =="Drizzle"){
            weatherIcon.src ="./images/drizzle.png";
        }
        else if(ref =="Mist"){
            weatherIcon.src ="./images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
    }
}



searchButton.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});