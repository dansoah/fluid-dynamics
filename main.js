var df = require('./src/dynamic-fluid.js');

var expected_speed = 3;
var fluid_density = 1000;
var area = (Math.PI*Math.pow(0.05,2))/4;
var mass_flow = df.applyMassFlow(area,1000,expected_speed);

var speed = mass_flow / (area * 1000);

console.log(speed);