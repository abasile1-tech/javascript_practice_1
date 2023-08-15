class Sandwich {
  constructor(bread, toppings) {
    this.bread = bread;
    this.toppings = toppings;
  }
  describe(customerName) {
    return `For ${customerName}. on ${this.bread} bread, with: ${this.toppings}`;
  }
}

const ruben = new Sandwich("rye", ["cheese", "tomato"]);
console.log(ruben.describe("Pim"));

console.log(ruben.bread);
