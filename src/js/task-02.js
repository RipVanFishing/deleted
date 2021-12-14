const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const makeListIngridients = (ingredients) => {
  return ingredients.map(ingredient => {
    const listEl = document.createElement("li")
    listEl.textContent = ingredient;
    listEl.classList = "item";
     return listEl;
  })
}
const items = makeListIngridients(ingredients);
const ulEl = document.querySelector("#ingredients");
ulEl.append(...items);


console.log(ulEl);