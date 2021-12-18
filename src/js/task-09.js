function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");
console.log(bodyRef);

btnRef.addEventListener("click", makeRandomBodyColor)

function makeRandomBodyColor(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
}