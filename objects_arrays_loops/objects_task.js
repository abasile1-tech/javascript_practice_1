// Task 1: Create an object for a book
// It should contain a title, an author, and a published_date
let book = {
  title: "Harry Potter",
  author: "JK Rowling",
  published_date: "2023-08-14",
};

// Task 2: Log each of these properties
console.log(book.title);
console.log(book.author);
console.log(book.published_date);

// Task 3: Add a new property, genres,
// which is a list of associated genres
book.genre = ["Fantasy", "Adventure"];
console.log(book.genre);

// Task 4: Modify one of the properties
book.genre[0] = "Science Fiction";
console.log(book.genre);

// Task 5: Turn the author into an object that contains their name and age
book.author = {
  name: "JK Rowling",
  age: 60,
};
console.log(book.author);
