var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_union_baru_2 = new ol.format.GeoJSON();
var features_union_baru_2 = format_union_baru_2.readFeatures(json_union_baru_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_union_baru_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_union_baru_2.addFeatures(features_union_baru_2);
var lyr_union_baru_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_union_baru_2, 
                style: style_union_baru_2,
                popuplayertitle: 'union_baru',
                interactive: true,
                title: '<img src="styles/legend/union_baru_2.png" /> union_baru'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_union_baru_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_union_baru_2];
lyr_union_baru_2.set('fieldAliases', {'Status_Tan': 'Status_Tan', 'Penguasaan': 'Penguasaan', 'Penggunaan': 'Penggunaan', 'Lokasi': 'Lokasi', 'Luas': 'Luas', 'Pemanfaata': 'Pemanfaata', 'peng1': 'peng1', 'Milik': 'Milik', 'Luas_1': 'Luas_1', });
lyr_union_baru_2.set('fieldImages', {'Status_Tan': 'TextEdit', 'Penguasaan': 'TextEdit', 'Penggunaan': 'TextEdit', 'Lokasi': 'TextEdit', 'Luas': 'TextEdit', 'Pemanfaata': 'TextEdit', 'peng1': 'TextEdit', 'Milik': 'TextEdit', 'Luas_1': 'TextEdit', });
lyr_union_baru_2.set('fieldLabels', {'Status_Tan': 'inline label - visible with data', 'Penguasaan': 'inline label - visible with data', 'Penggunaan': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Pemanfaata': 'inline label - visible with data', 'peng1': 'inline label - visible with data', 'Milik': 'inline label - visible with data', 'Luas_1': 'inline label - visible with data', });
lyr_union_baru_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});