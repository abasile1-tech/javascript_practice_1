let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

/*
I think that the output will be:
  First Verdict: The murderer is Mrs. Peacock
  Second Verdict: The murderer is Professor Plum

The output actually was:
  First Verdict:  The murderer is Mrs. Peacock.
  Second Verdict:  The murderer is Professor Plum.
*/