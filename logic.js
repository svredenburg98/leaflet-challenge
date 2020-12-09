// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 3
});

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  maxZoom: 18,
  id: "streets-v11",
  accessToken: API_KEY
}).addTo(myMap);


//read data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", function(data){
//define part of data
  earthquake = data.features;
  
 //loop through data and create circles based on coordinates
  earthquake.forEach(function(quake){
    console.log(quake.geometry.coordinates[0]);
    console.log(quake.geometry.coordinates[1]);
  //create color gradient based on depth
    if (quake.geometry.coordinates[2] <= 2) {
      color1 =  "#E1D51A"
    }
      else if (quake.geometry.coordinates[2] <= 10) {
        color1 =  "#E1B11A"
    }
      else if (quake.geometry.coordinates[2] <= 30) {
        color1 =  "#E18A1A"
    }
    else if (quake.geometry.coordinates[2]  <= 50) {
      color1 =  "#E16B1A"
    }
    else if (quake.geometry.coordinates[2] <= 80) {
      color1 =  "#E1531A"
    }
    else if (quake.geometry.coordinates[2]  <= 110) {
      color1 =  "#E12F1A"
    }
    else {
      color1 =  "#9D1212"
    }
    //circle layer
    L.circle([quake.geometry.coordinates[1], quake.geometry.coordinates[0]], {
      fillOpacity: 0.75,
      color: "black",
      fillColor: color1,
      
      radius: quake.properties.mag * 40000
    }).bindPopup(`<h1>${quake.properties.place}</h1> <hr> <h3>Magnitude: ${quake.properties.mag}</h3><hr> <h3>Depth: ${quake.geometry.coordinates[2]}</h3>`)
    .addTo(myMap);
  })

});



