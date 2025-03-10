function validateForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;

    if (firstName.length < 4 || !/^[a-zA-Z]+$/.test(firstName)) {
        alert("First Name must be at least 4 characters and contain only letters.");
        return false;
    }
    if (lastName.length < 1 || !/^[a-zA-Z]+$/.test(lastName)) {
        alert("Last Name must be at least 1 character and contain only letters.");
        return false;
    }
    if (!email.match(emailPattern)) {
        alert("Invalid email format.");
        return false;
    }
    if (!dob) {
        alert("Date of Birth is required.");
        return false;
    }
    if (age < 10 || age > 99) {
        alert("Age must be a two-digit number.");
        return false;
    }
    if (!gender) {
        alert("Select Gender.");
        return false;
    }
    if (!phone.match(phonePattern)) {
        alert("Phone Number must be 10 digits.");
        return false;
    }
    if (address.trim() === "") {
        alert("Address cannot be empty.");
        return false;
    }

    let userData = {
        firstName, lastName, email, dob, age,
        gender: gender.value, phone, address
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "success.html";
    return false;
}
