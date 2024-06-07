var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_TipodeseccinoposicinPresidencia_1 = new ol.format.GeoJSON();
var features_TipodeseccinoposicinPresidencia_1 = format_TipodeseccinoposicinPresidencia_1.readFeatures(json_TipodeseccinoposicinPresidencia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipodeseccinoposicinPresidencia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipodeseccinoposicinPresidencia_1.addFeatures(features_TipodeseccinoposicinPresidencia_1);
var lyr_TipodeseccinoposicinPresidencia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipodeseccinoposicinPresidencia_1, 
                style: style_TipodeseccinoposicinPresidencia_1,
                popuplayertitle: "Tipo de sección oposición - Presidencia",
                interactive: true,
    title: 'Tipo de sección oposición - Presidencia<br />\
    <img src="styles/legend/TipodeseccinoposicinPresidencia_1_0.png" /> 43.8 al 53%<br />\
    <img src="styles/legend/TipodeseccinoposicinPresidencia_1_1.png" /> 53 al 59.7%<br />\
    <img src="styles/legend/TipodeseccinoposicinPresidencia_1_2.png" /> 59.7 al 77.6%<br />\
    <img src="styles/legend/TipodeseccinoposicinPresidencia_1_3.png" /> 77.6 al 86.7%<br />\
    <img src="styles/legend/TipodeseccinoposicinPresidencia_1_4.png" /> 86.7 al 95.1%<br />'
        });
var format_TipodeseccinmorenistaPresidencia_2 = new ol.format.GeoJSON();
var features_TipodeseccinmorenistaPresidencia_2 = format_TipodeseccinmorenistaPresidencia_2.readFeatures(json_TipodeseccinmorenistaPresidencia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipodeseccinmorenistaPresidencia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipodeseccinmorenistaPresidencia_2.addFeatures(features_TipodeseccinmorenistaPresidencia_2);
var lyr_TipodeseccinmorenistaPresidencia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipodeseccinmorenistaPresidencia_2, 
                style: style_TipodeseccinmorenistaPresidencia_2,
                popuplayertitle: "Tipo de sección morenista - Presidencia",
                interactive: true,
    title: 'Tipo de sección morenista - Presidencia<br />\
    <img src="styles/legend/TipodeseccinmorenistaPresidencia_2_0.png" /> 9.2 al 49.9%<br />\
    <img src="styles/legend/TipodeseccinmorenistaPresidencia_2_1.png" /> 49.9 al 53.5%<br />\
    <img src="styles/legend/TipodeseccinmorenistaPresidencia_2_2.png" /> 53.5 al 56.3%<br />\
    <img src="styles/legend/TipodeseccinmorenistaPresidencia_2_3.png" /> 56.3 al 59.5%<br />\
    <img src="styles/legend/TipodeseccinmorenistaPresidencia_2_4.png" /> 59.5 al 70.5%<br />'
        });
var format_TipodeseccinmorenistasJDG_3 = new ol.format.GeoJSON();
var features_TipodeseccinmorenistasJDG_3 = format_TipodeseccinmorenistasJDG_3.readFeatures(json_TipodeseccinmorenistasJDG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipodeseccinmorenistasJDG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipodeseccinmorenistasJDG_3.addFeatures(features_TipodeseccinmorenistasJDG_3);
var lyr_TipodeseccinmorenistasJDG_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipodeseccinmorenistasJDG_3, 
                style: style_TipodeseccinmorenistasJDG_3,
                popuplayertitle: "Tipo de sección morenistas - JDG",
                interactive: true,
    title: 'Tipo de sección morenistas - JDG<br />\
    <img src="styles/legend/TipodeseccinmorenistasJDG_3_0.png" /> 0 al 47.4%<br />\
    <img src="styles/legend/TipodeseccinmorenistasJDG_3_1.png" /> 47.4 al 50.5%<br />\
    <img src="styles/legend/TipodeseccinmorenistasJDG_3_2.png" /> 50.5 al 52.3%<br />\
    <img src="styles/legend/TipodeseccinmorenistasJDG_3_3.png" /> 52.3 al 55.4%<br />\
    <img src="styles/legend/TipodeseccinmorenistasJDG_3_4.png" /> 55.4 al 65.9%<br />'
        });
