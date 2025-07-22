document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#signUpForm");
    
    form.addEventListener("submit", function (event) {
        let isValid = true;
        
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value;
        const confirmPassword = document.querySelector("#confirmPassword").value;
        const phone = document.querySelector("#phone").value.trim();
        const age = document.querySelector("#age").value;
        const gender = document.querySelector("#gender").value;
        const terms = document.querySelector("#terms").checked;

        // Name Validation (Only alphabets allowed)
        const namePattern = /^[A-Za-z ]+$/;
        if (!namePattern.test(name)) {
            alert("Name should contain only letters.");
            isValid = false;
        }
        
        // Email Validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }
        
        // Password Validation (At least one number and one special character)
        const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordPattern.test(password)) {
            alert("Password must be at least 8 characters long and include a number and a special character.");
            isValid = false;
        }
        
        // Confirm Password Validation
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            isValid = false;
        }
        
        // Phone Number Validation (Only numbers, 10-15 digits)
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phone)) {
            alert("Phone number must contain only digits and be between 10 to 15 characters long.");
            isValid = false;
        }
        
        // Age Validation (Between 18 and 100)
        if (age < 18 || age > 100) {
            alert("Age must be between 18 and 100.");
            isValid = false;
        }
        
        // Gender Validation (Must be selected)
        if (!gender) {
            alert("Please select a gender.");
            isValid = false;
        }
        
        // Terms & Conditions Validation (Must be checked)
        if (!terms) {
            alert("You must agree to the Terms & Conditions.");
            isValid = false;
        }
        
        // Prevent form submission if any validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
