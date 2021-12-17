let counterValue = 0;

const btnDecrRef = document.querySelector('[data-action="decrement"]');
console.log(btnDecrRef);
const btnIncrRef = document.querySelector('[data-action="increment"]');
console.log(btnIncrRef);
const spanRef = document.querySelector("#value");
console.log(spanRef);



btnIncrRef.addEventListener ("click", () => {
    console.log("Клик пошел!")
    counterValue += 1;
    spanRef.innerHTML = counterValue;
   
});

btnDecrRef.addEventListener("click", () => {
    console.log("Клик ушел!")
    counterValue -= 1;
    spanRef.innerHTML = counterValue;
});



