var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_estadosvenezuela_1 = new ol.format.GeoJSON();
var features_estadosvenezuela_1 = format_estadosvenezuela_1.readFeatures(json_estadosvenezuela_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estadosvenezuela_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estadosvenezuela_1.addFeatures(features_estadosvenezuela_1);
var lyr_estadosvenezuela_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estadosvenezuela_1, 
                style: style_estadosvenezuela_1,
                popuplayertitle: "estados-venezuela",
                interactive: true,
                title: '<img src="styles/legend/estadosvenezuela_1.png" /> estados-venezuela'
            });
var format_estadoguyanaesequiba_2 = new ol.format.GeoJSON();
var features_estadoguyanaesequiba_2 = format_estadoguyanaesequiba_2.readFeatures(json_estadoguyanaesequiba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estadoguyanaesequiba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estadoguyanaesequiba_2.addFeatures(features_estadoguyanaesequiba_2);
var lyr_estadoguyanaesequiba_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estadoguyanaesequiba_2, 
                style: style_estadoguyanaesequiba_2,
                popuplayertitle: "estado-guyana-esequiba",
                interactive: true,
                title: '<img src="styles/legend/estadoguyanaesequiba_2.png" /> estado-guyana-esequiba'
            });

lyr_OSMStandard_0.setVisible(true);lyr_estadosvenezuela_1.setVisible(true);lyr_estadoguyanaesequiba_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_estadosvenezuela_1,lyr_estadoguyanaesequiba_2];
lyr_estadosvenezuela_1.set('fieldAliases', {'osm_id': 'osm_id', 'boundary': 'boundary', 'admin_level': 'admin_level', 'parents': 'parents', 'name': 'name', 'local_name': 'local_name', 'name_en': 'name_en', });
lyr_estadoguyanaesequiba_2.set('fieldAliases', {'osm_id': 'osm_id', 'boundary': 'boundary', 'admin_level': 'admin_level', 'parents': 'parents', 'name': 'name', 'local_name': 'local_name', 'name_en': 'name_en', });
lyr_estadosvenezuela_1.set('fieldImages', {'osm_id': '', 'boundary': '', 'admin_level': '', 'parents': '', 'name': '', 'local_name': '', 'name_en': '', });
lyr_estadoguyanaesequiba_2.set('fieldImages', {'osm_id': '', 'boundary': '', 'admin_level': '', 'parents': '', 'name': '', 'local_name': '', 'name_en': '', });
lyr_estadosvenezuela_1.set('fieldLabels', {'osm_id': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'parents': 'no label', 'name': 'no label', 'local_name': 'no label', 'name_en': 'no label', });
lyr_estadoguyanaesequiba_2.set('fieldLabels', {'osm_id': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'parents': 'no label', 'name': 'no label', 'local_name': 'no label', 'name_en': 'no label', });
lyr_estadoguyanaesequiba_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});