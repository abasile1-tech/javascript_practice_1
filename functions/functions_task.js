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

var is_key_in_object = function (obj, name) {
	if (name == obj.name) {
		return true;
	}
	return false;
}

let obj1 = {name: 'Wojtek', age: 30};
let obj2 = {name: "Bob", age: 27};

console.log(is_key_in_object(obj1,'Bob'));
console.log(is_key_in_object(obj1, 'Wojtek'));

