const scenario = {
	murderer: 'Miss Scarlet',
	room: 'Kitchen',
	weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
	scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
	return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

/*
I think that the output will be:
  The weapon is the Revolver.

The output actually was:
  The weapon is the Revolver.
*/