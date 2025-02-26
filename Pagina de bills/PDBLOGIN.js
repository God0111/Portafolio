document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const strengthText = document.getElementById("strength-text");
    const strengthLevel = document.querySelector(".strength-level");
    
    passwordInput.addEventListener("input", () => {
        const strength = evaluatePasswordStrength(passwordInput.value);
        strengthLevel.style.width = `${strength * 10}%`;
        
        if (strength <= 3) {
            strengthLevel.style.background = "red";
            strengthText.textContent = "Débil";
        } else if (strength <= 6) {
            strengthLevel.style.background = "orange";
            strengthText.textContent = "Media";
        } else {
            strengthLevel.style.background = "green";
            strengthText.textContent = "Fuerte";
        }
    });

    function evaluatePasswordStrength(password) {
        let score = 0;
        if (password.length >= 8) score += 2;
        if (/[A-Z]/.test(password)) score += 2;
        if (/[a-z]/.test(password)) score += 2;
        if (/[0-9]/.test(password)) score += 2;
        if (/[^A-Za-z0-9]/.test(password)) score += 2;
        return score;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const strengthText = document.getElementById("strength-text");
    const strengthLevel = document.querySelector(".strength-level");
    const passwordStrength = document.getElementById("password-strength");
    const togglePassword = document.getElementById("toggle-password");

    passwordInput.addEventListener("input", () => {
        if (passwordInput.value.length > 0) {
            passwordStrength.style.display = "block";
        } else {
            passwordStrength.style.display = "none";
        }
        
        const strength = evaluatePasswordStrength(passwordInput.value);
        strengthLevel.style.width = `${strength * 10}%`;
        
        if (strength <= 3) {
            strengthLevel.style.background = "red";
            strengthText.textContent = "Débil";
        } else if (strength <= 6) {
            strengthLevel.style.background = "orange";
            strengthText.textContent = "Media";
        } else {
            strengthLevel.style.background = "green";
            strengthText.textContent = "Fuerte";
            passwordStrength.style.display = "none";
        }
    });

    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "🙈";
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "👁";
        }
    });

    function evaluatePasswordStrength(password) {
        let score = 0;
        if (password.length >= 8) score += 2;
        if (/[A-Z]/.test(password)) score += 2;
        if (/[a-z]/.test(password)) score += 2;
        if (/[0-9]/.test(password)) score += 2;
        if (/[^A-Za-z0-9]/.test(password)) score += 2;
        return score;
    }
});
