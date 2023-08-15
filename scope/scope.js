const isPinCorrect = function (someGuess) {
  const secret = "1234";
  let isCorrect;
  if (secret === someGuess) {
    console.log("yay");
    isCorrect = true;
  } else {
    console.log("oh no");
    isCorrect = false;
  }
};
isPinCorrect("1234");

const names = ["Pim", "Jim", "Tina", "Pat"];
const letter = "P";

const filterNames = function (arrayOfNames, firstLetter) {
  let result = [];
  for (const name of arrayOfNames) {
    if (name[0] === firstLetter) {
      result.push(name);
    }
  }
  return result;
};

console.log(filterNames(names, letter));
