( function( ) {
//Script to handle form validation
// Get form and input elements
const form = document.getElementById('responsiveForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const username = document.getElementById('username');

// Get error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const usernameError = document.getElementById('usernameError');

// Form submit event listener
form.addEventListener('submit', function(event) {
    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    usernameError.textContent = '';
    let valid = true;

    // Validate name 
    if (name.value == '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    }
    // Validate email
    if (email.value == '') {
        emailError.textContent = 'Email is required.';
        valid = false;
    }
    else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailError.textContent = 'Email is invalid.';
        valid = false;
    }
    // Validate password
    if (password.value == '') {
        passswordError.textContent = 'Password is required.';
        valid = false;
    }
    else if ((password.value.length < 8 ) || !/[A-Z]/.test(password.value) || !/[0-9]/.test(password.value) || !/[!@#$%^&*]/.test(password.value)) {
        passwordError.textContent = 'Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.';
        valid = false;
    }
    // Validate confirm password
    if (confirmPassword.value != password.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        valid = false;
    }
    // Validate username
    if (username.value == '') {
        usernameError.textContent = 'Username is required.';
        valid = false;
    }
    else if (!/^[a-zA-Z0-9_]{5,15}$/.test(username.value)) {
        usernameError.textContent = 'Username must be 5-15 characters long and can only contain letters, numbers, and underscores.';
        valid = false;
    }
    // If not valid, prevent form submission
    if (!valid) {
        event.preventDefault();
    }
});
} )();