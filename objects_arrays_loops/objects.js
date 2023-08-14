let student = {
  name: "Jason",
  age: 23,
  currently_employed: false,
  address: {
    street: "123 Road",
    postcode: "EH1 1AB",
    country: "Scotland",
  },
};

console.log(student);
console.log(student.age + 1);
console.log(student.name);

student.hair_colour = "Brown";

student.currently_employed = true;

console.log(student);

let apiResponse = "age";

console.log(student.apiResponse);

console.log(student[apiResponse]);

console.log(student.address.country);
console.log(student["address"]["country"]);
