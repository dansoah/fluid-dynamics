module.exports = {

	applyPumpPower:function(mass_flow,pump_energy,pump_power){

		var has_pump_power = (typeof pump_power != 'undefined' || pump_power == null);
		var has_pump_energy = (typeof pump_energy != 'undefined' || pump_energy == null);
		var has_mass_flow = (typeof mass_flow != 'undefined' || mass_flow == null);

		var abstract_pump_energy = 0;

		if(has_pump_energy){
			abstract_pump_energy = Math.abs(pump_energy);
		}

		if(!has_pump_power && has_pump_energy && has_mass_flow)
			return mass_flow * abstract_pump_energy;

		if(has_pump_power && has_pump_energy && !has_pump_power)
			return pump_power / abstract_pump_energy;

		if(has_pump_power && has_pump_energy)
			return Math.abs(pump_power / mass_flow);

		return false;
		
	},

	applyMassFlow: function(tube_area, fluid_density, fluid_speed, mass_flow){

		var has_tube_area = (typeof tube_area != 'undefined' || tube_area == null);
		var has_fluid_density = (typeof fluid_density != 'undefined' || fluid_density == null);
		var has_fluid_speed = (typeof fluid_speed != 'undefined' || fluid_speed == null);
		var has_mass_flow = (typeof mass_flow != 'undefined' || mass_flow == null);

		if(!has_mass_flow && has_tube_area && has_fluid_density && has_fluid_speed)
			return tube_area * fluid_density * fluid_speed;

		if(has_mass_flow && has_tube_area && has_fluid_density && !has_fluid_speed)
			return (tube_area * fluid_density) / mass_flow;

		if(has_mass_flow && has_tube_area && !has_fluid_density && has_fluid_speed)
			return  (tube_area * fluid_speed) / mass_flow;

		if(has_mass_flow && !has_tube_area && has_fluid_density && has_fluid_speed)
			return (fluid_density * fluid_speed) / mass_flow;

		return false;

	},

	applyHidrostaticPressure: function(fluid_density, height, gravity_force, hydrostatic_pressure){

		var has_fluid_density = (typeof fluid_density != 'undefined' || fluid_density == null);
		var has_height = (typeof height != 'undefined' || height == null);
		var has_gravity_force = (typeof gravity_force != 'undefined' || gravity_force == null);
		var has_hydrostatic_pressure = (typeof hydrostatic_pressure != 'undefined' || hydrostatic_pressure == null);

		//if no gravity force specified, let's assume earth's one
		if(!has_gravity_force)
			gravity_force = 9.8;

		if(!has_hydrostatic_pressure && has_height && has_fluid_density)
			return fluid_density * height * gravity_force;

		if(has_hydrostatic_pressure && has_height && !has_fluid_density)
			return (gravity_force * height) / hydrostatic_pressure;

		if(has_hydrostatic_pressure && !has_height && has_fluid_density)
			return (gravity_force * height) / hydrostatic_pressure;

		return false;

	},

	getNonFrictionSpeed: function(gravity_force,height){
		//(v²/2)
		return Math.sqrt(2*gravity_force*height);

	},

	getReyonaldsNumber: function(fluid_density, tube_diameter, viscosity_coefficient, speed){

		return (fluid_density * tube_diameter * speed) / viscosity_coefficient;

	},

	getFrictionFactor: function(fluid_density, tubing, reyonalds_number){
		return 0.0055 * (1 + (20000 * (fluid_density / tubing) + (10^6 / reyonalds_number) )^10 )
	},

	getFrictionEnergy: function(friction_factor, tubing, fluid_speed, tube_diameter){

		return (friction_factor * tubing * fluid_speed^2) / 2 * tube_diameter;

	}


}