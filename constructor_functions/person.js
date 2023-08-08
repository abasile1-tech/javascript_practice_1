const Person = function (name) {
	this.name = name;

	this.greet = function () {
		console.log(`Hi! My name is ${ this.name }`);
	}
}

const shaggy = new Person('Shaggy Rogers');
shaggy.greet();

const velma = new Person('Velma Dinkley');
velma.greet();