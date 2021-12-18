const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", onSubmitForm)


function onSubmitForm(event) {
 event.preventDefault();
   const {
    elements: { email, password }
    } = event.currentTarget;
 if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
    }  
    const newData = {
        email: email.value,
        password: password.value
    }
    console.log(newData);
 
    event.currentTarget.reset();

     
}