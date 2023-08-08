let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

/*
I think that the output will be:
  The murderer is Professor Plum.

The output actually was:
  The murderer is Professor Plum.
*/