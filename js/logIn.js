let inputEmail = document.getElementById("loginEmail");
let inputPass = document.getElementById("loginPass");
let loginBtn = document.querySelector(".login");

loginBtn.addEventListener("click", function () {
    let email = inputEmail.value.trim();
    let password = inputPass.value.trim();

    // check if fields are empty
    if (!email || !password) {
        document.getElementById("loginMsg").innerText = "All fields are required";
        return;
    }

    // get users from localStorage
    let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

    // search for user
let currentUser = null;
for (let user of usersData) {
    if (user.email === email && user.password === password) {
        currentUser = user;
        break;
    }
}
    if (currentUser) {
        // save current user's name to localStorage temporarily
        localStorage.setItem("currentUserName", currentUser.name);
        // redirect to welcome page
        window.location.href = "../pages/Welcome.html";
    } else {
        document.getElementById("loginMsg").innerText = "Incorrect email or password";
    }
});
