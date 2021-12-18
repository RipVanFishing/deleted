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
        email: value,
        password:value
    }
    console.log(newData);
 console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();

    
}