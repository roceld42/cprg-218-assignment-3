// weather api
function getWeather() {
    fetch()
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