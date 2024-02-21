 FetchForecast();
 const forecast_url = `https://api.weather.com/v3/wx/forecast/daily/15day?geocode=${lat},${lon}&format=json&units=${units}&language=${lang}-${country}&apiKey=${api_key}`;
  async function FetchForecast() {
  const response = await fetch(forecast_url);
  const data = await response.json();
  const {calendarDayTemperatureMax, calendarDayTemperatureMin, daypart, narrative} = data;
    console.log(data);

  if (daypart[0].narrative[0] !== null) {
    var forecast = `${daypart[0].narrative[0]}`;
    var dayname =  `${daypart[0].daypartName[0]}`;
    var forecast0 = `${daypart[0].narrative[1]}`;
    var dayname0 =  `${daypart[0].daypartName[1]}`;
    var dayname1 = `${daypart[0].daypartName[2]}`;
     var forecast1 = `${daypart[0].narrative[2]}`
  } else if (daypart[0].narrative[0] == null) {
    var forecast = `${daypart[0].narrative[1]}`;
    var dayname =  `${daypart[0].daypartName[1]}`;
    var forecast0 = `${daypart[0].narrative[2]}`;
    var dayname0 =  `${daypart[0].daypartName[2]}`;
    var dayname1 = `${daypart[0].daypartName[3]}`;
    var forecast1 = `${daypart[0].narrative[3]}`
  } 
    // Local Forecast Slide
    // Forecast for Day 1
    document.getElementById('daypartn1').innerHTML  = `${dayname}`;
    document.getElementById('forecast1').innerHTML = `${forecast}`;
    // Forecast For Day 2
    document.getElementById('daypartn2').innerHTML = `${dayname0}`
    document.getElementById('forecast2').innerHTML = `${forecast0}`
    // Forecast for Day 3
    document.getElementById('daypartn3').innerHTML = `${dayname1}`
    document.getElementById('forecast3').innerHTML = `${forecast1}`
    // City Stuff
    document.getElementById('citynf').textContent = `${locationn}`
    document.getElementById('citynf1').textContent = `${locationn}`;
    document.getElementById('citynf2').textContent = `${locationn}`
    document.getElementById("citynamee").textContent = `${locationn}`
   // Extended Forecast
   document.getElementById('icons').innerHTML = `<img id="icon0" src="./images/icons/${icons}/${daypart[0].iconCode[0]}.${filet}">
   <img id="icon1" style="margin-left: 151px" src="./images/icons/${icons}/${daypart[0].iconCode[2]}.${filet}">
   <img id="icon2" style="margin-left: 246px" src="./images/icons/${icons}/${daypart[0].iconCode[4]}.${filet}">
   <img id="icon3" style="margin-left: 336px;" src="./images/icons/${icons}/${daypart[0].iconCode[6]}.${filet}">
   <img id="icon4" style="margin-left: 428px;" src="./images/icons/${icons}/${daypart[0].iconCode[8]}.${filet}">
   <img id="icon5" style="margin-left: 519px;" src="./images/icons/${icons}/${daypart[0].iconCode[10]}.${filet}">
   <img id="icon6" style="margin-left: 614px;" src="./images/icons/${icons}/${daypart[0].iconCode[12]}.${filet}">`

   // Scripts are kinda messy here.
   document.getElementById('conditions').innerHTML = `<div class="condition" id="weather00">${daypart[0].wxPhraseLong[0]}</div>
   <div class="condition" id="weather01" style="margin-left: 103px;">${daypart[0].wxPhraseLong[2]}</div>
   <div class="condition" id="weather02" style="margin-left: 201px;">${daypart[0].wxPhraseLong[4]}</div>
   <div class="condition" id="weather03" style="margin-left: 287px;">${daypart[0].wxPhraseLong[6]}</div>
   <div class="condition" id="weather04" style="margin-left: 386px;">${daypart[0].wxPhraseLong[8]}</div>
   <div class="condition" id="weather05" style="margin-left: 469px;">${daypart[0].wxPhraseLong[10]}</div>
   <div class="condition" id="weather06" style="margin-left: 567px;">${daypart[0].wxPhraseLong[12]}</div>`
 // 
if (daypart[0].wxPhraseLong[0] == null) {
  document.getElementById('hi0').textContent = `--`
  document.getElementById('conditions').innerHTML = `<div class="condition" id="weather00">${daypart[0].wxPhraseLong[1]}</div>
   <div class="condition" id="weather01" style="
 margin-left: 103px;
 ">${daypart[0].wxPhraseLong[2]}</div>
   <div class="condition" id="weather02" style="
 margin-left: 201px;
 ">${daypart[0].wxPhraseLong[4]}</div>
   <div class="condition" id="weather03" style="
 margin-left: 287px;
 ">${daypart[0].wxPhraseLong[6]}</div>
   <div class="condition" id="weather04" style="
 margin-left: 386px;
 ">${daypart[0].wxPhraseLong[8]}</div>
   <div class="condition" id="weather05" style="
 margin-left: 469px;
 ">${daypart[0].wxPhraseLong[10]}</div>
   <div class="condition" id="weather06" style="
 margin-left: 567px;
 ">${daypart[0].wxPhraseLong[12]}</div>`;

 document.getElementById('icons').innerHTML = `<img id="icon0" src="./images/icons/${icons}/${daypart[0].iconCode[1]}.${filet}">
 <img id="icon1" style="margin-left: 151px" src="./images/icons/${icons}/${daypart[0].iconCode[2]}.${filet}">
 <img id="icon2" style="margin-left: 246px" src="./images/icons/${icons}/${daypart[0].iconCode[4]}.${filet}">
 <img id="icon3" style="margin-left: 336px;" src="./images/icons/${icons}/${daypart[0].iconCode[6]}.${filet}">
 <img id="icon4" style="margin-left: 428px;" src="./images/icons/${icons}/${daypart[0].iconCode[8]}.${filet}">
 <img id="icon5" style="margin-left: 519px;" src="./images/icons/${icons}/${daypart[0].iconCode[10]}.${filet}">
 <img id="icon6" style="margin-left: 614px;" src="./images/icons/${icons}/${daypart[0].iconCode[12]}.${filet}">`
} else if (daypart[0].wxPhraseLong[0] !== null) {
  document.getElementById('icons').innerHTML = `<img id="icon0" src="./images/icons/${icons}/${daypart[0].iconCode[0]}.${filet}">
  <img id="icon1" style="margin-left: 151px" src="./images/icons/${icons}/${daypart[0].iconCode[1]}.${filet}">
  <img id="icon2" style="margin-left: 246px" src="./images/icons/${icons}/${daypart[0].iconCode[2]}.${filet}">
  <img id="icon3" style="margin-left: 336px;" src="./images/icons/${icons}/${daypart[0].iconCode[3]}.${filet}">
  <img id="icon4" style="margin-left: 428px;" src="./images/icons/${icons}/${daypart[0].iconCode[4]}.${filet}">
  <img id="icon5" style="margin-left: 519px;" src="./images/icons/${icons}/${daypart[0].iconCode[5]}.${filet}">
  <img id="icon6" style="margin-left: 614px;" src="./images/icons/${icons}/${daypart[0].iconCode[6]}.${filet}">`
  document.getElementById('conditions').innerHTML = `<div class="condition" id="weather00">${daypart[0].wxPhraseLong[0]}</div>
  <div class="condition" id="weather01" style="margin-left: 103px;">${daypart[0].wxPhraseLong[1]}</div>
  <div class="condition" id="weather02" style="margin-left: 201px;">${daypart[0].wxPhraseLong[2]}</div>
  <div class="condition" id="weather03" style="margin-left: 287px;">${daypart[0].wxPhraseLong[3]}</div>
  <div class="condition" id="weather04" style="margin-left: 386px;">${daypart[0].wxPhraseLong[4]}</div>
  <div class="condition" id="weather05" style="margin-left: 469px;">${daypart[0].wxPhraseLong[5]}</div>
  <div class="condition" id="weather06" style="margin-left: 567px;">${daypart[0].wxPhraseLong[6]}</div>`
}
 document.getElementById('hightemplist').innerHTML = `                    <div class="hightemp" id="hi0">${calendarDayTemperatureMax[0]}</div>
 <div class="hightemp" id="hi1" style="margin-left: 93px;">${calendarDayTemperatureMax[1]}</div>
 <div class="hightemp" id="hi2" style="margin-left: 181px;">${calendarDayTemperatureMax[2]}</div>
 <div class="hightemp" id="hi3" style="margin-left: 275px;">${calendarDayTemperatureMax[3]}</div>
 <div class="hightemp" id="hi4" style="margin-left: 367px;">${calendarDayTemperatureMax[4]}</div>
 <div class="hightemp" id="hi5" style="margin-left: 457px;">${calendarDayTemperatureMax[5]}</div>
 <div class="hightemp" id="hi6" style="margin-left: 546px;">${calendarDayTemperatureMax[6]}</div>`
document.getElementById('lowtemps').innerHTML = `
<div class="lowtemp" id="lo0">${calendarDayTemperatureMin[0]}</div>
<div class="lowtemp" id="lo1" style="margin-left: 93px;">${calendarDayTemperatureMin[1]}</div>
<div class="lowtemp" id="lo2" style="margin-left: 181px;">${calendarDayTemperatureMin[2]}</div>
<div class="lowtemp" id="lo3" style="margin-left: 275px;">${calendarDayTemperatureMin[3]}</div>
<div class="lowtemp" id="lo4" style="margin-left: 367px;">${calendarDayTemperatureMin[4]}</div>
<div class="lowtemp" id="lo5" style="margin-left: 457px;">${calendarDayTemperatureMin[5]}</div>
<div class="lowtemp" id="lo6" style="margin-left: 546px;">${calendarDayTemperatureMin[6]}</div>`
  }
  FetchForecast();
