/*
Declare a named function that takes an array of numbers, 
and returns the sum, or total, of all of the numbers in the array.
*/

function sum_nums(nums) {
	let total = 0;
	for (let num of nums) {
		total += num;
	}
	return total;
}

console.log(sum_nums([5,4,3]));

/*
Define an anonymous function expression that takes two arguments:
	an object, for example, { name: 'Wojtek', age: 30 }
	a string, for exmaple, 'name'
Your function should return true if the given string 
is a key on the given object and false if the object does 
not have a key that matches the string. Store this function 
in an appropriately named variable to invoke it.
*/



