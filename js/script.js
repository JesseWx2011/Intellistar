ReturnWeather()
 const api_url = `https://api.weather.com/v1/geocode/${lat}/${lon}/observations.json?language=${lang}-${country}&units=${units}&apiKey=${api_key}`
 console.log(api_url)
 async function ReturnWeather() {
  const response = await fetch(api_url);
  const data = await response.json();
  const {observation} = data;
console.log(data);

  document.getElementById('cityn').innerHTML = `${locationn}`;
  document.getElementById('condition').innerHTML = `${observation.wx_phrase}`;
  document.getElementById('temp').textContent = observation.temp;
  document.getElementById("humidity").innerHTML = `${observation.rh}%`
  document.getElementById("dewpoint").innerHTML = `${observation.dewPt}&deg;  `
  document.getElementById("wind").innerHTML = `${observation.wdir_cardinal} ${observation.wspd}`;
  document.getElementById('gusts').innerHTML = `${observation.gust}`
  document.getElementById('feelslike').innerHTML = `${observation.feels_like}&deg;`
  // Set marquee
  document.getElementById('scrollingmarquee').innerHTML = `${marquee_message}`
  // Music
  document.getElementById('music').innerHTML = `<source id="music"  src="./music/${playlist}/${music}.${audiotype}" type="audio/${audiotype}"> `
if (observation.gust = "null") {
   gusts.innerHTML = `None`
}
document.getElementById('icon').innerHTML = `<img class="icon" src="./images/icons/${icons}/${observation.wx_icon}.${filet}">`;

  var pressuret = `${observation.pressure_desc}`
  if (pressuret = `Falling`) {
    var pressuredep = `↓`;
  } else if (pressuret = `Rising`) {
    var pressuredep = `↑`
  } else if (pressuret = `Steady`) {
    var pressuredep = `S`
  } else {
    var pressuredep = `↑`
  }
  document.getElementById('pressure').innerHTML = `${observation.pressure} <div class="small">INCHES</div>${pressuredep}</div>`

 }
ReturnWeather()
