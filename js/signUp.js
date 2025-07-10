let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail"); 
let inputPass = document.getElementById("inputPass");
let signUpBtn = document.querySelector(".Sign");

// Initialize an empty array to store user data
let usersData = [];

// Check if there is already data in localStorage
if (localStorage.getItem("usersData")) {
    usersData = JSON.parse(localStorage.getItem("usersData"));
} else {
    localStorage.setItem("usersData", JSON.stringify([]));
}

signUpBtn.addEventListener("click", function() {
    let user = {
        name: inputName.value.trim(),
        email: inputEmail.value.trim(),
        password: inputPass.value.trim()
    };
    // Check if any input is empty
    if (!user.name || !user.email || !user.password) {
        document.getElementById("danger").innerText = "All inputs are required";
        return;
    }
    // validation
    if (!validateEmail(user.email)) {
        document.getElementById("danger").innerText = "Invalid email format";
        return;
    }
    else {
        document.getElementById("danger").classList.remove("text-danger");
        document.getElementById("danger").classList.add("text-success");
        document.getElementById("danger").innerText = "You have successfully signed up";
    }
    usersData.push(user);
    saveUserData();
    console.log(usersData);
    clearInputFields();
});

// function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// function to clear input fields
function clearInputFields() {
    inputName.value = '';
    inputEmail.value = '';
    inputPass.value = '';
}

// Function to save user data to localStorage
function saveUserData() {
    localStorage.setItem("usersData", JSON.stringify(usersData));
}
