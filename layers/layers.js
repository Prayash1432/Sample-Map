var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Hostels_1 = new ol.format.GeoJSON();
var features_Hostels_1 = format_Hostels_1.readFeatures(json_Hostels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hostels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hostels_1.addFeatures(features_Hostels_1);
var lyr_Hostels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hostels_1, 
                style: style_Hostels_1,
                popuplayertitle: "Hostels",
                interactive: true,
                title: '<img src="styles/legend/Hostels_1.png" /> Hostels'
            });
var format_Buildings_2 = new ol.format.GeoJSON();
var features_Buildings_2 = format_Buildings_2.readFeatures(json_Buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_2.addFeatures(features_Buildings_2);
var lyr_Buildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_2, 
                style: style_Buildings_2,
                popuplayertitle: "Buildings",
                interactive: true,
                title: '<img src="styles/legend/Buildings_2.png" /> Buildings'
            });
var format_RoadLine_3 = new ol.format.GeoJSON();
var features_RoadLine_3 = format_RoadLine_3.readFeatures(json_RoadLine_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadLine_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadLine_3.addFeatures(features_RoadLine_3);
var lyr_RoadLine_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadLine_3, 
                style: style_RoadLine_3,
                popuplayertitle: "Road Line",
                interactive: true,
                title: '<img src="styles/legend/RoadLine_3.png" /> Road Line'
            });
var format_Ground_4 = new ol.format.GeoJSON();
var features_Ground_4 = format_Ground_4.readFeatures(json_Ground_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ground_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ground_4.addFeatures(features_Ground_4);
var lyr_Ground_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ground_4, 
                style: style_Ground_4,
                popuplayertitle: "Ground",
                interactive: true,
                title: '<img src="styles/legend/Ground_4.png" /> Ground'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Hostels_1.setVisible(true);lyr_Buildings_2.setVisible(true);lyr_RoadLine_3.setVisible(true);lyr_Ground_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Hostels_1,lyr_Buildings_2,lyr_RoadLine_3,lyr_Ground_4];
lyr_Hostels_1.set('fieldAliases', {'Name': 'Name', });
lyr_Buildings_2.set('fieldAliases', {'Name': 'Name', });
lyr_RoadLine_3.set('fieldAliases', {'Name': 'Name', });
lyr_Ground_4.set('fieldAliases', {'Name': 'Name', });
lyr_Hostels_1.set('fieldImages', {'Name': '', });
lyr_Buildings_2.set('fieldImages', {'Name': '', });
lyr_RoadLine_3.set('fieldImages', {'Name': '', });
lyr_Ground_4.set('fieldImages', {'Name': '', });
lyr_Hostels_1.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Buildings_2.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_RoadLine_3.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Ground_4.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Ground_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});