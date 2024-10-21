const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = '63432bcd3824564e38a79c730586711f'
const difKelvin = 273.15; 

document.getElementById('searchButton').addEventListener('click', ()=> {

    const city = document.getElementById('cityInput').value;

    if(city){
        fetchWeather(city)
    } else{
        alert("Ingrese ua ciudad valida");
    }




})


function fetchWeather (city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showData(data))
}

function showData (data){
    const divREsponseData = document.getElementById('responseData');
    divREsponseData.innerHTML= '';

    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    
    const cityInfo = document.createElement('h2');
    cityInfo.textContent= `${cityName}, ${countryName}`;

    const tempInfo = document.createElement('p');
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp-difKelvin)} ºC`

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `La humedad es del: ${humidity} %`;

    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`


    const descriptionINfo = document.createElement('p');
    descriptionINfo.textContent = `La descripcion es: ${description}`

    divREsponseData.appendChild(cityInfo)
    divREsponseData.appendChild(tempInfo)
    divREsponseData.appendChild(humidityInfo)
    divREsponseData.appendChild(iconInfo)
    divREsponseData.appendChild(descriptionINfo)

}