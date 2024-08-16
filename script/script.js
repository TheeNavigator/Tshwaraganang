document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});

//service animation
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll("#services .card");

    // Create an intersection observer to observe the visibility of cards
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'animate' class when the card is in view
                entry.target.classList.add("animate");
                // Optionally, you can unobserve the card after it's animated
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe each card
    cards.forEach(card => {
        observer.observe(card);
    });
});

//contact animation
document.addEventListener("DOMContentLoaded", function() {
    const mapContainer = document.querySelector(".map-container");
    const contactDetails = document.querySelector("#contact .col-md-6:nth-child(2)"); // Select the second .col-md-6

    // Create an intersection observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'animate' class when the element is in view
                entry.target.classList.add("animate");
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    // Observe map and contact details
    observer.observe(mapContainer);
    observer.observe(contactDetails);
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    // Function to check the scroll position and update the navbar background
    function updateNavbarBackground() {
        if (window.scrollY > 0) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    // Check the scroll position when the page loads
    updateNavbarBackground();

    // Update the navbar background when the user scrolls
    window.addEventListener('scroll', updateNavbarBackground);
});
