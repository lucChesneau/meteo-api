var ville = "Tours";
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Tours&lang=fr&units=metric&appid=6da966b9536ebc555803b972c12dcccf'; 
var searchVille = document.getElementById("searchVille");
var villeActu = document.getElementById("villeActuelle");
var icon = document.getElementById("icon");
var tDesc = document.getElementById("tDescription");
var degres = document.getElementById('degres');
var humidity = document.getElementById('humidity');
var wind = document.getElementById('wind');


function callAPI () {
    window.fetch(url)
        .then(res => res.json())
        .then(resJson => {
    villeActu.innerText = resJson.name.toUpperCase();
    tDesc.innerText = resJson.weather[0].description;
    console.log(resJson);
    degres.innerHTML = resJson.main.temp + " C°";
    humidity.innerHTML = resJson.main.humidity + " %";
    wind.innerHTML = resJson.wind.speed + " km/h";
    icon.innerHTML = "<img src='http://openweathermap.org/img/w/" + resJson.weather[0].icon + ".png'" + "></img>";

    
});
}
callAPI();

function recherche() {
    ville = searchVille.value;
    url = `http://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&units=metric&appid=6da966b9536ebc555803b972c12dcccf`;
    callAPI();
}
