function sayHello() {
	return 'Hello World!';
}

console.log('sayHello message:', sayHello());

function sayHello2(name) {
	return `Hello ${name}!`;
}

console.log('sayHello2 message:', sayHello2('Danielle'));

function sayHello3(name = 'World') {
	return `Hello ${name}!`;
}

console.log('sayHello3 with no arguments:', sayHello3());

function sayHello4(greeting, name = 'World') {
	return `${greeting} ${name}!`;
}

console.log('sayHello4 message:', sayHello4('Hi', 'Danielle'));

var add = function (firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}

console.log('1 + 3 with add:', add(1,3))