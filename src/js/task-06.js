const formRef = document.querySelector("#validation-input");
console.log(formRef);

const makeBlurInputStyle = () => {
    if (formRef.dataset.length === "6") {
        formRef.classList.add("valid");
    }
    formRef.classList.toggle("invalid");
    return formRef;
}

formRef.addEventListener("blur", makeBlurInputStyle )