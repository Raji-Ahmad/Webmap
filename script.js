var map = L.map('map').setView([29.7341051, -95.3819074], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxNativeZoom:22,
    maxZoom:25
}).addTo(map);

// function selectBuilding(bulding){
     
// }

// $.getJSON('houston2.geojson', function (data) {
//     // Define the geojson layer and add it to the map
//     //L.geoJson(data).addTo(map);
// });


var l1 = $.getJSON('jsons/Level_1.json')
var l2 = $.getJSON('jsons/Level_2.json')
var l3 = $.getJSON('jsons/Level_3.json')
var l11 = $.getJSON('jsons/Level_11-14.json')


var l1p = $.getJSON('jsons/Level_1P.json')
var l2p = $.getJSON('jsons/Level_2P.json')
var l3p = $.getJSON('jsons/Level_3P.json')
var l11p = $.getJSON('jsons/Level_11-14P.json')


L.geoJson(l1).addTo(map)
// var plan = L.geoJSON(data, {maxZoom:25}).addTo(map);
L.control.scale().addTo(map);