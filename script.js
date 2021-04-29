mapboxgl.accessToken =
  "pk.eyJ1IjoidmlkaHV1IiwiYSI6ImNrbzJ6a2cyYjA2MjIydm9ubTNuZWVqNDMifQ.SFED_ThWWcGwwE9Ga9ktFA";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  // incase of any error we can show any random place and should set up the map
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  map.addControl(new mapboxgl.NavigationControl());

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, "top-left");
}
