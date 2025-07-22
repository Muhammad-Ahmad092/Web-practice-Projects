document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        
        // Validate Email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Validate Password (at least one special & numeric character)
        const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
        if (!passwordPattern.test(passwordInput.value)) {
            alert("Password must contain at least one number and one special character.");
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
