// Loops Tasks

// Task 1: Use a for..of statement to loop through each book and log out each book

const bookPrices = [12.5, 10, 7.5, 15];

for (let price of bookPrices) {
  console.log(price);
}

// Task 2: There's a sale at the bookstore, remove 10% from each book
// Loop, calculate 10%, remove value from price
// .toFixed(2) - Round to 2 decimal places
for (let i = 0; i < bookPrices.length; i++) {
  let tenPercent = bookPrices[i] * 0.1;
  bookPrices[i] -= tenPercent;
  bookPrices[i].toFixed(2);
}

console.log(bookPrices);

// Task 3: Use a while loop to check how many rolls of a die it takes to get a number
let target = 6;
let attempts = 0;
let roll;

// while roll is not target
// add 1 to attempts
// set roll to random number from 1 to 6
// log the attempts

while (roll != target) {
  attempts++;
  roll = Math.floor(Math.random() * target + 1);
  console.log(`Attempts: ${attempts}`);
}