var format_TipodeseccinoposicinJDG_4 = new ol.format.GeoJSON();
var features_TipodeseccinoposicinJDG_4 = format_TipodeseccinoposicinJDG_4.readFeatures(json_TipodeseccinoposicinJDG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipodeseccinoposicinJDG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipodeseccinoposicinJDG_4.addFeatures(features_TipodeseccinoposicinJDG_4);
var lyr_TipodeseccinoposicinJDG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipodeseccinoposicinJDG_4, 
                style: style_TipodeseccinoposicinJDG_4,
                popuplayertitle: "Tipo de sección oposición - JDG",
                interactive: true,
    title: 'Tipo de sección oposición - JDG<br />\
    <img src="styles/legend/TipodeseccinoposicinJDG_4_0.png" /> 44.7 al 51.5%<br />\
    <img src="styles/legend/TipodeseccinoposicinJDG_4_1.png" /> 51.5 al 59.1%<br />\
    <img src="styles/legend/TipodeseccinoposicinJDG_4_2.png" /> 59.1 al 74.4%<br />\
    <img src="styles/legend/TipodeseccinoposicinJDG_4_3.png" /> 74.4 al 86.3%<br />\
    <img src="styles/legend/TipodeseccinoposicinJDG_4_4.png" /> 86.3 al 94.5%<br />'
        });
var format_TipodeseccinoposicinAlcalda_5 = new ol.format.GeoJSON();
var features_TipodeseccinoposicinAlcalda_5 = format_TipodeseccinoposicinAlcalda_5.readFeatures(json_TipodeseccinoposicinAlcalda_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipodeseccinoposicinAlcalda_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipodeseccinoposicinAlcalda_5.addFeatures(features_TipodeseccinoposicinAlcalda_5);
var lyr_TipodeseccinoposicinAlcalda_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipodeseccinoposicinAlcalda_5, 
                style: style_TipodeseccinoposicinAlcalda_5,
                popuplayertitle: "Tipo de sección oposición - Alcaldía",
                interactive: true,
    title: 'Tipo de sección oposición - Alcaldía<br />\
    <img src="styles/legend/TipodeseccinoposicinAlcalda_5_0.png" /> 0 al 50.9%<br />\
    <img src="styles/legend/TipodeseccinoposicinAlcalda_5_1.png" /> 50.9 al 59.2%<br />\
    <img src="styles/legend/TipodeseccinoposicinAlcalda_5_2.png" /> 59.2 al 74.5%<br />\
    <img src="styles/legend/TipodeseccinoposicinAlcalda_5_3.png" /> 74.5 al 87.9%<br />\
    <img src="styles/legend/TipodeseccinoposicinAlcalda_5_4.png" /> 87.9 al 94.3%<br />'
        });
var format_TipodeseccinmorenistaAlcalda_6 = new ol.format.GeoJSON();
var features_TipodeseccinmorenistaAlcalda_6 = format_TipodeseccinmorenistaAlcalda_6.readFeatures(json_TipodeseccinmorenistaAlcalda_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipodeseccinmorenistaAlcalda_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipodeseccinmorenistaAlcalda_6.addFeatures(features_TipodeseccinmorenistaAlcalda_6);
var lyr_TipodeseccinmorenistaAlcalda_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipodeseccinmorenistaAlcalda_6, 
                style: style_TipodeseccinmorenistaAlcalda_6,
                popuplayertitle: "Tipo de sección morenista - Alcaldía",
                interactive: true,
    title: 'Tipo de sección morenista - Alcaldía<br />\
    <img src="styles/legend/TipodeseccinmorenistaAlcalda_6_0.png" /> 46.3 al 49%<br />\
    <img src="styles/legend/TipodeseccinmorenistaAlcalda_6_1.png" /> 49 al 50.7%<br />\
    <img src="styles/legend/TipodeseccinmorenistaAlcalda_6_2.png" /> 50.7 al 53.4%<br />\
    <img src="styles/legend/TipodeseccinmorenistaAlcalda_6_3.png" /> 53.4 al 56.6%<br />\
    <img src="styles/legend/TipodeseccinmorenistaAlcalda_6_4.png" /> 56.6 al 66.5%<br />'
        });

