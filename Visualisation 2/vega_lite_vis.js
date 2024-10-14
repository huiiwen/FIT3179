var vg_1 = "map.json";
vegaEmbed("#map", vg_1, {"actions": false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "bubbleplot.json";
vegaEmbed("#bubble", vg_2, {"actions": false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "stackedareachart.json";
vegaEmbed("#stackedarea", vg_3, {"actions": false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "multiple_interactive.json";
vegaEmbed("#multiple", vg_4, {"actions": false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);