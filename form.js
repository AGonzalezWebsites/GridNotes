(function(){console.log("form validation")}());

const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', function(e){
    const regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
    }
    
    if (password.value.length <= 6) {
        messages.push("Password must be longer than 6 characters!");
    }

    if (password.value.length >= 18) {
        messages.push("Password must be less than 18 characters!");
    }

    if (password.value === "password" || password.value === "Password") {
        messages.push("Password can not be 'Password'");
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})