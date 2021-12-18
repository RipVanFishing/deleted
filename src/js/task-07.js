const sliderRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

sliderRef.addEventListener("input", () => {
    spanRef.style.fontSize = sliderRef.value + "px";
})


