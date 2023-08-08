const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

/*
I think that the output will be:
  error cannot assign a new value to const

The output actually was:
  TypeError: Assignment to constant variable.
*/