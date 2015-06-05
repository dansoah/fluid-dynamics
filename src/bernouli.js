var dynamic_fluid = require('./dynamic-fluid');

module.exports = {


	getPumpEnergy: function(initial_speed, final_speed, gravity_speed, initial_height, final_height, initial_pressure, final_pressure, fluid_density, pump_efficiency, lwf){

		var Δv2 = Math.pow(final_speed,2) - Math.pow(initial_speed,2);
		var Δz = initial_height - final_height;
		var Δp = final_pressure - initial_pressure;

		var pressure = 0;
		if(initial_pressure != final_pressure)
			pressure = Δp / fluid_density;

		if(typeof lwf === 'undefined')
			lwf = 0;

		return ( ( Δv2 /2 ) + (gravity_speed * Δz) + pressure + lwf) / pump_efficiency;

	}


}