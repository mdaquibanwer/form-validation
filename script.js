const form = document.querySelector("form");
const emailField = form.querySelector(".email-field");
const passField = form.querySelector(".create-password");
const confirmPassField = form.querySelector(".confirm-password");
let emailInput = emailField.querySelector(".email-id");
let passInput = passField.querySelector(".password");
let confirmPassInput = confirmPassField.querySelector(".confirm-password-input");

// email validation
const checkEmail = ()=>{
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if(!emailInput.value.match(emailPattern)){
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

// hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((icon) =>{
    icon.addEventListener("click",()=>{
        const pInput = icon.parentElement.querySelector("input");   // getting parent element of the eye icon
        if(pInput.type === "password"){
            icon.classList.replace("bx-hide","bx-show");
            return (pInput.type = "text");
        }
        icon.classList.replace("bx-show","bx-hide");
            return (pInput.type = "password");
    })
})

// password validation

const createPassword = ()=>{
    const passwordPattern = /^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
    if(!passInput.value.match(passwordPattern)){
        return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}

// confirm password validation

const confirmPassword = ()=>{
    if(passInput.value !== confirmPassInput.value  || confirmPassInput.value === ""){
        return confirmPassField.classList.add("invalid")
    }
    confirmPassField.classList.remove("invalid")
}


// calling function on submitting the form
form.addEventListener("submit",(e)=>{
    e.preventDefault(); // prevent it from submitting the form
    checkEmail();
    createPassword();
    confirmPassword();
    emailInput.addEventListener("keyup",checkEmail);
    emailInput.addEventListener("keyup",createPassword);
    emailInput.addEventListener("keyup",confirmPassword);

    if(
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !confirmPassField.classList.contains("invalid")
    ){
        location.href = form.getAttribute("action");
    }
})