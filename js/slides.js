function myFunction() {
    document.getElementById('nextslide').style.display = "none"
      document.getElementById("radarslide").style.display = "block"
      console.log('next slide.')
  };
  function forecastslide() {
      document.getElementById('radarslide').style.display = "none"
      document.getElementById('almanacslide').style.display = "block"
  }
  function forecastslidee() {
      document.getElementById('almanacslide').style.display = "none"
      document.getElementById('forecastpanel').style.display = "block"
  }
  function forecastslide1() {
      document.getElementById('forecastpanel').style.display = "none"
      document.getElementById('forecastpanel1').style.display = "block"
  }
  function forecastslide2() {
      document.getElementById('forecastpanel1').style.display = "none"
      document.getElementById('forecastpanel2').style.display = "block"
  }
  function forecastslide3() {
      document.getElementById('forecastpanel2').style.display = "none";
      document.getElementById('extendedforecast').style.display = "block"
  }
  function redirect() {
    window.location = `./index.html`
  }
