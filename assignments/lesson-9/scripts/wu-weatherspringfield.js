//populate Springfield with data from Underground Weather site
var weatherSpringfield = new XMLHttpRequest();

weatherSpringfield.open('GET', 'https://api.wunderground.com/api/15342b83d4c08511/conditions/q/MO/Springfield.json', true);
weatherSpringfield.send();

weatherSpringfield.onload = function() {
  var weatherInfo = JSON.parse(weatherSpringfield.responseText);
  console.log(weatherInfo);

  document.getElementById('placeS').innerHTML = weatherInfo.current_observation.display_location.city;
  document.getElementById('w-iconS').src = weatherInfo.current_observation.icon_url;
  document.getElementById('weatherStringS').innerHTML = weatherInfo.current_observation.weather;
  document.getElementById('highT').innerHTML = weatherInfo.current_observation.temp_f;
  document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
  document.getElementById('precipS').innerHTML = weatherInfo.current_observation.precip_1hr_in;
  document.getElementById('windChillS').innerHTML = weatherInfo.current_observation.windchill_f;
}