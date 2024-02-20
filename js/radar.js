// Fetch Radar title imagery
  map_img = `https://api.mapbox.com/styles/v1/hastytube/clli6kx8u004m01p28nb47zz2/static/${lon},${lat},8/1280x483?access_token=${map_key}`
  radar_url = `https://maps.aerisapi.com/wgE96YE3scTQLKjnqiMsv_sFA4Gfz8s8brxUUHoZTQ3iZIRy6YSwLhf1wJQzDi/radar:75,admin/1280x483/${lat},${lon},8/latest.jpg`
    document.getElementById("mapboxmap").innerHTML = `<img src="${map_img}"></img>`
 
