// Fetch Radar title imagery
  map_img = `https://api.mapbox.com/styles/v1/hastytube/clli6kx8u004m01p28nb47zz2/static/${lon},${lat},8/1280x483?access_token=${map_key}`
  radar_url = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_sFA4Gfz8s8brxUUHoZTQ3iZIRy6YSwLhf1wJQzDi/radar-est:75,admin/1280x483/${lat},${lon},8/latest.jpg`
    document.getElementById("mapboxmap").innerHTML = `<img src="${map_img}"></img>`
 function animate() {
  frame1 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_sFA4Gfz8s8brxUUHoZTQ3iZIRy6YSwLhf1wJQzDi/radar-est:75,admin/1280x483/${lat},${lon},8/-25min.jpg`
  frame2 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_sFA4Gfz8s8brxUUHoZTQ3iZIRy6YSwLhf1wJQzDi/radar-est:75,admin/1280x483/${lat},${lon},8/-20min.jpg`
  frame3 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_sFA4Gfz8s8brxUUHoZTQ3iZIRy6YSwLhf1wJQzDi/radar-est:75,admin/1280x483/${lat},${lon},8/-15min.jpg`
  frame4 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_sFA4Gfz8s8brxUUHoZTQ3iZIRy6YSwLhf1wJQzDi/radar-est:75,admin/1280x483/${lat},${lon},8/-10min.jpg`
  frame5 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_sFA4Gfz8s8brxUUHoZTQ3iZIRy6YSwLhf1wJQzDi/radar-est:75,admin/1280x483/${lat},${lon},8/-5min.jpg`
  frame6 = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_sFA4Gfz8s8brxUUHoZTQ3iZIRy6YSwLhf1wJQzDi/radar-est:75,admin/1280x483/${lat},${lon},8/latest.jpg`

  setTimeout(document.getElementById("mapboxmap").innerHTML = `<img src="${frame1}"></img>`, 500)
  setTimeout(document.getElementById("mapboxmap").innerHTML = `<img src="${frame2}"></img>`, 1000)
  setTimeout(document.getElementById("mapboxmap").innerHTML = `<img src="${frame3}"></img>`, 1500)
  setTimeout(document.getElementById("mapboxmap").innerHTML = `<img src="${frame4}"></img>`, 2000)
  setTimeout(document.getElementById("mapboxmap").innerHTML = `<img src="${frame5}"></img>`, 2500)
  setTimeout(document.getElementById("mapboxmap").innerHTML = `<img src="${frame6}"></img>`, 3000)

 }
 animate()