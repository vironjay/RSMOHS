document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent default form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Dummy credentials for login
    const credentials = {
        admin: "admin123",
        student: "student123"
    };

    if (credentials[username] && credentials[username] === password) {
        if (username === "admin") {
            window.location.href = "adminDashboard.html";
        } else if (username === "student") {
            window.location.href = "studentDashboard.html";
        }
    } else {
        alert("Invalid username or password!");
    }
});
