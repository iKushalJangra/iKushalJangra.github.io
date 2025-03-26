document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#FFD700";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "white";
        });
    });

    const btn = document.querySelector(".btn");
    if (btn) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Redirecting to registration page...");
            window.location.href = "register.html";
        });
    }

    const features = document.querySelectorAll(".feature");
    features.forEach(feature => {
        feature.addEventListener("click", function () {
            alert("Feature: " + this.querySelector("h2").textContent);
        });
    });

    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Toggle Dark Mode";
    themeToggle.style.position = "fixed";
    themeToggle.style.bottom = "20px";
    themeToggle.style.right = "20px";
    themeToggle.style.padding = "10px";
    themeToggle.style.background = "#007BFF";
    themeToggle.style.color = "white";
    themeToggle.style.border = "none";
    themeToggle.style.cursor = "pointer";
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
