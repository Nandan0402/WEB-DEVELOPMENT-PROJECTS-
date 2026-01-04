document.addEventListener('DOMContentLoaded', () => {
    console.log('Paytm Clone Loaded');
    
    // Simulate navigation interactions for demo
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    // Add hover effects or other micro-interactions here
});
