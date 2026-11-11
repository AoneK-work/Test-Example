document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorModal = document.getElementById('errorModal');
    const closeModal = document.getElementById('closeModal');

    // Handle form submission and show custom error pop-up
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const userId = document.getElementById('userId').value.trim();
        const password = document.getElementById('password').value.trim();

        if (userId && password) {
            // Display the matching error modal pop-up
            errorModal.classList.add('active');
        }
    });

    // Close modal on close button click
    closeModal.addEventListener('click', function() {
        errorModal.classList.remove('active');
    });

    // Close modal when clicking on the backdrop overlay
    errorModal.addEventListener('click', function(e) {
        if (e.target === errorModal) {
            errorModal.classList.remove('active');
        }
    });
});