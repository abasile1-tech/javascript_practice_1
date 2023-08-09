/*
Task: (10 minutes)
Using the forEach method, complete the following tasks:

Write a function called getEvens that takes an array of numbers as 
an argument and returns a new array that only contains the even numbers 
from the original array.
Write a function called sumElements that takes an array of numbers as 
an argument and returns the sum total of all the elements in the array.
Hint: If you get stuck, start by writing the function using a for of loop, 
then refactor, replacing the for loop with the forEach.
*/

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const getEvens = function (numbers) {
	const evens = [];
	numbers.forEach((number) => {
		if (number % 2 === 0) {
			evens.push(number);
		}
	})
	return evens;
}

console.log(getEvens(myNumbers));

const sumElements = function (numbers) {
	let total = 0;
	numbers.forEach((number) => {
		total += number;
	})
	return total;
}

console.log(sumElements(myNumbers));