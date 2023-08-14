// Functions Tasks

// Task 1: Declare a function called 'multiply' that takes an input of two numbers and returns those numbers multiplied together
function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Task 2: Declare a function that takes a list of scores and returns the average
function averageScores(scores) {
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  return total / scores.length;
}

scores = [12, 7, 8, 9, 10];
console.log(averageScores(scores));

// Task 3: Declare a function to buy a book and add it to a bookshelf.
const books = ["Book 1", "Book 2", "Book 3"];

bookshelf = [];

function orderBook(title, quantity = 1) {
  if (books.includes(title)) {
    console.log(`You ordered ${quantity} of ${title}`);
    bookshelf.push(title);
  } else {
    console.log(`${title} is not in stock`);
  }
}

orderBook(books[1]);
