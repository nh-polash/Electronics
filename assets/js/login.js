document.getElementById('submit-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('user-email');
    const userEmail = emailInput.value;
    const passwordInput = document.getElementById('user-password');
    const userPassword = passwordInput.value;
    if(userEmail == 'abc@gmail.com' && userPassword == '1234') {
        window.location.href = 'dashboard/index.html';
    }
    else {
        alert('Please! give a correct email and password')
    }
    emailInput.value = '';
    passwordInput.value = '';
})