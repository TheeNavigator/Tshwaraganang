document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

    window.addEventListener('scroll', function() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });

        if (window.scrollY > 0) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
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

//about animation
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector("#about .text-justify");
    const imageElement = document.querySelector("#about .img-fluid.rounded");

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

    // Observe text and image
    observer.observe(textElement);
    observer.observe(imageElement);
});

//gallery animation
document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll("#gallery .gallery-item");

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

    // Observe each gallery item
    galleryItems.forEach(item => {
        observer.observe(item);
    });
});


//navbar
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth < 992) { // Adjust if needed for your breakpoint
                navbarCollapse.classList.remove('show');
                navbarToggler.classList.add('collapsed');
            }
        });
    });
});


const phrases = [
    "Where Care Meets Compassion",
    "A Nurturing Environment for the Elderly",
    "Your Home Away from Home",
    "Caring for the Ones You Love"
];

let index = 0;
const rotatingText = document.getElementById('rotating-text');

function rotateText() {
    rotatingText.innerHTML = `<span class="highlight">${phrases[index]}</span>`;
    index = (index + 1) % phrases.length;
}

setInterval(rotateText, 3000); // Change every 3 seconds


function showVideo() {
    document.querySelector('.play-button').style.display = 'none';
    document.getElementById('video-popup').style.display = 'flex';
    document.getElementById('video').play();
}

function closeVideo() {
    document.getElementById('video-popup').style.display = 'none';
    document.querySelector('.play-button').style.display = 'flex';
    document.getElementById('video').pause();
    document.getElementById('video').currentTime = 0; // Optional: Reset video to start
}
