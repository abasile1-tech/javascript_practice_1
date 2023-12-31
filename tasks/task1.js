/* -------------------------------------------------------------
EXERCISE 1

Let's start off with some basic array practice. In this exercise we'd like you to create an array of three items,
stored inside a variable called myArray. The items can be anything you want — how about your favourite bands or movies?

Next, modify the first two items in the array using simple bracket notation and assignment.
Then add a new item to the beginning of the array.

Finally, 'pop off' the last item in the array and log it out.
-------------------------------------------------------------- */

// Write your code here...
const myArray = ["Ex Machina", "The Island", "I am Mother"];

myArray[0] = "Ex Machina 2.0";
myArray[1] = "The Island 2.0";

myArray.unshift("The Matrix");
console.log(myArray);

console.log(myArray.pop());

/* -------------------------------------------------------------
EXERCISE 2

Now let's practice removing items from an array.

Using the indexOf() and splice() methods, remove 'Visual Basic' from the programmingLanguages array.

-------------------------------------------------------------- */
const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C",
  "Visual Basic",
  "Go",
];

// Write your code here...
let vBasicIndex = programmingLanguages.indexOf("Visual Basic");
programmingLanguages.splice(vBasicIndex, 1);
console.log(programmingLanguages);

/* -------------------------------------------------------------
EXERCISE 3

Nested arrays!

The ticTacToe (naughts & crosses) array represents a board of 3x3 dimensions.
The first nested array is the top row of the board, the last nested array is the bottom row.

Programmatically, add items ('x' or 'o') to the nested arrays such that 'x' wins.

-------------------------------------------------------------- */
const ticTacToe = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Write your code here...
for (let row = 0; row < ticTacToe.length; row++) {
  for (let column = 0; column < ticTacToe[0].length; column++) {
    if (column == 0) {
      ticTacToe[row][column] = "x";
    } else if (column % 2 != 0 && row % 2 == 0) {
      ticTacToe[row][column] = "o";
    }
  }
}

console.log(ticTacToe);

/* -------------------------------------------------------------
EXERCISE 4

Now let's practice converting strings to arrays. In this exercise we'd like you to create a string,
stored inside a variable called myString. The items can be anything you want but should be separated by
a comma or semi-colon.

Next, use the split() method to convert myString into an array called arrFromStr.
Then use a for..of statement to log out the items in arrFromStr.

-------------------------------------------------------------- */

// Write your code here...
let myString = "apple,banana,orange";
let arrFromStr = myString.split(",");
for (let item of arrFromStr) {
  console.log(item);
}

/* -------------------------------------------------------------
EXERCISE 5

Given an array of numbers and an empty array called doubles, use a for loop to iterate through the array,
multiply each number by 2 and push the result onto the doubles array.

Finally, log out the doubles array.

-------------------------------------------------------------- */
const numbers = [2, 4, 5, 7];
const doubles = [];

// Write your code here...
for (number of numbers) {
  let double = number * 2;
  doubles.push(double);
}
console.log(doubles);
/* -------------------------------------------------------------
EXERCISE 6

In this exercise, we'd like you to write a for loop that starts at 0
and ends at 2. For each musician, push on a new intro to the intros array.

Finally, use a for..of statement to loop through the intros array and log out each intro.

-------------------------------------------------------------- */
const firstNames = ["Chris", "Harry", "Sporty"];
const lastNames = ["Martin", "Styles", "Spice"];
const bands = ["Coldplay", "One Direction", "Spice Girls"];

const intros = [];

// Loop through the firstNames and lastNames arrays and store the following strings in the intros array:
// "Hi, my name is Chris Martin and I am in Coldplay";
// "Hi, my name is Harry Styles and I am in One Direction";
// "Hi, my name is Sporty Spice and I am in Spice Girls";

// Write your code here...
for (let i = 0; i < firstNames.length; i++) {
  intros.push(
    `Hi, my name is ${firstNames[i]} ${lastNames[i]} and I am in ${bands[i]}`
  );
}

for (let intro of intros) {
  console.log(intro);
}

/* -------------------------------------------------------------
EXERCISE 7

In this final exercise, given a counter, use a while loop to log out
a count down from 10 to 1. HINT: remember you can decrement the value
of a variable using the '--' shorthand.

-------------------------------------------------------------- */
let counter = 10;

// Write your code here...
for (let i = 10; i > 0; i--) {
  console.log(i);
}
