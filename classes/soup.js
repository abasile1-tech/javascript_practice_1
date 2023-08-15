class Soup {
  constructor(name, calories = undefined, ingredients = []) {
    this.name = name;
    this.calories = calories;
    this.ingredients = ingredients;
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

// const tomatoSoup = new Soup("Tomato Soup");
// tomatoSoup.setCalories(250);
// tomatoSoup.addIngredient("Tomato");
// tomatoSoup.addIngredient("Water");
// tomatoSoup.describe();

// const cheeseSoup = new Soup("Cheese Soup");
// cheeseSoup.describe();

module.exports = Soup;
