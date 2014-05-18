var utils = require('utils');

var byName = function( a, b ) { 
  if (a.name == b.name) {
    return 0;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
};

exports.byName = byName;

var byExp = function( a, b ) { 
  return a.totalExperience - b.totalExperience;
};

exports.byExperience = byExp;
exports.byExp = byExp;
