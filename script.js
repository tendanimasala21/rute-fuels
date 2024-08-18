// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("YOUR_USER_ID");

    document.getElementById('Contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        var templateParams = {
            name: document.getElementById('floatingName').value,
            email: document.getElementById('floatingEmail').value,
            message: document.getElementById('floatingTextarea').value
        };

        // Basic Validation
        if (name === '' || email === '' || message === '') {
            alert("Please fill in all fileds.")
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return; // Stop submission if validation fails
        }

        // If validation passes, proceed with EmailJS submission
        var templateParams = {
            name: name,
            email: email,
            message: message
        };

        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS service ID, template ID, and user ID
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                document.getElementById('Contact-form').reset(); // Reset the form
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send the message. Please try again later.');
            });
    });
});

// Toggle the navigation menu
document.getElementById("menu-icon").onclick = function() {
    var navItems = document.getElementById("nav-items");
    var expanded = navItems.classList.toggle("active");
    this.setAttribute("aria-expanded", expanded);
};

// Show the button when scrolling down
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block'; // Show button
    } else {
        backToTopButton.style.display = 'none'; // Hide button
    }
});

// Scroll to the top when the button is clicked
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
