var bernouli = require('../src/bernouli');

module.exports = {

	'Bernoulli pump energy - no friction':function(beforeExit, assert){
		var wp = bernouli.getPumpEnergy(1, 3, 9.81, 50, 0, 0, 0, 1000, 0.8);
		assert.equal((494.5 / 0.8), wp);

	},

	'Bernoulli pump energy - friction': function(beforeExit,assert){
		var wp = bernouli.getPumpEnergy(1, 3, 9.81, 50, 0, 0, 0, 1000, 0.8, 132.7);
		assert.equal((627.2 / 0.8), wp);
	}	

}