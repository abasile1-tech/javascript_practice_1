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

class Soup {
  constructor(name) {
    this.name = name;
    this.calories;
    this.ingredients = [];
  }
  setCalories(calories) {
    this.calories = calories;
  }
  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }
  describe() {
    console.log(
      `Name: ${this.name}, Calories: ${this.calories}, Ingredients List: ${this.ingredients}`
    );
  }
}

const tomatoSoup = new Soup("Tomato Soup");
tomatoSoup.setCalories(250);
tomatoSoup.addIngredient("Tomato");
tomatoSoup.addIngredient("Water");
tomatoSoup.describe();

const cheeseSoup = new Soup("Cheese Soup");
cheeseSoup.describe();
