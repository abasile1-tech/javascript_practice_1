/*
Using your knowledge about scope and variable declarations in JavaScript, 
look at the following code snippets and predict what the output or error 
will be and why. Copy the following episodes into a JavaScript file and 
add comments under each one detailing the reason for your predicted output.
*/

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);