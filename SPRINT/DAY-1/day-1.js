
document.getElementById('myForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const isValid = true;

  
    if (!username.trim()) {
      usernameError.textContent = 'Username is required';
      isValid = false;
    } else {
      usernameError.textContent = '';
    }


    if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.textContent = 'Please enter a valid email address';
      isValid = false;
    } else {
      emailError.textContent = '';
    }

  
    if (password.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters long';
      isValid = false;
    } else {
      passwordError.textContent = '';
    }

   
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Passwords do not match';
      isValid = false;
    } else {
      confirmPasswordError.textContent = '';
    }

    if (!isValid) {
      event.preventDefault(); 
    }
  });