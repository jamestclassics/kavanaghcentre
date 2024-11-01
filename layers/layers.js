ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-851157.827742, 7112369.808202, -650345.078693, 7237857.995748]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_rossmoreParkattractions_1 = new ol.format.GeoJSON();
var features_rossmoreParkattractions_1 = format_rossmoreParkattractions_1.readFeatures(json_rossmoreParkattractions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rossmoreParkattractions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rossmoreParkattractions_1.addFeatures(features_rossmoreParkattractions_1);
var lyr_rossmoreParkattractions_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rossmoreParkattractions_1, 
                style: style_rossmoreParkattractions_1,
                popuplayertitle: "rossmore Park attractions",
                interactive: true,
                title: '<img src="styles/legend/rossmoreParkattractions_1.png" /> rossmore Park attractions'
            });
var format_amenity_restaurant_monaghan_2 = new ol.format.GeoJSON();
var features_amenity_restaurant_monaghan_2 = format_amenity_restaurant_monaghan_2.readFeatures(json_amenity_restaurant_monaghan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_restaurant_monaghan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_restaurant_monaghan_2.addFeatures(features_amenity_restaurant_monaghan_2);
var lyr_amenity_restaurant_monaghan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenity_restaurant_monaghan_2, 
                style: style_amenity_restaurant_monaghan_2,
                popuplayertitle: "amenity_restaurant_monaghan",
                interactive: true,
                title: '<img src="styles/legend/amenity_restaurant_monaghan_2.png" /> amenity_restaurant_monaghan'
            });
var format_restaurantsindundalk_3 = new ol.format.GeoJSON();
var features_restaurantsindundalk_3 = format_restaurantsindundalk_3.readFeatures(json_restaurantsindundalk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantsindundalk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantsindundalk_3.addFeatures(features_restaurantsindundalk_3);cluster_restaurantsindundalk_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_restaurantsindundalk_3
});
var lyr_restaurantsindundalk_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_restaurantsindundalk_3, 
                style: style_restaurantsindundalk_3,
                popuplayertitle: "restaurants in dundalk",
                interactive: true,
                title: '<img src="styles/legend/restaurantsindundalk_3.png" /> restaurants in dundalk'
            });
var format_RestaurauntsinLouth_4 = new ol.format.GeoJSON();
var features_RestaurauntsinLouth_4 = format_RestaurauntsinLouth_4.readFeatures(json_RestaurauntsinLouth_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestaurauntsinLouth_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestaurauntsinLouth_4.addFeatures(features_RestaurauntsinLouth_4);
var lyr_RestaurauntsinLouth_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RestaurauntsinLouth_4, 
                style: style_RestaurauntsinLouth_4,
                popuplayertitle: "Restauraunts in Louth",
                interactive: true,
                title: '<img src="styles/legend/RestaurauntsinLouth_4.png" /> Restauraunts in Louth'
            });
var format_tourism_attraction_monaghan_5 = new ol.format.GeoJSON();
var features_tourism_attraction_monaghan_5 = format_tourism_attraction_monaghan_5.readFeatures(json_tourism_attraction_monaghan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourism_attraction_monaghan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourism_attraction_monaghan_5.addFeatures(features_tourism_attraction_monaghan_5);
var lyr_tourism_attraction_monaghan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourism_attraction_monaghan_5, 
                style: style_tourism_attraction_monaghan_5,
                popuplayertitle: "tourism_attraction_monaghan",
                interactive: true,
                title: '<img src="styles/legend/tourism_attraction_monaghan_5.png" /> tourism_attraction_monaghan'
            });
var format_attractionsLouth_6 = new ol.format.GeoJSON();
var features_attractionsLouth_6 = format_attractionsLouth_6.readFeatures(json_attractionsLouth_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_attractionsLouth_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_attractionsLouth_6.addFeatures(features_attractionsLouth_6);
var lyr_attractionsLouth_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_attractionsLouth_6, 
                style: style_attractionsLouth_6,
                popuplayertitle: "attractions Louth",
                interactive: true,
                title: '<img src="styles/legend/attractionsLouth_6.png" /> attractions Louth'
            });

