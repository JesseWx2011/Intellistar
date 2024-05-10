function frame0() {
  frame0 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_SVG2gQFV8y9DjKR0BRY9wPoSLvrMrIqF9Lq2IYaY/radar/729x546/${lat},${lon},8/-40min.png`
  document.getElementById('radarimagery').innerHTML = `<img style="position: absolute; background-color: transparent;" src="${frame0}"></img>`
}
frame0()
function frame1() {
  frame1 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_SVG2gQFV8y9DjKR0BRY9wPoSLvrMrIqF9Lq2IYaY/radar/729x546/${lat},${lon},8/-30min.png`
  document.getElementById('radarimagery').innerHTML = `<img style="position: absolute; background-color: transparent;" src="${frame1}"></img>`
}
frame1()
function frame2() {
  frame2 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_SVG2gQFV8y9DjKR0BRY9wPoSLvrMrIqF9Lq2IYaY/radar/729x546/${lat},${lon},8/-25min.png`
  document.getElementById('radarimagery').innerHTML = `<img style="position: absolute; background-color: transparent;" src="${frame2}"></img>`

}
frame2()
function frame3() {
  frame3 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_SVG2gQFV8y9DjKR0BRY9wPoSLvrMrIqF9Lq2IYaY/radar/729x546/${lat},${lon},8/-20min.png`
  document.getElementById('radarimagery').innerHTML = `<img style="position: absolute; background-color: transparent;" src="${frame3}"></img>`

}
frame3()
function frame4() {
  frame4 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_SVG2gQFV8y9DjKR0BRY9wPoSLvrMrIqF9Lq2IYaY/radar/729x546/${lat},${lon},8/-15min.png`
  document.getElementById('radarimagery').innerHTML = `<img style="position: absolute; background-color: transparent;" src="${frame4}"></img>`

}
frame4()
function frame5() {
  frame5 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_SVG2gQFV8y9DjKR0BRY9wPoSLvrMrIqF9Lq2IYaY/radar/729x546/${lat},${lon},8/-10min.png`
  document.getElementById('radarimagery').innerHTML = `<img style="position: absolute; background-color: transparent;" src="${frame5}"></img>`

}
frame5()
function frame6() {
  frame6 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_SVG2gQFV8y9DjKR0BRY9wPoSLvrMrIqF9Lq2IYaY/radar/729x546/${lat},${lon},8/current.png`
  document.getElementById('radarimagery').innerHTML = `<img style="position: absolute; background-color: transparent;" src="${frame6}"></img>`

}
frame6()
function myFunction() {
    document.getElementById('nextslide').style.display = "none"
      document.getElementById("alertslide").style.display = "block"
      console.log('next slide.')
  };
  function radar() {
    document.getElementById("radarslide").style.display = "block"
    document.getElementById("alertslide").style.display = "none"
  setTimeout(frame0, 100)
  setTimeout(frame1, 200)
  setTimeout(frame2, 400)
  setTimeout(frame3, 600)
  setTimeout(frame4, 900)
  setTimeout(frame5, 1200)
  setTimeout(frame6, 1500)
  setTimeout(frame0, 2000)
  setTimeout(frame1, 2100)
  setTimeout(frame2, 2300)
  setTimeout(frame3, 2500)
  setTimeout(frame4, 2800)
  setTimeout(frame5, 3100)
  setTimeout(frame6, 3400)
  }
  radar()
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
