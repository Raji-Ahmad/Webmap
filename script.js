var map = L.map('map').setView([29.7341051, -95.3819074], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxNativeZoom:22,
    maxZoom:25
}).addTo(map);

var plan = L.geoJSON(data, {maxZoom:25}).addTo(map);
L.control.scale().addTo(map);