lyr_OSMStandard_0.setVisible(true);lyr_rossmoreParkattractions_1.setVisible(true);lyr_amenity_restaurant_monaghan_2.setVisible(true);lyr_restaurantsindundalk_3.setVisible(true);lyr_RestaurauntsinLouth_4.setVisible(true);lyr_tourism_attraction_monaghan_5.setVisible(true);lyr_attractionsLouth_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_rossmoreParkattractions_1,lyr_amenity_restaurant_monaghan_2,lyr_restaurantsindundalk_3,lyr_RestaurauntsinLouth_4,lyr_tourism_attraction_monaghan_5,lyr_attractionsLouth_6];
lyr_rossmoreParkattractions_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'name': 'name', });
lyr_amenity_restaurant_monaghan_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'contact:facebook': 'contact:facebook', 'takeaway': 'takeaway', 'outdoor_seating': 'outdoor_seating', 'level': 'level', 'diet:vegetarian': 'diet:vegetarian', 'diet:vegan': 'diet:vegan', 'wheelchair': 'wheelchair', 'phone': 'phone', 'opening_hours': 'opening_hours', 'email': 'email', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:county': 'addr:county', 'addr:country': 'addr:country', 'website': 'website', 'cuisine': 'cuisine', 'addr:place': 'addr:place', 'addr:housename': 'addr:housename', 'addr:city': 'addr:city', 'name': 'name', });
lyr_restaurantsindundalk_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'wheelchair': 'wheelchair', 'cuisine': 'cuisine', 'name': 'name', });
lyr_RestaurauntsinLouth_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr:city': 'addr:city', 'cuisine': 'cuisine', 'building': 'building', 'name': 'name', });
lyr_tourism_attraction_monaghan_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'related:wikipedia': 'related:wikipedia', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'ref:IE:nm': 'ref:IE:nm', 'name': 'name', 'historic': 'historic', 'heritage': 'heritage', 'building': 'building', });
lyr_attractionsLouth_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'alt_name': 'alt_name', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'website': 'website', 'seasonal': 'seasonal', 'operator': 'operator', 'name': 'name', });
lyr_rossmoreParkattractions_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'name': '', });
lyr_amenity_restaurant_monaghan_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'contact:facebook': '', 'takeaway': '', 'outdoor_seating': '', 'level': '', 'diet:vegetarian': '', 'diet:vegan': '', 'wheelchair': '', 'phone': '', 'opening_hours': '', 'email': '', 'addr:street': '', 'addr:housenumber': '', 'addr:county': '', 'addr:country': '', 'website': '', 'cuisine': '', 'addr:place': '', 'addr:housename': '', 'addr:city': '', 'name': '', });
lyr_restaurantsindundalk_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'addr:postcode': '', 'addr:street': '', 'wheelchair': '', 'cuisine': '', 'name': '', });
lyr_RestaurauntsinLouth_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr:city': 'TextEdit', 'cuisine': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', });
lyr_tourism_attraction_monaghan_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'tourism': 'TextEdit', 'related:wikipedia': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'ref:IE:nm': 'TextEdit', 'name': 'TextEdit', 'historic': 'TextEdit', 'heritage': 'TextEdit', 'building': 'TextEdit', });
lyr_attractionsLouth_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'alt_name': 'TextEdit', 'wikidata': 'TextEdit', 'wheelchair': 'TextEdit', 'website': 'TextEdit', 'seasonal': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', });
lyr_rossmoreParkattractions_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'name': 'no label', });
lyr_amenity_restaurant_monaghan_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'contact:facebook': 'no label', 'takeaway': 'no label', 'outdoor_seating': 'no label', 'level': 'no label', 'diet:vegetarian': 'no label', 'diet:vegan': 'no label', 'wheelchair': 'no label', 'phone': 'no label', 'opening_hours': 'no label', 'email': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:county': 'no label', 'addr:country': 'no label', 'website': 'no label', 'cuisine': 'no label', 'addr:place': 'no label', 'addr:housename': 'no label', 'addr:city': 'no label', 'name': 'no label', });
lyr_restaurantsindundalk_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'wheelchair': 'no label', 'cuisine': 'no label', 'name': 'no label', });
lyr_RestaurauntsinLouth_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'addr:city': 'no label', 'cuisine': 'no label', 'building': 'no label', 'name': 'no label', });
lyr_tourism_attraction_monaghan_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'related:wikipedia': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'ref:IE:nm': 'no label', 'name': 'no label', 'historic': 'no label', 'heritage': 'no label', 'building': 'no label', });
lyr_attractionsLouth_6.set('fieldLabels', {'full_id': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'osm_type': 'inline label - visible with data', 'building': 'inline label - visible with data', 'alt_name': 'inline label - visible with data', 'wikidata': 'inline label - visible with data', 'wheelchair': 'inline label - visible with data', 'website': 'inline label - visible with data', 'seasonal': 'inline label - visible with data', 'operator': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_attractionsLouth_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});