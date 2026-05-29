let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("contact-name").value;

    if(name.length < 3){
        nameError.innerHTML = "requires name ";
        return false;
    }

    nameError.innerHTML = "✅";
    return true;
}

function validatePhone(){
    let phone = document.getElementById("contact-phone").value;

    if(phone.length != 10 || isNaN(phone)){
        phoneError.innerHTML = "requires 10 digit number";
        return false;
    }

    phoneError.innerHTML = "✅";
    return true;
}

function validateEmail(){
    let email = document.getElementById("contact-email").value;

    let pattern = /^[A-Za-z\._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/;

    if(!email.match(pattern)){
        emailError.innerHTML = "requires proper email";
        return false;
    }

    emailError.innerHTML = "✅";
    return true;
}

function validateMessage(){
    let message = document.getElementById("contact-message").value;

    if(message.length < 10){
        messageError.innerHTML = "requires minimum 10";
        return false;
    }

    messageError.innerHTML = "✅";
    return true;
}

function validateForm(){

    if(!validateName() || !validatePhone() ||
       !validateEmail() || !validateMessage()){

        submitError.innerHTML = "Please fill correctly";
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}