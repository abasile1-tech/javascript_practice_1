// ARRAY TASKS

/* 
	Task 1: Create an array called bookshelf containing a list of book titles
*/
let bookshelf = ["Steelheart", "The Blade Itself", "Diary of a Wimpy Kid"];

// Task 2: Log the number of books on the bookshelf
console.log(bookshelf.length);

// Task 3: Log the second book on the bookshelf
console.log(bookshelf[1]);

// Task 4: Replace the second book on the bookshelf with another book title
bookshelf[1] = "Game of Thrones";

// Task 5: Add a book to the end of the bookshelf
bookshelf.push("Charlie and the Chocolate Factory");

// Task 6: Add a book to the beginning of the bookshelf
bookshelf.unshift("Fifty Shades of Grey");

// Task 7: Get the index of a book and remove it from the bookshelf
let gameIndex = bookshelf.indexOf("Game of Thrones");
bookshelf.splice(gameIndex, 1);
console.log(bookshelf);
