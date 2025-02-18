document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            body.style.background = "#fff";
            body.style.color = "#000";
        } else {
            body.style.background = "#0a0a0a";
            body.style.color = "#fff";
        }
    });
    
    const emailButton = document.getElementById("email-btn");
    emailButton.addEventListener("click", function () {
        window.location.href = "mailto:tuemail@example.com";
    });

    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("mouseover", function () {
            project.style.boxShadow = "0 0 15px cyan";
        });
        project.addEventListener("mouseout", function () {
            project.style.boxShadow = "none";
        });
    });
});
