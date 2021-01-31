var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_VirtualBandSet2020_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Virtual Band Set 2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VirtualBandSet2020_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [880711.876240, 6608156.785677, 958480.215438, 6672635.606882]
                            })
                        });
var format_forestwaldundholz_2 = new ol.format.GeoJSON();
var features_forestwaldundholz_2 = format_forestwaldundholz_2.readFeatures(json_forestwaldundholz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_forestwaldundholz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_forestwaldundholz_2.addFeatures(features_forestwaldundholz_2);
var lyr_forestwaldundholz_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_forestwaldundholz_2, 
                style: style_forestwaldundholz_2,
                interactive: true,
                title: '<img src="styles/legend/forestwaldundholz_2.png" /> forest wald und holz'
            });
var lyr_vbs2016_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "vbs2016",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/vbs2016_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [880711.876240, 6608156.785677, 958480.215438, 6672635.606882]
                            })
                        });
var lyr_vbs2018_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "vbs2018",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/vbs2018_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [880711.876240, 6608156.785677, 958480.215438, 6672635.606882]
                            })
                        });
var lyr_vbs2020_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "vbs2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/vbs2020_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [880711.876240, 6608156.785677, 958480.215438, 6672635.606882]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_VirtualBandSet2020_1.setVisible(false);lyr_forestwaldundholz_2.setVisible(true);lyr_vbs2016_3.setVisible(false);lyr_vbs2018_4.setVisible(false);lyr_vbs2020_5.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_VirtualBandSet2020_1,lyr_forestwaldundholz_2,lyr_vbs2016_3,lyr_vbs2018_4,lyr_vbs2020_5];
lyr_forestwaldundholz_2.set('fieldAliases', {'landuse': 'landuse', 'objectid': 'objectid', 'abies_id': 'abies_id', 'rfa_nr': 'rfa_nr', 'fbb_nr': 'fbb_nr', 'legende_fb': 'legende_fb', 'rfa': 'rfa', 'fbb': 'fbb', 'typ': 'typ', 'vorname': 'vorname', 'name': 'name', 'strasse': 'strasse', 'nummer': 'nummer', 'ort': 'ort', 'mobil': 'mobil', 'email': 'email', 'plz': 'plz', 'telefon': 'telefon', 'fax': 'fax', 'rfa_hoheit': 'rfa_hoheit', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_forestwaldundholz_2.set('fieldImages', {'landuse': 'TextEdit', 'objectid': 'TextEdit', 'abies_id': 'TextEdit', 'rfa_nr': 'TextEdit', 'fbb_nr': 'TextEdit', 'legende_fb': 'TextEdit', 'rfa': 'TextEdit', 'fbb': 'TextEdit', 'typ': 'TextEdit', 'vorname': 'TextEdit', 'name': 'TextEdit', 'strasse': 'TextEdit', 'nummer': 'TextEdit', 'ort': 'TextEdit', 'mobil': 'TextEdit', 'email': 'TextEdit', 'plz': 'TextEdit', 'telefon': 'TextEdit', 'fax': 'TextEdit', 'rfa_hoheit': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_forestwaldundholz_2.set('fieldLabels', {'landuse': 'no label', 'objectid': 'no label', 'abies_id': 'no label', 'rfa_nr': 'no label', 'fbb_nr': 'no label', 'legende_fb': 'no label', 'rfa': 'no label', 'fbb': 'no label', 'typ': 'no label', 'vorname': 'no label', 'name': 'no label', 'strasse': 'no label', 'nummer': 'no label', 'ort': 'no label', 'mobil': 'no label', 'email': 'no label', 'plz': 'no label', 'telefon': 'no label', 'fax': 'no label', 'rfa_hoheit': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_forestwaldundholz_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});