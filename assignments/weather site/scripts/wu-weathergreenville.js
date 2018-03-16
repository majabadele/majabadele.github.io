//populate Greenville with data from Underground Weather site
var weatherGreenville = new XMLHttpRequest();

weatherGreenville.open('GET', 'https://api.wunderground.com/api/4a91a55e9f5be18c/conditions/q/NC/Greenville.json', true);
weatherGreenville.send();

weatherGreenville.onload = function() {
  var weatherInfo = JSON.parse(weatherGreenville.responseText);
  console.log(weatherInfo);

  document.getElementById('placeG').innerHTML = weatherInfo.current_observation.display_location.city;
  document.getElementById('w-iconG').src = weatherInfo.current_observation.icon_url;
  document.getElementById('weatherStringG').innerHTML = weatherInfo.current_observation.weather;
  document.getElementById('highT').innerHTML = weatherInfo.current_observation.temp_f;
  document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
  document.getElementById('precipG').innerHTML = weatherInfo.current_observation.precip_1hr_in;
  document.getElementById('windChillG').innerHTML = weatherInfo.current_observation.windchill_f;
}