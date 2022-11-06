var map = L.map('map').setView([29.7341051, -95.3819074], 19);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxNativeZoom:22,
    maxZoom:25
})

var google =   L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 22,
    subdomains:['mt0']
});

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 22,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

var baseLayers = {
    "OpenStreetMap": osm,
    "Google": google,
    "Satellite": googleSat
};

var currtnt;



// function selectBuilding(bulding){
     
// }

// $.getJSON('houston2.geojson', function (data) {
//     // Define the geojson layer and add it to the map
//     //L.Proj.geoJson(data).addTo(map);
// });

function loadGreenwood(){
    if (currtnt){
        currtnt.remove()
    }


var floor1 = L.Proj.geoJson(l1).addTo(map);
var floor2 = L.Proj.geoJson(l2)
var floor3 = L.Proj.geoJson(l3)
var floor11 = L.Proj.geoJson(l11)

var floor1p = L.Proj.geoJson(l1p)
var floor2p = L.Proj.geoJson(l2p)
var floor3p = L.Proj.geoJson(l3p)
var floor11p = L.Proj.geoJson(l11p)

var lineGroup = L.featureGroup([floor1, floor2, floor3, floor11]);
var polygonGroup = L.featureGroup([floor1p, floor2p, floor3p, floor11p]);

var greenwood = L.featureGroup([lineGroup, polygonGroup])
//map.fitBounds(greenwood.getBounds());
var center = greenwood.getBounds().getCenter();
map.setView(center, 19)


var overlays = {
    "Greenwood": greenwood,

    "Building Lines": polygonGroup,
    "Plan": lineGroup,

    "floor 1": floor1,
    "floor 2": floor2, 
    "floor 3 - 10": floor3, 
    "floor 11 - 14": floor11,

    "floor 1p": floor1p,
    "floor 2p": floor2p, 
    "floor 3 - 10p": floor3p, 
    "floor 11 - 14p": floor11p
    
};

currtnt = L.control.layers(baseLayers, overlays).addTo(map);


}

function loadHouston(){
    console.log('load Houston')

    if (currtnt){
        
        currtnt.remove()
    }
    
    var plan = L.Proj.geoJson(data, {maxZoom:25}).addTo(map);

    var center = plan.getBounds().getCenter();
    map.setView(center, 19)

    var overlays = {
        "Houston": plan}

    currtnt = L.control.layers(baseLayers, overlays).addTo(map);
    
}


var buildings = {
    'Greenwood': loadGreenwood,
    "Houston": loadHouston
}

 loadGreenwood();

 function changeBuilding(ind){
    if (ind=='0'){
        loadGreenwood();
        return
    }
    if(ind=='1'){
        loadHouston();
        return
    }
 }
// plan.addTo(map);
// // var legend = L.control({position: 'bottomright'});
// // legend.addTo(map);




L.control.scale().addTo(map);