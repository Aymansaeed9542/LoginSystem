// Display the user's name
let userName = localStorage.getItem("currentUserName");
if (userName) {
    document.querySelector("h2").innerText = `Welcome, ${userName}`;
} else {
    // If the user tries to access this page without logging in
    window.location.href = "index.html";
}

// Logout button functionality
let logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("currentUserName"); // Remove the stored session
    window.location.href = "../index.html"; // Redirect to login page
});
