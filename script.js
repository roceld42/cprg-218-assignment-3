// weather api
let apikey = 'ab12b65569969fd5fb077dd1037b5415';

getWeather()

function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=21.17429&lon=-86.84656&appid=ab12b65569969fd5fb077dd1037b5415&units=metric') 
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById('cityname').textContent = data.name;
        document.getElementById('temp').textContent = `${data.main.temp}°C`;
        document.getElementById('weatherdescription').textContent = data.weather[0].description;

        let icon = data.weather[0].icon
        let iconurl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.getElementById('weathericon').src = iconurl

    }).catch((error) => {
        console.log('ERROR', error);
    })
}

// footer
const d = new Date();
console.log (d.getFullYear());
const year = document.getElementById("year");
year.textContent = d.getFullYear();