 FetchForecast();
 const forecast_url = `https://api.weather.com/v3/wx/forecast/daily/15day?geocode=${lat},${lon}&format=json&units=${units}&language=${lang}-${country}&apiKey=${api_key}`;
  async function FetchForecast() {
  const response = await fetch(forecast_url);
  const data = await response.json();
  const {calendarDayTemperatureMax, calendarDayTemperatureMin, daypart} = data;
    console.log(data);

  if (daypart[0].narrative[0] !== null) {
    var forecast = `${daypart[0].narrative[0]}`;
    var dayname =  `${daypart[0].daypartName[0]}`;
    var forecast0 = `${daypart[0].narrative[1]}`;
    var dayname0 =  `${daypart[0].daypartName[1]}`;
  } if (daypart[0].narrative[0] == null) {
    var forecast = `${daypart[0].narrative[1]}`;
    var dayname =  `${daypart[0].daypartName[1]}`;
    var forecast0 = `${daypart[0].narrative[2]}`;
    var dayname0 =  `${daypart[0].daypartName[2]}`;
  } 
    // Forecast for Day 1
    document.getElementById('daypartn1').innerHTML  = `${dayname}`
    document.getElementById('forecast1').innerHTML = `${forecast}`
    // Forecast For Day 2
    document.getElementById('daypartn2').innerHTML = `${dayname0}`
    document.getElementById('forecast2').innerHTML = `${forecast0}`
    // City Stuff
    document.getElementById('citynf').textContent = `${locationn}`
    document.getElementById('citynf1').textContent = `${locationn}`;

  }
  FetchForecast();