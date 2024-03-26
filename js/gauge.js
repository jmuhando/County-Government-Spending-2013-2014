//var value1 = 50;
//var value2 = 50;

    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#949494";
    config1.textColor = "#808080";
    config1.waveTextColor = "#808080";
    config1.waveColor = "#5CADFF";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
    config1.textSize = 0.75;
//loadLiquidFillGauge("fillgauge2", value1, config1);
	var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#949494";
    config2.textColor = "#808080";
    config2.waveTextColor = "#808080";
    config2.waveColor = "#5CADFF";
    config2.circleThickness = 0.2;
    config2.textVertPosition = 0.2;
    config2.waveAnimateTime = 1000;
    config2.textSize = 0.75;
	//config2.circleColor = "#949494";
    //config2.textColor = "#808080";
    //config2.waveTextColor = "#808080";
    //config2.waveColor = "#5CADFF";
    //config2.circleThickness = 0.1;
    //config2.circleFillGap = 0.2;
    //config2.textVertPosition = 0.3;
    //config2.waveAnimateTime = 2000;
    //config2.textSize = 0.75;
    //config2.waveHeight = 0.3;
    //config2.waveCount = 1;
//loadLiquidFillGauge("fillgauge1", value2, config2);
loadLiquidFillGauge("fillgauge2", 63,config1);
loadLiquidFillGauge("fillgauge1", 78.6,config1);
//radar charts

//var ctx = document.getElementById("myRadarChart1").getContext("2d");
var data = {
    labels: ["Eating", "Drinking", "Sleeping"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90]
        }  
    ]
};
//var options= [ {scaleShowLine : true, scaleBeginAtZero : true, pointLabelFontFamily : "'Arial'", pointDotRadius : 3,}];
//var myRadarChart1 = new Chart(ctx).Radar(data, options);

//var ctx = document.getElementById("myRadarChart2").getContext("2d");
var data = {
    labels: ["Eating", "Drinking", "Sleeping"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40]
        }
    ]
};
var options= [ {scaleShowLine : true, scaleBeginAtZero : true, pointLabelFontFamily : "'Arial'", pointDotRadius : 3,}];
//var myRadarChart2 = new Chart(ctx).Radar(data, options);

//bar chart

var ctx = document.getElementById("myBarChart").getContext("2d");

var bardata = {
    labels: ["R E", "D E", "L M"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "#9B30FF",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "#FF00FF",
            highlightStroke: "rgba(220,220,220,1)",
            data: [19.5, 1, 4]
        }
    ]
};
var baroptions= [ {scaleBeginAtZero : false, scaleShowGridLines : false, 
                   scaleGridLineColor : "#949494", barStrokeWidth : 2, 
                   barValueSpacing : 9, scaleShowVerticalLines: false, 
                   scaleShowHorizontalLines: false,
                   barShowStroke: false
                   }];

var myBarChart = new Chart(ctx).Bar(bardata, {barShowStroke: false, scaleShowGridLines:false, barValueSpacing : 7});

//county executive

var ctx = document.getElementById("myBarChart1").getContext("2d");

var bardata1 = {
    labels: ["R E", "D E"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "#9B30FF",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "#FF00FF",
            highlightStroke: "rgba(220,220,220,1)",
            data: [109.2,35.5]
        }
    ]
};
var baroptions= [ {scaleBeginAtZero : false, scaleShowGridLines : false, 
                   scaleGridLineColor : "#949494", barStrokeWidth : 2, 
                   barValueSpacing : 9, scaleShowVerticalLines: false, 
                   scaleShowHorizontalLines: false,
                   barShowStroke: false
                   }];

var myBarChart1 = new Chart(ctx).Bar(bardata1, {barShowStroke: false, scaleShowGridLines:false, barValueSpacing : 7});