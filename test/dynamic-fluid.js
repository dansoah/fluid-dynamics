var dynamic_fluid = require('../src/dynamic-fluid.js');

module.exports = {

	'Mass Flow - returning mass flow - mass flow undefined':function(beforeExit, assert){
		var A = (Math.PI*Math.pow(0.05,2))/4;
		var m = dynamic_fluid.applyMassFlow(A, 1000, 3);
		
		var assert_result = (Math.PI*Math.pow(0.05,2)/4)*1000*3;

		assert.equal(assert_result,m);

	},

	'Mass Flow - returning mass flow - mass flow null':function(beforeExit, assert){
		var A = (Math.PI*Math.pow(0.05,2))/4;
		var m = dynamic_fluid.applyMassFlow(A, 1000, 3, null);
		
		var assert_result = (Math.PI*Math.pow(0.05,2)/4)*1000*3;

		assert.equal(assert_result,m);

	},

	'Mass Flow - returning fluid speed':function(beforeExit, assert){
		var fluid_speed = 3;
		var fluid_density = 1000;
		var area = (Math.PI*Math.pow(0.05,2))/4;
		var mass_flow = area*fluid_density*fluid_speed;

		var speed = dynamic_fluid.applyMassFlow(area, 1000, null, mass_flow);

		assert.equal(fluid_speed,speed);

	},

	'Mass Flow - returning fluid speed':function(beforeExit, assert){
		var fluid_speed = 3;
		var fluid_density = 1000;
		var area = (Math.PI*Math.pow(0.05,2))/4;
		var mass_flow = area*fluid_density*fluid_speed;

		var density = dynamic_fluid.applyMassFlow(area, null, fluid_speed, mass_flow);

		assert.equal(fluid_density,density);

	},

	'Mass Flow - returning tube area':function(beforeExit, assert){
		var fluid_speed = 3;
		var fluid_density = 1000;
		var area = (Math.PI*Math.pow(0.05,2))/4;
		var mass_flow = area*fluid_density*fluid_speed;

		var tube_area = dynamic_fluid.applyMassFlow(null, fluid_density, fluid_speed, mass_flow);

		assert.equal(area,tube_area);

	},

	'Hydrostatic pressure - returning pressure - pressure undefined - with gravity force':function(beforeExit, assert){
		var fluid_density = 1000;
		var height = 50;
		var gravity = 9.81;
		var assert_hidrostatic_pressure = fluid_density * gravity * height;
		
		var pressure = dynamic_fluid.applyHidrostaticPressure(fluid_density, height, gravity);
		assert.equal(assert_hidrostatic_pressure,pressure);
	},

	'Hydrostatic pressure - returning pressure - pressure undefined - without gravity force':function(beforeExit, assert){
		var fluid_density = 1000;
		var height = 50;
		var assert_hidrostatic_pressure = fluid_density * height * 9.8;
		
		var pressure = dynamic_fluid.applyHidrostaticPressure(fluid_density, height);
		assert.equal(assert_hidrostatic_pressure,pressure);
	},

	'Hydrostatic pressure - returning pressure - pressure undefined - gravity is null':function(beforeExit, assert){
		var fluid_density = 1000;
		var height = 50;
		var assert_hidrostatic_pressure = fluid_density * height * 9.8;
		
		var pressure = dynamic_fluid.applyHidrostaticPressure(fluid_density, height,null );
		assert.equal(assert_hidrostatic_pressure,pressure);
	},

	'Hydrostatic pressure - returning height - with gravity force':function(beforeExit, assert){
		var fluid_density = 1000;
		var height = 50;
		var gravity = 9.8;
		var hidrostatic_pressure = dynamic_fluid.applyHidrostaticPressure(fluid_density, height, gravity);

		var assert_height = dynamic_fluid.applyHidrostaticPressure(fluid_density, null, gravity, hidrostatic_pressure );


		assert.equal(height,assert_height);
	},

	'Hydrostatic pressure - returning height - without gravity force':function(beforeExit, assert){
		var fluid_density = 1000;
		var height = 50;
		var gravity = null;
		var hidrostatic_pressure = dynamic_fluid.applyHidrostaticPressure(fluid_density, height, gravity);

		var assert_height = dynamic_fluid.applyHidrostaticPressure(fluid_density, null, gravity, hidrostatic_pressure );


		assert.equal(height,assert_height);
	},

}