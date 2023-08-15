const Soup = require("./soup.js");
const SandwichDeal = require("./sandwichDeal.js");

const tomatoSoup = new Soup("Tomato Soup");
tomatoSoup.setCalories(250);
tomatoSoup.addIngredient("Tomato");
tomatoSoup.addIngredient("Water");
tomatoSoup.describe();

const cheeseSoup = new Soup("Cheese Soup");
cheeseSoup.describe();

const mealDeal1 = new SandwichDeal("garlic", "ham", tomatoSoup);
console.log(mealDeal1.describe("Jenny"));
