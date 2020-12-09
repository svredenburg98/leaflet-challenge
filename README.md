# leaflet-challenge

Using leaflet.js and D3, I created a map to visualize the magnitude and depth of recent earthquakes around the world. I first established a connection to mapbox.com for its tile layer, and ensured that my index.html was organized correctly to match my logic.js application file. I then created the map layer, and created a connection to the usgs earthquake data (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson) which contains data for earthquakes from the past day. I then created a layer of circles to overlay on the map based on the coordinated provided in the usgs GeoJSON. After some confusion, I realized the coordinates not only listed three variables (one for depth) but the first two were also in the incorrect order, causing the circle to show up in the incorrect places on the map. I fixed this problem and then proceeded to color code the circle markers based on the earthquake's depth. In order to do this, I created a cascading if statement to create a color gradient from light yellow to dark red, depending on the depth of the earthquake.