lyr_Positron_0.setVisible(true);lyr_TipodeseccinoposicinPresidencia_1.setVisible(true);lyr_TipodeseccinmorenistaPresidencia_2.setVisible(true);lyr_TipodeseccinmorenistasJDG_3.setVisible(true);lyr_TipodeseccinoposicinJDG_4.setVisible(true);lyr_TipodeseccinoposicinAlcalda_5.setVisible(true);lyr_TipodeseccinmorenistaAlcalda_6.setVisible(true);
var layersList = [lyr_Positron_0,lyr_TipodeseccinoposicinPresidencia_1,lyr_TipodeseccinmorenistaPresidencia_2,lyr_TipodeseccinmorenistasJDG_3,lyr_TipodeseccinoposicinJDG_4,lyr_TipodeseccinoposicinAlcalda_5,lyr_TipodeseccinmorenistaAlcalda_6];
lyr_TipodeseccinoposicinPresidencia_1.set('fieldAliases', {'ENTIDAD': 'Entidad', 'DISTRITO': 'Distrito', 'DISTRITO_L': 'DISTRITO_L', 'MUNICIPIO': 'Municipio', 'SECCION': 'SECCION', 'TIPO': 'TIPO', 'CVESEC24': 'Clave Sección', 'morena_int': 'Tipo de Sección Morenista', 'opos_inten': 'Tipo de Sección Opositor', 'ganador': 'Ganador', 'oposici_in': '% tipo de Sección opositor', });
lyr_TipodeseccinmorenistaPresidencia_2.set('fieldAliases', {'ENTIDAD': 'Entidad', 'DISTRITO': 'Distrito', 'DISTRITO_L': 'DISTRITO_L', 'MUNICIPIO': 'Municipio', 'SECCION': 'Sección', 'TIPO': 'TIPO', 'CVESEC24': 'Clave Sección', 'morena_int': 'Tipo de Sección Morenista', 'opos_inten': 'Tipo de Sección Opositor', 'ganador': 'Ganador', 'moren_inte': '% Tipo de Sección Morenista', 'oposi_inte': '% Tipo de Sección Opositor', });
lyr_TipodeseccinmorenistasJDG_3.set('fieldAliases', {'ENTIDAD': 'Entidad', 'DISTRITO': 'Distrito', 'DISTRITO_L': 'DISTRITO_L', 'MUNICIPIO': 'Municipio', 'SECCION': 'Sección', 'TIPO': 'TIPO', 'CVESEC24': 'Clave Sección', 'morena_int': 'Tipo de Sección Morenista', 'opos_inten': 'Tipo de Sección Opositor', 'mor_inten': '% Tipo de Sección Morenista', 'oposi_int': '% Tipo de Sección Opositor', 'ganador': 'Ganador', });
lyr_TipodeseccinoposicinJDG_4.set('fieldAliases', {'ENTIDAD': 'Entidad', 'DISTRITO': 'Distrito', 'DISTRITO_L': 'DISTRITO_L', 'MUNICIPIO': 'Municipio', 'SECCION': 'Sección', 'TIPO': 'TIPO', 'CVESEC24': 'Clave Sección', 'morena_int': 'Tipo de Sección Morenista', 'opos_inten': 'Tipo de Sección Opositor', 'mor_inten': '% Tipo de Sección Morenista', 'oposi_int': '% Tipo de Sección Opositor', 'ganador': 'Ganaor', });
lyr_TipodeseccinoposicinAlcalda_5.set('fieldAliases', {'ENTIDAD': 'Entidad', 'DISTRITO': 'Distrito', 'DISTRITO_L': 'DISTRITO_L', 'MUNICIPIO': 'Municipio', 'SECCION': 'Sección', 'TIPO': 'TIPO', 'CVESEC24': 'Clave Sección', 'intensidad': 'Tipo de Sección morenista', 'intensid_1': 'Tipo de Sección Opositora', 'ganador': 'Ganador', });
lyr_TipodeseccinmorenistaAlcalda_6.set('fieldAliases', {'ENTIDAD': 'Entidad', 'DISTRITO': 'Distrito', 'DISTRITO_L': 'DISTRITO_L', 'MUNICIPIO': 'Municipio', 'SECCION': 'Sección', 'TIPO': 'Tipo', 'CVESEC24': 'Clave Sección', 'intensidad': 'Tipo de Sección Morenista', 'intensid_1': 'Tipo de Sección Opositora', 'ganador': 'Ganador', });
lyr_TipodeseccinoposicinPresidencia_1.set('fieldImages', {'ENTIDAD': 'TextEdit', 'DISTRITO': 'TextEdit', 'DISTRITO_L': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'SECCION': 'TextEdit', 'TIPO': 'TextEdit', 'CVESEC24': 'TextEdit', 'morena_int': 'TextEdit', 'opos_inten': 'TextEdit', 'ganador': 'TextEdit', 'oposici_in': 'TextEdit', });
lyr_TipodeseccinmorenistaPresidencia_2.set('fieldImages', {'ENTIDAD': 'TextEdit', 'DISTRITO': 'TextEdit', 'DISTRITO_L': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'SECCION': 'TextEdit', 'TIPO': 'TextEdit', 'CVESEC24': 'TextEdit', 'morena_int': 'TextEdit', 'opos_inten': 'TextEdit', 'ganador': 'TextEdit', 'moren_inte': 'TextEdit', 'oposi_inte': 'TextEdit', });
lyr_TipodeseccinmorenistasJDG_3.set('fieldImages', {'ENTIDAD': 'TextEdit', 'DISTRITO': 'TextEdit', 'DISTRITO_L': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'SECCION': 'TextEdit', 'TIPO': 'TextEdit', 'CVESEC24': 'TextEdit', 'morena_int': 'TextEdit', 'opos_inten': 'TextEdit', 'mor_inten': 'TextEdit', 'oposi_int': 'TextEdit', 'ganador': 'TextEdit', });
lyr_TipodeseccinoposicinJDG_4.set('fieldImages', {'ENTIDAD': 'TextEdit', 'DISTRITO': 'TextEdit', 'DISTRITO_L': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'SECCION': 'TextEdit', 'TIPO': 'TextEdit', 'CVESEC24': 'TextEdit', 'morena_int': 'TextEdit', 'opos_inten': 'TextEdit', 'mor_inten': 'TextEdit', 'oposi_int': 'TextEdit', 'ganador': 'TextEdit', });
lyr_TipodeseccinoposicinAlcalda_5.set('fieldImages', {'ENTIDAD': 'TextEdit', 'DISTRITO': 'TextEdit', 'DISTRITO_L': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'SECCION': 'TextEdit', 'TIPO': 'TextEdit', 'CVESEC24': 'TextEdit', 'intensidad': 'TextEdit', 'intensid_1': 'TextEdit', 'ganador': 'TextEdit', });
lyr_TipodeseccinmorenistaAlcalda_6.set('fieldImages', {'ENTIDAD': 'TextEdit', 'DISTRITO': 'TextEdit', 'DISTRITO_L': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'SECCION': 'TextEdit', 'TIPO': 'TextEdit', 'CVESEC24': 'TextEdit', 'intensidad': 'TextEdit', 'intensid_1': 'TextEdit', 'ganador': 'TextEdit', });
lyr_TipodeseccinoposicinPresidencia_1.set('fieldLabels', {'ENTIDAD': 'no label', 'DISTRITO': 'no label', 'DISTRITO_L': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CVESEC24': 'no label', 'morena_int': 'no label', 'opos_inten': 'no label', 'ganador': 'no label', 'oposici_in': 'no label', });
lyr_TipodeseccinmorenistaPresidencia_2.set('fieldLabels', {'ENTIDAD': 'no label', 'DISTRITO': 'no label', 'DISTRITO_L': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CVESEC24': 'no label', 'morena_int': 'no label', 'opos_inten': 'no label', 'ganador': 'no label', 'moren_inte': 'no label', 'oposi_inte': 'no label', });
lyr_TipodeseccinmorenistasJDG_3.set('fieldLabels', {'ENTIDAD': 'no label', 'DISTRITO': 'no label', 'DISTRITO_L': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CVESEC24': 'no label', 'morena_int': 'no label', 'opos_inten': 'no label', 'mor_inten': 'no label', 'oposi_int': 'no label', 'ganador': 'no label', });
lyr_TipodeseccinoposicinJDG_4.set('fieldLabels', {'ENTIDAD': 'no label', 'DISTRITO': 'no label', 'DISTRITO_L': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CVESEC24': 'no label', 'morena_int': 'no label', 'opos_inten': 'no label', 'mor_inten': 'no label', 'oposi_int': 'no label', 'ganador': 'no label', });
lyr_TipodeseccinoposicinAlcalda_5.set('fieldLabels', {'ENTIDAD': 'no label', 'DISTRITO': 'no label', 'DISTRITO_L': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CVESEC24': 'no label', 'intensidad': 'no label', 'intensid_1': 'no label', 'ganador': 'no label', });
lyr_TipodeseccinmorenistaAlcalda_6.set('fieldLabels', {'ENTIDAD': 'no label', 'DISTRITO': 'no label', 'DISTRITO_L': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CVESEC24': 'no label', 'intensidad': 'no label', 'intensid_1': 'no label', 'ganador': 'no label', });
lyr_TipodeseccinmorenistaAlcalda_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});