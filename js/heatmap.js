var heatmapLayer=new ol.layer.Heatmap({
	source: new ol.source.Vector({
		url:'./data/world_cities.json',
		format: new ol.format.GeoJSON()
	}),
	opacity:0.9
});

//Create a tile layer from OSM
var osmLayer = new ol.layer.Tile({
	source:new ol.source.OSM()
});

var map = new ol.Map({
	target: 'map',
	renderer: 'canvas',
	layers: [osmLayer, heatmapLayer],
	view: new ol.View({
		center: ol.proj.transform([2.18,41.38],'EPSG:4326','EPSG:3857'),
		zoom:4
	})
});
