// traffic info

// get lon and lat via flight info
// variables from AirLabs data

var lati = data["lat"]
var longi = data["long"]

function trafficClick() {
  var viewTraffic = document.querySelector('#check3')

  if (viewTraffic.checked == true) {
    map.style.display = "block"
  } else {
    map.style.display = "none"
  }
}

// api fetch

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: lati, lng: longi },
  });
  const trafficLayer = new google.maps.TrafficLayer();

  trafficLayer.setMap(map);
}

window.initMap = initMap;