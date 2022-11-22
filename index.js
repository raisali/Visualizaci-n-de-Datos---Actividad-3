// Import stylesheets
import './style.css';

//Gráfico de columnas. Mi 1o gráfico
//Gráfico de columnas. Mi 1º gráfico
var visualization = d3plus.viz()
 .container("#viz1")
 .data([{"year": 1991, "name":"alpha", "value": 15},
 {"year": 1992, "name":"alpha", "value": 20},])
 .type("bar")
 .id("name")
 .x("year")
 .y("value")
 .draw()


 d3.json("https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json", function(data) {
 var visualization = d3plus.viz()
 .container("#viz2")
 .data(data)
 .type('bar')
 .id('name')
 .x('year')
 .y('value')
 .axes({ ticks: 'false' })
 .draw();
})





var data1 = [
  {"year": 1991, "name":"alpha", "value": 15},
  {"year": 1992, "name":"alpha", "value": 34},
  {"year": 1991, "name":"alpha2", "value": 17},
  {"year": 1992, "name":"alpha2", "value": 65},
  {"year": 1991, "name":"beta", "value": 10},
  {"year": 1992, "name":"beta", "value": 10},
  {"year": 1991, "name":"beta2", "value": 40},
  {"year": 1992, "name":"beta2", "value": 38},
  {"year": 1991, "name":"gamma", "value": 5},
  {"year": 1992, "name":"gamma", "value": 10},
  {"year": 1991, "name":"gamma2", "value": 20},
  {"year": 1992, "name":"gamma2", "value": 34},
  {"year": 1991, "name":"delta", "value": 50},
  {"year": 1992, "name":"delta", "value": 43},
  {"year": 1991, "name":"delta2", "value": 17},
  {"year": 1992, "name":"delta2", "value": 35}
]

var outlierRange = outlierRange(data1.map(d=>d.value))
var isOutlier = val =>  (val < outlierRange[0] || val > outlierRange[1])

//663373.22, -18427.39
var visualization = d3plus.viz()
  .container("#viz3")
  .data(data1)
  .type("box")
  .id("name")
  .x("year")
  .y({value:'value', mute: isOutlier })
  .ui([{ 
      "label": "Visualization Type",
      "method": "type", 
      "value": ["scatter","box"]
    }])
  .draw()

function outlierRange(someArray) {

if(someArray.length < 4)
return someArray;

let values, q1, q3, iqr, maxValue, minValue, multiple = 0.5;

values = someArray.slice().sort( (a, b) => a - b);//copy array fast and sort

if((values.length / 4) % 1 === 0){//find quartiles
q1 = 1/2 * (values[(values.length / 4)] + values[(values.length / 4) + 1]);
q3 = 1/2 * (values[(values.length * (3 / 4))] + values[(values.length * (3 / 4)) + 1]);
} else {
q1 = values[Math.floor(values.length / 4 + 1)];
q3 = values[Math.ceil(values.length * (3 / 4) + 1)];
}

iqr = q3 - q1;
maxValue = q3 + iqr * multiple;
minValue = q1 - iqr * multiple;

return [minValue, maxValue]
}






 var url = 'https://raw.githubusercontent.com/aaizemberg/vis/gh-pages/01/data/deptos.tsv';
  var visualization = d3plus.viz()
    .format('es_ES')
    .container("#viz4")  
    .data( url )  
    .type("tree_map")   
    .id(["provincia","departamento"])         
    .size("poblacion")      
    .draw()       
 
