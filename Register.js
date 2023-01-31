document.getElementById("submitBtn").addEventListener("click", submitForm);

function submitForm(form) {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var birthdate = document.getElementById("birthdate").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(form.password.value != form.repeatPassword.value){

        window.alert("passwords are not matching!")

        return false;
    }

    return true;
}

