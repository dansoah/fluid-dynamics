var bernouli = require('./src/bernouli');

var wp = bernouli.getPumpPower(1, 3, 9.81, 50, 0, 0, 0, 1000, 0.8);

console.log(wp);