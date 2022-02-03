const API_KEY="2a88980c5f63394d0d0a96b9cad62bc8";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data=> {
        const weatherContainer=document.querySelector(".weather-form");
        const cityName=weatherContainer.querySelector("h3");
        const temp=weatherContainer.querySelector("#weather");
        cityName.innerText=`${data.name}    / ${data.weather[0].main}`;
        temp.innerText=data.weather[0].main;
        const img=document.createElement("img");
        img.className+="weather-icon";
        if(temp.innerText==="Clear"){
            img.src="assets/clear.png";
        }
        if(temp.innerText==="Clouds"){
            img.src="assets/clouds.png";
        }
        if(temp.innerText==="Rain"){
            img.src="assets/rain.png";
        }
        if(temp.innerText==="Snow"){
            img.src="assets/snow.png";
        }
        if(temp.innerText==="Thunderstorm"){
            img.src="assets/thunder.png"
        }
        weatherContainer.appendChild(img);
    }); 
}

function onGeoError(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
