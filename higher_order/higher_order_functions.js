const myNumbers = [1,2,3,4,5];

/*
for (const number of myNumbers) {
	console.log(`This is number ${number}`);
}
*/

myNumbers.forEach((number, index) => {
	console.log(`This is number ${number} at index position ${index}`);
})

const multiplyByTwo = function (numbers) {
	const result = [];

	numbers.forEach((number) => {
		const multiplied = number * 2;
		result.push(multiplied);
	})

	return result;
}

console.log(multiplyByTwo(myNumbers));