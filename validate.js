function validateForm() {
    let name = document.forms["regform"]["fullname"].value;
    let password = document.forms["regform"]["password"].value;
    let email = document.forms["regform"]["email"].value;
    let mobile = document.forms["regform"]["mobile"].value;
    if (name.length < 6) {
        alert("Name must contain atleast 6 Characters");
        document.forms["regform"]["fullname"].focus(); 
        return false; 
    }
    if (password.length > 6) {
        alert("Password should be not more than 6 Characters");
        document.forms["regform"]["password"].focus(); 
        return false; 
    }
    if (!email.endsWith("@gmail.com")) {
        alert("Please enter a valid Gmail address (must end with @gmail.com).");
        document.forms["regform"]["email"].focus();
        return false;
    }
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Mobile number must be exactly 10 digits.");
        document.forms["regform"]["mobile"].focus();
        return false;
    }
    alert("Form submitted successfully!");
}