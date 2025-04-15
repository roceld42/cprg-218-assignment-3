// weather api
function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={21.17429}&lon={-86.84656}&appid={34240611284300c2fe746df99d0e11d2}')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log('ERROR', error);
    })
}


// footer
const d = new Date();
console.log (d.getFullYear());
const year = document.getElementById("year");
year.textContent = d.getFullYear();