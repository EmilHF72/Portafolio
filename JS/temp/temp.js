
const api = { 
    key: '91e79da0ce6af75b1881b301440a2d9c',
    url: 'https://api.openweathermap.org/data/2.5/weather' 
 }

const temp = document.getElementById('temp');
const rango = document.getElementById('rango');

async function search(query){
    try{
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        const data = await response.json();
        console.log(data);
        temp.innerHTML =`${aCelsius(data.main.temp)}ºc Actual`;
        rango.innerHTML=`${aCelsius(data.main.temp_min)}ºc temp.min  /  ${aCelsius(data.main.temp_max)}ºc temp-max`
        } catch(err){
            console.log(err);
            alert("error en la llamada");
        }
}


function aCelsius(Kelvin){
    return Math.round (Kelvin - 273.15);
}


function onSubmit(e){
    e.preventDefault();
    search(searchbox.value);
}

const searchform = document.getElementById('search-form');
const searchbox = document.getElementById('searchbox');
searchform.addEventListener('submit', onSubmit, true);