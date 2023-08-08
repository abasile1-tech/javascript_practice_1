let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

/*
I think that the output will be:
  The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
  Suspect three is Mrs. Peacock.

The output actually was:
  The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
  Suspect three is Mrs. Peacock.
*/