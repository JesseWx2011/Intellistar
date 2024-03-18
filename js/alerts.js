FetchAlerts();
 const alert_url = `https://api.weather.gov/alerts?active=false&point=${lat},${lon}&limit=500`
 console.log(alert_url)
 async function FetchAlerts() {
  const response = await fetch(alert_url); 
  const data = await response.json();
  const {features} = data;
  console.log(data)
  var alert = features[0].properties.headline
  console.log(alert)
  document.getElementById("alerttext").innerHTML = `${features[0].properties.headline}`
  // Script Implemented on March 6th 2024.
 if (features[0].properties.severity = "Extreme") {
  document.getElementById("nmarquee").innerHTML = `<div class="alert" id="nwsalert"  style="color: white;">${features[0].properties.event}</div>
  <marquee class="marquee" id="scrollingmarquee" style="text-transform: uppercase;font-size: 29px;text-shadow: 2px 1px black;" scrollamount="6" scrolldelay="100" float="left">${features[0].properties.description}</marquee><img id="marqueebar" class="scroll" src="./images/ldl/warning.png">`
  document.getElementById("time").style.color = "white";
 } if (features[0].properties.severity = "Severe") {
  document.getElementById("nmarquee").innerHTML = `<div class="alert" id="nwsalert" style="color: white;">${features[0].properties.event}</div><marquee class="marquee" id="scrollingmarquee" style="text-transform: uppercase;font-size: 29px;text-shadow: 2px 1px black;" scrollamount="6" scrolldelay="100" float="left">${features[0].properties.parameters.NWSheadline[0]}. ${features[0].properties.description}</marquee><img id="marqueebar" class="scroll" src="./images/ldl/warning.png">`
  document.getElementById("time").style.color = "white";
} if (features[0].properties.severity = "Moderate") {
  document.getElementById("nmarquee").innerHTML = `
  <div class="alert" id="nwsalert"  style="color: black;">${features[0].properties.event}</div>
  <marquee class="marquee" id="scrollingmarquee" style="text-transform: uppercase;font-size: 29px;text-shadow: 2px 1px black;" scrollamount="7">${features[0].properties.parameters.NWSheadline[0]}. ${features[0].properties.description}</marquee><img id="marqueebar" class="scroll" src="./images/ldl/watch-advisory.png">`
   document.getElementById("time").style.color = "white"
} if (features[0].properties.severity = "Minor") {
  document.getElementById("nmarquee").innerHTML = `
  <div class="alert" id="nwsalert"  style="color: black;">${features[0].properties.event}</div>
  <marquee class="marquee" id="scrollingmarquee" style="text-transform: uppercase;font-size: 29px;text-shadow: 2px 1px black;" scrollamount="7">${features[0].properties.parameters.NWSheadline[0]}. ${features[0].properties.description}</marquee><img id="marqueebar" class="scroll" src="./images/ldl/watch-advisory.png">`
document.getElementById("time").style.color = "white"
} else {
  document.getElementById("nmarquee").innerHTML = `<marquee class="marquee" id="scrollingmarquee" style="text-transform: uppercase;font-size: 29px;text-shadow: 2px 1px black;" scrollamount="7">${marquee_message}</marquee><img id="marqueebar" class="scroll" src="./images/ldl/LDLBar.png">`
  document.getElementById("time").style.color = "black"
}


   }

  FetchAlerts();
  // Function Removed for just alerts showing the advisory tag. Removed on March 6th 2024
  // if (features[0].properties.description !== null) {
   // nmarquee.innerHTML = `<div class="alert" id="nwsalert">${features[0].properties.event}</div>
   // <marquee class="marquee" id="scrollingmarquee" style="text-transform: uppercase; font-size: 29px;" scrollamount="6" scrolldelay="100" float="left">${features[0].properties.parameters.NWSheadline[0]}. ${features[0].properties.description}</marquee><img id="marqueebar" class="scroll" src="./images/ldl/watch-advisory.png">`
  //  timerr.innerHTML = `<div class="timer" id="time" style="color: white;">${hour}:${minute}</div></div>`
  // } if (features[0].properties.description == "null") {
   // nmarquee.innerHTML = `<marquee class="marquee" id="scrollingmarquee" style="font-size: 29px;" scrollamount="7">${features[0].properties.parameters.NWSheadline[0]}. ${features[0].properties.description}</marquee><img id="marqueebar" class="scroll" src="./images/ldl/warning.png">`
   // innertime.innerHTML = `<div class="timer" id="time" style="position: absolute;">12:00</div>`;
  //   }