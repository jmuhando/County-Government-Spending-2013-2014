//var map = L.map('map' ,{center :[-0.085091, 37.497650] , zoom : 6 });
var map = L.map('map',{maxZoom:9,minZoom:6}).setView([-0.085091, 37.497650], 6);
// var layer = L.mapbox.tileLayer('simoa.lo52el21').addTo(map);
L.control.scale().addTo(map); //scale

//style
var style = {
    "color": "#7A297A",
    "weight": 1,
    "opacity": 0.85
};

var geojson;
//functions

function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 4,
        fillColor : '#FF00FF',
        color: 'white',
        dashArray: '2',
        fillOpacity: 0.3
    });
    info.update(layer.feature.properties);
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    
}
var geojson;
function resetHighlight(e) {
    geojson.resetStyle(e.target);
     info.update();
}
var value1 =50;
var value2 =50;

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
    $('.data-container').html(e.target.feature.properties.District +'&nbsp;'+'County');
    $( ".data-container1" ).empty();
    $('.data-container1').html('Total'+'&nbsp;'+ e.target.feature.properties.District +'&nbsp;'+'County Budget'+'&nbsp;'+e.target.feature.properties.T_budget +'&nbsp;'+'Million');
    $( ".data-container2" ).empty();
    $('.data-container2').html('Allocated'+'&nbsp;'+ e.target.feature.properties.CA_Bud +'&nbsp;'+'Million');
    $( ".data-container3" ).empty();
    $('.data-container3').html('Allocated'+'&nbsp;'+ e.target.feature.properties.CE_Bud +'&nbsp;'+'Million');
    $( ".data-container4" ).empty();
    $('.data-container4').html('Spent'+'&nbsp;'+ e.target.feature.properties.T_CA +'&nbsp;'+'Million');
    $( ".data-container5" ).empty();
    $('.data-container5').html('Spent'+'&nbsp;'+ e.target.feature.properties.T_CE +'&nbsp;'+'Million');
    //console.log(e.target.feature.properties.CA_Bud);
    //console.log(e.target.feature.properties.AR_CE);
    var value1= e.target.feature.properties.AR_CA;
    var value2= e.target.feature.properties.AR_CE;
    myBarChart.datasets[0].bars[0].value = e.target.feature.properties.CA_RE;
    myBarChart.datasets[0].bars[1].value = e.target.feature.properties.CA_DE;
    myBarChart.datasets[0].bars[2].value = e.target.feature.properties.CA_LM;
    myBarChart1.datasets[0].bars[0].value = e.target.feature.properties.CE_RE;
    myBarChart1.datasets[0].bars[1].value = e.target.feature.properties.CE_DE;
    myBarChart.update();
    myBarChart1.update();
    $( ".ones" ).empty();
    $( ".twos" ).empty();
    $('.fillgauge1').html(loadLiquidFillGauge("fillgauge2", value1, config1));
    $('.fillgauge2').html(loadLiquidFillGauge("fillgauge1", value2, config2));
    var layer = e.target;
    layer.setStyle({
        weight: 4,
        color: '#5C005C',
        dashArray: '2',
        fillOpacity: 1
    });

}
function onEachFeature(feature, layer) {
    layer.on({
        click: zoomToFeature,
        mouseover:highlightFeature,
        mouseout:resetHighlight     
    });
}

var geojson = L.geoJson(spending,{style:style,onEachFeature:onEachFeature }).addTo(map);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
//var countyName= "Click on a county";
info.update = function (props,layer) {
    this._div.innerHTML = '<h4>County Name</h4>' +  (props ?
        '<b>' + props.NAME + '</b><br />'
        : 'Hover over a county');

};

info.addTo(map);

