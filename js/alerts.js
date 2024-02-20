FetchAlerts();
 const alert_url = `https://api.weather.gov/alerts?active=false&point=${lat},${lon}&limit=500`
 console.log(alert_url)
 async function FetchAlerts() {
  const response = await fetch(alert_url);
  const data = await response.json();
  const {features} = data;
  console.log(data)
  if (features[0].properties.description !== null) {
    nmarquee.innerHTML = `<div class="alert" id="nwsalert">${features[0].properties.event}</div>
    <marquee class="marquee" id="scrollingmarquee" style="text-transform: uppercase; font-size: 29px;" scrollamount="6" scrolldelay="100" float="left">${features[0].properties.parameters.NWSheadline[0]}. ${features[0].properties.description}</marquee><img id="marqueebar" class="scroll" src="./images/ldl/watch-advisory.png">`
    timerr.innerHTML = `<div class="timer" id="time" style="color: white;">${hour}:${minute}</div></div>`
  } if (features[0].properties.description == "null") {
    nmarquee.innerHTML = `<marquee class="marquee" id="scrollingmarquee" style="font-size: 29px;" scrollamount="7">${features[0].properties.parameters.NWSheadline[0]}. ${features[0].properties.description}</marquee><img id="marqueebar" class="scroll" src="./images/ldl/warning.png">`
    innertime.innerHTML = `<div class="timer" id="time" style="position: absolute;">12:00</div>`;
  }

   }
  FetchAlerts();
  var alertac = `${features[0].properties.description}`
