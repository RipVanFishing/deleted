const categoriesEl = document.querySelectorAll( ".item");

const titleEl = document.querySelectorAll("h2");
const numberEl = document.querySelectorAll(".item")
const itemAimalsEl = numberEl[0].querySelectorAll("li");
const itemProductEl = numberEl[1].querySelectorAll("li");
const itemTechnologiesEl = numberEl[2].querySelectorAll("li");

console.log("Numbers of categories:", categoriesEl.length);


console.log("Category:", titleEl[0].textContent);
console.log("Element:", itemAimalsEl.length);

console.log("Category:", titleEl[1].textContent);
console.log("Element:", itemProductEl.length);

console.log("Category:", titleEl[2].textContent);
console.log("Element:", itemTechnologiesEl.length);



